import { ShareConfig } from "./share.types"
import {
  FacebookIcon,
  LinkedinIcon,
  SendIcon,
  ShareIcon,
  TwitterIcon,
} from "./shared-icon"

export const SHARE_CONFIGS: Record<string, ShareConfig> = {
  facebook: {
    platform: "facebook",
    icon: FacebookIcon,
    color: "bg-[#1877f2]",
    label: "Facebook",
  },
  twitter: {
    platform: "twitter",
    icon: TwitterIcon,
    color: "bg-[#1da1f2]",
    label: "Twitter",
  },
  linkedin: {
    platform: "linkedin",
    icon: LinkedinIcon,
    color: "bg-[#0a66c2]",
    label: "LinkedIn",
  },
  telegram: {
    platform: "telegram",
    icon: SendIcon,
    color: "bg-[#0088cc]",
    label: "Telegram",
  },
  native: {
    platform: "native",
    icon: ShareIcon,
    color: "bg-gray-800",
    label: "Share",
  },
}
