"use server";

import { auth } from "@/auth";

import { prisma } from "@/lib/prisma";

export async function saveBreathingSession(
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

  await prisma.breathingSession.create({
    data: {
      duration,
      userId: user.id,
    },
  });
}