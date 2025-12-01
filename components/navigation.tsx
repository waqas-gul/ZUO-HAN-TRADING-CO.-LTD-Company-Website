'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Categories', href: '/categories' },
    // { label: 'Private Label', href: '/private-label' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background shadow-lg">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
            <span className="font-bold text-white">ZT</span>
          </div> */}

          <Image
          src={"logo.jpeg"}
          height={100}
          width={100}
          alt='Logo'
          className='size-12'
          >

          </Image>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">ZUO HAN</span>
            <span className="text-xs font-semibold text-accent">Trading Co.Ltd</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-white/10 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="hidden button-primary md:inline-flex">
          Request Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-custom space-y-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-white/10 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="button-primary mt-4 block w-full text-center">
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
