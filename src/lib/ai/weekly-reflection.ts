import { ChatGroq } from "@langchain/groq";
import { weeklyReflectionPrompt } from "./prompt";
import { weeklyReflectionSchema } from "./schema";

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  temperature: 0.3,
});

const structuredModel = model.withStructuredOutput(weeklyReflectionSchema);

const chain = weeklyReflectionPrompt.pipe(structuredModel);

export async function generateWeeklyReflection(data: {
  moods: unknown[];
  journalEntries: unknown[];
}) {
  const response = await chain.invoke({
    moods: JSON.stringify(data.moods, null, 2),
    journalEntries: JSON.stringify(data.journalEntries, null, 2),
  });

  return response;
}