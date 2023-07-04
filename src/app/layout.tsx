import './globals.css'
import { Poppins } from 'next/font/google'
import { useState } from 'react'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], display: 'swap' })
// export const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel Bunny App',
  description: 'Social Tourism app for Africans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}> {children}</body>
    </html>
  )
}

