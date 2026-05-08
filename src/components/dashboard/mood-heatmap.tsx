import { prisma } from "@/lib/prisma";

import { auth } from "@/auth";

const moodColors: Record<
  string,
  string
> = {
  amazing:
    "bg-emerald-500",

  good:
    "bg-green-400",

  okay:
    "bg-yellow-400",

  bad:
    "bg-orange-400",

  awful:
    "bg-red-500",
};

export async function MoodHeatmap() {
  const session = await auth();

  if (!session?.user?.email) {
    return null;
  }

  const user =
    await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },

      include: {
        moodEntries: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

  if (!user) {
    return null;
  }

  const days = Array.from(
    { length: 35 },
    (_, index) => {
      const date = new Date();

      date.setDate(
        date.getDate() -
          (34 - index)
      );

      return date;
    }
  );

  return (
    <section className="rounded-[2.5rem] border bg-background p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Mood Journey
          </h2>

          <p className="mt-2 text-muted-foreground">
            Your emotional patterns over the last 35 days.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-7 gap-3 md:grid-cols-7">
        {days.map((day, index) => {
          const entry =
            user.moodEntries.find(
              (mood) =>
                new Date(
                  mood.createdAt
                ).toDateString() ===
                day.toDateString()
            );

          const color =
            entry
              ? moodColors[
                  entry.mood.toLowerCase()
                ] ||
                "bg-muted"
              : "bg-muted/40";

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`h-12 w-12 rounded-2xl border transition-transform hover:scale-105 ${color}`}
              />

              <span className="text-xs text-muted-foreground">
                {day.getDate()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        {[
          {
            label: "Amazing",
            color:
              "bg-emerald-500",
          },

          {
            label: "Good",
            color:
              "bg-green-400",
          },

          {
            label: "Okay",
            color:
              "bg-yellow-400",
          },

          {
            label: "Bad",
            color:
              "bg-orange-400",
          },

          {
            label: "Awful",
            color:
              "bg-red-500",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2"
          >
            <div
              className={`h-4 w-4 rounded-full ${item.color}`}
            />

            <span>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}