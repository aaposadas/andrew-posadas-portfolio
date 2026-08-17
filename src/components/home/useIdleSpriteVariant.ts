"use client";

import { useEffect, useRef, useState, type MutableRefObject } from "react";
import type { SpriteState } from "@/components/SpriteAvatar";

type IdleVariant = Extract<SpriteState, "wave" | "look-left"> | null;

const IDLE_VARIANT_MIN_DELAY_MS = 1400;
const IDLE_VARIANT_RANDOM_DELAY_MS = 1800;
const IDLE_VARIANT_DEFAULT_DURATION_MS = 750;
const WAVE_DURATION_MS = 1200;
const LOOK_LEFT_DURATION_MS = 1700;
const WAVE_CHANCE = 0.25;
const LOOK_LEFT_CHANCE = 0.25;

function clearTimer(timer: MutableRefObject<number | null>) {
  if (timer.current !== null) {
    window.clearTimeout(timer.current);
    timer.current = null;
  }
}

export function useIdleSpriteVariant(isEnabled: boolean) {
  const [idleVariant, setIdleVariant] = useState<IdleVariant>(null);
  const startTimer = useRef<number | null>(null);
  const stopTimer = useRef<number | null>(null);

  useEffect(() => {
    const clearIdleTimers = () => {
      clearTimer(startTimer);
      clearTimer(stopTimer);
    };

    if (!isEnabled) {
      // Reset any active idle animation before this hook becomes inactive.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIdleVariant(null);
      clearIdleTimers();
      return;
    }

    let isCancelled = false;

    const scheduleNextIdleVariant = () => {
      startTimer.current = window.setTimeout(() => {
        if (isCancelled) {
          return;
        }

        const roll = Math.random();
        const nextVariant: IdleVariant =
          roll < WAVE_CHANCE
            ? "wave"
            : roll < WAVE_CHANCE + LOOK_LEFT_CHANCE
            ? "look-left"
            : null;

        setIdleVariant(nextVariant);

        stopTimer.current = window.setTimeout(
          () => {
            if (isCancelled) {
              return;
            }

            setIdleVariant(null);
            scheduleNextIdleVariant();
          },
          nextVariant === "wave"
            ? WAVE_DURATION_MS
            : nextVariant === "look-left"
            ? LOOK_LEFT_DURATION_MS
            : IDLE_VARIANT_DEFAULT_DURATION_MS
        );
      }, IDLE_VARIANT_MIN_DELAY_MS + Math.random() * IDLE_VARIANT_RANDOM_DELAY_MS);
    };

    scheduleNextIdleVariant();

    return () => {
      isCancelled = true;
      clearIdleTimers();
    };
  }, [isEnabled]);

  return idleVariant;
}
