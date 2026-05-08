"use server";

import { auth } from "@/auth";

import { prisma } from "@/lib/prisma";

export async function getInsightsData() {
  const session = await auth();

  if (!session?.user?.email) {
    return null;
  }

  const user =
    await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

  if (!user) {
    return null;
  }

  const moodEntries =
    await prisma.moodEntry.findMany({
      where: {
        userId: user.id,
      },

      orderBy: {
        createdAt: "asc",
      },
    });

  const journalEntries =
    await prisma.journalEntry.findMany({
      where: {
        userId: user.id,
      },
    });

  const focusSessions =
    await prisma.focusSession.findMany({
      where: {
        userId: user.id,
      },
    });

  const moodMap: Record<
    string,
    number
  > = {
    Great: 5,
    Good: 4,
    Okay: 3,
    Low: 2,
    Overwhelmed: 1,
  };

  const moodTrendData =
    moodEntries.map((entry) => ({
      date: new Date(
        entry.createdAt
      ).toLocaleDateString(),

      mood:
        moodMap[entry.mood] || 3,
    }));

  const averageMood =
    moodEntries.length > 0
      ? (
          moodEntries.reduce(
            (acc, entry) =>
              acc +
              (moodMap[
                entry.mood
              ] || 3),
            0
          ) / moodEntries.length
        ).toFixed(1)
      : "0";

  const totalFocusMinutes =
    focusSessions.reduce(
      (acc, session) =>
        acc + session.duration,
      0
    );

  return {
    averageMood,
    moodEntriesCount:
      moodEntries.length,

    journalEntriesCount:
      journalEntries.length,

    focusSessionsCount:
      focusSessions.length,

    totalFocusMinutes,

    moodTrendData,
  };
}