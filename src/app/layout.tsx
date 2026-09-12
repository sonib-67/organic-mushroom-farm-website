import type { Metadata, Viewport } from "next"
import "../index.css"

export const metadata: Metadata = {
  title: "Organic Mushroom Farm",
  description: "Commercial mushroom farming, training, equipment, and turnkey farm solutions.",
}

export const viewport: Viewport = {
  themeColor: "#faf5ff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-transparent">
      <body>{children}</body>
    </html>
  )
}
