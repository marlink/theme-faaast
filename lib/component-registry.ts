import React from 'react';
import type { ComponentType } from '@/types/theme';
import {
  Star,
  Users,
  Mail,
  CreditCard,
  Info,
  CheckCircle,
  Calendar,
  Table,
  Play,
  Settings,
  Heart,
  MapPin,
  Phone,
  Search,
  Filter,
  Menu,
  X,
  ChevronDown,
  Cog,
  Droplet,
  Clock,
} from 'lucide-react';

export interface ComponentDefinition {
  id: ComponentType;
  name: string;
  description: string;
  category: 'layout' | 'content' | 'interactive' | 'marketing';
  complexity: 'simple' | 'medium' | 'advanced';
  icon: React.ComponentType<{ className?: string }>;
  placeholderContent: Record<string, any>;
}

// Placeholder components for preview - using a simple approach
const createPreviewIcon = (iconName: string) => {
  // Return a placeholder that will be replaced with actual icons
  return Star; // Default to Star icon for now
};

const HeroSectionPreview = Star;
const ServicesGridPreview = Cog;
const ContactFormPreview = Mail;
const NavigationPreview = Menu;
const FooterPreview = Menu;
const FeatureCardsPreview = CheckCircle;
const ImageTextLayoutPreview = Cog;
const MultiColumnTextPreview = Table;
const LinkShowcasePreview = Search;
const VideoPlaceholderPreview = Play;
const CalendarPreview = Calendar;
const DataTablePreview = Table;
const ProgressIndicatorsPreview = Clock;
const AlertsStatusPreview = Info;
const InteractiveControlsPreview = Settings;
const TestimonialsCarouselPreview = Users;
const PricingTablePreview = CreditCard;
const AboutSectionPreview = Info;
const PortfolioGalleryPreview = CheckCircle;
const FaqAccordionPreview = ChevronDown;
const NewsletterSignupPreview = Mail;
const StatsCounterPreview = Clock;
const TeamSectionPreview = Users;
const BlogPreviewPreview = Info;
const CallToActionPreview = Star;

/**
 * @feature component-registry
 * @description Centralized registry of all available website components for the website builder
 * @user-story US-007
 * @status implemented
 * @version 1.0.0
 */
