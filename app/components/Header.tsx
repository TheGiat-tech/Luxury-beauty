"use client"

import { useState } from "react"
import Link from "next/link"
import { Sparkles, Menu, X, ArrowLeft } from "lucide-react"

const navLinks = [
  { label: "Top Picks", href: "/#top-picks" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Compare", href: "/#comparison" },
  { label: "ELEMIS", href: "/best-elemis-skincare" },
  { label: "The Science", href: "/blog/how-red-light-therapy-works" },
  { label: "Ingredients", href: "/blog/luxury-ingredients-science" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Site title → home */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold tracking-widest uppercase text-slate-900">
              Luxury Beauty
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide text-slate-500 uppercase"
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger – mobile only */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer – full-screen overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-white flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Close button */}
          <div className="flex items-center justify-end px-6 py-5 border-b border-gray-100">
            <button
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-8 py-10 gap-8" aria-label="Mobile">
            {/* Back to Main Guide */}
            <Link
              href="/"
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Main Guide
            </Link>

            <hr className="border-gray-100" />

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-slate-800 hover:text-slate-500 transition-colors tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
