export type ChatMessage = {
  id: string;
  role: "andrew" | "visitor";
  content: string;
};

export const starterPrompts = [
  "What are you strongest at?",
  "Show me your best full-stack work",
  "How do you approach projects?",
  "What kind of teams do you help?",
];

export const initialMessage: ChatMessage = {
  id: "initial-message",
  role: "andrew",
  content:
    "Hey, I'm Andrew. Ask me about my projects, technical background, or how I approach building practical tools for people and teams.",
};

export function createChatMessage(
  role: ChatMessage["role"],
  content: string
): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
  };
}
