import { Metadata } from "next"
import { Calendar, Eye, Lock, Shield, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@gmana/react/card"
import { Container } from "@gmana/react/container"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Khmer Can Do It - Privacy Policy",
}

export default function PrivacyPage() {
  return (
    <Container size="2xl" className="py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Shield className="text-primary h-8 w-8" />
          <h1 className="text-foreground text-4xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your information.
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

      {/* Information We Collect */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Eye className="text-primary h-6 w-6" />
            <CardTitle className="text-2xl">Information We Collect</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Profile Images</h3>
            <p className="text-muted-foreground">
              When you upload photos to create profile frames, these images are
              processed on your device and are not stored on our servers. Your
              images remain private and are only used for the frame creation
              process.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Usage Data</h3>
            <p className="text-muted-foreground">
              We collect anonymous usage statistics to improve our service,
              including which frames are most popular, feature usage patterns,
              and technical performance metrics.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Device Information</h3>
            <p className="text-muted-foreground">
              We may collect basic device information such as browser type,
              operating system, and screen resolution to ensure optimal
              performance and compatibility.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* How We Use Information */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Users className="text-primary h-6 w-6" />
            <CardTitle className="text-2xl">
              How We Use Your Information
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Service Provision</h3>
            <p className="text-muted-foreground">
              To provide you with profile frame creation services, process your
              images, and deliver your customized frames.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Service Improvement</h3>
            <p className="text-muted-foreground">
              To analyze usage patterns and improve our platform, add new
              features, and enhance user experience.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Technical Support</h3>
            <p className="text-muted-foreground">
              To troubleshoot technical issues, ensure platform stability, and
              provide customer support.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Cultural Celebration</h3>
            <p className="text-muted-foreground">
              To understand which Khmer cultural elements and designs are most
              meaningful to our community.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Data Protection */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Lock className="text-primary h-6 w-6" />
            <CardTitle className="text-2xl">Data Protection</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Image Privacy</h3>
            <p className="text-muted-foreground">
              Your uploaded images are processed locally in your browser and are
              never transmitted to or stored on our servers. We cannot access,
              view, or store your personal photos.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Secure Processing</h3>
            <p className="text-muted-foreground">
              All image processing happens on your device using secure,
              client-side technologies. No image data leaves your browser during
              the frame creation process.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Data Retention</h3>
            <p className="text-muted-foreground">
              Since we don&apos;t store your images, there&apos;s no image data
              to retain. Usage statistics are anonymized and kept for service
              improvement purposes only.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Third-Party Services */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Third-Party Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            We may use third-party services for analytics and performance
            monitoring. These services collect anonymous usage data and do not
            have access to your personal images.
          </p>
          <div className="text-muted-foreground space-y-2 text-sm">
            <p>• Analytics services to understand platform usage</p>
            <p>• Performance monitoring to ensure service reliability</p>
            <p>• Content delivery networks for fast loading</p>
          </div>
        </CardContent>
      </Card>

      {/* Your Rights */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Access and Control</h3>
            <p className="text-muted-foreground">
              Since we don&apos;t store your personal images, there&apos;s no
              personal data to access or delete. You have full control over your
              images at all times.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Opt-Out</h3>
            <p className="text-muted-foreground">
              You can disable analytics tracking in your browser settings if you
              prefer not to contribute to usage statistics.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about this privacy policy or our data
              practices, please contact us.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Updates to Policy */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Calendar className="text-primary h-6 w-6" />
            <CardTitle className="text-2xl">Updates to This Policy</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We may update this privacy policy from time to time to reflect
            changes in our practices or for legal reasons. We will notify users
            of any material changes by updating the &quot;Last updated&quot;
            date at the top of this policy.
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
            If you have any questions about this privacy policy or our data
            practices, please contact us:
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
