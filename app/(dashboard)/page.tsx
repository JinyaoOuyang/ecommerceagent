// TODO: Implement dashboard home page with module cards and quick actions

import { ModuleCard } from "@/components/ModuleCard";
import { ModuleConfig } from "@/lib/types";

const modules: ModuleConfig[] = [
  {
    id: "listing-optimizer",
    title: "Listing Optimizer",
    description: "Optimize your product listings for better visibility and conversions.",
    href: "/listing-optimizer",
    icon: "📝",
  },
  {
    id: "metrics",
    title: "Metrics",
    description: "Track sales performance, traffic, and advertising metrics.",
    href: "/metrics",
    icon: "📊",
  },
  {
    id: "content",
    title: "Content",
    description: "Generate and manage product copy, ads, and social content.",
    href: "/content",
    icon: "✍️",
  },
  {
    id: "competitors",
    title: "Competitors",
    description: "Monitor competitor strategies, pricing, and market position.",
    href: "/competitors",
    icon: "🔍",
  },
  {
    id: "experiments",
    title: "Experiments",
    description: "Run A/B tests on listings and marketing campaigns.",
    href: "/experiments",
    icon: "🧪",
  },
];

export default function DashboardHome() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-foreground/60 mt-1">
          Welcome back. Choose a module to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod) => (
          <ModuleCard key={mod.id} module={mod} />
        ))}
      </div>
    </div>
  );
}
