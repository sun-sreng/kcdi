import { ComponentType } from "react"
import { Facebook, Linkedin, Send, Share, Twitter } from "lucide-react"

import { IconProps } from "./share.types"

export const ShareIcon: ComponentType<IconProps> = ({ className, size }) => (
  <Share className={className} size={size} />
)
export const FacebookIcon: ComponentType<IconProps> = ({ className, size }) => (
  <Facebook className={className} size={size} />
)
export const LinkedinIcon: ComponentType<IconProps> = ({ className, size }) => (
  <Linkedin className={className} size={size} />
)
export const SendIcon: ComponentType<IconProps> = ({ className, size }) => (
  <Send className={className} size={size} />
)
export const TwitterIcon: ComponentType<IconProps> = ({ className, size }) => (
  <Twitter className={className} size={size} />
)
