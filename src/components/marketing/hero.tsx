import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

import { FadeUp } from "@/components/animations/fade-up";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Container>
<FadeUp>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 rounded-full border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
            Mindfulness • Journaling • Emotional Clarity
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Find calm in the middle of chaos.
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Sereniq helps you reflect, breathe, journal, and reconnect
            with your mental clarity — one gentle step at a time.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link href="/signup">
                Start Your Journey
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link href="/features">
                Explore Features
              </Link>
            </Button>
          </div>
          </div>
</FadeUp>
      </Container>

      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-900/20" />
      </div>
    </section>
  );
}