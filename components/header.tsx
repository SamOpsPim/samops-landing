"use client";

import Link from "next/link";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-6xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Logo className="h-8 w-auto" />
        </Link>
        
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm text-[#a0aec0] border border-[#4a4f5c] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#d46a3a] animate-pulse" />
            Coming Soon
          </span>
        </div>
      </nav>
    </header>
  );
}
