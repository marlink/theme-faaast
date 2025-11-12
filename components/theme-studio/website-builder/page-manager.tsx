'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { componentRegistry } from '@/lib/component-registry';
import type { PageConfig, ComponentType } from '@/types/theme';
import { Plus, Edit, Trash2, GripVertical, AlertCircle } from 'lucide-react';

interface PageManagerProps {
  pages: PageConfig[];
  availableComponents: ComponentType[];
  maxPages: number;
  maxComponentsPerPage: number;
  onPagesChange: (pages: PageConfig[]) => void;
}

/**
 * @component PageManager
 * @description Interface for creating and managing website pages with component assignment
 * @category theme
 * @complexity medium
 * @feature page-management
 * @user-story US-008
 * @status implemented
 */
export function PageManager({
  pages,
  availableComponents,
  maxPages,
  maxComponentsPerPage,
  onPagesChange
}: PageManagerProps) {
  const [editingPage, setEditingPage] = useState<PageConfig | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pageToDelete, setPageToDelete] = useState<string | null>(null);

  const createNewPage = () => {
    if (pages.length >= maxPages) return;

    const newPage: PageConfig = {
      id: `page-${Date.now()}`,
      title: `New Page ${pages.length + 1}`,
      slug: `page-${pages.length + 1}`,
      components: [],
      order: pages.length
    };

    onPagesChange([...pages, newPage]);
  };

  const updatePage = (pageId: string, updates: Partial<PageConfig>) => {
    onPagesChange(pages.map(page =>
      page.id === pageId ? { ...page, ...updates } : page
    ));
  };

  const deletePage = (pageId: string) => {
    onPagesChange(pages.filter(page => page.id !== pageId));
    setPageToDelete(null);
  };

  const toggleComponent = (pageId: string, componentId: ComponentType) => {
    const page = pages.find(p => p.id === pageId);
    if (!page) return;

    const hasComponent = page.components.includes(componentId);
    const newComponents = hasComponent
      ? page.components.filter(id => id !== componentId)
      : [...page.components, componentId];

    if (newComponents.length <= maxComponentsPerPage) {
      updatePage(pageId, { components: newComponents });
    }
  };

  const movePage = (pageId: string, direction: 'up' | 'down') => {
    const currentIndex = pages.findIndex(p => p.id === pageId);
    if (currentIndex === -1) return;

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= pages.length) return;

    const newPages = [...pages];
    [newPages[currentIndex], newPages[newIndex]] = [newPages[newIndex], newPages[currentIndex]];

    // Update order values
    newPages.forEach((page, index) => {
      page.order = index;
    });

    onPagesChange(newPages);
  };

  return (
    <div className="space-y-6">
      {/* Page List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Pages ({pages.length}/{maxPages})</CardTitle>
            <Button
              onClick={createNewPage}
              disabled={pages.length >= maxPages}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Page
            </Button>
          </div>
          {pages.length >= maxPages && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertCircle className="w-4 h-4" />
              Maximum number of pages reached
            </div>
          )}
        </CardHeader>
        <CardContent>
          {pages.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="mb-4">No pages created yet. Click "Add Page" to get started.</p>
              <Button onClick={createNewPage}>
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Page
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {pages.map((page, index) => (
                <Card key={page.id} className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <GripVertical className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <CardTitle className="text-lg">{page.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">/{page.slug}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {page.components.length}/{maxComponentsPerPage} Components
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => movePage(page.id, 'up')}
                            disabled={index === 0}
                          >
                            ↑
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => movePage(page.id, 'down')}
                            disabled={index === pages.length - 1}
                          >
                            ↓
                          </Button>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingPage(page);
                            setIsDialogOpen(true);
                          }}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPageToDelete(page.id)}
                          disabled={pages.length <= 1}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {page.components.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {page.components.map(componentId => {
                          const component = componentRegistry[componentId];
                          return (
                            <Badge key={componentId} variant="secondary" className="flex items-center gap-1">
                              {component?.icon && <component.icon className="w-3 h-3" />}
                              {component?.name || componentId}
                            </Badge>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">No components added yet.</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Page Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Page</DialogTitle>
          </DialogHeader>
          {editingPage && (
            <div className="space-y-6">
              {/* Page Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="page-title">Page Title</Label>
                  <Input
                    id="page-title"
                    value={editingPage.title}
                    onChange={(e) => setEditingPage({...editingPage, title: e.target.value})}
                    placeholder="Enter page title"
                  />
                </div>
                <div>
                  <Label htmlFor="page-slug">URL Slug</Label>
                  <Input
                    id="page-slug"
                    value={editingPage.slug}
                    onChange={(e) => setEditingPage({...editingPage, slug: e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')})}
                    placeholder="page-slug"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Used in the URL: /{editingPage.slug}
                  </p>
                </div>
              </div>

              {/* Component Selection */}
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Components ({editingPage.components.length}/{maxComponentsPerPage})
                </Label>
                {availableComponents.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
                    <p className="mb-2">No components available</p>
                    <p className="text-sm">Go to the Components tab to select components first.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableComponents.map(componentId => {
                      const component = componentRegistry[componentId];
                      if (!component) return null;

                      const isSelected = editingPage.components.includes(componentId);
                      const isDisabled = !isSelected && editingPage.components.length >= maxComponentsPerPage;
                      const IconComponent = component.icon;

                      return (
                        <div
                          key={componentId}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${
                            isSelected ? 'border-primary bg-primary/5' :
                            isDisabled ? 'border-muted bg-muted/50 opacity-50 cursor-not-allowed' :
                            'border-border hover:border-primary/50'
                          }`}
                          onClick={() => !isDisabled && toggleComponent(editingPage.id, componentId)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 flex-1">
                              <div className={`p-1.5 rounded ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">{component.name}</h4>
                                <p className="text-xs text-muted-foreground">{component.category}</p>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              readOnly
                              className="rounded"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => {
                  updatePage(editingPage.id, {
                    title: editingPage.title,
                    slug: editingPage.slug,
                    components: editingPage.components
                  });
                  setIsDialogOpen(false);
                }}>
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!pageToDelete} onOpenChange={() => setPageToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Page</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this page? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => pageToDelete && deletePage(pageToDelete)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
