import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation } from '@/components/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Before & After: Complete Website Redesign',
      description:
        'This website came in with outdated design and poor UX. After complete redesign, performance optimization and modern theming, it looks stunning and performs perfectly.',
      image: '/before-and-after-website-redesign-modern-digital-theme.jpg',
      services: ['Theme Design', 'Performance Optimization', 'Custom Development'],
    },
    {
      title: 'Custom Theme: Modern E-commerce',
      description:
        'A premium e-commerce website with custom theme design and modern UI. The result is an engaging, conversion-optimized online store that drives sales.',
      image: '/modern-ecommerce-website-theme-premium-design.jpg',
      services: ['Theme Design', 'Custom Development'],
    },
    {
      title: 'Custom Development: Web Application',
      description:
        'A custom web application built from scratch with modern technologies. The result is a powerful, scalable solution that meets all business requirements.',
      image: '/custom-web-application-development-modern-interface.jpg',
      services: ['Custom Development', 'Performance Optimization'],
    },
    {
      title: 'Brand Theme: Corporate Redesign',
      description:
        'A complete corporate website redesign with custom branding and modern theme. The result is a professional, brand-consistent online presence.',
      image: '/corporate-branding-website-redesign-premium-theme.jpg',
      services: ['Theme Design', 'Custom Development'],
    },
    {
      title: 'Premium Digital Transformation',
      description:
        'Complete digital transformation of a legacy website. From code refactoring to modern theming and performance optimization, everything was carried out with the greatest care.',
      image: '/digital-transformation-legacy-website-modern-upgrade.jpg',
      services: ['Code Refactoring', 'Theme Design', 'Performance Optimization'],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/digital-projects-showcase-modern-web-design-portfolio.jpg"
            alt="Digital Projects Showcase"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Our Projects
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed">
            View a selection of our recently completed projects. From complete redesigns to
            custom theme implementations, each project is carried out with the same dedication and
            craftsmanship.
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
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-zinc-300 mb-6 leading-relaxed">{project.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-400 mb-2">
                          Services performed:
                        </h4>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Want such a result too?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Let us transform your wheels. Request a free quote today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8"
          >
            <Link href="/quote">Request Quote</Link>
          </Button>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">ThemeFaaast</h3>
              <p className="text-zinc-400 leading-relaxed">
                Your reliable partner for all digital solutions. With years of experience and
                craftsmanship, we create stunning digital experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Sitemap</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="marceli.online"
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
                  support@marceli.online
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500">
            <p>&copy; 2025 Design System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
