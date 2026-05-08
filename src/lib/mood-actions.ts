"use server";

import { auth } from "@/auth";

import { prisma } from "@/lib/prisma";

export async function createMoodEntry({
  mood,
  note,
}: {
  mood: string;
  note?: string;
}) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user =
    await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

  if (!user) {
    throw new Error("User not found");
  }

  await prisma.moodEntry.create({
    data: {
      mood,
      note,
      userId: user.id,
    },
  });
}

export async function getMoodEntries() {
  const session = await auth();

  if (!session?.user?.email) {
    return [];
  }

  const user =
    await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

  if (!user) {
    return [];
  }

  return prisma.moodEntry.findMany({
    where: {
      userId: user.id,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}