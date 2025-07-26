import { SocialPlatform } from "./share.types"

interface ShareParams {
  url: string
  title: string
  description: string
}

export const buildShareUrl = (
  platform: SocialPlatform,
  { url, title, description }: ShareParams
): string => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareUrls: Record<SocialPlatform, string> = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    telegram: `https://telegram.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    native: "",
  }

  return shareUrls[platform]
}

export const openShareWindow = (url: string): void => {
  window.open(
    url,
    "share-dialog",
    "width=600,height=400,toolbar=0,status=0,location=0,menubar=0"
  )
}
