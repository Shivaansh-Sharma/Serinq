import {
  Moon,
  Shield,
  User,
} from "lucide-react";

import { auth } from "@/auth";

import { LogoutButton } from "@/components/dashboard/logout-button";

import { ProfileSettings } from "@/components/dashboard/profile-settings";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Settings
          </h1>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Manage your Sereniq experience and account preferences.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <User className="h-7 w-7" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Profile
            </h2>

            <p className="text-muted-foreground">
              Your account information.
            </p>
          </div>
        </div>

        <ProfileSettings
          initialName={
            session?.user?.name ||
            "Sereniq User"
          }
          email={
            session?.user?.email || ""
          }
        />
      </section>

      {/* Appearance */}
      <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            <Moon className="h-7 w-7" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Appearance
            </h2>

            <p className="text-muted-foreground">
              Sereniq supports both light and dark themes.
            </p>
          </div>
        </div>
      </section>

      {/* Logout */}
      <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
            <Shield className="h-7 w-7" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Account
            </h2>

            <p className="text-muted-foreground">
              Manage your session securely.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <LogoutButton />
        </div>
      </section>
    </div>
  );
}