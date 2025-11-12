'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { componentRegistry } from '@/lib/component-registry';
import type { WebsiteConfig, ThemeConfig } from '@/types/theme';
import { Eye, ExternalLink, FileText, Layers, Zap } from 'lucide-react';

interface WebsitePreviewProps {
  websiteConfig: WebsiteConfig;
  theme: ThemeConfig;
}

/**
 * @component WebsitePreview
 * @description Live preview of created website pages with component layout and theming
 * @category theme
 * @complexity medium
 * @feature website-preview
 * @user-story US-010
 * @status implemented
 */
export function WebsitePreview({ websiteConfig, theme }: WebsitePreviewProps) {
  const totalComponents = websiteConfig.pages.reduce((acc, page) => acc + page.components.length, 0);

  return (
    <div className="space-y-6">
      {/* Preview Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Website Preview
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                See how your website will look with the selected components and theme
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Full Preview
              </Button>
              <Button size="sm">
                Export Website
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Page Previews */}
      <div className="space-y-8">
        {websiteConfig.pages.map(page => (
          <Card key={page.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <CardTitle className="text-xl">{page.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">/{page.slug}</p>
                  </div>
                </div>
                <Badge variant="outline">
                  {page.components.length} component{page.components.length !== 1 ? 's' : ''}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {page.components.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
                  <Layers className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-2">No components added to this page</p>
                  <p className="text-sm">Add components in the Pages tab to see the preview.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Page Structure Preview */}
                  <div className="border rounded-lg overflow-hidden">
                    {/* Mock Browser Header */}
                    <div className="bg-muted px-4 py-2 border-b flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-background rounded px-2 py-1 text-xs text-muted-foreground">
                        yoursite.com/{page.slug}
                      </div>
                    </div>

                    {/* Page Content Preview */}
                    <div className="bg-background min-h-[400px] p-6 space-y-6">
                      {page.components.map((componentId, index) => {
                        const component = componentRegistry[componentId];
                        if (!component) return null;

                        const IconComponent = component.icon;

                        return (
                          <div key={`${componentId}-${index}`}>
                            {/* Component Header */}
                            <div className="flex items-center gap-3 mb-4 pb-2 border-b">
                              <div className="p-2 bg-muted rounded">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{component.name}</h4>
                                <p className="text-sm text-muted-foreground">{component.description}</p>
                              </div>
                              <Badge variant="outline" className="ml-auto">
                                {component.category}
                              </Badge>
                            </div>

                            {/* Component Preview */}
                            <div className="border rounded-lg p-6 bg-card">
                              <div className="aspect-video bg-muted/50 rounded-md flex items-center justify-center mb-4">
                                <div className="text-center">
                                  <IconComponent className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                                  <p className="text-sm font-medium">{component.name}</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Preview with {theme.name} theme
                                  </p>
                                </div>
                              </div>

                              {/* Placeholder Content */}
                              <div className="space-y-3">
                                <div className="h-4 bg-muted rounded animate-pulse"></div>
                                <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                                <div className="h-8 bg-muted rounded animate-pulse w-1/2"></div>
                              </div>
                            </div>

                            {index < page.components.length - 1 && (
                              <Separator className="my-6" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Component List */}
                  <div>
                    <h4 className="font-semibold mb-3">Components on this page:</h4>
                    <div className="flex flex-wrap gap-2">
                      {page.components.map(componentId => {
                        const component = componentRegistry[componentId];
                        if (!component) return null;

                        const IconComponent = component.icon;
                        return (
                          <div key={componentId} className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md">
                            <IconComponent className="w-4 h-4" />
                            <span className="text-sm font-medium">{component.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Website Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Website Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{websiteConfig.pages.length}</div>
              <p className="text-sm text-muted-foreground">Pages Created</p>
              <p className="text-xs text-muted-foreground mt-1">Max: {websiteConfig.maxPages}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{totalComponents}</div>
              <p className="text-sm text-muted-foreground">Total Components</p>
              <p className="text-xs text-muted-foreground mt-1">Avg: {websiteConfig.pages.length > 0 ? (totalComponents / websiteConfig.pages.length).toFixed(1) : '0'} per page</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{websiteConfig.availableComponents.length}</div>
              <p className="text-sm text-muted-foreground">Components Available</p>
              <p className="text-xs text-muted-foreground mt-1">From library</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{Object.keys(theme.colors).length}</div>
              <p className="text-sm text-muted-foreground">Theme Colors</p>
              <p className="text-xs text-muted-foreground mt-1">{theme.name}</p>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Component Categories Used:</h4>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(
                  websiteConfig.pages.flatMap(page =>
                    page.components.map(compId => componentRegistry[compId]?.category).filter(Boolean)
                  )
                )).map(category => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Theme Information:</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Name:</span> {theme.name}</p>
                <p><span className="font-medium">Version:</span> {theme.version}</p>
                <p><span className="font-medium">Performance:</span> {theme.metadata.performance.tier}</p>
                <p><span className="font-medium">WCAG:</span> {theme.metadata.accessibility.wcagLevel}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Ready Notice */}
      {totalComponents > 0 && (
        <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-green-800 dark:text-green-200">Ready to Export!</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Your website is configured and ready for export. The theme and component selections will be applied automatically.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
