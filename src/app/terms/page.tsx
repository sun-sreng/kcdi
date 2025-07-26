import { Metadata } from "next"
import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  FileText,
  Shield,
  Users,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@gmana/react/card"
import { Container } from "@gmana/react/container"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Khmer Can Do It - Terms of Service",
}

export default function TermsPage() {
  return (
    <Container size="2xl" className="py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <FileText className="text-primary h-8 w-8" />
          <h1 className="text-foreground text-4xl font-bold">
            Terms of Service
          </h1>
        </div>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Please read these terms carefully before using our profile frame
          creation service.
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Acceptance of Terms */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-primary h-6 w-6" />
            <CardTitle className="text-2xl">Acceptance of Terms</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            By accessing and using KCDI (Khmer Can Do It), you accept and agree
            to be bound by the terms and provision of this agreement. If you do
            not agree to abide by the above, please do not use this service.
          </p>
        </CardContent>
      </Card>

      {/* Service Description */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Service Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            KCDI provides a web-based platform for creating personalized profile
            frames that celebrate Khmer culture and heritage. Our service allows
            users to:
          </p>
          <div className="text-muted-foreground space-y-2">
            <p>• Upload and customize profile pictures with cultural frames</p>
            <p>• Download high-quality profile images</p>
            <p>• Access a collection of Khmer-inspired frame designs</p>
            <p>• Share creations on social media platforms</p>
          </div>
        </CardContent>
      </Card>

      {/* User Responsibilities */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Users className="text-primary h-6 w-6" />
            <CardTitle className="text-2xl">User Responsibilities</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Appropriate Use</h3>
            <p className="text-muted-foreground">
              You agree to use our service only for lawful purposes and in a way
              that does not infringe the rights of, restrict, or inhibit anyone
              else&apos;s use and enjoyment of the service.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Content Ownership</h3>
            <p className="text-muted-foreground">
              You retain full ownership of any images you upload. You must have
              the right to use any images you upload and must not violate any
              third-party rights.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Respectful Behavior</h3>
            <p className="text-muted-foreground">
              We celebrate Khmer culture and expect all users to respect
              cultural traditions and values. Any content that is offensive,
              discriminatory, or disrespectful to Khmer culture will not be
              tolerated.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Intellectual Property */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="text-primary h-6 w-6" />
            <CardTitle className="text-2xl">Intellectual Property</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Your Content</h3>
            <p className="text-muted-foreground">
              You retain all rights to your uploaded images. We do not claim
              ownership of your personal photos and do not store them on our
              servers.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Our Content</h3>
            <p className="text-muted-foreground">
              The KCDI platform, including frame designs, software, and website
              content, is owned by us and protected by copyright and other
              intellectual property laws.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Cultural Designs</h3>
            <p className="text-muted-foreground">
              Our frame designs are inspired by Khmer cultural elements and are
              created to celebrate and honor Cambodian heritage. These designs
              are our intellectual property.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy and Data */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">
            Privacy and Data Protection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Your privacy is important to us. Our data collection and usage
            practices are detailed in our Privacy Policy, which is incorporated
            into these terms by reference.
          </p>
          <div className="text-muted-foreground space-y-2 text-sm">
            <p>• Images are processed locally in your browser</p>
            <p>• No personal photos are stored on our servers</p>
            <p>• Usage data is anonymized for service improvement</p>
            <p>
              • We do not share your personal information with third parties
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Prohibited Uses */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-primary h-6 w-6" />
            <CardTitle className="text-2xl">Prohibited Uses</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground mb-4">
            You may not use our service to:
          </p>
          <div className="text-muted-foreground space-y-2 text-sm">
            <p>
              • Upload content that violates any applicable laws or regulations
            </p>
            <p>• Infringe on intellectual property rights of others</p>
            <p>• Upload malicious software or attempt to harm our systems</p>
            <p>• Use the service for commercial purposes without permission</p>
            <p>
              • Create content that is offensive or disrespectful to Khmer
              culture
            </p>
            <p>• Attempt to reverse engineer or copy our technology</p>
          </div>
        </CardContent>
      </Card>

      {/* Service Availability */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Service Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We strive to provide reliable service but cannot guarantee
            uninterrupted availability. We may temporarily suspend the service
            for maintenance, updates, or technical issues. We are not liable for
            any damages resulting from service interruptions.
          </p>
        </CardContent>
      </Card>

      {/* Limitation of Liability */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            KCDI is provided &quot;as is&quot; without warranties of any kind.
            We are not liable for any damages arising from the use of our
            service, including but not limited to data loss, system failures, or
            any indirect, incidental, or consequential damages.
          </p>
        </CardContent>
      </Card>

      {/* Termination */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Termination</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We may terminate or suspend access to our service immediately,
            without prior notice, for any reason, including breach of these
            terms. Upon termination, your right to use the service will cease
            immediately.
          </p>
        </CardContent>
      </Card>

      {/* Changes to Terms */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Calendar className="text-primary h-6 w-6" />
            <CardTitle className="text-2xl">Changes to Terms</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. We will
            notify users of significant changes by updating the &quot;Last
            updated&quot; date. Continued use of the service after changes
            constitutes acceptance of the new terms.
          </p>
        </CardContent>
      </Card>

      {/* Governing Law */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Governing Law</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            These terms are governed by and construed in accordance with the
            laws of the Kingdom of Cambodia. Any disputes arising from these
            terms or the use of our service will be resolved in the courts of
            the Kingdom of Cambodia.
          </p>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these terms of service, please
            contact us:
          </p>
          <div className="text-muted-foreground space-y-2">
            <p>• Email: sun.sreng123@gmail.com</p>
            <p>• Website: https://kcdi.vercel.app</p>
            <p>• Address: Phnom Penh, Cambodia</p>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}
