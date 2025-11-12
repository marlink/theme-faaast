import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation } from '@/components/navigation';
import { Award, Users, Wrench, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Craftsmanship',
      description:
        'Years of experience and continuous development ensure the highest quality level.',
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Every project gets our full attention. Your satisfaction is our priority.',
    },
    {
      icon: Wrench,
      title: 'Modern Equipment',
      description: 'We continuously invest in the latest technology for the best results.',
    },
    {
      icon: Heart,
      title: 'Passion for Wheels',
      description: 'Our love for cars and wheels is visible in every project we undertake.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'var(--bg-hero)',
            filter: 'var(--bg-hero-blur) ? blur(var(--bg-hero-blur)) : none',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            About BeautifulRims
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Your specialist in wheel service with a passion for perfection
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    BeautifulRims was born from a passion for cars and an eye for detail. What
                    started as a small business has grown into a specialized company in wheel
                    service, where quality and craftsmanship come first.
                  </p>
                  <p>
                    With more than 10 years of experience in the industry, we have developed into a
                    reliable partner for individuals and businesses. Whether it's a complete
                    restoration, a custom powder coating or precision CNC work, we treat every wheel
                    with the same care and attention.
                  </p>
                  <p>
                    Our team consists of experienced developers who use their knowledge and skills
                    daily to achieve the best results. We continuously invest in the latest
                    technologies and best practices, so we can always offer our customers the highest
                    quality digital solutions.
                  </p>
                  <p>
                    At ThemeFaaast it's not just about websites, but about the complete digital experience.
                    From the first consultation to launch, we provide personal and professional
                    service. Your satisfaction is our greatest motivation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Our Core Values</h2>
          <p className="text-zinc-400 text-center mb-12 text-lg">What we stand for</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 text-center">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Why BeautifulRims?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Everything under one roof
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    From repair to powder coating and CNC machining. You don't need to go to
                    multiple companies, we arrange everything for you.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Fair prices</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Transparent prices without hidden costs. You know exactly what to expect in
                    advance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Fast delivery time</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We understand that you want to get back on the road quickly. That's why we work
                    efficiently without compromising on quality.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Personal advice</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Not sure which service you need? We're happy to think along with you and advise
                    you without obligation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to get acquainted?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Contact us or request a free quote directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8"
            >
              <Link href="/quote">Request Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-800 text-lg px-8 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
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
