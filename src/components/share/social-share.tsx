"use client"

import { cn } from "@gmana/utils"

import { ShareButton } from "./share-button"
import { SHARE_CONFIGS } from "./share.config"
import type { ShareProps } from "./share.types"
import { useShare } from "./use-share"

export const SocialShare: React.FC<ShareProps> = ({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "",
  description = "",
  className = "",
  onShare,
  platforms = ["facebook", "twitter", "linkedin", "telegram", "native"],
}) => {
  const { handleShare } = useShare({
    url,
    title,
    description,
    onShare,
  })

  return (
    <div className={cn("flex w-full flex-wrap gap-2", className)}>
      {platforms.map((platform) => (
        <ShareButton
          key={platform}
          config={SHARE_CONFIGS[platform]}
          onClick={() => handleShare(platform)}
        />
      ))}
    </div>
  )
}
