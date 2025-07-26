import { Metadata } from "next"
import { Heart, Mail, MapPin, MessageSquare, Phone } from "lucide-react"

import { Button } from "@gmana/react/button"
import { Card, CardContent, CardHeader, CardTitle } from "@gmana/react/card"
import { Container } from "@gmana/react/container"

import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Khmer Can Do It - Contact us for any questions or feedback",
}

export default function ContactPage() {
  return (
    <Container size="2xl" className="py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <MessageSquare className="text-primary h-8 w-8" />
          <h1 className="text-foreground text-4xl font-bold">Contact Us</h1>
        </div>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Have questions about KCDI? We&apos;d love to hear from you. Get in
          touch with our team.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Information */}
        <div className="space-y-6">
          {/* General Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Mail className="text-primary h-6 w-6" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-0.5 h-5 w-5" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    sun.sreng123@gmail.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We&apos;ll late to respond
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-0.5 h-5 w-5" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri, 9AM-6PM PST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5 h-5 w-5" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                What can we help you with?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-muted/50 flex items-center gap-3 rounded-lg p-3">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  <div>
                    <h4 className="font-medium">Technical Support</h4>
                    <p className="text-muted-foreground text-sm">
                      Issues with frame creation or downloads
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 flex items-center gap-3 rounded-lg p-3">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  <div>
                    <h4 className="font-medium">Feature Requests</h4>
                    <p className="text-muted-foreground text-sm">
                      Suggestions for new frames or features
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 flex items-center gap-3 rounded-lg p-3">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  <div>
                    <h4 className="font-medium">Cultural Inquiries</h4>
                    <p className="text-muted-foreground text-sm">
                      Questions about Khmer cultural elements
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 flex items-center gap-3 rounded-lg p-3">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  <div>
                    <h4 className="font-medium">Partnership</h4>
                    <p className="text-muted-foreground text-sm">
                      Collaboration opportunities
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Link */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Check our FAQ section for quick answers to common questions
                about using KCDI.
              </p>
              <Button variant="outline" className="w-full">
                View FAQ
              </Button>
            </CardContent>
          </Card>

          {/* Community */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Heart className="text-primary h-5 w-5" />
                Join Our Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect with fellow Khmer creators and stay updated on new
                features and cultural celebrations.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Response Time */}
      <Card className="mt-12">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-semibold">Our Response Time</h3>
            <p className="text-muted-foreground">
              We typically respond to all inquiries within 24 hours during
              business days. For urgent technical issues, please include
              &quot;URGENT&quot; in your subject line.
            </p>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}
