import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background  text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                height={1000}
                width={1000}
                alt="logo"
                className="size-10"
              ></Image>
              <span className="font-bold">Zuohan Trading Co.Ltd</span>
            </div>
            <p className="text-sm text-gray-300">
              Professional contract packaging and private label manufacturing
              solutions for global brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contract-packaging"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contract Packaging
                </Link>
              </li>
              <li>
                <Link
                  href="/private-label"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Private Label
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-accent"
                />
                <span className="text-gray-300">
                  Tangjia Town, Dongguan City, Guangdong Province,warehouse 326,
                  Longjing Living Plaza, No. 96 Tanglong East Road
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a
                  href="tel:+971545555555"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  +86-13238384330
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a
                  href="mailto:info@Zuohantrading.ae"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  info@zuohantrading.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Zuohan Trading. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
