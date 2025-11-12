'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { componentRegistry, getComponentsByCategory } from '@/lib/component-registry';
import type { ComponentType } from '@/types/theme';
import { Search, Filter, CheckCircle } from 'lucide-react';

interface ComponentSelectorProps {
  selectedComponents: ComponentType[];
  onSelectionChange: (components: ComponentType[]) => void;
}

/**
 * @component ComponentSelector
 * @description Interface for browsing and selecting components for website building
 * @category theme
 * @complexity medium
 * @feature component-selection
 * @user-story US-007
 * @status implemented
 */
export function ComponentSelector({ selectedComponents, onSelectionChange }: ComponentSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'layout', 'content', 'interactive', 'marketing'];

  const filteredComponents = Object.values(componentRegistry).filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleComponent = (componentId: ComponentType) => {
    if (selectedComponents.includes(componentId)) {
      onSelectionChange(selectedComponents.filter(id => id !== componentId));
    } else {
      onSelectionChange([...selectedComponents, componentId]);
    }
  };

  const selectAllInCategory = (category: string) => {
    const categoryComponents = category === 'all'
      ? Object.keys(componentRegistry) as ComponentType[]
      : getComponentsByCategory(category).map(comp => comp.id);

    const newSelection = Array.from(new Set([...selectedComponents, ...categoryComponents]));
    onSelectionChange(newSelection);
  };

  const clearSelection = () => {
    onSelectionChange([]);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Component Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search components..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => selectAllInCategory(selectedCategory)}
            >
              Select All {selectedCategory === 'all' ? '' : selectedCategory}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearSelection}
              disabled={selectedComponents.length === 0}
            >
              Clear Selection
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredComponents.map(component => {
          const isSelected = selectedComponents.includes(component.id);
          const IconComponent = component.icon;

          return (
            <Card
              key={component.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                isSelected
                  ? 'ring-2 ring-primary border-primary'
                  : 'border-border'
              }`}
              onClick={() => toggleComponent(component.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`p-2 rounded-md ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{component.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {component.description}
                      </p>
                    </div>
                  </div>
                  <Checkbox
                    checked={isSelected}
                    onChange={() => {}} // Handled by card click
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">
                    {component.category}
                  </Badge>
                  <Badge
                    variant={component.complexity === 'simple' ? 'secondary' :
                            component.complexity === 'medium' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {component.complexity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-muted/50 rounded-md flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Preview</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredComponents.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground">No components found matching your criteria.</p>
          </CardContent>
        </Card>
      )}

      {/* Selection Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Selected Components ({selectedComponents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {selectedComponents.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {selectedComponents.map(componentId => {
                const component = componentRegistry[componentId];
                if (!component) return null;

                const IconComponent = component.icon;
                return (
                  <div key={componentId} className="flex items-center gap-2 p-2 bg-muted rounded-md">
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{component.name}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-muted-foreground">No components selected yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
