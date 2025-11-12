'use client';

import { useLogo } from '@/lib/logo-context';
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  const { logo } = useLogo();

  return (
    <Link href="/" className="flex items-center">
      {logo.type === 'image' && logo.imageUrl ? (
        <div className="relative h-8 w-auto">
          <Image
            src={logo.imageUrl}
            alt={logo.altText || 'Logo'}
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>
      ) : (
        <span className="text-2xl font-bold text-white hover:text-orange-500 transition-colors">
          {logo.text || 'ThemeFaaast'}
        </span>
      )}
    </Link>
  );
}
