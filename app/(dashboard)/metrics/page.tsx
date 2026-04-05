// TODO: Implement metrics dashboard with charts and AI insights

import { AgentChat } from "@/components/AgentChat";

export default function MetricsPage() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Metrics</h1>
        <p className="text-foreground/60 mt-1">
          Track your sales performance, traffic, and advertising metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metrics overview */}
        <div className="lg:col-span-2 rounded-lg border border-black/[.08] dark:border-white/[.145] p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Performance Overview</h2>
          <p className="text-sm text-foreground/50">
            TODO: Metric cards (revenue, orders, conversion rate, traffic, ACoS) and charts
          </p>
        </div>

        {/* AI insights */}
        <AgentChat module="metrics" />
      </div>
    </div>
  );
}
