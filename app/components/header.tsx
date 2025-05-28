"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Our Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "IMS Policy", href: "/ims-policy" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-200">
      <nav className="container-max">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-ipets-red to-ipets-cyan rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">iP</span>
            </div>
            <div>
              <div className="text-zinc-900 font-bold text-lg sm:text-xl">iPets Engineering</div>
              <div className="text-zinc-600 text-xs sm:text-sm">EPICOM Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-700 hover:text-ipets-red transition-colors duration-200 font-medium relative group text-sm xl:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ipets-red transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-zinc-900" /> : <Menu className="h-6 w-6 text-zinc-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-zinc-700 hover:text-ipets-red transition-colors duration-200 font-medium py-3 px-2 rounded-lg hover:bg-zinc-50 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
