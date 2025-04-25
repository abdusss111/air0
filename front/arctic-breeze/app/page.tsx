import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Benefits from "@/components/benefits"
import ContactForm from "@/components/contact-form"
import Faq from "@/components/faq"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Services />
      <Introduction />
      <Testimonials />
      <Benefits />
      <ContactForm />
      <Faq />
    </main>
  )
}
