import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Specter Software',
  description: 'Plataforma de software com chatbots inteligentes e analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
