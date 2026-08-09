import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  temperature: 0,
});

export async function testGroq() {
  const response = await model.invoke(
    "Say hello and tell me what model you are."
  );

  console.log(response.content);
}