'use client';

import { useParams } from 'next/navigation';
import { useTheme } from '@/lib/theme-engine/theme-context';
import { componentRegistry } from '@/lib/component-registry';
import { Navigation } from '@/components/navigation';
import type { ComponentType } from '@/types/theme';

export default function DynamicPage() {
  const params = useParams();
  const { theme } = useTheme();
  const slug = params.slug as string;

  // Find the page configuration
  const page = theme.website?.pages.find(p => p.slug === slug);

  if (!page) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
            <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  const renderComponent = (componentId: ComponentType) => {
    const component = componentRegistry[componentId];

    if (!component) {
      return (
        <div key={componentId} className="p-6 border rounded-lg mb-6">
          <p className="text-muted-foreground">Component "{componentId}" not found</p>
        </div>
      );
    }

    // For now, return a placeholder. In a full implementation, you'd have
    // actual component implementations here based on the componentId
    return (
      <div key={componentId} className="p-6 border rounded-lg mb-6">
        <div className="flex items-center gap-3 mb-4">
          <component.icon className="w-6 h-6" />
          <h2 className="text-2xl font-bold">{component.name}</h2>
        </div>
        <p className="text-muted-foreground mb-4">{component.description}</p>

        {/* Render placeholder content based on component type */}
        <div className="bg-muted/50 p-4 rounded-lg">
          {component.placeholderContent && (
            <div className="space-y-2">
              {Object.entries(component.placeholderContent).map(([key, value]) => (
                <div key={key} className="text-sm">
                  <span className="font-medium text-muted-foreground">{key}:</span>{' '}
                  <span className="text-foreground">
                    {typeof value === 'string' ? value :
                     Array.isArray(value) ? `[${value.join(', ')}]` :
                     JSON.stringify(value)}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 p-4 bg-background rounded border-2 border-dashed">
            <p className="text-sm text-muted-foreground text-center">
              Component preview - styled with current theme
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero section if it's the first component and it's a hero */}
      {page.components[0] === 'hero-section' && (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              {page.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Welcome to {page.title} - built with your custom theme and components.
            </p>
          </div>
        </section>
      )}

      {/* Main content */}
      <main className="container mx-auto px-4 py-20">
        {/* Page title if not using hero section */}
        {page.components[0] !== 'hero-section' && (
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">{page.title}</h1>
            <p className="text-lg text-muted-foreground">
              Custom page built with the website builder
            </p>
          </div>
        )}

        {/* Render page components */}
        <div className="space-y-8">
          {page.components.map((componentId) => renderComponent(componentId))}
        </div>

        {/* Page info */}
        <div className="mt-16 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-2">Page Information</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Slug:</span> /{page.slug}
            </div>
            <div>
              <span className="text-muted-foreground">Components:</span> {page.components.length}
            </div>
            <div>
              <span className="text-muted-foreground">Theme:</span> {theme.name}
            </div>
            <div>
              <span className="text-muted-foreground">Built with:</span> Website Builder
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 {theme.website?.name || 'Your Website'} - Built with Theme Studio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
