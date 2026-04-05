// TODO: Implement AI agent API route using Anthropic SDK

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt } from "@/lib/prompts/builder";
import { ChatMessage } from "@/lib/types";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, module, brandId: _brandId } = body as {
      messages: ChatMessage[];
      module: string;
      brandId?: string;
    };

    // TODO: Fetch brand profile from Supabase using brand_id
    const brandProfile = null; // Placeholder until Supabase is wired up

    const systemPrompt = buildSystemPrompt(module, brandProfile);

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map((msg: ChatMessage) => ({
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

    const assistantMessage: ChatMessage = {
      role: "assistant",
      content: assistantContent,
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
