export interface Frame {
  id: string
  name: string
  imageSrc?: string
  gradient?: {
    type: "linear" | "radial"
    stops: { offset: number; color: string }[]
  }
}

export const frames: Frame[] = [
  {
    id: "cambodia-defense",
    name: "Defense",
    imageSrc: "/frames/cambodia-defense-frame.png",
  },
  {
    id: "pride",
    name: "Pride",
    gradient: {
      type: "linear",
      stops: [
        { offset: 0, color: "#e40303" },
        { offset: 0.16, color: "#ff8c00" },
        { offset: 0.33, color: "#ffed00" },
        { offset: 0.5, color: "#008018" },
        { offset: 0.66, color: "#004cff" },
        { offset: 1, color: "#732982" },
      ],
    },
  },
  {
    id: "birthday",
    name: "Birthday",
    gradient: {
      type: "radial",
      stops: [
        { offset: 0, color: "#ff6b6b" },
        { offset: 0.33, color: "#4ecdc4" },
        { offset: 0.66, color: "#45b7d1" },
        { offset: 1, color: "#f9ca24" },
      ],
    },
  },
  {
    id: "christmas",
    name: "Christmas",
    gradient: {
      type: "linear",
      stops: [
        { offset: 0, color: "#c41e3a" },
        { offset: 0.5, color: "#2d5a3d" },
        { offset: 1, color: "#c41e3a" },
      ],
    },
  },
]

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  frame: Frame,
  size: number
) => {
  if (!frame.gradient) return null

  let gradient: CanvasGradient
  if (frame.gradient.type === "radial") {
    const r = size / 2
    gradient = ctx.createRadialGradient(r, r, r * 0.9, r, r, r)
  } else {
    gradient = ctx.createLinearGradient(0, 0, size, size)
  }

  frame.gradient.stops.forEach((stop) => {
    gradient.addColorStop(stop.offset, stop.color)
  })

  return gradient
}
