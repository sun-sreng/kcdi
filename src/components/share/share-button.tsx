import React from "react"

import { Button } from "@gmana/react/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@gmana/react/tooltip"
import { cn } from "@gmana/utils"

import type { ShareButtonProps } from "./share.types"

export const ShareButton: React.FC<ShareButtonProps> = ({
  config,
  onClick,
  className = "",
}) => {
  const { icon: Icon, label, color } = config

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            onClick={onClick}
            type="button"
            className={cn(className, color)}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="border-gmana bg-gmana! text-gmana! rounded-none border">
          <p>Shared To {label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
