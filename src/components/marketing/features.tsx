import {
  Brain,
  BookOpen,
  Wind,
  Sparkles,
  TimerReset,
  LineChart,
} from "lucide-react";

import { Container } from "@/components/layout/container";

import { FadeUp } from "@/components/animations/fade-up";

const features = [
  {
    title: "Mood Tracking",
    description:
      "Track emotional patterns and better understand how you feel over time.",
    icon: Brain,
  },
  {
    title: "Daily Journaling",
    description:
      "Write freely, reflect deeply, and organize your thoughts calmly.",
    icon: BookOpen,
  },
  {
    title: "Breathing Exercises",
    description:
      "Slow down and reset with guided breathing and mindfulness sessions.",
    icon: Wind,
  },
  {
    title: "Guided Reflections",
    description:
      "Use thoughtful prompts and mindful exercises to reconnect with yourself.",
    icon: Sparkles,
  },
  {
    title: "Focus Sessions",
    description:
      "Stay grounded with distraction-free focus and calming productivity tools.",
    icon: TimerReset,
  },
  {
    title: "Progress Insights",
    description:
      "Visualize your emotional growth and wellness journey over time.",
    icon: LineChart,
  },
];

export function Features() {
  return (
    <section className="py-24">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Everything you need to feel more grounded
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Sereniq combines mindfulness, reflection, and emotional awareness
              into one calm digital space.
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <FadeUp
                  key={feature.title}
                  delay={index * 0.08}
                >
                  <div className="group rounded-3xl border bg-background/60 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}