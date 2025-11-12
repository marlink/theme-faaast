import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';
import { Card, CardContent, CardHeader } from './card';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A skeleton loader component that provides visual feedback while content is loading, with smooth pulse animation.'
      }
    }
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for custom sizing and styling'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// Basic skeleton
export const Basic: Story = {
  render: () => (
    <div className="space-y-3 w-80">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic skeleton loaders with different widths'
      }
    }
  }
};

// Card skeleton
export const CardSkeleton: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader className="space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card skeleton mimicking the structure of a typical card component'
      }
    }
  }
};

// Profile skeleton
export const ProfileSkeleton: Story = {
  render: () => (
    <div className="flex items-center gap-4 w-80">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Profile skeleton with avatar and text content'
      }
    }
  }
};

// Table skeleton
export const TableSkeleton: Story = {
  render: () => (
    <div className="space-y-3 w-full max-w-2xl">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 pb-2 border-b">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-14" />
      </div>

      {/* Table Rows */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4 py-3 border-b">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-10" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Table skeleton showing loading state for tabular data'
      }
    }
  }
};

// Dashboard skeleton
export const DashboardSkeleton: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      {/* Header */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-1" />
              <Skeleton className="h-3 w-20" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Area */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complex dashboard skeleton with multiple sections and components'
      }
    }
  }
};

// List skeleton
export const ListSkeleton: Story = {
  render: () => (
    <div className="space-y-3 w-80">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-3 p-3 border rounded-lg">
          <Skeleton className="h-8 w-8 rounded" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'List skeleton for showing loading state of list items'
      }
    }
  }
};

// Form skeleton
export const FormSkeleton: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader className="space-y-3">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-64" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-24 w-full" />
        </div>

        <div className="flex gap-2 pt-4">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-24" />
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form skeleton showing loading state for form inputs and buttons'
      }
    }
  }
};

// Image gallery skeleton
export const GallerySkeleton: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Gallery skeleton for image grids with captions'
      }
    }
  }
};

// Comment skeleton
export const CommentSkeleton: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-3">
          <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comment skeleton for social features and discussion threads'
      }
    }
  }
};

// Loading states with different sizes
export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Text Sizes</h3>
        <div className="space-y-1">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Avatar Sizes</h3>
        <div className="flex gap-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-16 w-16 rounded-full" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Button Sizes</h3>
        <div className="flex gap-2">
          <Skeleton className="h-6 w-12 rounded" />
          <Skeleton className="h-8 w-16 rounded" />
          <Skeleton className="h-10 w-20 rounded" />
          <Skeleton className="h-12 w-24 rounded" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Custom Shapes</h3>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-8 w-full rounded-none" />
          <Skeleton className="h-6 w-full rounded-sm" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Skeleton components with different sizes and shapes for various UI elements'
      }
    }
  }
};
