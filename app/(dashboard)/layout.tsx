// TODO: Implement auth-protected layout with sidebar navigation

import Link from "next/link";

const sidebarLinks = [
  { href: "/", label: "Dashboard", icon: "🏠" },
  { href: "/onboarding", label: "Onboarding", icon: "🚀" },
  { href: "/listing-optimizer", label: "Listing Optimizer", icon: "📝" },
  { href: "/metrics", label: "Metrics", icon: "📊" },
  { href: "/content", label: "Content", icon: "✍️" },
  { href: "/competitors", label: "Competitors", icon: "🔍" },
  { href: "/experiments", label: "Experiments", icon: "🧪" },
  { href: "/settings/brand", label: "Brand Settings", icon: "⚙️" },
  { href: "/settings/channels", label: "Channels", icon: "🔗" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-black/[.08] dark:border-white/[.145] p-4 flex flex-col gap-1 shrink-0">
        <div className="text-lg font-bold px-3 py-4">E-Commerce Agent</div>
        <nav className="flex flex-col gap-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-black/[.05] dark:hover:bg-white/[.06] transition-colors"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
