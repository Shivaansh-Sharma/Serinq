"use client";

import { useState, useTransition } from "react";

import {
  Smile,
  Meh,
  Frown,
  Angry,
  Laugh,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";

import { createMoodEntry } from "@/lib/mood-actions";

const moods = [
  {
    label: "Great",
    icon: Laugh,
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  },
  {
    label: "Good",
    icon: Smile,
    color:
      "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  },
  {
    label: "Okay",
    icon: Meh,
    color:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  },
  {
    label: "Low",
    icon: Frown,
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  },
  {
    label: "Overwhelmed",
    icon: Angry,
    color:
      "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  },
];

export function MoodTrackerClient() {
  const [selectedMood, setSelectedMood] =
    useState<string | null>(null);

  const [note, setNote] =
    useState("");

  const [isPending, startTransition] =
    useTransition();

  const handleSave = () => {
    if (!selectedMood) return;

    startTransition(async () => {
      try {
        await createMoodEntry({
          mood: selectedMood,
          note,
        });

        setNote("");

        alert(
          "Mood entry saved successfully"
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to save mood entry"
        );
      }
    });
  };

  return (
    <>
      {/* Mood Selection */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          How are you feeling today?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {moods.map((mood) => {
            const Icon = mood.icon;

            const isSelected =
              selectedMood === mood.label;

            return (
              <button
                key={mood.label}
                onClick={() =>
                  setSelectedMood(mood.label)
                }
                className={`rounded-[2rem] border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  isSelected
                    ? "border-emerald-500 ring-2 ring-emerald-200 dark:ring-emerald-900"
                    : "border-border"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${mood.color}`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {mood.label}
                </h3>
              </button>
            );
          })}
        </div>
      </section>

      {/* Reflection */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Reflection Notes
        </h2>

        <p className="mt-3 text-muted-foreground">
          Write a few thoughts about your day.
        </p>

        <Textarea
          placeholder="Today I’m feeling..."
          className="mt-6 min-h-[180px] rounded-[1.5rem]"
          value={note}
          onChange={(e) =>
            setNote(e.target.value)
          }
        />

        <Button
          className="mt-6 rounded-xl px-8"
          disabled={
            !selectedMood || isPending
          }
          onClick={handleSave}
        >
          {isPending
            ? "Saving..."
            : "Save Entry"}
        </Button>
      </section>
    </>
  );
}