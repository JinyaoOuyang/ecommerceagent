// TODO: Implement landing page with hero section, feature highlights, and CTA

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-black/[.08] dark:border-white/[.145]">
        <span className="text-xl font-bold">E-Commerce Agent</span>
        <nav className="flex gap-4">
          <Link
            href="/login"
            className="text-sm hover:underline underline-offset-4"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-foreground text-background text-sm px-4 py-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-8">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight max-w-3xl">
          AI-Powered Brand Management for E-Commerce
        </h1>
        <p className="text-lg text-foreground/70 max-w-xl">
          Optimize listings, track competitors, generate content, and run
          experiments — all guided by an intelligent agent that knows your brand.
        </p>
        <div className="flex gap-4">
          <Link
            href="/signup"
            className="rounded-full bg-foreground text-background text-sm sm:text-base h-10 sm:h-12 px-6 flex items-center hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Start Free Trial
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-black/[.08] dark:border-white/[.145] text-sm sm:text-base h-10 sm:h-12 px-6 flex items-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
          >
            Sign In
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-foreground/50 border-t border-black/[.08] dark:border-white/[.145]">
        &copy; {new Date().getFullYear()} E-Commerce Agent. All rights reserved.
      </footer>
    </div>
  );
}
