import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-zinc-950 text-zinc-200 antialiased">
        <div className="max-w-3xl mx-auto px-4 py-12">
          {children}
        </div>
      </body>
    </html>
  )
}
