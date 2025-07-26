"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Download, ImageIcon, Upload } from "lucide-react"

// shadcn/ui components
import { Button } from "@gmana/react/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@gmana/react/card"
import { Container } from "@gmana/react/container"
import { Slider } from "@gmana/react/slider"
import { cn } from "@gmana/utils"

import { createGradient, Frame, frames } from "@/lib/frames"
import { useCanvasPanZoom } from "@/hooks/use-canvas-pan-zoom"

// #region Sub-components

const ImageUploader = ({
  onImageUpload,
}: {
  onImageUpload: (file: File) => void
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files?.[0]) onImageUpload(e.dataTransfer.files[0])
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) onImageUpload(e.target.files[0])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Image</CardTitle>
        <CardDescription>
          Drag and drop your photo or click to browse.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors",
            isDragging
              ? "border-primary bg-accent"
              : "border-border hover:border-primary/50"
          )}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="text-muted-foreground h-10 w-10" />
          <p className="text-muted-foreground mt-2 text-sm">
            Drop file or click here
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </CardContent>
    </Card>
  )
}

const FramePreview = ({ frame }: { frame: Frame }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const size = 80
    const outerRadius = size / 2
    const innerRadius = outerRadius * 0.8 // 20% border thickness

    canvas.width = size
    canvas.height = size
    ctx.clearRect(0, 0, size, size)

    // Placeholder background
    ctx.beginPath()
    ctx.arc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2)
    ctx.fillStyle = "#e5e7eb"
    ctx.fill()

    // Frame
    if (frame.imageSrc) {
      const img = new Image()
      img.onload = () => ctx.drawImage(img, 0, 0, size, size)
      img.src = frame.imageSrc
    } else if (frame.gradient) {
      const gradient = createGradient(ctx, frame, size)
      if (!gradient) return
      ctx.beginPath()
      ctx.arc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2) // Outer circle
      ctx.arc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2, true) // Inner hole
      ctx.fillStyle = gradient
      ctx.fill()
    }
  }, [frame])

  return <canvas ref={canvasRef} className="h-14 w-14 rounded-full" />
}