export const componentRegistry: Record<ComponentType, ComponentDefinition> = {
  'hero-section': {
    id: 'hero-section',
    name: 'Hero Section',
    description: 'Large banner with headline, subtext, and call-to-action',
    category: 'marketing',
    complexity: 'simple',
    icon: Star,
    placeholderContent: {
      title: 'Transform Your Wheels Today',
      subtitle: 'Professional website development and customization services',
      ctaText: 'Get Started',
      backgroundImage: '/placeholder.jpg'
    }
  },
  'services-grid': {
    id: 'services-grid',
    name: 'Services Grid',
    description: 'Grid layout showcasing your services',
    category: 'content',
    complexity: 'simple',
    icon: Cog,
    placeholderContent: {
      services: [
        { title: 'Wheel Repair', description: 'Expert repair of all wheel damage' },
        { title: 'Powder Coating', description: 'Professional coating in any color' },
        { title: 'CNC Machining', description: 'Precision machining services' }
      ]
    }
  },
  'testimonials-carousel': {
    id: 'testimonials-carousel',
    name: 'Testimonials Carousel',
    description: 'Customer reviews in a sliding carousel',
    category: 'marketing',
    complexity: 'medium',
    icon: Users,
    placeholderContent: {
      testimonials: [
        { name: 'John D.', text: 'Excellent service, highly recommend!' },
        { name: 'Sarah M.', text: 'Professional and timely work.' }
      ]
    }
  },
  'contact-form': {
    id: 'contact-form',
    name: 'Contact Form',
    description: 'Form for collecting contact information',
    category: 'interactive',
    complexity: 'simple',
    icon: Mail,
    placeholderContent: {
      fields: ['name', 'email', 'message'],
      submitText: 'Send Message'
    }
  },
  'pricing-table': {
    id: 'pricing-table',
    name: 'Pricing Table',
    description: 'Display pricing plans and packages',
    category: 'marketing',
    complexity: 'medium',
    icon: CreditCard,
    placeholderContent: {
      plans: [
        { name: 'Basic', price: '€50', features: ['Repair', 'Basic Coating'] },
        { name: 'Premium', price: '€150', features: ['Repair', 'Premium Coating', 'CNC'] }
      ]
    }
  },
  'about-section': {
    id: 'about-section',
    name: 'About Section',
    description: 'Information about your company or services',
    category: 'content',
    complexity: 'simple',
    icon: Info,
    placeholderContent: {
      title: 'About Our Workshop',
      content: 'We specialize in professional website development and customization.'
    }
  },
  'portfolio-gallery': {
    id: 'portfolio-gallery',
    name: 'Portfolio Gallery',
    description: 'Showcase your work with image galleries',
    category: 'content',
    complexity: 'medium',
    icon: CheckCircle,
    placeholderContent: {
      images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg']
    }
  },
  'faq-accordion': {
    id: 'faq-accordion',
    name: 'FAQ Accordion',
    description: 'Frequently asked questions in expandable format',
    category: 'content',
    complexity: 'simple',
    icon: ChevronDown,
    placeholderContent: {
      questions: [
        { q: 'How long does repair take?', a: 'Typically 2-5 days depending on damage.' },
        { q: 'Do you offer warranties?', a: 'Yes, all repairs come with warranty.' }
      ]
    }
  },
  'newsletter-signup': {
    id: 'newsletter-signup',
    name: 'Newsletter Signup',
    description: 'Email subscription form for newsletters',
    category: 'marketing',
    complexity: 'simple',
    icon: Mail,
    placeholderContent: {
      title: 'Stay Updated',
      subtitle: 'Get the latest news and special offers',
      placeholder: 'Enter your email'
    }
  },
  'footer': {
    id: 'footer',
    name: 'Footer',
    description: 'Site footer with links and contact information',
    category: 'layout',
    complexity: 'simple',
    icon: Menu,
    placeholderContent: {
      links: ['Services', 'Portfolio', 'Contact', 'About'],
      copyright: '© 2024 Your Company'
    }
  },
  'navigation': {
    id: 'navigation',
    name: 'Navigation',
    description: 'Main site navigation header',
    category: 'layout',
    complexity: 'simple',
    icon: Menu,
    placeholderContent: {
      logo: 'Your Logo',
      menuItems: ['Home', 'Services', 'Portfolio', 'Contact']
    }
  },
  'feature-cards': {
    id: 'feature-cards',
    name: 'Feature Cards',
    description: 'Highlight key features or benefits',
    category: 'content',
    complexity: 'simple',
    icon: CheckCircle,
    placeholderContent: {
      features: [
        { icon: 'check', title: 'Quality Assured', text: 'Every job meets our standards' },
        { icon: 'clock', title: 'Fast Turnaround', text: 'Quick service without compromise' }
      ]
    }
  },
  'stats-counter': {
    id: 'stats-counter',
    name: 'Stats Counter',
    description: 'Animated numbers showing achievements',
    category: 'content',
    complexity: 'medium',
    icon: Clock,
    placeholderContent: {
      stats: [
        { number: '500+', label: 'Wheels Restored' },
        { number: '15+', label: 'Years Experience' }
      ]
    }
  },
  'team-section': {
    id: 'team-section',
    name: 'Team Section',
    description: 'Introduce your team members',
    category: 'content',
    complexity: 'simple',
    icon: Users,
    placeholderContent: {
      members: [
        { name: 'John Doe', role: 'Master Technician', image: '/placeholder-user.jpg' }
      ]
    }
  },
  'blog-preview': {
    id: 'blog-preview',
    name: 'Blog Preview',
    description: 'Latest blog posts or articles',
    category: 'content',
    complexity: 'medium',
    icon: Info,
    placeholderContent: {
      posts: [
        { title: 'Wheel Care Tips', excerpt: 'How to maintain your wheels...', date: '2024-01-01' }
      ]
    }
  },
  'call-to-action': {
    id: 'call-to-action',
    name: 'Call to Action',
    description: 'Conversion-focused section with button',
    category: 'marketing',
    complexity: 'simple',
    icon: Star,
    placeholderContent: {
      title: 'Ready to Get Started?',
      text: 'Contact us today for a free quote',
      buttonText: 'Get Free Quote'
    }
  },
  'image-text-layout': {
    id: 'image-text-layout',
    name: 'Image + Text Layout',
    description: 'Image alongside descriptive text',
    category: 'layout',
    complexity: 'simple',
    icon: Cog,
    placeholderContent: {
      image: '/placeholder.jpg',
      title: 'Our Process',
      text: 'Learn about our meticulous restoration process.'
    }
  },
  'multi-column-text': {
    id: 'multi-column-text',
    name: 'Multi-Column Text',
    description: 'Text content arranged in multiple columns',
    category: 'layout',
    complexity: 'simple',
    icon: Table,
    placeholderContent: {
      columns: [
        { title: 'Column 1', content: 'Content for column 1' },
        { title: 'Column 2', content: 'Content for column 2' }
      ]
    }
  },
  'link-showcase': {
    id: 'link-showcase',
    name: 'Link Showcase',
    description: 'Various link styles and navigation elements',
    category: 'interactive',
    complexity: 'simple',
    icon: Search,
    placeholderContent: {
      links: ['Home', 'Services', 'Contact', 'Portfolio']
    }
  },
  'video-placeholder': {
    id: 'video-placeholder',
    name: 'Video Placeholder',
    description: 'Video embed or placeholder area',
    category: 'content',
    complexity: 'simple',
    icon: Play,
    placeholderContent: {
      title: 'Process Video',
      thumbnail: '/placeholder.jpg'
    }
  },
  'calendar': {
    id: 'calendar',
    name: 'Calendar',
    description: 'Date picker or calendar component',
    category: 'interactive',
    complexity: 'medium',
    icon: Calendar,
    placeholderContent: {
      title: 'Schedule Appointment',
      availableDates: []
    }
  },
  'data-table': {
    id: 'data-table',
    name: 'Data Table',
    description: 'Structured data display in table format',
    category: 'content',
    complexity: 'medium',
    icon: Table,
    placeholderContent: {
      headers: ['Service', 'Duration', 'Price'],
      rows: [
        ['Wheel Repair', '2-5 days', '€50-€200']
      ]
    }
  },
  'progress-indicators': {
    id: 'progress-indicators',
    name: 'Progress Indicators',
    description: 'Loading bars, progress indicators, and spinners',
    category: 'interactive',
    complexity: 'simple',
    icon: Clock,
    placeholderContent: {
      progress: 75,
      loading: false
    }
  },
  'alerts-status': {
    id: 'alerts-status',
    name: 'Alerts & Status',
    description: 'Notifications, alerts, and status messages',
    category: 'interactive',
    complexity: 'simple',
    icon: Info,
    placeholderContent: {
      alerts: [
        { type: 'info', message: 'This is an informational alert' },
        { type: 'success', message: 'Operation completed successfully' }
      ]
    }
  },
  'interactive-controls': {
    id: 'interactive-controls',
    name: 'Interactive Controls',
    description: 'Buttons, switches, sliders, and form controls',
    category: 'interactive',
    complexity: 'medium',
    icon: Settings,
    placeholderContent: {
      controls: ['button', 'switch', 'slider', 'select']
    }
  },
};

/**
 * @api getComponentsByCategory
 * @description Filter components by category (layout, content, interactive, marketing)
 * @methods GET
 * @feature component-filtering
 */
export function getComponentsByCategory(category: string): ComponentDefinition[] {
  return Object.values(componentRegistry).filter(comp => comp.category === category);
}

export function getComponentById(id: ComponentType): ComponentDefinition | undefined {
  return componentRegistry[id];
}

export function getAllComponents(): ComponentDefinition[] {
  return Object.values(componentRegistry);
}

export function getComponentsByComplexity(complexity: 'simple' | 'medium' | 'advanced'): ComponentDefinition[] {
  return Object.values(componentRegistry).filter(comp => comp.complexity === complexity);
}
