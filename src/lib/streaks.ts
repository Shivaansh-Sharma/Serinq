import { prisma } from "@/lib/prisma";

import { auth } from "@/auth";

function calculateStreak(
  dates: Date[]
) {
  if (dates.length === 0) {
    return 0;
  }

  const uniqueDates = [
    ...new Set(
      dates.map((date) =>
        new Date(date)
          .toISOString()
          .split("T")[0]
      )
    ),
  ]
    .map((date) => new Date(date))
    .sort(
      (a, b) =>
        b.getTime() - a.getTime()
    );

  let streak = 1;

  for (
    let i = 0;
    i < uniqueDates.length - 1;
    i++
  ) {
    const current =
      uniqueDates[i];

    const next =
      uniqueDates[i + 1];

    const diff =
      (current.getTime() -
        next.getTime()) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

export async function getUserStreaks() {
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
        moodEntries: true,
        journalEntries: true,
        focusSessions: true,
        breathingSessions: true,
      },
    });

  if (!user) {
    return null;
  }

  return {
    moodStreak:
      calculateStreak(
        user.moodEntries.map(
          (entry) =>
            entry.createdAt
        )
      ),

    journalStreak:
      calculateStreak(
        user.journalEntries.map(
          (entry) =>
            entry.createdAt
        )
      ),

    focusStreak:
      calculateStreak(
        user.focusSessions.map(
          (entry) =>
            entry.createdAt
        )
      ),

    breathingStreak:
      calculateStreak(
        user.breathingSessions.map(
          (entry) =>
            entry.createdAt
        )
      ),
  };
}