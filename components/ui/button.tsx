"use client";

import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ href, children, variant = "primary" }: Props) {
  const styles =
    variant === "outline"
      ? "border border-black text-black hover:bg-neutral-100"
      : "bg-black text-white hover:bg-neutral-800";

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition ${styles}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition ${styles}`}
    >
      {children}
    </button>
  );
}
