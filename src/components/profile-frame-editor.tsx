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
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Upload Image</CardTitle>
        <CardDescription>
          Drag and drop your photo or tap to browse.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors sm:p-12",
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
          <Upload className="text-muted-foreground h-8 w-8 sm:h-10 sm:w-10" />
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Drop file or tap here
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
    const innerRadius = outerRadius * 0.8

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
      ctx.arc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2)
      ctx.arc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2, true)
      ctx.fillStyle = gradient
      ctx.fill()
    }
  }, [frame])

  return (
    <canvas
      ref={canvasRef}
      className="h-12 w-12 rounded-full sm:h-14 sm:w-14"
    />
  )
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
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Choose Frame</CardTitle>
        <CardDescription>
          Select a frame to apply to your profile picture.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
          {frames.map((frame) => (
            <button
              key={frame.id}
              onClick={() => onSelectFrame(frame)}
              className={cn(
                "focus-visible:ring-ring flex touch-manipulation flex-col items-center gap-2 rounded-lg border p-2 text-center transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                selectedFrameId === frame.id
                  ? "border-primary bg-primary/10 ring-primary/20 ring-2"
                  : "border-border hover:bg-accent hover:border-primary/50 active:bg-accent/80 bg-transparent"
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
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Preview & Adjust</CardTitle>
        <CardDescription>
          Drag to position and pinch or use the slider to zoom.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-grow items-center justify-center p-4">
        <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[350px]">
          <canvas
            ref={canvasProps.ref}
            className={cn(
              "h-full w-full touch-none rounded-full shadow-inner",
              userImage ? "cursor-move" : "bg-muted"
            )}
            {...canvasProps}
          />
          {!userImage && (
            <div className="text-muted-foreground pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <ImageIcon
                size={40}
                className="mb-2 opacity-50 sm:mb-3 sm:size-48"
              />
            </div>
          )}
        </div>
      </CardContent>
      {userImage && (
        <CardFooter className="flex-col items-stretch gap-4 pt-4">
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
              className="touch-manipulation"
            />
          </div>
          <Button onClick={onDownload} size="lg" className="touch-manipulation">
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
      img.crossOrigin = "anonymous"
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
    ctx.save()
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    ctx.clip()

    // Define radii for the inner components
    const outerRadius = size / 2
    const innerRadius = outerRadius * 0.9

    // --- Step 1: Draw the user's image inside the inner circle ---
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
    ctx.restore()
  }, [userImage, frameImage, selectedFrame, offset, scale])

  useEffect(() => {
    drawCanvas()
  }, [drawCanvas])

  const downloadImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    // For mobile devices, we need to handle the download differently
    if (
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // On mobile, open in new tab for better compatibility
      const dataUrl = canvas.toDataURL("image/png", 1.0)
      const newWindow = window.open()
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head><title>Download Profile Picture</title></head>
            <body style="margin:0;padding:20px;text-align:center;background:#f5f5f5;">
              <h2>Your Profile Picture</h2>
              <img src="${dataUrl}" style="max-width:100%;border-radius:50%;box-shadow:0 4px 12px rgba(0,0,0,0.15);" />
              <br><br>
              <p>Long press the image above to save it to your device.</p>
              <button onclick="window.close()" style="padding:10px 20px;background:#007bff;color:white;border:none;border-radius:5px;cursor:pointer;">Close</button>
            </body>
          </html>
        `)
      }
    } else {
      // Desktop download
      const link = document.createElement("a")
      link.download = `profile-${selectedFrame.id}.png`
      link.href = canvas.toDataURL("image/png", 1.0)
      link.click()
    }
  }

  return (
    <section>
      <Container size="2xl" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <ImageUploader onImageUpload={handleImageUpload} />
          <FrameSelector
            selectedFrameId={selectedFrame.id}
            onSelectFrame={handleFrameSelect}
          />
        </div>
        <div className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)]">
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
    </section>
  )
}
