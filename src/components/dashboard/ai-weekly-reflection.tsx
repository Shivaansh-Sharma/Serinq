"use client";

import { useState } from "react";
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

type WeeklyReflection = {
  summary: string;
  moodPattern: string;
  positiveDevelopments: string[];
  challenges: string[];
  meaningfulChanges: string[];
  reflectionQuestions: string[];
};

export function AIWeeklyReflection() {
  const [reflection, setReflection] =
    useState<WeeklyReflection | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function generateReflection() {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        "/api/ai/weekly-reflection"
      );

      if (!response.ok) {
        throw new Error("Failed to generate reflection");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.error || "Failed to generate reflection"
        );
      }

      setReflection(data.reflection);
    } catch (error) {
      console.error(
        "AI weekly reflection error:",
        error
      );

      setError(
        "Unable to generate your weekly reflection. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          <Sparkles className="h-6 w-6" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            AI Weekly Reflection
          </h2>

          <p className="text-muted-foreground">
            Reflect on your moods and journal entries from
            the last 7 days.
          </p>
        </div>
      </div>

      {/* Initial State */}
      {!reflection && !isLoading && !error && (
        <div className="mt-8 rounded-2xl bg-muted/40 p-6">
          <div className="flex items-start gap-4">
            <BookOpen className="mt-1 h-5 w-5 text-blue-600" />

            <div>
              <h3 className="font-medium">
                Ready for your weekly reflection?
              </h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Generate a personalized reflection based
                on your recent wellness activity.
              </p>

              <button
                onClick={generateReflection}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <Sparkles className="h-4 w-4" />
                Generate Reflection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="mt-8 rounded-2xl bg-muted/40 p-8 text-center">
          <Sparkles className="mx-auto h-8 w-8 animate-pulse text-blue-600" />

          <h3 className="mt-4 font-medium">
            Reflecting on your week...
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            This may take a few seconds.
          </p>
        </div>
      )}

      {/* Error */}
      {error && !isLoading && (
        <div className="mt-8 rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-1 h-5 w-5 text-destructive" />

            <div>
              <p className="font-medium">
                Something went wrong
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {error}
              </p>

              <button
                onClick={generateReflection}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:bg-muted"
              >
                <RefreshCw className="h-4 w-4" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reflection */}
      {reflection && !isLoading && (
        <div className="mt-8 space-y-6">

          {/* Summary */}
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Your Week
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              {reflection.summary}
            </p>
          </div>

          {/* Mood Pattern */}
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Mood Pattern
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              {reflection.moodPattern}
            </p>
          </div>

          {/* Positive Developments */}
          {reflection.positiveDevelopments.length > 0 && (
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">
                Positive Developments
              </h3>

              <ul className="mt-4 space-y-3">
                {reflection.positiveDevelopments.map(
                  (item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 leading-7 text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />

                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {reflection.challenges.length > 0 && (
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">
                Challenges
              </h3>

              <ul className="mt-4 space-y-3">
                {reflection.challenges.map(
                  (item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 leading-7 text-muted-foreground"
                    >
                      <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-amber-600" />

                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Meaningful Changes */}
          {reflection.meaningfulChanges.length > 0 && (
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">
                Meaningful Changes
              </h3>

              <ul className="mt-4 space-y-3">
                {reflection.meaningfulChanges.map(
                  (item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 leading-7 text-muted-foreground"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />

                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Reflection Questions */}
          {reflection.reflectionQuestions.length > 0 && (
            <div className="rounded-2xl bg-muted/40 p-6">
              <h3 className="font-semibold">
                Questions to Reflect On
              </h3>

              <ol className="mt-4 space-y-4">
                {reflection.reflectionQuestions.map(
                  (question, index) => (
                    <li
                      key={index}
                      className="flex gap-3 leading-7 text-muted-foreground"
                    >
                      <span className="font-semibold text-foreground">
                        {index + 1}.
                      </span>

                      <span>{question}</span>
                    </li>
                  )
                )}
              </ol>
            </div>
          )}

          {/* Regenerate */}
          <div className="flex justify-end">
            <button
              onClick={generateReflection}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <RefreshCw className="h-4 w-4" />
              Regenerate
            </button>
          </div>
        </div>
      )}
    </section>
  );
}