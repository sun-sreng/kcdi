"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@gmana/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "group relative text-sm font-medium transition-colors",
        "focus-visible:ring-ring focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "bg-primary absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ease-in-out",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  )
}
