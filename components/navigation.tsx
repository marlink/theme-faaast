"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            BeautifulRims
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/diensten" className="text-zinc-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/projecten" className="text-zinc-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/over-ons" className="text-zinc-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/components-showcase" className="text-zinc-300 hover:text-white transition-colors">
              Components
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden sm:inline-flex border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
            >
              <Link href="/">
                Back to Homepage
              </Link>
            </Button>
            <Button asChild className="hidden sm:inline-flex bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/offerte">Button</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden" onClick={closeMobileMenu} />
      )}

      <div
        className={`fixed top-20 right-0 bottom-0 w-64 bg-zinc-900 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <Link
            href="/diensten"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/projecten"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
          <Link
            href="/over-ons"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link
            href="/components-showcase"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Components
          </Link>

          <div className="border-t border-zinc-700 pt-6 flex flex-col gap-3">
            <Button
              asChild
              variant="outline"
              className="w-full border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
            >
              <Link href="/">
                Back to Homepage
              </Link>
            </Button>
            <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/offerte" onClick={closeMobileMenu}>
                Button
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
