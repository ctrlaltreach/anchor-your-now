import type { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Anchor</h1>
      <p className="mt-4 text-lg">Welcome to your Next.js app</p>
    </main>
  )
}

