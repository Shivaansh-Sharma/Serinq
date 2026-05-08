import { auth } from "@/auth";

import { prisma } from "@/lib/prisma";

export async function getWeeklyReflection() {
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

  const now = new Date();

  const sevenDaysAgo =
    new Date();

  sevenDaysAgo.setDate(
    now.getDate() - 7
  );

  const weeklyMood =
    user.moodEntries.filter(
      (entry) =>
        entry.createdAt >=
        sevenDaysAgo
    ).length;

  const weeklyJournal =
    user.journalEntries.filter(
      (entry) =>
        entry.createdAt >=
        sevenDaysAgo
    ).length;

  const weeklyBreathing =
    user.breathingSessions.filter(
      (entry) =>
        entry.createdAt >=
        sevenDaysAgo
    ).length;

  const weeklyFocus =
    user.focusSessions.filter(
      (entry) =>
        entry.createdAt >=
        sevenDaysAgo
    ).length;

  const reflections: string[] =
    [];

  const total =
    weeklyMood +
    weeklyJournal +
    weeklyBreathing +
    weeklyFocus;

  if (total >= 15) {
    reflections.push(
      "You showed strong consistency in your wellness habits this week."
    );
  }

  if (weeklyJournal >= 3) {
    reflections.push(
      "Journaling became an important space for reflection and emotional clarity."
    );
  }

  if (weeklyBreathing >= 3) {
    reflections.push(
      "Breathing exercises helped create moments of calm and grounding."
    );
  }

  if (weeklyFocus >= 3) {
    reflections.push(
      "Your focus sessions supported healthier productivity rhythms."
    );
  }

  if (weeklyMood >= 4) {
    reflections.push(
      "Tracking your emotions consistently can improve emotional awareness over time."
    );
  }

  if (reflections.length === 0) {
    reflections.push(
      "Small mindful actions still create meaningful emotional progress over time."
    );
  }

  return {
    total,
    reflections: reflections.slice(
      0,
      3
    ),
  };
}