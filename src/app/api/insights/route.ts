import { NextResponse } from "next/server";

import { getInsightsData } from "@/lib/insights-actions";

export async function GET() {
  const data =
    await getInsightsData();

  return NextResponse.json(data);
}