import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { LogoProvider } from '@/lib/logo-context';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/lib/theme-engine/theme-context';

export const metadata: Metadata = {
  title: 'ThemeFaaast - Your Brand Specialist',
  description:
    'From custom themes to performance optimization. We create stunning digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <LogoProvider>
            {children}
            <Toaster />
          </LogoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
