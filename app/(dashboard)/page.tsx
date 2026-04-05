// TODO: Implement dashboard home page with module cards and quick actions

import { ModuleCard } from "@/components/ModuleCard";
import { AgentModule } from "@/lib/types";

const modules: (AgentModule & { href: string })[] = [
  {
    id: "listing-optimizer",
    icon: "📝",
    label: "Listing Optimizer",
    description: "Optimize your product listings for better visibility and conversions.",
    placeholder: "Paste a listing to optimize...",
    examples: ["Optimize my title for SEO", "Rewrite bullet points"],
    href: "/listing-optimizer",
  },
  {
    id: "metrics",
    icon: "📊",
    label: "Metrics",
    description: "Track sales performance, traffic, and advertising metrics.",
    placeholder: "Ask about your metrics...",
    examples: ["What's my conversion rate trend?", "Summarize last week"],
    href: "/metrics",
  },
  {
    id: "content",
    icon: "✍️",
    label: "Content",
    description: "Generate and manage product copy, ads, and social content.",
    placeholder: "Describe the content you need...",
    examples: ["Write ad copy for my top product", "Draft a social post"],
    href: "/content",
  },
  {
    id: "competitors",
    icon: "🔍",
    label: "Competitors",
    description: "Monitor competitor strategies, pricing, and market position.",
    placeholder: "Ask about competitor analysis...",
    examples: ["Compare my pricing", "Identify competitor weaknesses"],
    href: "/competitors",
  },
  {
    id: "experiments",
    icon: "🧪",
    label: "Experiments",
    description: "Run A/B tests on listings and marketing campaigns.",
    placeholder: "Describe an experiment idea...",
    examples: ["Suggest a title A/B test", "Analyze my last experiment"],
    href: "/experiments",
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
