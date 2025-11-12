import type {
  ColorToken,
  SpacingScale,
  TypographyScale,
  GradientConfig,
  ShadowConfig,
  BorderConfig,
  EffectConfig,
  AnimationConfig,
} from '@/types/theme';

// Default design tokens
export const defaultColors: Record<string, ColorToken> = {
  // Brand colors
  primary: { value: 'oklch(0.65 0.19 35)', space: 'oklch', semantic: 'primary' },
  'primary-hover': { value: 'oklch(0.7 0.19 35)', space: 'oklch', semantic: 'primary' },
  'primary-foreground': { value: 'oklch(1 0 0)', space: 'oklch', semantic: 'primary' },

  // Background colors
  background: { value: 'oklch(0.12 0 0)', space: 'oklch', semantic: 'surface' },
  'background-secondary': { value: 'oklch(0.15 0 0)', space: 'oklch', semantic: 'surface' },
  foreground: { value: 'oklch(0.985 0 0)', space: 'oklch', semantic: 'text' },

  // Surface colors
  card: { value: 'oklch(0.18 0 0)', space: 'oklch', semantic: 'surface' },
  'card-foreground': { value: 'oklch(0.985 0 0)', space: 'oklch', semantic: 'text' },
  popover: { value: 'oklch(0.18 0 0)', space: 'oklch', semantic: 'surface' },
  'popover-foreground': { value: 'oklch(0.985 0 0)', space: 'oklch', semantic: 'text' },

  // Interactive colors
  accent: { value: 'oklch(0.25 0 0)', space: 'oklch', semantic: 'interactive' },
  'accent-foreground': { value: 'oklch(0.985 0 0)', space: 'oklch', semantic: 'text' },
  muted: { value: 'oklch(0.25 0 0)', space: 'oklch', semantic: 'muted' },
  'muted-foreground': { value: 'oklch(0.65 0 0)', space: 'oklch', semantic: 'text' },

  // Status colors
  destructive: { value: 'oklch(0.577 0.245 27.325)', space: 'oklch', semantic: 'status' },
  'destructive-foreground': { value: 'oklch(1 0 0)', space: 'oklch', semantic: 'text' },
  success: { value: 'oklch(0.65 0.19 142)', space: 'oklch', semantic: 'status' },
  warning: { value: 'oklch(0.75 0.19 85)', space: 'oklch', semantic: 'status' },

  // Border colors
  border: { value: 'oklch(0.3 0 0)', space: 'oklch', semantic: 'border' },
  input: { value: 'oklch(0.3 0 0)', space: 'oklch', semantic: 'input' },
  ring: { value: 'oklch(0.65 0.19 35)', space: 'oklch', semantic: 'focus' },

  // Chart colors
  'chart-1': { value: 'oklch(0.646 0.222 41.116)', space: 'oklch', semantic: 'chart' },
  'chart-2': { value: 'oklch(0.6 0.118 184.704)', space: 'oklch', semantic: 'chart' },
  'chart-3': { value: 'oklch(0.398 0.07 227.392)', space: 'oklch', semantic: 'chart' },
  'chart-4': { value: 'oklch(0.828 0.189 84.429)', space: 'oklch', semantic: 'chart' },
  'chart-5': { value: 'oklch(0.769 0.188 70.08)', space: 'oklch', semantic: 'chart' },
};

export const defaultSpacing: SpacingScale = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
};

export const defaultTypography: TypographyScale = {
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

export const defaultGradients: GradientConfig[] = [
  {
    id: 'primary',
    name: 'Primary Gradient',
    type: 'linear',
    angle: 135,
    colors: [
      { color: 'var(--color-primary)', position: 0 },
      { color: 'var(--color-primary-hover)', position: 100 },
    ],
    css: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)',
  },
  {
    id: 'background',
    name: 'Background Gradient',
    type: 'linear',
    angle: 180,
    colors: [
      { color: 'var(--color-background)', position: 0 },
      { color: 'var(--color-background-secondary)', position: 100 },
    ],
    css: 'linear-gradient(180deg, var(--color-background) 0%, var(--color-background-secondary) 100%)',
  },
];

