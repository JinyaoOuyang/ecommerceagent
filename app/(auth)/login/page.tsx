// TODO: Implement login page with Supabase Auth

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-foreground/60 mt-1">
            Sign in to your account
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
              required
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Password</span>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
              required
            />
          </label>

          <button
            type="submit"
            className="rounded-md bg-foreground text-background text-sm font-medium py-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-foreground/60">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4 hover:text-foreground">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
