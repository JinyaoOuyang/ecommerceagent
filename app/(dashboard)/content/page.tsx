// TODO: Implement content generation and management page

import { AgentChat } from "@/components/AgentChat";

export default function ContentPage() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Content</h1>
        <p className="text-foreground/60 mt-1">
          Generate and manage product copy, ad copy, social posts, and emails.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content library */}
        <div className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Content Library</h2>
          <p className="text-sm text-foreground/50">
            TODO: List of generated content pieces with status filters and actions
          </p>
        </div>

        {/* AI content generator */}
        <AgentChat module="content" />
      </div>
    </div>
  );
}
