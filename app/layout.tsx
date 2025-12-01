import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Zuohan Trading | Contract Packaging & Private Label Solutions",
  description:
    "Professional contract packaging and private label manufacturing services. Customized solutions for cosmetics, food, beverages, and consumer goods.",
  keywords:
    "contract packaging, private label, manufacturing, packaging solutions, OEM services",
  openGraph: {
    title: "Zuohan Trading | Contract Packaging & Private Label Solutions",
    description:
      "Professional contract packaging and private label manufacturing services.",
    url: "https://Zuohan-trading.com",
    siteName: "Zuohan Trading",
    locale: "en_US",
    type: "website",
  },
  generator: "v0.app",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1a1a2e',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className} bg-background text-foreground`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
