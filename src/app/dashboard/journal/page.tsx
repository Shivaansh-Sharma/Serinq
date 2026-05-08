import { Clock3 } from "lucide-react";

import { JournalClient } from "@/components/dashboard/journal-client";

import { getJournalEntries } from "@/lib/journal-actions";

export default async function JournalPage() {
  const entries =
    await getJournalEntries();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Journal
          </h1>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Reflect, process emotions, and organize your thoughts.
          </p>
        </div>
      </section>

      <JournalClient />

      {/* Real Entries */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <Clock3 className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Previous Entries
            </h2>

            <p className="text-muted-foreground">
              Your saved reflections and journal notes.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {entries.length === 0 && (
            <div className="rounded-2xl border p-5 text-muted-foreground">
              No journal entries yet.
            </div>
          )}

          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-2xl border p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {entry.title ||
                    "Untitled Entry"}
                </h3>

                <span className="text-sm text-muted-foreground">
                  {new Date(
                    entry.createdAt
                  ).toLocaleDateString()}
                </span>
              </div>

              <p className="mt-4 whitespace-pre-line leading-7 text-muted-foreground">
                {entry.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}