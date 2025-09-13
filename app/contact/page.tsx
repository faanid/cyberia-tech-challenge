import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Contact Us - Cyberia Architecture",
  description:
    "Get in touch with our architecture team to discuss your project. We're here to help bring your vision to life.",
}

export default function ContactPage() {
  return (
    <main>
      <section className="py-24 bg-ring">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to start your architectural journey? We'd love to hear about your project and discuss how we can
              bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 bg-white mx-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
