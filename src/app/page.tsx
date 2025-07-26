import { Metadata } from "next"

import { ProfileFrameEditor } from "@/components/profile-frame-editor"

export const metadata: Metadata = {
  description: "Khmer can do it, from Cambodia, create your frame, your story",
  keywords: ["Khmer can do it", "Khmer", "Cambodia", "Frame", "Story", "KCDI"],
  openGraph: {
    type: "website",
  },
}
export default function Home() {
  return (
    <>
      <ProfileFrameEditor />
    </>
  )
}
