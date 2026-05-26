"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Hours & Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#2C2C2C]/95 backdrop-blur-sm shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#home"
            className="flex items-center gap-2"
            aria-label="Pompeii's Pizzeria home"
          >
            <span
              className="text-xl font-bold text-[#C9A84C]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Pompeii&apos;s
            </span>
            <span className="hidden sm:block text-sm text-[#FDF6E3]/70 font-light tracking-widest uppercase">
              Pizzeria & Italian Eatery
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#FDF6E3]/80 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+18109663400"
              className="bg-[#8B1A1A] hover:bg-[#A52020] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              (810) 966-3400
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#FDF6E3] p-2"
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
        <div className="md:hidden bg-[#2C2C2C] border-t border-[#C9A84C]/20 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[#FDF6E3]/80 hover:text-[#C9A84C] font-medium border-b border-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+18109663400"
            className="mt-4 block text-center bg-[#8B1A1A] hover:bg-[#A52020] text-white font-semibold px-4 py-3 rounded-full transition-colors"
          >
            Call (810) 966-3400
          </a>
        </div>
      )}
    </nav>
  );
}
