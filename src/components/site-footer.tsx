import Link from "next/link"
import { Facebook, Github, Heart, Instagram, Twitter } from "lucide-react"

import { Container } from "@gmana/react/container"

import { KCDIIcon } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="border-border bg-muted/30 border-t">
      <Container size="2xl" className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <KCDIIcon className="text-primary h-6 w-auto" />
              <span className="text-lg font-bold">KCDI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Khmer Can Do It - Empowering Cambodian creativity through
              personalized profile frames. Celebrate your Khmer heritage with
              beautiful, customizable designs.
            </p>
            <div className="text-muted-foreground flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Made with Khmer Pride</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                className="bg-muted hover:bg-muted/80 rounded-md p-2 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-muted hover:bg-muted/80 rounded-md p-2 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-muted hover:bg-muted/80 rounded-md p-2 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com"
                className="bg-muted hover:bg-muted/80 rounded-md p-2 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-border mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} KCDI. All rights reserved.
          </p>
          <div className="text-muted-foreground flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
