import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

import { FadeUp } from "@/components/animations/fade-up";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-emerald-50/30 text-foreground dark:from-background dark:to-background">
      <Navbar />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex rounded-full border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                About Sereniq
              </div>

              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                Built to create more space for calm.
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                Sereniq was created to help people slow down, reflect,
                and reconnect with emotional clarity in a world that
                constantly demands attention.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Mission */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeUp>
              <div className="rounded-[2rem] border bg-background/70 p-10 shadow-sm backdrop-blur">
                <h2 className="text-3xl font-semibold">
                  Our Mission
                </h2>

                <p className="mt-6 leading-8 text-muted-foreground">
                  We believe mental wellness tools should feel calm,
                  supportive, and emotionally safe — not overwhelming
                  or clinical.
                </p>

                <p className="mt-4 leading-8 text-muted-foreground">
                  Sereniq combines mindfulness, journaling, breathing,
                  reflection, and thoughtful wellness tools into one peaceful
                  digital experience designed for everyday life.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-[2rem] border bg-background/70 p-10 shadow-sm backdrop-blur">
                <h2 className="text-3xl font-semibold">
                  Why Sereniq?
                </h2>

                <p className="mt-6 leading-8 text-muted-foreground">
                  Modern life moves fast. Notifications, pressure,
                  distractions, and constant stimulation can make it
                  difficult to slow down and reconnect with yourself.
                </p>

                <p className="mt-4 leading-8 text-muted-foreground">
                  Sereniq was designed as a quieter digital space —
                  one that encourages reflection, mindfulness, and
                  emotional balance without adding more noise.
                </p>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="pb-24">
        <Container>
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight">
                Designed with intention
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Every part of Sereniq is built around calm interaction,
                emotional clarity, accessibility, and mindful digital
                experiences.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Calm by Design",
                description:
                  "Soft visuals, gentle motion, and low visual noise create a peaceful experience.",
              },
              {
                title: "Human-Centered",
                description:
                  "Technology should support wellbeing — not compete for attention.",
              },
              {
                title: "Mindful Experiences",
                description:
                  "Every feature is designed to encourage reflection, emotional awareness, and balance.",
              },
            ].map((value, index) => (
              <FadeUp
                key={value.title}
                delay={index * 0.08}
              >
                <div className="rounded-[2rem] border bg-background/70 p-8 shadow-sm backdrop-blur">
                  <h3 className="text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}