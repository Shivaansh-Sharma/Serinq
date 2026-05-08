import { NextResponse } from "next/server";

import { getWellnessScores } from "@/lib/wellness-score";

export async function GET() {
  try {
    const scores =
      await getWellnessScores();

    return NextResponse.json(
      scores
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch wellness scores.",
      },

      {
        status: 500,
      }
    );
  }
}