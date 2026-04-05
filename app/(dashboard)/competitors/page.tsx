// TODO: Implement competitor tracking and analysis page

import { AgentChat } from "@/components/AgentChat";

export default function CompetitorsPage() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Competitors</h1>
        <p className="text-foreground/60 mt-1">
          Monitor competitor strategies, pricing, and market positioning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Competitor list */}
        <div className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Tracked Competitors</h2>
          <p className="text-sm text-foreground/50">
            TODO: Competitor cards with comparison data and add/remove functionality
          </p>
        </div>

        {/* AI analysis */}
        <AgentChat module="competitors" />
      </div>
    </div>
  );
}
