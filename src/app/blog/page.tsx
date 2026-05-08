import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

import { FadeUp } from "@/components/animations/fade-up";

const posts = [
  {
    slug:
      "how-to-manage-stress-daily",

    title:
      "How to Manage Stress in Everyday Life",

    excerpt:
      "Simple mindful habits that can help reduce emotional overwhelm and restore calm.",

    category: "Wellness",

    date: "May 2026",
  },

  {
    slug:
      "building-healthier-digital-habits",

    title:
      "Building Healthier Digital Habits",

    excerpt:
      "Create calmer relationships with technology and reduce mental overstimulation.",

    category: "Mindfulness",

    date: "May 2026",
  },

  {
    slug:
      "benefits-of-journaling",

    title:
      "The Emotional Benefits of Journaling",

    excerpt:
      "Explore how journaling can improve emotional clarity and self-awareness.",

    category: "Reflection",

    date: "May 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-emerald-50/30 text-foreground dark:from-background dark:to-background">
      <Navbar />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex rounded-full border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                Sereniq Resources
              </div>

              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                Calm thoughts for everyday life.
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Explore mindfulness, journaling, focus, and emotional wellness resources.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Posts */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <FadeUp
                key={post.slug}
                delay={index * 0.08}
              >
                <Link
                  href={`/blog/${post.slug}`}
                >
                  <article className="group h-full rounded-[2rem] border bg-background/70 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>
                        {post.category}
                      </span>

                      <span>•</span>

                      <span>
                        {post.date}
                      </span>
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold tracking-tight transition-colors group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                      {post.title}
                    </h2>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {post.excerpt}
                    </p>

                    <div className="mt-8 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                      Read article →
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}