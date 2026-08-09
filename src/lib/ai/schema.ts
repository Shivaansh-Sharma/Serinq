import { z } from "zod";

export const weeklyReflectionSchema = z.object({
  summary: z.string(),

  moodPattern: z.string(),

  positiveDevelopments: z.array(z.string()),

  challenges: z.array(z.string()),

  meaningfulChanges: z.array(z.string()),

  reflectionQuestions: z.array(z.string()),
});

export type WeeklyReflection = z.infer<
  typeof weeklyReflectionSchema
>;