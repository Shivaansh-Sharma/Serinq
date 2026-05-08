import { auth } from "@/auth";

import { prisma } from "@/lib/prisma";

export async function getRecommendations() {
  const session = await auth();

  if (!session?.user?.email) {
    return [];
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
    return [];
  }

  const recommendations: string[] =
    [];

  const today =
    new Date().toDateString();

  const hasMoodToday =
    user.moodEntries.some(
      (entry) =>
        new Date(
          entry.createdAt
        ).toDateString() === today
    );

  const hasJournalToday =
    user.journalEntries.some(
      (entry) =>
        new Date(
          entry.createdAt
        ).toDateString() === today
    );

  const hasBreathingToday =
    user.breathingSessions.some(
      (entry) =>
        new Date(
          entry.createdAt
        ).toDateString() === today
    );

  const hasFocusToday =
    user.focusSessions.some(
      (entry) =>
        new Date(
          entry.createdAt
        ).toDateString() === today
    );

  // Positive reinforcement
  if (
    user.journalEntries.length >= 5
  ) {
    recommendations.push(
      "Your journaling consistency is becoming a meaningful mindful habit."
    );
  }

  if (
    user.breathingSessions.length >= 5
  ) {
    recommendations.push(
      "Regular breathing exercises can support emotional grounding and calm."
    );
  }

  if (
    user.focusSessions.length >= 5
  ) {
    recommendations.push(
      "Your focus sessions are helping build healthier productivity rhythms."
    );
  }

  // Daily suggestions
  if (!hasMoodToday) {
    recommendations.push(
      "Take a moment to log how you’re feeling today."
    );
  }

  if (!hasJournalToday) {
    recommendations.push(
      "A short reflection today could help create emotional clarity."
    );
  }

  if (!hasBreathingToday) {
    recommendations.push(
      "Try a calming breathing exercise to slow down and reset."
    );
  }

  if (!hasFocusToday) {
    recommendations.push(
      "A mindful focus session may help reduce mental clutter."
    );
  }

  // Fallback
  if (
    recommendations.length === 0
  ) {
    recommendations.push(
      "You’re maintaining thoughtful wellness habits today."
    );
  }

  // Shuffle slightly for variety
  recommendations.sort(
    () => Math.random() - 0.5
  );

  // Return max 3
  return recommendations.slice(
    0,
    3
  );
}