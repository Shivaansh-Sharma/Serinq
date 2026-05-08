"use client";

import { Bell } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import { ThemeToggle } from "@/components/layout/theme-toggle";

import { MobileDashboardSidebar } from "./mobile-dashboard-sidebar";

import { LogoutButton } from "./logout-button";

export function DashboardTopbar() {
  return (
    <header className="border-b bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          <MobileDashboardSidebar />

          <div>
            <h1 className="text-lg font-semibold">
              Welcome back
            </h1>

            <p className="hidden text-sm text-muted-foreground md:block">
              Take a moment to check in with yourself today.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted">
            <Bell className="h-5 w-5" />
          </button>

          <ThemeToggle />

          <Avatar>
            <AvatarFallback>
              S
            </AvatarFallback>
          </Avatar>

          <LogoutButton />
        </div>
      </div>
    </header>
  );
}