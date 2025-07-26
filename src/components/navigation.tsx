import { ThemeToggle } from "@gmana/react/theme-toggle"
import { cn } from "@gmana/utils"

import { GitHubLink } from "./github-link"
import { NavLink } from "./nav-link"

interface NavigationProps {
  className?: string
}

const navigationItems = [{ href: "/about", label: "About" }] as const

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center gap-3", className)} role="navigation">
      <GitHubLink />
      <ThemeToggle />
      {navigationItems.map(({ href, label }) => (
        <NavLink key={href} href={href}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
