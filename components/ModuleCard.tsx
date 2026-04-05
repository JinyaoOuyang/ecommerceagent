// TODO: Implement dashboard module card component

import Link from "next/link";
import { ModuleConfig } from "@/lib/types";

interface ModuleCardProps {
  module: ModuleConfig;
}

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link
      href={module.href}
      className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-6 flex flex-col gap-3 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors"
    >
      <span className="text-2xl">{module.icon}</span>
      <h3 className="text-lg font-semibold">{module.title}</h3>
      <p className="text-sm text-foreground/60">{module.description}</p>
    </Link>
  );
}
