// TODO: Implement AI agent API route using Anthropic SDK

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt } from "@/lib/prompts/builder";
import { AgentMessage, AgentRequest } from "@/lib/types";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body: AgentRequest = await request.json();
    const { messages, module, brand_id: _brandId } = body;

    // TODO: Fetch brand profile from Supabase using brand_id
    const brandProfile = null; // Placeholder until Supabase is wired up

    const systemPrompt = buildSystemPrompt(module, brandProfile);

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map((msg: AgentMessage) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }));

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: systemPrompt,
      messages: anthropicMessages,
    });

    const assistantContent =
      response.content[0].type === "text" ? response.content[0].text : "";

    const assistantMessage: AgentMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: assistantContent,
      module,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Agent API error:", error);
    return NextResponse.json(
      { error: "Failed to process agent request" },
      { status: 500 }
    );
  }
}
