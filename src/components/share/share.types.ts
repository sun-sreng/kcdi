export interface ShareConfig {
  platform: SocialPlatform
  icon: React.ComponentType<IconProps>
  color: string
  label: string
}

export type SocialPlatform =
  | "facebook"
  | "twitter"
  | "linkedin"
  | "telegram"
  | "native"

export interface IconProps {
  className?: string
  size?: number
}

export interface ShareProps {
  url?: string
  title?: string
  description?: string
  className?: string
  onShare?: (platform: SocialPlatform) => void
  platforms?: SocialPlatform[]
}

export interface ShareButtonProps {
  config: ShareConfig
  onClick: () => void
  className?: string
}
