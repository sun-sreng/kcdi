import { useCallback } from "react"

import { SocialPlatform } from "./share.types"
import { buildShareUrl, openShareWindow } from "./share.utils"

interface UseShareProps {
  url: string
  title: string
  description: string
  onShare?: (platform: SocialPlatform) => void
  onError?: (platform: SocialPlatform, error: unknown) => void
}

export const useShare = ({
  url,
  title,
  description,
  onShare,
  onError,
}: UseShareProps) => {
  const handleShare = useCallback(
    async (platform: SocialPlatform) => {
      try {
        const canUseNativeShare =
          typeof navigator !== "undefined" && navigator.share

        if (platform === "native" && canUseNativeShare) {
          await navigator.share({
            title,
            text: description,
            url,
          })
        } else {
          const shareUrl = buildShareUrl(platform, { url, title, description })
          if (!shareUrl) {
            throw new Error(
              `Failed to build share URL for platform: ${platform}`
            )
          }

          openShareWindow(shareUrl)
        }

        onShare?.(platform)
      } catch (error) {
        // Handle user cancellation gracefully (don't log as error)
        if (error instanceof Error && error.name === "AbortError") {
          return
        }
        onError?.(platform, error)
      }
    },
    [url, title, description, onShare, onError]
  )

  return {
    handleShare,
  }
}
