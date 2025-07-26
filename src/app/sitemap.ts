import { MetadataRoute } from "next"

import { baseUrl } from "@/lib/base-url"

export const dynamic = "force-dynamic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ["", "/about", "/contact", "/privacy", "/terms"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    })
  )

  return [...routesMap]
}
