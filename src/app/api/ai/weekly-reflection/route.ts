import { NextResponse } from "next/server";
import { getMoodEntries } from "@/lib/mood-actions";
import { getJournalEntries } from "@/lib/journal-actions";
import { filterWeeklyEntries } from "@/lib/ai/weekly-data";
import { generateWeeklyReflection } from "@/lib/ai/weekly-reflection";

export async function GET() {
  try {
    const [allMoods, allJournals] = await Promise.all([
      getMoodEntries(),
      getJournalEntries(),
    ]);

    const moods = filterWeeklyEntries(allMoods);
    const journals = filterWeeklyEntries(allJournals);

    const weeklyData = {
      moods: moods.map((entry) => ({
        date: entry.createdAt,
        mood: entry.mood,
        note: entry.note,
      })),

      journalEntries: journals.map((entry) => ({
        date: entry.createdAt,
        title: entry.title,
        content: entry.content,
      })),
    };

    const reflection = await generateWeeklyReflection(weeklyData);

    return NextResponse.json({
      success: true,
      reflection,
    });
  } catch (error) {
    console.error("Weekly reflection error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate weekly reflection",
      },
      { status: 500 }
    );
  }
}