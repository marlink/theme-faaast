'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { ThemeConfig, DeviceType, DeviceCapabilities, ComponentType } from '@/types/theme';
import {
  defaultColors,
  defaultSpacing,
  defaultTypography,
  defaultGradients,
  defaultShadows,
  defaultBorder,
  defaultEffects,
  defaultAnimations,
  defaultBackgrounds,
  generateCSSVariables,
} from './tokens';

// Default theme configuration
export const defaultTheme: ThemeConfig = {
  id: 'default',
  name: 'Default Theme',
  version: '1.0.0',
  timestamp: new Date(),
  author: 'Design System',
  colors: defaultColors,
  spacing: defaultSpacing,
  typography: defaultTypography,
  gradients: defaultGradients,
  shadows: defaultShadows,
  borders: defaultBorder,
  effects: defaultEffects,
  animations: defaultAnimations,
  backgrounds: defaultBackgrounds,
  website: {
    name: 'My Website',
    description: 'A beautiful website built with our theme',
    pages: [
      {
        id: 'home',
        title: 'Home',
        slug: 'home',
        components: ['hero-section', 'services-grid', 'contact-form'] as ComponentType[],
        order: 0
      }
    ],
    availableComponents: [] as ComponentType[],
    maxPages: 3,
    maxComponentsPerPage: 5
  },
  metadata: {
    baseTheme: 'automotive-dark',
    tags: ['default', 'automotive', 'dark'],
    description: 'Default automotive dark theme',
    accessibility: {
      wcagLevel: 'AA',
      contrastRatio: 4.5,
      reducedMotion: false,
    },
    performance: {
      tier: 'high',
      estimatedSize: 15,
    },
  },
};

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
  resetTheme: () => void;
  deviceCapabilities: DeviceCapabilities | null;
  isLoading: boolean;
  error: string | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeConfig;
}

/**
 * @component ThemeProvider
 * @description React context provider for theme management and website builder state
 * @category theme
 * @complexity advanced
 * @feature theme-management
 * @user-story US-001, US-002, US-003
 * @status implemented
 * @version 1.0.0
 */
export function ThemeProvider({ children, initialTheme = defaultTheme }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeConfig>(initialTheme);
  const [deviceCapabilities, setDeviceCapabilities] = useState<DeviceCapabilities | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Detect device capabilities
  useEffect(() => {
    const detectDevice = (): DeviceCapabilities => {
      const userAgent = navigator.userAgent;
      const screen = {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio || 1,
      };

      // Determine device type
      let type: DeviceType = 'desktop';
      if (screen.width < 768) {
        type = 'mobile';
      } else if (screen.width < 1024) {
        type = 'tablet';
      } else if (screen.width < 1440) {
        type = 'laptop';
      }

      // Detect capabilities
      const capabilities = {
        touch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        hover: window.matchMedia('(hover: hover)').matches,
        pointer: window.matchMedia('(pointer: fine)').matches ? 'fine' : 'coarse',
        prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        prefersColorScheme: (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'no-preference') as any,
      };

      // Performance estimation
      const memory = (navigator as any).deviceMemory || 4;
      const cores = navigator.hardwareConcurrency || 4;
      const performance = {
        tier: memory >= 8 && cores >= 4 ? 'high' : memory >= 4 && cores >= 2 ? 'medium' : 'low',
        memory,
        cores,
      };

      return { type, screen, capabilities, performance };
    };

    try {
      const device = detectDevice();
      setDeviceCapabilities(device);
    } catch (err) {
      console.warn('Failed to detect device capabilities:', err);
      setDeviceCapabilities(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Apply theme to CSS variables
  useEffect(() => {
    if (!theme) return;

    try {
      const cssVariables = generateCSSVariables(theme);

      // Apply to :root
      const root = document.documentElement;
      root.style.cssText = cssVariables;

      // Store theme in localStorage
      localStorage.setItem('theme-studio-current', JSON.stringify(theme));

      setError(null);
    } catch (err) {
      console.error('Failed to apply theme:', err);
      setError('Failed to apply theme');
    }
  }, [theme]);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme-studio-current');
      if (stored) {
        const parsedTheme = JSON.parse(stored);
        // Convert timestamp back to Date object
        if (parsedTheme.timestamp) {
          parsedTheme.timestamp = new Date(parsedTheme.timestamp);
        }
        setTheme(parsedTheme);
      }
    } catch (err) {
      console.warn('Failed to load stored theme:', err);
    }
  }, []);

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    setTheme(prev => ({
      ...prev,
      ...updates,
      timestamp: new Date(),
    }));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
    setError(null);
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    updateTheme,
    resetTheme,
    deviceCapabilities,
    isLoading,
    error,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Utility hook for theme properties
export function useThemeProperty<K extends keyof ThemeConfig>(key: K): ThemeConfig[K] {
  const { theme } = useTheme();
  return theme[key];
}

// Hook for responsive theme properties
export function useResponsiveTheme() {
  const { theme, deviceCapabilities } = useTheme();

  if (!deviceCapabilities) {
    return theme;
  }

  // Apply device-specific overrides
  const deviceOverrides = theme.responsive?.[deviceCapabilities.type];
  if (deviceOverrides) {
    return {
      ...theme,
      ...deviceOverrides,
    };
  }

  return theme;
}

// Hook for theme validation
export function useThemeValidation() {
  const { theme } = useTheme();

  // Basic validation - in production, this would use the full validation schema
  const isValid = theme && theme.id && theme.name && theme.colors;

  return {
    isValid,
    errors: isValid ? [] : ['Theme is missing required properties'],
  };
}
