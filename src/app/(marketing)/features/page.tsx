import {
  Brain,
  BookOpen,
  Wind,
  TimerReset,
  LineChart,
  Sparkles,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

import { FadeUp } from "@/components/animations/fade-up";

const features = [
  {
    title: "Mood Tracking",
    description:
      "Track emotional patterns over time and build greater awareness around how different habits affect your wellbeing.",

    icon: Brain,
  },

  {
    title: "Daily Journaling",
    description:
      "Reflect freely, organize thoughts calmly, and create intentional moments of emotional clarity through writing.",

    icon: BookOpen,
  },

  {
    title: "Breathing Exercises",
    description:
      "Practice guided breathing techniques that help reduce overwhelm and encourage emotional grounding.",

    icon: Wind,
  },

  {
    title: "Guided Reflections",
    description:
      "Explore thoughtful prompts and gentle mindfulness exercises designed to support emotional awareness.",

    icon: Sparkles,
  },

  {
    title: "Focus Sessions",
    description:
      "Use distraction-free focus timers to create calmer and more intentional productivity sessions.",

    icon: TimerReset,
  },

  {
    title: "Progress Insights",
    description:
      "Visualize your consistency, emotional patterns, and wellness habits through meaningful personal insights.",

    icon: LineChart,
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-emerald-50/30 text-foreground dark:from-background dark:to-background">
      <Navbar />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex rounded-full border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                Sereniq Features
              </div>

              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                Tools designed for calmer living.
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                Sereniq combines mindfulness, reflection, emotional awareness,
                and calm productivity into one peaceful digital space.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Detailed Features */}
      <section className="pb-24">
        <Container>
          <div className="space-y-8">
            {features.map(
              (feature, index) => {
                const Icon =
                  feature.icon;

                return (
                  <FadeUp
                    key={feature.title}
                    delay={
                      index * 0.05
                    }
                  >
                    <div className="grid gap-10 rounded-[2.5rem] border bg-background/70 p-10 shadow-sm backdrop-blur md:grid-cols-[120px_1fr] md:p-14">
                      <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        <Icon className="h-10 w-10" />
                      </div>

                      <div>
                        <h2 className="text-3xl font-semibold tracking-tight">
                          {feature.title}
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                          {
                            feature.description
                          }
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                );
              }
            )}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}