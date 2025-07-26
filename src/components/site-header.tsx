"use client"

import Link from "next/link"

import { Container } from "@gmana/react/container"
import { cn } from "@gmana/utils"

import { useScroll } from "@/hooks/use-scroll"
import { KCDIIcon } from "@/components/icons"

import { Navigation } from "./navigation"

export function SiteHeader() {
  const isScrolled = useScroll(20)

  return (
    <header
      className={cn(
        "border-border sticky top-0 z-10 h-14 border-b backdrop-blur-sm transition-shadow duration-300",
        isScrolled ? "bg-background/95 shadow-sm" : "bg-background/80"
      )}
    >
      <Container
        size="2xl"
        className="flex h-full items-center justify-between"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
        >
          <KCDIIcon className="text-primary h-6 w-auto" />
          <span className="sr-only">KCDI</span>
        </Link>
        <Navigation />
      </Container>
    </header>
  )
}
