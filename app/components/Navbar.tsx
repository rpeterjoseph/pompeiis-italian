"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#1E0E05]/95 backdrop-blur-sm shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3" aria-label="Pompeii's Pizzeria home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-icon-white.png"
              width={40}
              height={40}
              alt="Pompeii's"
              className="object-contain flex-shrink-0"
            />
            <span
              className="text-xl font-bold text-[#D4941A]"
              style={{ fontFamily: "var(--font-oranienbaum), serif" }}
            >
              Pompeii&apos;s
            </span>
            <span className="hidden lg:block text-xs text-[#FFF8EE]/50 font-light tracking-[0.2em] uppercase border-l border-white/10 pl-3">
              Pizzeria &amp; Italian Eatery
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium tracking-wide rounded-lg transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[#D4941A] bg-white/5"
                    : "text-[#FFF8EE]/70 hover:text-[#D4941A] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+18109663400"
              className="ml-3 bg-[#C8332A] hover:bg-[#D44035] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              (810) 966-3400
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#FFF8EE] p-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1E0E05] border-t border-[#D4941A]/20 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-3 font-medium border-b border-white/5 transition-colors ${
                isActive(link.href)
                  ? "text-[#D4941A]"
                  : "text-[#FFF8EE]/80 hover:text-[#D4941A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+18109663400"
            className="mt-4 block text-center bg-[#C8332A] hover:bg-[#D44035] text-white font-semibold px-4 py-3 rounded-full transition-colors"
          >
            Call (810) 966-3400
          </a>
        </div>
      )}
    </nav>
  );
}
