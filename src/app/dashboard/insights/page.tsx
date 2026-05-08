"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  TrendingUp,
  Brain,
  BookOpen,
  TimerReset,
  Sparkles,
  Wind,
} from "lucide-react";

import { useEffect, useState } from "react";

interface InsightsData {
  averageMood: string;

  moodEntriesCount: number;

  journalEntriesCount: number;

  focusSessionsCount: number;

  totalFocusMinutes: number;

  moodTrendData: {
    date: string;
    mood: number;
  }[];
}

interface WellnessScores {
  moodScore: number;

  reflectionScore: number;

  focusScore: number;

  mindfulnessScore: number;

  overall: number;

  level: string;
}

export default function InsightsPage() {
  const [data, setData] =
    useState<InsightsData | null>(
      null
    );

  const [scores, setScores] =
    useState<WellnessScores | null>(
      null
    );

  useEffect(() => {
    async function fetchData() {
      const response =
        await fetch(
          "/api/insights"
        );

      const result =
        await response.json();

      setData(result);

      const scoresResponse =
        await fetch(
          "/api/wellness-score"
        );

      const scoresResult =
        await scoresResponse.json();

      setScores(scoresResult);
    }

    fetchData();
  }, []);

  if (!data || !scores) {
    return (
      <div className="p-8">
        Loading insights...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-emerald-50 px-4 py-2 text-sm text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300">
            <Sparkles className="h-4 w-4" />

            Wellness Analytics
          </div>

          <h1 className="text-4xl font-semibold tracking-tight">
            Wellness Insights
          </h1>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Understand your emotional patterns, mindfulness consistency,
            and wellness habits over time.
          </p>
        </div>
      </section>

      {/* Wellness Scores */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title:
              "Emotional Awareness",

            value:
              scores.moodScore,

            icon: Brain,

            color:
              "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
          },

          {
            title:
              "Reflection Score",

            value:
              scores.reflectionScore,

            icon: BookOpen,

            color:
              "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
          },

          {
            title:
              "Focus Score",

            value:
              scores.focusScore,

            icon: TimerReset,

            color:
              "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
          },

          {
            title:
              "Mindfulness Score",

            value:
              scores.mindfulnessScore,

            icon: Wind,

            color:
              "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
          },
        ].map((score, index) => {
          const Icon = score.icon;

          return (
            <div
              key={index}
              className="rounded-[2rem] border bg-background p-6 shadow-sm"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${score.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-sm text-muted-foreground">
                {score.title}
              </h2>

              <p className="mt-2 text-4xl font-semibold tracking-tight">
                {score.value}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Wellness score
              </p>
            </div>
          );
        })}
      </section>

      {/* Wellness Level */}
      <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Current Wellness Level
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              {scores.level}
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="text-sm text-muted-foreground">
              Overall Score
            </p>

            <p className="mt-3 text-5xl font-semibold tracking-tight">
              {scores.overall}
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl leading-8 text-muted-foreground">
          Your wellness level reflects your consistency across mindfulness,
          emotional awareness, reflection, and focus habits.
        </p>
      </section>

      {/* Real Stats */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Average Mood",
            value: `${data.averageMood} / 5`,
            icon: Brain,
            color:
              "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
          },

          {
            title: "Mood Entries",
            value:
              data.moodEntriesCount.toString(),

            icon: TrendingUp,

            color:
              "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
          },

          {
            title: "Journal Entries",
            value:
              data.journalEntriesCount.toString(),

            icon: BookOpen,

            color:
              "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
          },

          {
            title: "Focus Minutes",
            value:
              data.totalFocusMinutes.toString(),

            icon: TimerReset,

            color:
              "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
          },
        ].map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="rounded-[2rem] border bg-background p-6 shadow-sm"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-sm text-muted-foreground">
                {stat.title}
              </h2>

              <p className="mt-2 text-3xl font-semibold tracking-tight">
                {stat.value}
              </p>
            </div>
          );
        })}
      </section>

      {/* Real Chart */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Mood Trends
        </h2>

        <p className="mt-3 text-muted-foreground">
          Emotional wellbeing over time.
        </p>

        <div className="mt-10 h-[350px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart
              data={
                data.moodTrendData
              }
            >
              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="date"
              />

              <YAxis />

              <Tooltip
                contentStyle={{
                  backgroundColor:
                    "hsl(var(--background))",

                  border:
                    "1px solid hsl(var(--border))",

                  borderRadius: "16px",

                  color:
                    "hsl(var(--foreground))",
                }}

                labelStyle={{
                  color:
                    "hsl(var(--foreground))",
                }}

                itemStyle={{
                  color:
                    "hsl(var(--foreground))",
                }}
              />

              <Line
                type="monotone"
                dataKey="mood"
                stroke="currentColor"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Reflection */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Reflection
        </h2>

        <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">
          Your emotional wellbeing patterns are evolving over time.
          Consistent reflection and mindfulness practices can help improve
          emotional clarity, emotional resilience, and healthier daily habits.
        </p>
      </section>
    </div>
  );
}