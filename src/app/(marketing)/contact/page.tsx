import { Mail, MapPin, MessageCircle } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

import { FadeUp } from "@/components/animations/fade-up";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-emerald-50/30 text-foreground dark:from-background dark:to-background">
      <Navbar />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex rounded-full border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                Contact Sereniq
              </div>

              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                We’d love to hear from you.
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Questions, feedback, ideas, or support — reach out anytime.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left Side */}
            <FadeUp>
              <div className="rounded-[2rem] border bg-background/70 p-10 shadow-sm backdrop-blur">
                <h2 className="text-3xl font-semibold">
                  Get in touch
                </h2>

                <p className="mt-6 leading-8 text-muted-foreground">
                  Sereniq is built around mindfulness, emotional clarity,
                  and calm digital experiences. If there’s anything you’d
                  like to share, we’re here to listen.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-medium">
                        Email
                      </h3>

                      <p className="mt-1 text-muted-foreground">
                        hello@sereniq.app
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-medium">
                        Support
                      </h3>

                      <p className="mt-1 text-muted-foreground">
                        We usually respond within 24–48 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-medium">
                        Location
                      </h3>

                      <p className="mt-1 text-muted-foreground">
                        Built for mindful living, everywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.1}>
              <div className="rounded-[2rem] border bg-background/70 p-10 shadow-sm backdrop-blur">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Full Name
                    </label>

                    <Input
                      placeholder="Enter your name"
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Email Address
                    </label>

                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Message
                    </label>

                    <Textarea
                      placeholder="Write your message..."
                      className="min-h-[160px] rounded-2xl"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full rounded-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}