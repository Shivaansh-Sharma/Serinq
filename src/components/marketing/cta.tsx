import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-b from-emerald-50 to-background px-6 py-16 text-center shadow-sm dark:from-emerald-950/20 md:px-12 md:py-24">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/20" />
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Start building a calmer, healthier daily rhythm.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Reflect on your thoughts, track your emotional wellbeing,
            and reconnect with clarity through mindful digital tools.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link href="/signup">
                Get Started Free
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
      </Container>
    </section>
  );
}