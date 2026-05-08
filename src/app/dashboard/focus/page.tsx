"use client";

import { useEffect, useState, useTransition } from "react";

import {
  Play,
  Pause,
  RotateCcw,
  TimerReset,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { saveFocusSession } from "@/lib/focus-actions";

const presets = [
  {
    label: "15 Min Focus",
    minutes: 15,
    description:
      "A gentle focus session for quick clarity and mindful productivity.",
  },
  {
    label: "25 Min Deep Work",
    minutes: 25,
    description:
      "A balanced session designed for sustained attention and flow.",
  },
  {
    label: "45 Min Flow State",
    minutes: 45,
    description:
      "An immersive deep-focus session for meaningful progress.",
  },
];

export default function FocusPage() {
  const [selectedPreset, setSelectedPreset] =
    useState(presets[1]);

  const [duration, setDuration] =
    useState(
      presets[1].minutes * 60
    );

  const [timeLeft, setTimeLeft] =
    useState(duration);

  const [isRunning, setIsRunning] =
    useState(false);

  const [isPending, startTransition] =
    useTransition();

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);

      startTransition(async () => {
        try {
          await saveFocusSession(
            duration / 60
          );

          alert(
            "Focus session completed and saved."
          );
        } catch (error) {
          console.error(error);
        }
      });
    }

    return () => clearInterval(interval);
  }, [
    isRunning,
    timeLeft,
    duration,
  ]);

  const minutes = Math.floor(
    timeLeft / 60
  );

  const seconds = timeLeft % 60;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Focus Sessions
          </h1>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Create distraction-free moments for mindful productivity and mental clarity.
          </p>
        </div>
      </section>

      {/* Timer */}
      <section className="overflow-hidden rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <TimerReset className="h-10 w-10" />
          </div>

          <h2 className="mt-8 text-3xl font-semibold">
            {selectedPreset.label}
          </h2>

          <p className="mt-4 max-w-xl leading-8 text-muted-foreground">
            {selectedPreset.description}
          </p>

          <div className="mt-10 text-7xl font-semibold tracking-tight">
            {String(minutes).padStart(
              2,
              "0"
            )}
            :
            {String(seconds).padStart(
              2,
              "0"
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() =>
                setIsRunning(
                  !isRunning
                )
              }
              className="rounded-xl px-8"
            >
              {isRunning ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Start
                </>
              )}
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setTimeLeft(duration);

                setIsRunning(false);
              }}
              className="rounded-xl px-8"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Reset
            </Button>
          </div>

          {isPending && (
            <p className="mt-4 text-sm text-muted-foreground">
              Saving session...
            </p>
          )}
        </div>
      </section>

      {/* Presets */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Focus Presets
        </h2>

        <p className="mt-3 text-muted-foreground">
          Choose a session length that matches your energy and goals.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {presets.map((preset, index) => {
            const isSelected =
              selectedPreset.label ===
              preset.label;

            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedPreset(
                    preset
                  );

                  setDuration(
                    preset.minutes * 60
                  );

                  setTimeLeft(
                    preset.minutes * 60
                  );

                  setIsRunning(false);
                }}
                className={`rounded-[2rem] border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                  <TimerReset className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {preset.label}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {preset.description}
                </p>

                <div className="mt-6 text-sm text-muted-foreground">
                  {preset.minutes} minute session
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}