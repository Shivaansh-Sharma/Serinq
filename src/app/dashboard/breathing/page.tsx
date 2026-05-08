"use client";

import { useState, useEffect, useTransition } from "react";

import {
  Wind,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { saveBreathingSession } from "@/lib/breathing-actions";

const exercises = [
  {
    title: "Box Breathing",
    description:
      "A calming technique to reduce stress and improve focus.",
    duration: 4,
  },
  {
    title: "4-7-8 Breathing",
    description:
      "A slow breathing pattern designed to encourage relaxation.",
    duration: 5,
  },
  {
    title: "Deep Calm",
    description:
      "Gentle breathing for emotional grounding and clarity.",
    duration: 6,
  },
];

export default function BreathingPage() {
  const [seconds, setSeconds] =
    useState(0);

  const [isRunning, setIsRunning] =
    useState(false);

  const [selectedDuration, setSelectedDuration] =
    useState(4);

  const [selectedExercise, setSelectedExercise] =
    useState(exercises[0]);

  const [isPending, startTransition] =
    useTransition();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (
      isRunning &&
      seconds <
        selectedDuration * 60
    ) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    if (
      seconds ===
        selectedDuration * 60 &&
      isRunning
    ) {
      setIsRunning(false);

      startTransition(async () => {
        try {
          await saveBreathingSession(
            selectedDuration
          );

          alert(
            "Breathing session completed and saved."
          );
        } catch (error) {
          console.error(error);
        }
      });
    }

    return () =>
      clearInterval(interval);
  }, [
    isRunning,
    seconds,
    selectedDuration,
  ]);

  const minutes = Math.floor(
    seconds / 60
  );

  const remainingSeconds =
    seconds % 60;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Breathing Exercises
          </h1>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Slow down, breathe deeply, and reconnect with calm through guided breathing practices.
          </p>
        </div>
      </section>

      {/* Session */}
      <section className="overflow-hidden rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Wind className="h-10 w-10" />
          </div>

          <h2 className="mt-8 text-3xl font-semibold">
            {selectedExercise.title}
          </h2>

          <p className="mt-4 max-w-xl leading-8 text-muted-foreground">
            {selectedExercise.description}
          </p>

          <div className="mt-10 text-6xl font-semibold tracking-tight">
            {String(minutes).padStart(
              2,
              "0"
            )}
            :
            {String(
              remainingSeconds
            ).padStart(2, "0")}
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
                setSeconds(0);

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

      {/* Library */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Explore Exercises
        </h2>

        <p className="mt-3 text-muted-foreground">
          Choose a breathing practice that fits your current state of mind.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {exercises.map((exercise, index) => {
            const isSelected =
              selectedExercise.title ===
              exercise.title;

            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedExercise(
                    exercise
                  );

                  setSelectedDuration(
                    exercise.duration
                  );

                  setSeconds(0);

                  setIsRunning(false);
                }}
                className={`rounded-[2rem] border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  isSelected
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                  <Wind className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {exercise.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {exercise.description}
                </p>

                <div className="mt-6 text-sm text-muted-foreground">
                  {exercise.duration} min session
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}