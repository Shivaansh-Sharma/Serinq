"use server";

import { auth } from "@/auth";

import { prisma } from "@/lib/prisma";

export async function createJournalEntry({
  title,
  content,
}: {
  title?: string;
  content: string;
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

  await prisma.journalEntry.create({
    data: {
      title,
      content,
      userId: user.id,
    },
  });
}

export async function getJournalEntries() {
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

  return prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}