"use client";

import { useState, useTransition } from "react";

import {
  BookOpen,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { createJournalEntry } from "@/lib/journal-actions";

const prompts = [
  "What’s something that brought you peace today?",
  "What emotions have been most present lately?",
  "What would help you feel calmer right now?",
  "What are you grateful for today?",
];

export function JournalClient() {
  const [selectedPrompt, setSelectedPrompt] =
    useState(prompts[0]);

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const [isPending, startTransition] =
    useTransition();

  const handleSave = () => {
    if (!content.trim()) return;

    startTransition(async () => {
      try {
        await createJournalEntry({
          title,
          content,
        });

        setTitle("");
        setContent("");

        alert(
          "Journal entry saved successfully"
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to save journal entry"
        );
      }
    });
  };

  return (
    <>
      {/* Prompt Section */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Sparkles className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Reflection Prompt
            </h2>

            <p className="text-muted-foreground">
              Gentle prompts to help you begin writing.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {prompts.map((prompt) => {
            const isSelected =
              selectedPrompt === prompt;

            return (
              <button
                key={prompt}
                onClick={() =>
                  setSelectedPrompt(prompt)
                }
                className={`rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  isSelected
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
                    : ""
                }`}
              >
                <p className="leading-7">
                  {prompt}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Editor */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
            <BookOpen className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Today's Entry
            </h2>

            <p className="text-muted-foreground">
              {selectedPrompt}
            </p>
          </div>
        </div>

        <Input
          placeholder="Entry title..."
          className="mt-8 h-12 rounded-xl"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <Textarea
          placeholder="Start writing your thoughts..."
          className="mt-6 min-h-[300px] rounded-[1.5rem] text-base leading-8"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <div className="mt-6">
          <Button
            className="rounded-xl px-8"
            disabled={
              !content.trim() ||
              isPending
            }
            onClick={handleSave}
          >
            {isPending
              ? "Saving..."
              : "Save Journal Entry"}
          </Button>
        </div>
      </section>
    </>
  );
}