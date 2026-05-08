import { MoodTrackerClient } from "@/components/dashboard/mood-tracker-client";

import { getMoodEntries } from "@/lib/mood-actions";

export default async function MoodTrackerPage() {
  const entries =
    await getMoodEntries();

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Mood Tracker
          </h1>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Reflect on your emotional wellbeing and track your mental state over time.
          </p>
        </div>
      </section>

      <MoodTrackerClient />

      {/* Real History */}
      <section className="rounded-[2rem] border bg-background p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Recent Mood History
        </h2>

        <p className="mt-3 text-muted-foreground">
          Your recent emotional check-ins.
        </p>

        <div className="mt-8 space-y-4">
          {entries.length === 0 && (
            <div className="rounded-2xl border p-5 text-muted-foreground">
              No mood entries yet.
            </div>
          )}

          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-2xl border p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  {entry.mood}
                </h3>

                <span className="text-sm text-muted-foreground">
                  {new Date(
                    entry.createdAt
                  ).toLocaleDateString()}
                </span>
              </div>

              {entry.note && (
                <p className="mt-3 leading-7 text-muted-foreground">
                  {entry.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}