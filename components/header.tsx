"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-6xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#a0aec0] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#waitlist"
            className="px-5 py-2 text-sm font-semibold text-white bg-[#d46a3a] hover:bg-[#e07844] rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#d46a3a]/25"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#a0aec0] hover:text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto glass rounded-2xl px-6 py-4 animate-fade-in-down">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[#a0aec0] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#d46a3a] hover:bg-[#e07844] rounded-xl text-center transition-all"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
