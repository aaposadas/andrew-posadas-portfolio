"use client";

import type { FormEvent, MutableRefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, RotateCcw, SendHorizontal } from "lucide-react";
import SpriteAvatar, { type SpriteState } from "@/components/SpriteAvatar";
import {
  createChatMessage,
  initialMessage,
  starterPrompts,
  type ChatMessage,
} from "@/components/home/heroChatContent";
import { useIdleSpriteVariant } from "@/components/home/useIdleSpriteVariant";
import { CHAT_MODEL_FALLBACK, CHAT_VISIT_QUOTA } from "@/lib/chatConfig";

const SPEAKING_DURATION_MS = 900;
const CHAT_REQUEST_TIMEOUT_MS = 30_000;

function clearTimer(timer: MutableRefObject<number | null>) {
  if (timer.current !== null) {
    window.clearTimeout(timer.current);
    timer.current = null;
  }
}

export default function HeroChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [model, setModel] = useState(CHAT_MODEL_FALLBACK);
  const speakingTimer = useRef<number | null>(null);
  const chatRequest = useRef<AbortController | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const canShowIdleVariant =
    !hasError && !input.trim() && !isSpeaking && !isThinking;
  const idleVariant = useIdleSpriteVariant(canShowIdleVariant);

  useEffect(() => {
    return () => {
      clearTimer(speakingTimer);
      chatRequest.current?.abort();
    };
  }, []);

  useEffect(() => {
    let isActive = true;

    fetch("/api/chat")
      .then((response) => response.json())
      .then((result: { remaining?: number; model?: string }) => {
        if (isActive && typeof result.remaining === "number") {
          setRemaining(result.remaining);
        }

        if (isActive && result.model) {
          setModel(result.model);
        }
      })
      .catch(() => {});

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isThinking]);

  let spriteState: SpriteState = "idle";

  if (hasError) {
    spriteState = "error";
  } else if (isThinking) {
    spriteState = "thinking";
  } else if (isSpeaking) {
    spriteState = "speaking";
  } else if (idleVariant) {
    spriteState = idleVariant;
  }

  const submitPrompt = async (prompt: string) => {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt || isThinking) {
      return;
    }

    setHasError(false);
    setInput("");
    setIsThinking(true);
    setIsSpeaking(false);
    const visitorMessage = createChatMessage("visitor", trimmedPrompt);

    setMessages((currentMessages) => [...currentMessages, visitorMessage]);

    clearTimer(speakingTimer);
    chatRequest.current?.abort();
    const controller = new AbortController();
    chatRequest.current = controller;
    let didTimeout = false;
    const requestTimeout = window.setTimeout(() => {
      didTimeout = true;
      controller.abort();
    }, CHAT_REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmedPrompt }),
        signal: controller.signal,
      });
      const result = (await response.json()) as {
        content?: string;
        error?: string;
        remaining?: number;
      };
      const content = result.content;

      if (typeof result.remaining === "number") {
        setRemaining(result.remaining);
      }

      if (!response.ok || !content) {
        throw new Error(result.error ?? "Unable to get a response.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        createChatMessage("andrew", content),
      ]);
      setIsThinking(false);
      setIsSpeaking(true);

      speakingTimer.current = window.setTimeout(() => {
        setIsSpeaking(false);
      }, SPEAKING_DURATION_MS);
    } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError" &&
          !didTimeout
        ) {
          return;
        }

      setIsThinking(false);
      setIsSpeaking(false);
      setHasError(true);
      setMessages((currentMessages) => [
        ...currentMessages,
        createChatMessage(
          "andrew",
          error instanceof Error
            ? error.message
            : "I hit a connection issue. Please try that again in a moment."
        ),
      ]);
    } finally {
      window.clearTimeout(requestTimeout);

      if (chatRequest.current === controller) {
        chatRequest.current = null;
      }
    }
  };

  const resetChat = () => {
    clearTimer(speakingTimer);
    chatRequest.current?.abort();
    chatRequest.current = null;
    setMessages([initialMessage]);
    setInput("");
    setIsThinking(false);
    setIsSpeaking(false);
    setHasError(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitPrompt(input);
  };

  return (
    <section className="ask-andrew-card">
      <div className="ask-andrew-avatar">
        <SpriteAvatar state={spriteState} />
        <div>
          <span className="text-xs uppercase tracking-[0.18em] text-green-200">
            Hey, I&apos;m Andrew
          </span>
          <h2 className="text-3xl">Where should we start?</h2>
        </div>
      </div>

      <div className="ask-andrew-chat">
        <div className="ask-andrew-chat-top">
          <span>Session chat</span>
          <div className="ask-andrew-session-actions">
            <div
              aria-label={`${remaining ?? 0} of ${CHAT_VISIT_QUOTA} chat turns remaining this visit`}
              aria-valuemax={CHAT_VISIT_QUOTA}
              aria-valuemin={0}
              aria-valuenow={remaining ?? 0}
              className="ask-andrew-quota"
              role="progressbar"
              title={`${remaining ?? "Loading"} of ${CHAT_VISIT_QUOTA} chat turns remaining this visit`}
            >
              {Array.from({ length: CHAT_VISIT_QUOTA }, (_, index) => (
                <span
                  className={
                    index < (remaining ?? 0)
                      ? "ask-andrew-quota__pip ask-andrew-quota__pip--available"
                      : "ask-andrew-quota__pip"
                  }
                  key={index}
                />
              ))}
            </div>
            <span className="ask-andrew-quota-label">
              {remaining ?? "..."} left
            </span>
            {messages.length > 1 && (
              <button
                aria-label="Reset chat"
                className="ask-andrew-reset"
                onClick={resetChat}
                type="button"
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="ask-andrew-technical-notes" aria-label="Chat details">
          <span>OpenAI API</span>
          <span>{model}</span>
          <span>Portfolio context</span>
          <span>{CHAT_VISIT_QUOTA} turns per visit</span>
        </div>

        <div
          aria-busy={isThinking}
          aria-label="Ask Andrew conversation"
          aria-live="polite"
          className="ask-andrew-messages"
        >
          {messages.map((message) => (
            <div
              className={`ask-andrew-message ask-andrew-message--${message.role}`}
              key={message.id}
            >
              {message.content}
            </div>
          ))}

          {isThinking && (
            <div className="ask-andrew-message ask-andrew-message--andrew">
              Thinking through that...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="ask-andrew-prompts" aria-label="Suggested prompts">
          {starterPrompts.map((prompt) => (
            <button
              className="ask-andrew-chip"
              disabled={isThinking}
              key={prompt}
              onClick={() => submitPrompt(prompt)}
              type="button"
            >
              <span>{prompt}</span>
              <ArrowRight size={14} />
            </button>
          ))}
        </div>

        <form className="ask-andrew-form" onSubmit={handleSubmit}>
          <input
            aria-label="Ask Andrew a question"
            disabled={isThinking}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about my work, stack, or approach..."
            type="text"
            value={input}
          />
          <button disabled={isThinking || !input.trim()} type="submit">
            <SendHorizontal size={18} />
            <span className="sr-only">Send question</span>
          </button>
        </form>
      </div>
    </section>
  );
}
