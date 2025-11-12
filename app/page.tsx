import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation } from '@/components/navigation';
import {
  Wrench,
  Cog,
  Target,
  Droplet,
  Hammer,
  ShoppingCart,
  CheckCircle,
  Clock,
  Award,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: Droplet,
      title: 'Theme Design & Customization',
      description: 'Custom website themes with unlimited color schemes and branding',
    },
    {
      icon: Cog,
      title: 'Custom Development',
      description: 'Tailored web solutions and custom functionality development',
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Website speed optimization and performance tuning',
    },
    {
      icon: Wrench,
      title: 'Code Refactoring',
      description: 'Complete code cleanup and modernization services',
    },
    {
      icon: Hammer,
      title: 'Bug Fixes & Maintenance',
      description: 'Comprehensive debugging and website maintenance',
    },
    {
      icon: ShoppingCart,
      title: 'Template Marketplace',
      description: 'Premium theme templates and digital assets marketplace',
      hasButton: true,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'var(--bg-hero)',
            filter: 'var(--bg-hero-blur) ? blur(var(--bg-hero-blur)) : none',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-zinc-900/80 to-zinc-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-fade-in-up">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-orange-500 text-xs sm:text-sm font-semibold">
              Specialist since 2010
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance animate-fade-in-up [animation-delay:100ms] px-2">
            Your <span className="text-orange-500">Brand</span> specialist.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-6 sm:mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up [animation-delay:200ms] px-4">
            Open, navigate, and love a fresh, high‑speed site. Enter, click, and enjoy your new, ultra‑fast website. Browse, click, and discover your new, lightning‑fast website.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up [animation-delay:300ms] px-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-base sm:text-lg px-6 sm:px-8 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/quote">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-800 text-base sm:text-lg px-6 sm:px-8 bg-transparent hover:border-orange-600 transition-all w-full sm:w-auto"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <div className="text-3xl sm:text-4xl font-bold text-white">5000+</div>
              </div>
              <p className="text-sm sm:text-base text-zinc-400">Websites Serviced</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <div className="text-3xl sm:text-4xl font-bold text-white">15+</div>
              </div>
              <p className="text-sm sm:text-base text-zinc-400">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <div className="text-3xl sm:text-4xl font-bold text-white">100%</div>
              </div>
              <p className="text-sm sm:text-base text-zinc-400">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 px-4">
              Our Expertise
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg px-4">
              Professional website service with years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-zinc-800/50 backdrop-blur border-zinc-700 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="bg-orange-600/10 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-600/20 transition-colors">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 mb-4">{service.description}</p>
                  {service.hasButton && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent transition-all w-full sm:w-auto"
                    >
                      <a
                        href="marceli.online"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Inventory
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 px-4">
              Recent Work
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg px-4">View our transformations</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-6 sm:mb-8">
            <div className="relative aspect-square sm:col-span-2 sm:row-span-2 rounded-xl overflow-hidden group">
              <Image
                src="/before-and-after-website-redesign-modern-digital-theme.svg"
                alt="Website Redesign Project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <span className="text-orange-500 font-semibold text-xs sm:text-sm mb-1 sm:mb-2">
                  FEATURED PROJECT
                </span>
                <p className="text-white font-bold text-xl sm:text-2xl mb-1 sm:mb-2">
                  Before & After: Website Redesign
                </p>
                <p className="text-zinc-300 text-xs sm:text-sm">
                  Complete digital transformation with modern theme
                </p>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <Image
                src="/modern-ecommerce-website-theme-premium-design.svg"
                alt="E-commerce Website Theme"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-3 sm:p-4">
                  <span className="text-orange-500 text-xs font-semibold">CUSTOM THEME</span>
                  <p className="text-white font-semibold text-sm sm:text-base">Modern E-commerce</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <Image
                src="/custom-web-application-development-modern-interface.svg"
                alt="Custom Web Application Development"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-3 sm:p-4">
                  <span className="text-orange-500 text-xs font-semibold">CUSTOM DEVELOPMENT</span>
                  <p className="text-white font-semibold text-sm sm:text-base">Web Application</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square sm:col-span-2 rounded-xl overflow-hidden group">
              <Image
                src="/corporate-branding-website-redesign-premium-theme.svg"
                alt="Corporate Branding Website Redesign"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4 sm:p-6">
                  <span className="text-orange-500 text-xs font-semibold">BRAND THEME</span>
                  <p className="text-white font-bold text-lg sm:text-xl">Corporate Redesign</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center px-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-600 text-white hover:bg-zinc-800 bg-transparent hover:border-orange-600 transition-all w-full sm:w-auto"
            >
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'var(--bg-contact-hero)',
            filter: 'var(--bg-contact-hero-blur) ? blur(var(--bg-contact-hero-blur)) : none',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-orange-900/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Ready to <span className="text-orange-500">transform</span> your digital presence?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Contact us today for a free quote
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 shadow-2xl shadow-orange-600/40 hover:shadow-orange-600/60 transition-all hover:scale-105 w-full sm:w-auto mx-4"
          >
            <Link href="/quote">Start Your Quote Today</Link>
          </Button>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                ThemeFaaast
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Your reliable partner for all digital solutions. With years of experience and
                craftsmanship, we create stunning digital experiences.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Sitemap
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-sm sm:text-base text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-sm sm:text-base text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm sm:text-base text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm sm:text-base text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.marktplaats.nl/u/beautifulrims/47376108/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <Link
                    href="/theme-studio"
                    className="text-sm sm:text-base text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Theme Studio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Contact Information
              </h4>
              <div className="space-y-2 text-sm sm:text-base text-zinc-400">
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

          <div className="border-t border-zinc-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-zinc-500">
            <p>&copy; 2025 Design System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
