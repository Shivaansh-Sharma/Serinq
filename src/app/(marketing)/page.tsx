import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";

import { Container } from "@/components/layout/container";

import { FadeUp } from "@/components/animations/fade-up";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-emerald-50/30 text-foreground dark:from-background dark:to-background">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Simple Highlight */}
      <section className="py-24">
        <Container>
          <FadeUp>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex rounded-full border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                A calmer digital experience
              </div>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Designed to help you slow down and reconnect.
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
                Sereniq creates space for mindfulness, reflection,
                emotional awareness, and healthier digital habits
                without adding more noise to your day.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Lightweight Features */}
      <Features />

      {/* Closing Section */}
      <section className="pb-24">
        <Container>
          <FadeUp>
            <div className="rounded-[2.5rem] border bg-background/70 p-10 text-center shadow-sm backdrop-blur md:p-16">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Small mindful habits create meaningful change.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Track your wellbeing, reflect consistently, and build
                calmer routines through intentional digital experiences.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      <Footer />
    </main>
  );
}