const FrameSelector = ({
  selectedFrameId,
  onSelectFrame,
}: {
  selectedFrameId: string
  onSelectFrame: (frame: Frame) => void
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Frame</CardTitle>
        <CardDescription>
          Select a frame to apply to your profile picture.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
          {frames.map((frame) => (
            <button
              key={frame.id}
              onClick={() => onSelectFrame(frame)}
              className={cn(
                "focus-visible:ring-ring flex flex-col items-center gap-2 rounded-lg border p-2 text-center transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                selectedFrameId === frame.id
                  ? "border-primary bg-primary/10 ring-primary/20 ring-2" // Selected state
                  : "border-border hover:bg-accent hover:border-primary/50 bg-transparent" // Default state
              )}
            >
              <FramePreview frame={frame} />
              <span className="w-full truncate text-xs font-medium">
                {frame.name}
              </span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const CanvasEditor = ({
  userImage,
  scale,
  setScale,
  canvasProps,
  onDownload,
}: {
  userImage: HTMLImageElement | null
  offset: { x: number; y: number }
  scale: number
  setScale: (s: number) => void
  canvasProps: React.HTMLAttributes<HTMLCanvasElement> & {
    ref?: React.RefObject<HTMLCanvasElement>
  }
  onDownload: () => void
}) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Preview & Adjust</CardTitle>
        <CardDescription>
          Drag to position and scroll or use the slider to zoom.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-grow items-center justify-center">
        <div className="relative aspect-square w-full max-w-[350px]">
          <canvas
            ref={canvasProps.ref}
            className={cn(
              "h-full w-full rounded-full shadow-inner",
              userImage ? "cursor-move" : "bg-muted"
            )}
            {...canvasProps}
          />
          {!userImage && (
            <div className="text-muted-foreground pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <ImageIcon size={48} className="mb-3 opacity-50" />
            </div>
          )}
        </div>
      </CardContent>
      {userImage && (
        <CardFooter className="flex-col items-stretch gap-4 pt-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Zoom</span>
              <span className="font-medium">{Math.round(scale * 100)}%</span>
            </div>
            <Slider
              value={[scale]}
              onValueChange={(value) => setScale(value[0])}
              min={0.2}
              max={3}
              step={0.01}
            />
          </div>
          <Button onClick={onDownload} size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Image
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

// #endregion

export function ProfileFrameEditor() {
  const [userImage, setUserImage] = useState<HTMLImageElement | null>(null)
  const [frameImage, setFrameImage] = useState<HTMLImageElement | null>(null)
  const [selectedFrame, setSelectedFrame] = useState<Frame>(frames[0])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const {
    offset,
    scale,
    setScale,
    reset: resetPanZoom,
    getCanvasProps,
  } = useCanvasPanZoom()

  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        setUserImage(img)
        resetPanZoom()
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  const handleFrameSelect = (frame: Frame) => {
    setSelectedFrame(frame)
  }

  useEffect(() => {
    if (selectedFrame.imageSrc) {
      const img = new Image()
      img.crossOrigin = "anonymous" // Handle potential CORS issues with frame images
      img.onload = () => setFrameImage(img)
      img.src = selectedFrame.imageSrc
    } else {
      setFrameImage(null)
    }
  }, [selectedFrame])

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!ctx || !canvas) return

    const size = 500
    canvas.width = size
    canvas.height = size
    ctx.clearRect(0, 0, size, size)

    // --- Master Clip Start ---
    // This will clip everything that's drawn, ensuring the canvas corners are transparent.
    ctx.save()
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    ctx.clip()

    // Define radii for the inner components
    const outerRadius = size / 2
    const innerRadius = outerRadius * 0.9

    // --- Step 1: Draw the user's image inside the inner circle ---
    // (This logic remains the same)
    if (userImage) {
      ctx.save()
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, innerRadius, 0, Math.PI * 2)
      ctx.clip()

      const imgAspect = userImage.width / userImage.height
      let drawWidth = size * scale
      let drawHeight = size * scale

      if (imgAspect > 1) {
        drawHeight = size * scale
        drawWidth = drawHeight * imgAspect
      } else {
        drawWidth = size * scale
        drawHeight = drawWidth / imgAspect
      }

      const drawX = (size - drawWidth) / 2 + offset.x
      const drawY = (size - drawHeight) / 2 + offset.y

      ctx.drawImage(userImage, drawX, drawY, drawWidth, drawHeight)
      ctx.restore()
    }

    // --- Step 2: Draw the frame ---
    // This will also be clipped by the master clip, cutting off its corners if it's a square image.
    if (frameImage) {
      ctx.drawImage(frameImage, 0, 0, size, size)
    } else if (selectedFrame.gradient) {
      const gradient = createGradient(ctx, selectedFrame, size)
      if (gradient) {
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(size / 2, size / 2, outerRadius, 0, Math.PI * 2)
        ctx.arc(size / 2, size / 2, innerRadius, 0, Math.PI * 2, true)
        ctx.fill()
      }
    }

    // --- Master Clip End ---
    // This removes the master circular clip, restoring the context.
    ctx.restore()
  }, [userImage, frameImage, selectedFrame, offset, scale])

  useEffect(() => {
    drawCanvas()
  }, [drawCanvas])

  const downloadImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement("a")
    link.download = `profile-${selectedFrame.id}.png`
    link.href = canvas.toDataURL("image/png", 1.0)
    link.click()
  }

  return (
    <section>
      <Container size="2xl" className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <ImageUploader onImageUpload={handleImageUpload} />
          <FrameSelector
            selectedFrameId={selectedFrame.id}
            onSelectFrame={handleFrameSelect}
          />
        </div>
        <div className="sticky top-8 h-[calc(100vh-4rem)]">
          <CanvasEditor
            userImage={userImage}
            offset={offset}
            scale={scale}
            setScale={setScale}
            canvasProps={{
              ...getCanvasProps(),
              ref: canvasRef as React.RefObject<HTMLCanvasElement>,
            }}
            onDownload={downloadImage}
          />
        </div>
      </Container>
      <div className="text-muted-foreground mt-20 text-center lg:hidden">
        <h2 className="text-xl font-semibold">Desktop Recommended</h2>
        <p>For the best experience, please use a larger screen.</p>
      </div>
    </section>
  )
}
