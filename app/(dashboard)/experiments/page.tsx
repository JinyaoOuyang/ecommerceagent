// TODO: Implement A/B testing and experiments page

import { AgentChat } from "@/components/AgentChat";

export default function ExperimentsPage() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Experiments</h1>
        <p className="text-foreground/60 mt-1">
          Design and run A/B tests on your listings and campaigns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Experiments list */}
        <div className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Active Experiments</h2>
          <p className="text-sm text-foreground/50">
            TODO: Experiment cards with status, variants, and results
          </p>
        </div>

        {/* AI experiment assistant */}
        <AgentChat module="experiments" />
      </div>
    </div>
  );
}
