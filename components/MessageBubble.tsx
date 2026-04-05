// TODO: Implement chat message bubble component with role-based styling

import { AgentMessage } from "@/lib/types";

interface MessageBubbleProps {
  message: AgentMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
          isUser
            ? "bg-foreground text-background"
            : "bg-black/[.05] dark:bg-white/[.06]"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        <span className="block text-[10px] mt-1 opacity-50">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}
