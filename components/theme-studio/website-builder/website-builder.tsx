'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/lib/theme-engine/theme-context';
import type { WebsiteConfig, ComponentType } from '@/types/theme';
import { Plus, Eye, Settings, Component, FileText, Monitor } from 'lucide-react';
import { ComponentSelector } from './component-selector';
import { PageManager } from './page-manager';
import { WebsitePreview } from './website-preview';

/**
 * @component WebsiteBuilder
 * @description Main interface for creating custom website pages with component selection
 * @category theme
 * @complexity advanced
 * @feature website-builder
 * @user-story US-007, US-008, US-009, US-010
 * @status implemented
 * @version 1.0.0
 */
export function WebsiteBuilder() {
  const { theme, updateTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('components');

  // Initialize website config if it doesn't exist
  const websiteConfig: WebsiteConfig = theme.website || {
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
  };

  const updateWebsiteConfig = (updates: Partial<WebsiteConfig>) => {
    updateTheme({
      website: {
        ...websiteConfig,
        ...updates
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Website Builder
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Select components and create pages for your website
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">
                {websiteConfig.pages.length}/{websiteConfig.maxPages} Pages
              </Badge>
              <Badge variant="outline">
                {websiteConfig.availableComponents.length} Components Available
              </Badge>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Builder Interface */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="components" className="flex items-center gap-2">
            <Component className="w-4 h-4" />
            Components
          </TabsTrigger>
          <TabsTrigger value="pages" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Pages
          </TabsTrigger>
          <TabsTrigger value="preview" className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            Preview
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="components">
            <ComponentSelector
              selectedComponents={websiteConfig.availableComponents}
              onSelectionChange={(components) =>
                updateWebsiteConfig({ availableComponents: components })
              }
            />
          </TabsContent>

          <TabsContent value="pages">
            <PageManager
              pages={websiteConfig.pages}
              availableComponents={websiteConfig.availableComponents}
              maxPages={websiteConfig.maxPages}
              maxComponentsPerPage={websiteConfig.maxComponentsPerPage}
              onPagesChange={(pages) => updateWebsiteConfig({ pages })}
            />
          </TabsContent>

          <TabsContent value="preview">
            <WebsitePreview
              websiteConfig={websiteConfig}
              theme={theme}
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
