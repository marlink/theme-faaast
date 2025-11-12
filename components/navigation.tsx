'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Logo } from '@/components/logo';
import { createClient } from '@/lib/supabase/client';
import { useTheme } from '@/lib/theme-engine/theme-context';

/**
 * @component Navigation
 * @description Main site navigation with dynamic page integration
 * @category layout
 * @complexity medium
 * @feature dynamic-navigation
 * @user-story US-009
 * @status implemented
 */
export function Navigation() {
  const router = useRouter();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const supabase = createClient();
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser();
    setUser(currentUser);
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
    router.refresh();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {/* Dynamic pages from website builder */}
            {theme.website?.pages.map(page => (
              <Link
                key={page.id}
                href={`/pages/${page.slug}`}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                {page.title}
              </Link>
            ))}

            {/* Default navigation links */}
            <Link href="/services" className="text-zinc-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-zinc-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-zinc-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/settings" className="text-zinc-300 hover:text-white transition-colors">
              Settings
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/theme-studio" className="text-zinc-300 hover:text-white transition-colors hidden md:block">
              Theme Studio
            </Link>
            {user ? (
              <>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hidden sm:inline-flex border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
                >
                  <Link href="/profile">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="hidden sm:inline-flex border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
              >
                <Link href="/auth/login">Sign In</Link>
              </Button>
            )}
            <Button
              asChild
              className="hidden sm:inline-flex bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Link href="/quote">Request Quote</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <div
        className={`fixed top-20 right-0 bottom-0 w-64 bg-zinc-900 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {/* Dynamic pages from website builder */}
          {theme.website?.pages.map(page => (
            <Link
              key={page.id}
              href={`/pages/${page.slug}`}
              className="text-zinc-300 hover:text-white transition-colors text-lg"
              onClick={closeMobileMenu}
            >
              {page.title}
            </Link>
          ))}

          {/* Default navigation links */}
          <Link
            href="/services"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link
            href="/theme-studio"
            className="text-zinc-300 hover:text-white transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Theme Studio
          </Link>
          {user ? (
            <>
              <Link
                href="/profile"
                className="text-zinc-300 hover:text-white transition-colors text-lg"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
              <Button
                variant="outline"
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
                className="w-full border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </>
          ) : (
            <Button
              asChild
              variant="outline"
              className="w-full border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
            >
              <Link href="/auth/login" onClick={closeMobileMenu}>
                Sign In
              </Link>
            </Button>
          )}

          <div className="border-t border-zinc-700 pt-6 flex flex-col gap-3">
            <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/quote" onClick={closeMobileMenu}>
                Request Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
