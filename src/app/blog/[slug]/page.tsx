import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const articles: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    content: string[];
  }
> = {
  "how-to-manage-stress-daily": {
    title:
      "How to Manage Stress in Everyday Life",

    category: "Wellness",

    date: "May 2026",

    content: [
      "Stress has become a constant part of modern life. Deadlines, notifications, responsibilities, and constant stimulation can quietly overwhelm the mind and body over time.",

      "One of the most effective ways to manage stress is to create intentional pauses throughout the day. Even a few moments of stillness, breathing, or reflection can help regulate emotional overwhelm and restore mental clarity.",

      "Journaling is another powerful practice. Writing down thoughts and emotions allows the mind to slow down and process experiences more clearly. It can also help identify patterns that contribute to stress.",

      "Mindful breathing exercises can calm the nervous system and reduce physical tension. Gentle breathing techniques encourage the body to shift out of stress mode and into a more grounded emotional state.",

      "Managing stress is not about becoming perfectly calm all the time. It’s about building small habits that help you reconnect with yourself more consistently.",
    ],
  },

  "building-healthier-digital-habits": {
    title:
      "Building Healthier Digital Habits",

    category: "Mindfulness",

    date: "May 2026",

    content: [
      "Technology can be incredibly useful, but constant digital stimulation can make it difficult to feel mentally present and emotionally rested.",

      "Healthy digital habits begin with awareness. Notice how often you reach for your phone automatically or switch between tasks without intention.",

      "Creating calmer digital routines can improve focus, emotional wellbeing, and sleep quality. Small boundaries — like reducing notifications or taking mindful breaks — often have a meaningful impact over time.",

      "Mindful technology use is not about avoiding screens completely. It’s about creating healthier relationships with attention, rest, and mental space.",

      "The goal is balance: using technology intentionally while protecting moments of calm, reflection, and emotional clarity.",
    ],
  },

  "benefits-of-journaling": {
    title:
      "The Emotional Benefits of Journaling",

    category: "Reflection",

    date: "May 2026",

    content: [
      "Journaling creates space to slow down and process thoughts with greater honesty and clarity.",

      "Writing regularly can help reduce emotional overwhelm by giving thoughts a place to exist outside the mind. Many people find that journaling improves emotional awareness and self-understanding over time.",

      "There is no perfect way to journal. Some days may involve deep reflection, while others may simply capture small observations or emotions.",

      "Consistency matters more than perfection. Even brief moments of reflection can help create a stronger sense of calm and emotional grounding.",

      "Journaling is ultimately a practice of listening to yourself more carefully and creating intentional moments of stillness in daily life.",
    ],
  },
};

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const article =
    articles[slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background to-emerald-50/30 text-foreground dark:from-background dark:to-background">
        <Navbar />

        <section className="py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight">
                Article not found
              </h1>

              <p className="mt-6 text-lg text-muted-foreground">
                The article you’re looking for does not exist or may have been moved.
              </p>
            </div>
          </Container>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-emerald-50/30 text-foreground dark:from-background dark:to-background">
      <Navbar />

      <section className="py-24">
        <Container>
          <article className="mx-auto max-w-3xl">
            {/* Meta */}
            <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
              <span>
                {article.category}
              </span>

              <span>•</span>

              <span>
                {article.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-semibold tracking-tight leading-tight md:text-6xl">
              {article.title}
            </h1>

            {/* Intro */}
            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Thoughtful reflections and mindful practices to support emotional wellbeing and mental clarity.
            </p>

            {/* Content */}
            <div className="mt-16 space-y-8">
              {article.content.map(
                (
                  paragraph,
                  index
                ) => (
                  <p
                    key={index}
                    className="text-lg leading-9 text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {/* Closing */}
            <div className="mt-20 rounded-[2rem] border bg-background/70 p-8 shadow-sm backdrop-blur">
              <h2 className="text-2xl font-semibold">
                Take a moment for yourself
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                Small mindful habits practiced consistently can create meaningful emotional balance over time.
              </p>
            </div>
          </article>
        </Container>
      </section>

      <Footer />
    </main>
  );
}