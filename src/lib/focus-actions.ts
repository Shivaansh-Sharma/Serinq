"use server";

import { auth } from "@/auth";

import { prisma } from "@/lib/prisma";

export async function saveFocusSession(
  duration: number
) {
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

  await prisma.focusSession.create({
    data: {
      duration,
      userId: user.id,
    },
  });
}

export async function getFocusSessions() {
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

  return prisma.focusSession.findMany({
    where: {
      userId: user.id,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}