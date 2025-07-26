import { Metadata } from "next"
import Link from "next/link"
import { Download, Heart, Palette, Share2, Users } from "lucide-react"

import { Button } from "@gmana/react/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@gmana/react/card"
import { Container } from "@gmana/react/container"

import { KCDIIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "About",
  description:
    "Khmer Can Do It - Empowering Cambodian creativity through personalized profile frames",
}

export default function AboutPage() {
  return (
    <Container size="2xl" className="">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <h1 className="text-foreground text-4xl font-bold">About</h1>
          <KCDIIcon className="text-primary h-7 w-auto" />
        </div>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Khmer Can Do It - Empowering Cambodian creativity through personalized
          profile frames
        </p>
      </div>

      {/* Mission Section */}
      <Card className="mb-12">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Our Mission</CardTitle>
          <CardDescription className="text-lg">
            Celebrating Khmer culture and creativity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center leading-relaxed">
            KCDI is dedicated to providing Cambodians and Khmer communities
            worldwide with beautiful, customizable profile frames that celebrate
            our rich cultural heritage. Whether it&apos;s for special occasions,
            cultural celebrations, or everyday expression, our platform makes it
            easy to create stunning profile pictures that reflect your identity
            and pride.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Palette className="text-primary h-6 w-6" />
              <CardTitle>Beautiful Frames</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Choose from a curated collection of frames celebrating Cambodian
              culture, holidays, and special occasions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Download className="text-primary h-6 w-6" />
              <CardTitle>Easy Download</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Download your customized profile picture instantly in high
              quality, ready to use on any social media platform.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Share2 className="text-primary h-6 w-6" />
              <CardTitle>Share Proudly</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Share your Khmer pride with friends and family across social media
              with our integrated sharing features.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cultural Celebration */}
      <Card className="from-primary/5 to-accent/5 mb-12 bg-gradient-to-r">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Celebrating Khmer Culture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our frames feature designs inspired by traditional Khmer art,
                important cultural celebrations, and modern Cambodian identity.
                From Pchum Ben to Khmer New Year, from traditional patterns to
                contemporary designs, we honor the diversity and beauty of
                Cambodian culture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re celebrating a birthday, graduation, or
                simply want to show your Khmer pride, our frames help you
                express your identity with style and dignity.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2">
                <Heart className="h-5 w-5" />
                <span className="font-medium">Made with Khmer Pride</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community Section */}
      <Card className="mb-12">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Join Our Community</CardTitle>
          <CardDescription>
            Connect with fellow Khmer creators and share your designs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Be part of a growing community of Khmer creators, artists, and
              cultural enthusiasts. Share your creations, get inspired by
              others, and help us build a platform that truly represents our
              community.
            </p>
            <div className="text-muted-foreground flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Growing community</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Made with love</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-foreground mb-4 text-2xl font-bold">
              Ready to Create Your Profile Frame?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start designing your personalized Khmer profile picture today
            </p>
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Creating
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}
