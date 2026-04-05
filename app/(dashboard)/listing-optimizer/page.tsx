// TODO: Implement listing optimizer page with AI chat and listing editor

import { AgentChat } from "@/components/AgentChat";

export default function ListingOptimizerPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Listing Optimizer</h1>
        <p className="text-foreground/60 mt-1">
          Optimize your product listings with AI-powered suggestions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Listing editor panel */}
        <div className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Listing Editor</h2>
          <p className="text-sm text-foreground/50">
            TODO: Listing selection and editing form (title, bullets, description, keywords)
          </p>
        </div>

        {/* AI chat panel */}
        <AgentChat module="listing-optimizer" />
      </div>
    </div>
  );
}
