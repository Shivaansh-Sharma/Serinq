import {
  Flame,
  BookOpen,
  Brain,
  Wind,
  TimerReset,
  Sparkles,
} from "lucide-react";

import { getUserStreaks } from "@/lib/streaks";

import { getRecommendations } from "@/lib/recommendations";

import { getWeeklyReflection } from "@/lib/weekly-reflection";

import { MoodHeatmap } from "@/components/dashboard/mood-heatmap";
import { AIWeeklyReflection } from "@/components/dashboard/ai-weekly-reflection";

function getGreeting() {
  const hour =
    new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  }

  if (hour < 18) {
    return "Good afternoon";
  }

  return "Good evening";
}

function getMotivationalMessage(
  totalStreak: number
) {
  if (totalStreak >= 20) {
    return "Your consistency is creating meaningful emotional growth.";
  }

  if (totalStreak >= 10) {
    return "You’re building strong mindful habits.";
  }

  if (totalStreak >= 5) {
    return "Small consistent steps create lasting calm.";
  }

  return "Every mindful moment matters.";
}

export default async function DashboardPage() {
  const streaks =
    await getUserStreaks();

  const recommendations =
    await getRecommendations();

  const weeklyReflection =
    await getWeeklyReflection();

  const totalStreak =
    (streaks?.moodStreak || 0) +
    (streaks?.journalStreak || 0) +
    (streaks?.focusStreak || 0) +
    (streaks?.breathingStreak ||
      0);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-[2.5rem] border bg-background p-8 shadow-sm md:p-10">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-emerald-50 px-4 py-2 text-sm text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300">
            <Sparkles className="h-4 w-4" />

            Personalized Wellness
          </div>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {getGreeting()}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {getMotivationalMessage(
              totalStreak
            )}
          </p>
        </div>
      </section>

      {/* Streak Cards */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Mood Streak",
            value:
              streaks?.moodStreak || 0,

            icon: Brain,

            color:
              "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
          },

          {
            title: "Journal Streak",
            value:
              streaks?.journalStreak ||
              0,

            icon: BookOpen,

            color:
              "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
          },

          {
            title:
              "Breathing Streak",

            value:
              streaks?.breathingStreak ||
              0,

            icon: Wind,

            color:
              "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
          },

          {
            title: "Focus Streak",
            value:
              streaks?.focusStreak || 0,

            icon: TimerReset,

            color:
              "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-[2rem] border bg-background p-6 shadow-sm"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon className="h-7 w-7" />
              </div>

              <div className="mt-6 flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />

                <span className="text-sm text-muted-foreground">
                  Current streak
                </span>
              </div>

              <h2 className="mt-2 text-4xl font-semibold tracking-tight">
                {item.value}
              </h2>

              <p className="mt-2 text-muted-foreground">
                {item.title}
              </p>
            </div>
          );
        })}
      </section>

      {/* Recommendations */}
      <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Sparkles className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Personalized Recommendations
            </h2>

            <p className="text-muted-foreground">
              Gentle suggestions based on your recent wellness activity.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {recommendations.map(
            (
              recommendation,
              index
            ) => (
              <div
                key={index}
                className="rounded-2xl border p-5"
              >
                <p className="leading-7 text-muted-foreground">
                  {recommendation}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Weekly Reflection */}
      <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <BookOpen className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Weekly Reflection
            </h2>

            <p className="text-muted-foreground">
              A mindful summary of your recent wellness journey.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {weeklyReflection?.reflections.map(
            (
              reflection,
              index
            ) => (
              <div
                key={index}
                className="rounded-2xl border p-5"
              >
                <p className="leading-7 text-muted-foreground">
                  {reflection}
                </p>
              </div>
            )
          )}
        </div>


        <div className="mt-8 rounded-2xl bg-muted/40 p-5">
          <p className="text-sm text-muted-foreground">
            Total wellness activities this week:
          </p>

          <p className="mt-2 text-3xl font-semibold tracking-tight">
            {weeklyReflection?.total || 0}
          </p>
        </div>
      </section>
      
      <AIWeeklyReflection/>

      {/* Mood Heatmap */}
      <MoodHeatmap />

      {/* Reflection */}
      <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight">
          Your wellness journey
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          Consistency matters more than perfection.
          Small moments of mindfulness, reflection,
          and emotional awareness can create meaningful
          long-term wellbeing over time.
        </p>
      </section>
    </div>
  );
}