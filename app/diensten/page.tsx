import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Wrench, Cog, Target, Droplet, Hammer, ShoppingCart, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DienstenPage() {
  const services = [
    {
      icon: Droplet,
      title: "Powder Coating",
      description: "High-quality powder coating in any desired color for a durable and stylish finish on your wheels.",
      features: [
        "Choice of hundreds of RAL colors",
        "Matte, glossy or metallic finish",
        "Durable protection against corrosion",
        "Environmentally friendly process",
        "Fast delivery time",
      ],
    },
    {
      icon: Cog,
      title: "CNC Machining",
      description:
        "Precision CNC operations for perfect wheels. We machine your wheels with the latest CNC technology for a factory-like finish.",
      features: [
        "High-quality CNC machines",
        "Precision to the micron",
        "Diamond finish possible",
        "Suitable for all wheel types",
        "Professional post-treatment",
      ],
    },
    {
      icon: Target,
      title: "Wheel Straightening",
      description:
        "Professional straightening of damaged wheels. We have modern straightening equipment to make your wheels perfectly round again.",
      features: [
        "Radial and axial straightening",
        "Suitable for steel and alloy wheels",
        "Check on balancing machine",
        "No warranty loss",
        "Also for heavily damaged wheels",
      ],
    },
    {
      icon: Wrench,
      title: "Stripping & Blasting",
      description:
        "Thorough stripping and blasting for a perfect base. We completely remove old paint and corrosion for optimal results.",
      features: [
        "Chemical stripping",
        "Sandblasting or glass bead blasting",
        "Removal of all old coating",
        "Perfect adhesion for new coating",
        "Environmentally friendly process",
      ],
    },
    {
      icon: Hammer,
      title: "Wheel Repair",
      description:
        "Expert repair of all types of wheel damage. From small scratches to heavy damage, we make your wheels look like new again.",
      features: [
        "Repair of scratches and dents",
        "Welding of cracks",
        "Repair of rim damage",
        "Removal of corrosion",
        "Complete restoration possible",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Wheel Sales & Purchase",
      description:
        "Wide selection of wheels in various sizes and styles. We also buy your used wheels for a fair price.",
      features: [
        "Large stock of used wheels",
        "Various brands and sizes",
        "Purchase of used wheels",
        "Fair prices",
        "View our inventory on Marketplace",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'var(--bg-hero)',
            filter: 'var(--bg-hero-blur) ? blur(var(--bg-hero-blur)) : none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Our Services</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed">
            At BeautifulRims we offer a complete package of wheel services. From repair and powder coating to CNC
            machining and sales and purchase. Everything under one roof with years of experience and craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-6 p-8">
                    <div className="md:col-span-1">
                      <service.icon className="w-16 h-16 text-orange-600 mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-semibold text-white mb-4">What we offer:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.title === "Wheel Sales & Purchase" && (
                        <Button asChild className="mt-6 bg-orange-600 hover:bg-orange-700 text-white">
                          <a
                            href="https://www.marktplaats.nl/u/beautifulrims/47376108/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Inventory on Marketplace
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Interested in one of our services?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Request a free quote today and discover what we can do for you.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
            <Link href="/offerte">Request Quote</Link>
          </Button>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">BeautifulRims</h3>
              <p className="text-zinc-400 leading-relaxed">
                Your reliable partner for all wheel services. With years of experience and craftsmanship, we ensure your
                wheels look like new again.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Sitemap</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/diensten" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projecten" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/over-ons" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.marktplaats.nl/u/beautifulrims/47376108/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Marketplace
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
              <div className="space-y-2 text-zinc-400">
                <p>
                  <span className="font-semibold text-white">Address:</span>
                  <br />
                  Mockstreet 10
                  <br />
                  1010MM Mocktown
                </p>
                <p>
                  <span className="font-semibold text-white">Email:</span>
                  <br />
                  <a href="mailto:beautifulrims@outlook.com" className="hover:text-orange-600 transition-colors">
                    beautifulrims@outlook.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500">
            <p>&copy; {new Date().getFullYear()} BeautifulRims. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
