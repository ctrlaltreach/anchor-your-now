import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anchor',
  description: 'Anchor Your Now',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

