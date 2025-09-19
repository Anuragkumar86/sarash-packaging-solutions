import './globals.css'
import type { Metadata } from 'next'
import Header from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'SARASH Packaging Solutions',
  description: 'Reliable PET & HDPE packaging solutions for Pharmaceuticals, Cosmetics & Healthcare companies.',
  icons: {
    icon: 'images/Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
