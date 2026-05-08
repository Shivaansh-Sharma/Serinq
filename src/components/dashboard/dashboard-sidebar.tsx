"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Brain,
  BookOpen,
  Wind,
  TimerReset,
  LineChart,
  LayoutDashboard,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Mood Tracker",
    href: "/dashboard/mood",
    icon: Brain,
  },
  {
    title: "Journal",
    href: "/dashboard/journal",
    icon: BookOpen,
  },
  {
    title: "Breathing",
    href: "/dashboard/breathing",
    icon: Wind,
  },
  {
    title: "Focus Sessions",
    href: "/dashboard/focus",
    icon: TimerReset,
  },
  {
    title: "Insights",
    href: "/dashboard/insights",
    icon: LineChart,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r bg-background lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b px-6 py-6">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          Sereniq
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          const isActive =
            pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                isActive
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />

              {link.title}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t p-4">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
        >
          <Settings className="h-5 w-5" />

          Settings
        </Link>
      </div>
    </aside>
  );
}