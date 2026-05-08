"use server";

import { auth } from "@/auth";

import { prisma } from "@/lib/prisma";

export async function updateProfile(
  name: string
) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error(
      "Unauthorized"
    );
  }

  await prisma.user.update({
    where: {
      email: session.user.email,
    },

    data: {
      name,
    },
  });

  return {
    success: true,
  };
}