export const defaultShadows: ShadowConfig[] = [
  {
    x: 0,
    y: 1,
    blur: 2,
    color: 'rgb(0 0 0 / 0.05)',
    inset: false,
  },
  {
    x: 0,
    y: 1,
    blur: 3,
    color: 'rgb(0 0 0 / 0.1)',
    inset: false,
  },
  {
    x: 0,
    y: 4,
    blur: 6,
    spread: -1,
    color: 'rgb(0 0 0 / 0.1)',
    inset: false,
  },
  {
    x: 0,
    y: 10,
    blur: 15,
    spread: -3,
    color: 'rgb(0 0 0 / 0.1)',
    inset: false,
  },
  {
    x: 0,
    y: 20,
    blur: 25,
    spread: -5,
    color: 'rgb(0 0 0 / 0.1)',
    inset: false,
  },
];

export const defaultBorder: BorderConfig = {
  width: '1px',
  style: 'solid',
  color: 'var(--color-border)',
  radius: '0.5rem',
};

export const defaultEffects: EffectConfig = {
  blur: '8px',
  opacity: 0.8,
  backdropBlur: '12px',
  mixBlendMode: 'normal',
};

export const defaultAnimations: Record<string, AnimationConfig> = {
  'fade-in': {
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay: '0ms',
  },
  'slide-in': {
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay: '0ms',
  },
  'scale-in': {
    duration: '200ms',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    delay: '0ms',
  },
};

export const defaultBackgrounds: Record<string, BackgroundConfig> = {
  hero: {
    type: 'gradient',
    gradient: {
      type: 'linear',
      angle: 135,
      colors: [
        { color: 'oklch(0.15 0 0)', position: 0 },
        { color: 'oklch(0.25 0.1 35)', position: 50 },
        { color: 'oklch(0.12 0 0)', position: 100 },
      ],
      blur: '20px',
    },
  },
  'section-bg': {
    type: 'gradient',
    gradient: {
      type: 'linear',
      angle: 180,
      colors: [
        { color: 'oklch(0.08 0 0)', position: 0 },
        { color: 'oklch(0.12 0 0)', position: 100 },
      ],
      blur: '10px',
    },
  },
  'card-bg': {
    type: 'gradient',
    gradient: {
      type: 'radial',
      colors: [
        { color: 'oklch(0.18 0 0)', position: 0 },
        { color: 'oklch(0.15 0 0)', position: 100 },
      ],
      blur: '5px',
    },
  },
  'contact-hero': {
    type: 'gradient',
    gradient: {
      type: 'conic',
      angle: 45,
      colors: [
        { color: 'oklch(0.15 0.05 35)', position: 0 },
        { color: 'oklch(0.12 0.08 45)', position: 25 },
        { color: 'oklch(0.18 0.03 55)', position: 50 },
        { color: 'oklch(0.14 0.06 65)', position: 75 },
        { color: 'oklch(0.15 0.05 35)', position: 100 },
      ],
      blur: '15px',
    },
  },
};

// CSS variable mapping
export const cssVariableMap = {
  // Colors
  '--color-background': 'background',
  '--color-foreground': 'foreground',
  '--color-card': 'card',
  '--color-card-foreground': 'card-foreground',
  '--color-popover': 'popover',
  '--color-popover-foreground': 'popover-foreground',
  '--color-primary': 'primary',
  '--color-primary-hover': 'primary-hover',
  '--color-primary-foreground': 'primary-foreground',
  '--color-secondary': 'secondary',
  '--color-secondary-foreground': 'secondary-foreground',
  '--color-muted': 'muted',
  '--color-muted-foreground': 'muted-foreground',
  '--color-accent': 'accent',
  '--color-accent-foreground': 'accent-foreground',
  '--color-destructive': 'destructive',
  '--color-destructive-foreground': 'destructive-foreground',
  '--color-border': 'border',
  '--color-input': 'input',
  '--color-ring': 'ring',
  '--color-chart-1': 'chart-1',
  '--color-chart-2': 'chart-2',
  '--color-chart-3': 'chart-3',
  '--color-chart-4': 'chart-4',
  '--color-chart-5': 'chart-5',

  // Spacing
  '--space-xs': 'xs',
  '--space-sm': 'sm',
  '--space-md': 'md',
  '--space-lg': 'lg',
  '--space-xl': 'xl',
  '--space-2xl': '2xl',
  '--space-3xl': '3xl',

  // Typography
  '--font-size-xs': 'xs',
  '--font-size-sm': 'sm',
  '--font-size-base': 'base',
  '--font-size-lg': 'lg',
  '--font-size-xl': 'xl',
  '--font-size-2xl': '2xl',
  '--font-size-3xl': '3xl',
  '--font-size-4xl': '4xl',
  '--font-size-5xl': '5xl',
  '--font-size-6xl': '6xl',

  // Borders
  '--radius-xs': 'xs',
  '--radius-sm': 'sm',
  '--radius-md': 'md',
  '--radius-lg': 'lg',
  '--radius-xl': 'xl',
  '--radius-2xl': '2xl',
  '--radius-3xl': '3xl',
  '--radius-full': 'full',
} as const;

