"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] border-l bg-background/95 backdrop-blur-xl"
      >
        <div className="mt-10 flex flex-col gap-6">
          <Link
            href="/features"
            className="text-lg font-medium transition-colors hover:text-emerald-600"
          >
            Features
          </Link>

          <Link
            href="/about"
            className="text-lg font-medium transition-colors hover:text-emerald-600"
          >
            About
          </Link>

          <Link
            href="/blog"
            className="text-lg font-medium transition-colors hover:text-emerald-600"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-lg font-medium transition-colors hover:text-emerald-600"
          >
            Contact
          </Link>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              variant="outline"
              asChild
            >
              <Link href="/login">
                Login
              </Link>
            </Button>

            <Button asChild>
              <Link href="/signup">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}