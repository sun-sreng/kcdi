import { useCallback, useRef, useState } from "react"

// Helper to get unified coordinates for mouse and touch events
const getClientCoords = (e: React.MouseEvent | React.TouchEvent) => {
  if ("touches" in e) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  return { x: e.clientX, y: e.clientY }
}

export const useCanvasPanZoom = () => {
  // No longer needs canvasRef
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)

  const isDraggingRef = useRef(false)
  // This ref will store the starting state of a drag operation
  const startDragPoint = useRef({
    mouseX: 0,
    mouseY: 0,
    offsetX: 0,
    offsetY: 0,
  })
  const animationFrameId = useRef<number>(0)

  const reset = useCallback(() => {
    setOffset({ x: 0, y: 0 })
    setScale(1)
  }, [])

  const onInteractionStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      isDraggingRef.current = true
      const coords = getClientCoords(e)
      // Store the starting mouse position and the current offset
      startDragPoint.current = {
        mouseX: coords.x,
        mouseY: coords.y,
        offsetX: offset.x,
        offsetY: offset.y,
      }
    },
    [offset]
  ) // Depends on the current offset to store it correctly

  const onInteractionMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDraggingRef.current) return

      e.preventDefault() // Prevent text selection during drag
      cancelAnimationFrame(animationFrameId.current!)

      animationFrameId.current = requestAnimationFrame(() => {
        const coords = getClientCoords(e)
        // Calculate the total distance the mouse has moved from the start
        const deltaX = coords.x - startDragPoint.current.mouseX
        const deltaY = coords.y - startDragPoint.current.mouseY

        // The new offset is the original offset plus the total mouse movement
        setOffset({
          x: startDragPoint.current.offsetX + deltaX,
          y: startDragPoint.current.offsetY + deltaY,
        })
      })
    },
    []
  ) // No dependencies needed as it only reads from refs

  const onInteractionEnd = useCallback(() => {
    isDraggingRef.current = false
    cancelAnimationFrame(animationFrameId.current!)
  }, [])

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY * -0.001
    setScale((s) => Math.min(Math.max(0.2, s + delta), 3))
  }, [])

  return {
    offset,
    scale,
    setScale,
    reset,
    getCanvasProps: () => ({
      onMouseDown: onInteractionStart,
      onTouchStart: onInteractionStart,
      onMouseMove: onInteractionMove,
      onTouchMove: onInteractionMove,
      onMouseUp: onInteractionEnd,
      onMouseLeave: onInteractionEnd,
      onTouchEnd: onInteractionEnd,
      onWheel: onWheel,
    }),
  }
}
