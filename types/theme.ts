import { z } from 'zod';

// Device types
export type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'ultrawide';

// Color space types
export type ColorSpace = 'oklch' | 'hsl' | 'rgb' | 'hex';

// Gradient types
export type GradientType = 'linear' | 'radial' | 'conic';

// Shadow configuration
export interface ShadowConfig {
  x: number;
  y: number;
  blur: number;
  spread?: number;
  color: string;
  inset?: boolean;
}

// Border configuration
export interface BorderConfig {
  width: string;
  style: 'solid' | 'dashed' | 'dotted';
  color: string;
  radius: string;
}

// Spacing scale
export interface SpacingScale {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

// Color token
export interface ColorToken {
  value: string;
  space: ColorSpace;
  contrast?: number; // WCAG contrast ratio
  semantic?: string; // e.g., 'primary', 'surface'
}

// Typography scale
export interface TypographyScale {
  fontSize: Record<string, string>;
  fontWeight: Record<string, string>;
  lineHeight: Record<string, string>;
  letterSpacing: Record<string, string>;
}

// Gradient configuration
export interface GradientConfig {
  id: string;
  name: string;
  type: GradientType;
  angle?: number; // for linear gradients
  position?: string; // for radial gradients
  colors: Array<{
    color: string;
    position: number; // 0-100
  }>;
  css: string; // computed CSS
}

// Effect configuration
export interface EffectConfig {
  blur: string;
  opacity: number;
  backdropBlur?: string;
  mixBlendMode?: string;
}

// Animation configuration
export interface AnimationConfig {
  duration: string;
  easing: string;
  delay?: string;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
}

// Background configuration
export interface BackgroundConfig {
  type: 'gradient' | 'solid' | 'image';
  gradient?: {
    type: 'linear' | 'radial' | 'conic';
    angle?: number;
    colors: Array<{
      color: string;
      position: number;
    }>;
    blur?: string;
  };
  solid?: {
    color: string;
  };
  image?: {
    url: string;
    opacity: number;
    blur: string;
    overlay?: {
      color: string;
      opacity: number;
    };
  };
}

// Theme configuration
export interface ThemeConfig {
  id: string;
  name: string;
  version: string;
  timestamp: Date;
  author?: string;

  // Core tokens
  colors: Record<string, ColorToken>;
  spacing: SpacingScale;
  typography: TypographyScale;

  // Advanced effects
  gradients: GradientConfig[];
  shadows: ShadowConfig[];
  borders: BorderConfig;
  effects: EffectConfig;
  animations: Record<string, AnimationConfig>;

  // Backgrounds
  backgrounds: Record<string, BackgroundConfig>;

  // Website configuration
  website?: WebsiteConfig;

  // Responsive overrides
  responsive: Partial<Record<DeviceType, Partial<ThemeConfig>>>;

  // Metadata
  metadata: {
    baseTheme: string;
    tags: string[];
    description: string;
    accessibility: {
      wcagLevel: 'A' | 'AA' | 'AAA';
      contrastRatio: number;
      reducedMotion: boolean;
    };
    performance: {
      tier: 'low' | 'medium' | 'high';
      estimatedSize: number; // in KB
    };
  };
}

// Theme history
export interface ThemeHistory {
  current: ThemeConfig;
  versions: ThemeConfig[];
  changes: ThemeChange[];
  branches: Record<string, ThemeConfig[]>;
}

// Theme change for undo/redo
export interface ThemeChange {
  id: string;
  timestamp: Date;
  type: 'create' | 'update' | 'delete';
  path: string; // dot notation path to changed property
  oldValue: unknown;
  newValue: unknown;
  description: string;
}

// Validation schemas
export const ColorTokenSchema = z.object({
  value: z.string(),
  space: z.enum(['oklch', 'hsl', 'rgb', 'hex']),
  contrast: z.number().optional(),
  semantic: z.string().optional(),
});

export const ShadowConfigSchema = z.object({
  x: z.number(),
  y: z.number(),
  blur: z.number(),
  spread: z.number().optional(),
  color: z.string(),
  inset: z.boolean().optional(),
});

export const ThemeConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  version: z.string(),
  timestamp: z.date(),
  author: z.string().optional(),
  colors: z.record(ColorTokenSchema),
  spacing: z.object({
    xs: z.string(),
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
    xl: z.string(),
    '2xl': z.string(),
    '3xl': z.string(),
  }),
  gradients: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      type: z.enum(['linear', 'radial', 'conic']),
      angle: z.number().optional(),
      position: z.string().optional(),
      colors: z.array(
        z.object({
          color: z.string(),
          position: z.number(),
        })
      ),
      css: z.string(),
    })
  ),
  metadata: z.object({
    baseTheme: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    accessibility: z.object({
      wcagLevel: z.enum(['A', 'AA', 'AAA']),
      contrastRatio: z.number(),
      reducedMotion: z.boolean(),
    }),
  }),
});

// Utility types
export type ThemeColors = keyof ThemeConfig['colors'];
export type ThemeSpacing = keyof ThemeConfig['spacing'];
export type ThemeTypography = keyof ThemeConfig['typography'];

// Export formats
export type ExportFormat = 'json' | 'css' | 'tailwind' | 'package';

// Device capabilities
export interface DeviceCapabilities {
  type: DeviceType;
  screen: {
    width: number;
    height: number;
    pixelRatio: number;
  };
  capabilities: {
    touch: boolean;
    hover: boolean;
    pointer: 'coarse' | 'fine';
    prefersReducedMotion: boolean;
    prefersColorScheme: 'light' | 'dark' | 'no-preference';
  };
  performance: {
    tier: 'low' | 'medium' | 'high';
    memory: number; // in MB
    cores: number;
  };
}

// Theme validation result
export interface ValidationResult {
  valid: boolean;
  errors: Array<{
    path: string;
    message: string;
    severity: 'error' | 'warning';
  }>;
  warnings: Array<{
    path: string;
    message: string;
    suggestion?: string;
  }>;
  accessibility: {
    score: number; // 0-100
    issues: Array<{
      type: string;
      message: string;
      impact: 'minor' | 'moderate' | 'serious' | 'critical';
    }>;
  };
}

// Storage interfaces
export interface ThemeStorage {
  save(theme: ThemeConfig): Promise<void>;
  load(id: string): Promise<ThemeConfig | null>;
  list(): Promise<ThemeConfig[]>;
  delete(id: string): Promise<void>;
  export(theme: ThemeConfig, format: ExportFormat): Promise<string>;
  import(data: string, format: ExportFormat): Promise<ThemeConfig>;
}

// Component types available for selection
export type ComponentType =
  | 'hero-section'
  | 'services-grid'
  | 'testimonials-carousel'
  | 'contact-form'
  | 'pricing-table'
  | 'about-section'
  | 'portfolio-gallery'
  | 'faq-accordion'
  | 'newsletter-signup'
  | 'footer'
  | 'navigation'
  | 'feature-cards'
  | 'stats-counter'
  | 'team-section'
  | 'blog-preview'
  | 'call-to-action'
  | 'image-text-layout'
  | 'multi-column-text'
  | 'link-showcase'
  | 'video-placeholder'
  | 'calendar'
  | 'data-table'
  | 'progress-indicators'
  | 'alerts-status'
  | 'interactive-controls';

// Website page configuration
export interface PageConfig {
  id: string;
  title: string;
  slug: string;
  components: ComponentType[];
  order: number;
}

// Website configuration
export interface WebsiteConfig {
  name: string;
  description: string;
  pages: PageConfig[];
  availableComponents: ComponentType[];
  maxPages: number;
  maxComponentsPerPage: number;
}
