import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/layout/card"
import { Button } from "@/components/ui/display/button"
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Instagram } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <Card className="bg-amber-50">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Office Address</h3>
              <p className="text-muted-foreground">
                123 Design Avenue
                <br />
                Los Angeles, CA 90210
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM PST</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground">hello@cyberiaarchitecture.com</p>
              <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Business Hours</h3>
              <div className="text-muted-foreground space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="bg-amber-50">
        <CardHeader>
          <CardTitle className="text-xl">Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-pretty">
            Stay updated with our latest projects and architectural insights.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Response */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="mb-6 text-primary-foreground/90 text-pretty">
            For urgent inquiries or to schedule a consultation, give us a call directly. We're here to help bring your
            architectural vision to life.
          </p>
          <Button size="lg" variant="secondary" asChild className="w-full">
            <a href="tel:+15551234567">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
