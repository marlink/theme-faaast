import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Before & After: Complete Wheel Repair",
      description:
        "These wheels came in with severe rim damage and corrosion. After straightening, repair and powder coating in glossy black, they look like new again.",
      image: "/before-and-after-car-wheel-restoration-damaged-whe.jpg",
      services: ["Straightening", "Repair", "Powder Coating"],
    },
    {
      title: "Powder Coating: Glossy Black",
      description:
        "A set of premium wheels finished with high-quality glossy black powder coating. The result is a deep, durable shine that lasts for years.",
      image: "/powder-coated-car-wheels-glossy-black-finish-premi.jpg",
      services: ["Stripping", "Powder Coating"],
    },
    {
      title: "CNC Machining: Precision Work",
      description:
        "These wheels have been completely restored and finished with a beautiful CNC finish. The diamond-cut finish gives a luxurious appearance.",
      image: "/cnc-machined-car-wheel-precision-finish-automotive.jpg",
      services: ["CNC Machining", "Powder Coating"],
    },
    {
      title: "Custom Color: Metallic Blue",
      description:
        "A unique custom color for these wheels. The metallic blue powder coating gives the car a striking and personal appearance.",
      image: "/restored-alloy-wheels-custom-color-powder-coating.jpg",
      services: ["Stripping", "Powder Coating"],
    },
    {
      title: "Premium Restoration",
      description:
        "Complete restoration of these high-end wheels. From stripping to powder coating and CNC machining, everything was carried out with the greatest care.",
      image: "/luxury-sports-car-wheels-close-up-dramatic-lightin.jpg",
      services: ["Stripping", "Repair", "CNC Machining", "Powder Coating"],
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/high-end-luxury-car-wheel-close-up-dark-automotive.jpg"
            alt="Projects"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Our Projects</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed">
            View a selection of our recently completed projects. From complete restorations to custom powder coatings,
            each project is carried out with the same dedication and craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-square md:aspect-auto">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-zinc-300 mb-6 leading-relaxed">{project.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-400 mb-2">Services performed:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm border border-zinc-600"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-zinc-400">Wheels restored</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-zinc-400">Years experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-zinc-400">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Want such a result too?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Let us transform your wheels. Request a free quote today.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
            <Link href="/quote">Request Quote</Link>
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
                  <Link href="/services" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-orange-600 transition-colors">
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
