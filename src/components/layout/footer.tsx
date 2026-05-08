import Link from "next/link";

import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-6 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold tracking-tight">
              Sereniq
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Calm digital wellness for modern life.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
            <Link
              href="/features"
              className="transition-colors hover:text-foreground"
            >
              Features
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-foreground"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="transition-colors hover:text-foreground"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}