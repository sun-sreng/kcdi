"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "@gmana/react/button"
import { Icons } from "@gmana/react/icons"
import { Skeleton } from "@gmana/react/skeleton"

export function GitHubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link
        href="https://github.com/sun-sreng/kcdi"
        target="_blank"
        rel="noreferrer"
      >
        <Icons.gitHub />
        <StarsCount />
      </Link>
    </Button>
  )
}

function StarsCount() {
  const [stars, setStars] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/sun-sreng/kcdi"
        )
        const data = await response.json()
        setStars(data.stargazers_count)
      } catch (error) {
        console.error("Failed to fetch stars:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStars()
  }, [])

  if (loading) {
    return <Skeleton className="h-4 w-4" />
  }

  if (stars === null) {
    return null
  }

  return (
    <span className="text-muted-foreground text-xs tabular-nums">
      {stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars.toLocaleString()}
    </span>
  )
}