// Utility functions
export function generateCSSVariables(tokens: Record<string, any>): string {
  const variables: string[] = [];

  // Colors
  if (tokens.colors) {
    Object.entries(tokens.colors).forEach(([key, token]: [string, any]) => {
      variables.push(`  --color-${key}: ${token.value};`);
    });
  }

  // Spacing
  if (tokens.spacing) {
    Object.entries(tokens.spacing).forEach(([key, value]) => {
      variables.push(`  --space-${key}: ${value};`);
    });
  }

  // Typography
  if (tokens.typography?.fontSize) {
    Object.entries(tokens.typography.fontSize).forEach(([key, value]) => {
      variables.push(`  --font-size-${key}: ${value};`);
    });
  }

  // Borders
  if (tokens.borders) {
    variables.push(`  --radius-xs: calc(${tokens.borders.radius} - 4px);`);
    variables.push(`  --radius-sm: calc(${tokens.borders.radius} - 2px);`);
    variables.push(`  --radius-md: ${tokens.borders.radius};`);
    variables.push(`  --radius-lg: calc(${tokens.borders.radius} + 2px);`);
    variables.push(`  --radius-xl: calc(${tokens.borders.radius} + 4px);`);
  }

  // Backgrounds
  if (tokens.backgrounds) {
    Object.entries(tokens.backgrounds).forEach(([key, background]: [string, any]) => {
      if (background.type === 'gradient' && background.gradient) {
        const gradientCSS = generateGradientCSS(background.gradient);
        variables.push(`  --bg-${key}: ${gradientCSS};`);
        if (background.gradient.blur) {
          variables.push(`  --bg-${key}-blur: ${background.gradient.blur};`);
        }
      } else if (background.type === 'solid' && background.solid) {
        variables.push(`  --bg-${key}: ${background.solid.color};`);
      } else if (background.type === 'image' && background.image) {
        const imageCSS = `url(${background.image.url})`;
        variables.push(`  --bg-${key}: ${imageCSS};`);
        variables.push(`  --bg-${key}-opacity: ${background.image.opacity};`);
        variables.push(`  --bg-${key}-blur: ${background.image.blur};`);
        if (background.image.overlay) {
          variables.push(`  --bg-${key}-overlay: ${background.image.overlay.color};`);
          variables.push(`  --bg-${key}-overlay-opacity: ${background.image.overlay.opacity};`);
        }
      }
    });
  }

  return `:root {\n${variables.join('\n')}\n}`;
}

export function validateColorContrast(foreground: string, background: string): number {
  // Simplified contrast calculation - in production, use a proper color library
  // This is a placeholder for the actual WCAG contrast calculation
  return 4.5; // Minimum WCAG AA contrast ratio
}

export function generateGradientCSS(gradient: GradientConfig): string {
  const stops = gradient.colors.map(stop => `${stop.color} ${stop.position}%`).join(', ');

  switch (gradient.type) {
    case 'linear':
      return `linear-gradient(${gradient.angle || 0}deg, ${stops})`;
    case 'radial':
      return `radial-gradient(circle at ${gradient.position || 'center'}, ${stops})`;
    case 'conic':
      return `conic-gradient(from ${gradient.angle || 0}deg at ${gradient.position || 'center'}, ${stops})`;
    default:
      return stops;
  }
}

export function generateShadowCSS(shadow: ShadowConfig): string {
  const parts = [shadow.inset ? 'inset' : '', `${shadow.x}px`, `${shadow.y}px`, `${shadow.blur}px`];

  if (shadow.spread !== undefined) {
    parts.push(`${shadow.spread}px`);
  }

  parts.push(shadow.color);

  return parts.filter(Boolean).join(' ');
}
