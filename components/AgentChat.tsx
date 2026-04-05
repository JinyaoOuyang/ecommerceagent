// TODO: Implement AI agent chat interface with message streaming

"use client";

import { useState } from "react";
import { MessageBubble } from "@/components/MessageBubble";
import { AgentMessage } from "@/lib/types";

interface AgentChatProps {
  module: string;
}

export function AgentChat({ module }: AgentChatProps) {
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: AgentMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
      module,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // TODO: Call /api/agent with messages and module context
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          module,
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages((prev) => [...prev, data.message]);
    } catch (error) {
      console.error("Agent chat error:", error);
      // TODO: Show error state to user
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="rounded-lg border border-black/[.08] dark:border-white/[.145] flex flex-col h-[500px]">
      <div className="px-4 py-3 border-b border-black/[.08] dark:border-white/[.145]">
        <h2 className="text-sm font-semibold">AI Assistant</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.length === 0 && (
          <p className="text-sm text-foreground/40 text-center mt-8">
            Ask the AI assistant for help with {module.replace("-", " ")}.
          </p>
        )}
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isLoading && (
          <div className="text-sm text-foreground/50 animate-pulse">
            Thinking...
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-black/[.08] dark:border-white/[.145] p-3 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
