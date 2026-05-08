import { auth } from "@/auth";

import { prisma } from "@/lib/prisma";

export async function getWellnessScores() {
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

  const moodScore = Math.min(
    user.moodEntries.length * 5,
    100
  );

  const reflectionScore =
    Math.min(
      user.journalEntries.length *
        5,
      100
    );

  const focusScore = Math.min(
    user.focusSessions.length *
      5,
    100
  );

  const mindfulnessScore =
    Math.min(
      user.breathingSessions
        .length * 5,
      100
    );

  const overall =
    Math.round(
      (moodScore +
        reflectionScore +
        focusScore +
        mindfulnessScore) /
        4
    );

  let level = "Beginner";

  if (overall >= 80) {
    level = "Flourishing";
  } else if (
    overall >= 60
  ) {
    level = "Balanced";
  } else if (
    overall >= 40
  ) {
    level = "Mindful";
  } else if (
    overall >= 20
  ) {
    level = "Grounded";
  }

  return {
    moodScore,
    reflectionScore,
    focusScore,
    mindfulnessScore,
    overall,
    level,
  };
}