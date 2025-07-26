import { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ThemeProvider } from "@gmana/react/theme-provider"
import { cn } from "@gmana/utils"

import { baseUrl } from "@/lib/base-url"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import "@/styles/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "KCDI",
    template: `%s | KCDI`,
  },
  robots: {
    follow: true,
    index: true,
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(geistSans.variable, geistMono.variable)}
    >
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <SiteHeader />
          <main className="min-h-screen py-14">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!}
        />
      </body>
    </html>
  )
}
