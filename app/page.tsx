"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function useCountdown(days = 30) {
  const target = useMemo(() => Date.now() + days * 24 * 3600 * 1000, [days]);
  const [remaining, setRemaining] = useState(target - Date.now());

  useEffect(() => {
    const id = setInterval(() => setRemaining(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(id);
  }, [target]);

  const total = Math.floor(remaining / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = Math.floor(total % 60);

  return { d, h, m, s };
}

export default function Home() {
  const { d, h, m, s } = useCountdown(30);

  return (
    <main className="min-h-screen bg-white text-neutral-900">

      {/* NAV */}
      <header className="mx-auto max-w-6xl flex items-center justify-between p-6">
        <h1 className="text-xl font-bold tracking-tight">NLT SPORTS DRIVE</h1>

        <nav className="flex gap-6 text-sm items-center">
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#plans" className="hover:underline">Plans</a>
          <Link href="/owner" className="hover:underline">Owner</Link>
          <Link href="/onboarding" className="px-4 py-2 rounded-full bg-black text-white">
            Start
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl text-center px-6 pt-20 pb-14">
        <h2 className="text-5xl font-bold leading-tight">
          Turn your car into <br /> monthly income
        </h2>

        <p className="mt-6 text-neutral-600 max-w-2xl mx-auto">
          Nationwide remote consignment platform.
          You keep possession of your vehicle while we handle listing,
          compliance, onboarding, and support.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/onboarding"
            className="px-7 py-3 rounded-full bg-black text-white font-medium"
          >
            Start Onboarding
          </Link>

          <Link
            href="/owner"
            className="px-7 py-3 rounded-full border font-medium"
          >
            Owner Dashboard
          </Link>
        </div>

        <div className="mt-10 mx-auto max-w-xl rounded-2xl border bg-neutral-50 p-5">
          <div className="text-sm font-medium">Founder’s 30-day onboarding window ends in</div>
          <div className="mt-2 flex justify-center gap-3 font-mono text-lg">
            <span>{String(d).padStart(2, "0")}d</span>
            <span>{String(h).padStart(2, "0")}h</span>
            <span>{String(m).padStart(2, "0")}m</span>
            <span>{String(s).padStart(2, "0")}s</span>
          </div>
          <div className="mt-2 text-xs text-neutral-500">
            12-month term • 265+ active listing days • Remote nationwide
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="bg-neutral-50 py-20 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-lg font-semibold">1. Subscribe</div>
            <p className="text-sm text-neutral-600 mt-2">Choose a yearly access plan.</p>
          </div>
          <div>
            <div className="text-lg font-semibold">2. e-Sign</div>
            <p className="text-sm text-neutral-600 mt-2">Complete the DocuSign packet.</p>
          </div>
          <div>
            <div className="text-lg font-semibold">3. Activate</div>
            <p className="text-sm text-neutral-600 mt-2">We publish and manage your listing.</p>
          </div>
          <div>
            <div className="text-lg font-semibold">4. Earn</div>
            <p className="text-sm text-neutral-600 mt-2">Track performance + payouts.</p>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-6">

          <div className="border rounded-2xl p-8">
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="text-3xl font-bold mt-4">$89</p>
            <p className="text-sm text-neutral-600">1–2 vehicles / year</p>
            <Link
              href="/onboarding?plan=basic"
              className="block text-center mt-6 px-5 py-3 rounded-full bg-black text-white"
            >
              Choose Basic
            </Link>
          </div>

          <div className="border-2 border-black rounded-2xl p-8">
            <h3 className="text-xl font-semibold">Elite</h3>
            <p className="text-3xl font-bold mt-4">$129</p>
            <p className="text-sm text-neutral-600">Multi-vehicle owners</p>
            <Link
              href="/onboarding?plan=elite"
              className="block text-center mt-6 px-5 py-3 rounded-full bg-black text-white"
            >
              Choose Elite
            </Link>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-3xl font-bold mt-4">3–6</p>
            <p className="text-sm text-neutral-600">Vehicles (coming soon)</p>
            <Link
              href="/onboarding?plan=elite"
              className="block text-center mt-6 px-5 py-3 rounded-full border"
            >
              Start with Elite
            </Link>
          </div>

        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} NLT SPORTS DRIVE
      </footer>
    </main>
  );
}
