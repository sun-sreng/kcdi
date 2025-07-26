import { ThemeToggle } from "@gmana/react/theme-toggle"
import { cn } from "@gmana/utils"

import { NavLink } from "./nav-link"

interface NavigationProps {
  className?: string
}

const navigationItems = [{ href: "/about", label: "About" }] as const

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center gap-6", className)} role="navigation">
      <ThemeToggle />
      {navigationItems.map(({ href, label }) => (
        <NavLink key={href} href={href}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
