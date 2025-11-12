import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { User, Plus, Trash2, Heart, Star } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and interactive states. Supports icons, loading states, and various use cases.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'pill', 'pill-outline', 'badge', 'badge-outline'],
      description: 'The visual style variant of the button'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl', '2xl', 'icon', 'icon-sm', 'icon-lg'],
      description: 'The size variant of the button'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled'
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Whether to render as a child component using Radix Slot'
    },
    children: {
      control: { type: 'text' },
      description: 'The button content'
    },
    onClick: { action: 'clicked' }
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default'
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic variants showcase
export const Variants: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Standard Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default" size={args.size}>Default</Button>
          <Button variant="destructive" size={args.size}>Destructive</Button>
          <Button variant="outline" size={args.size}>Outline</Button>
          <Button variant="secondary" size={args.size}>Secondary</Button>
          <Button variant="ghost" size={args.size}>Ghost</Button>
          <Button variant="link" size={args.size}>Link</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Special Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="pill" size={args.size}>Pill</Button>
          <Button variant="pill-outline" size={args.size}>Pill Outline</Button>
          <Button variant="badge" size={args.size}>Badge</Button>
          <Button variant="badge-outline" size={args.size}>Badge Outline</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all button variants with consistent sizing'
      }
    }
  }
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Standard Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="default" size="xs">XS</Button>
          <Button variant="default" size="sm">SM</Button>
          <Button variant="default" size="default">Default</Button>
          <Button variant="default" size="lg">LG</Button>
          <Button variant="default" size="xl">XL</Button>
          <Button variant="default" size="2xl">2XL</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Icon Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="icon-sm">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon-lg">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of all available button sizes and icon button variations'
      }
    }
  }
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Icon + Text Combinations</h3>
        <div className="flex flex-wrap gap-2">
          <Button>
            <Plus className="h-4 w-4" />
            Add Item
          </Button>
          <Button variant="outline">
            <Heart className="h-4 w-4" />
            Favorite
          </Button>
          <Button variant="destructive">
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Icon Only Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Star className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons, showing both icon+text and icon-only variations'
      }
    }
  }
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Interactive States</h3>
        <div className="flex flex-wrap gap-2">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button asChild>
            <a href="#link">As Link</a>
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Loading States (Simulated)</h3>
        <div className="flex flex-wrap gap-2">
          <Button disabled>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
            Loading...
          </Button>
          <Button variant="outline" disabled>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
            Processing
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various button states including disabled, loading, and link variants'
      }
    }
  }
};

// Use case examples
export const UseCases: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Primary Actions</h3>
        <div className="flex flex-wrap gap-2">
          <Button>Save Changes</Button>
          <Button variant="destructive">Delete Account</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Secondary Actions</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="ghost">Edit</Button>
          <Button variant="ghost">Share</Button>
          <Button variant="ghost">Export</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Navigation</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="link">View Details</Button>
          <Button variant="link">Learn More</Button>
          <Button variant="link">Contact Us</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Tags/Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="badge">New</Button>
          <Button variant="badge-outline">Draft</Button>
          <Button variant="badge">Premium</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing different button variants in context'
      }
    }
  }
};

// Playground for interactive testing
export const Playground: Story = {
  args: {
    children: 'Click me!',
    variant: 'default',
    size: 'default',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different button configurations'
      }
    }
  }
};

// Accessibility examples
export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Focus Management</h3>
        <p className="text-xs text-muted-foreground mb-2">
          Tab through these buttons to see focus rings
        </p>
        <div className="flex flex-wrap gap-2">
          <Button>Focusable Button</Button>
          <Button variant="outline">Outline Focus</Button>
          <Button variant="ghost">Ghost Focus</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Screen Reader Support</h3>
        <div className="flex flex-wrap gap-2">
          <Button aria-label="Save document">💾</Button>
          <Button aria-label="Delete item" variant="destructive">
            🗑️
          </Button>
          <Button aria-describedby="button-description">
            Info Button
          </Button>
        </div>
        <p id="button-description" className="text-xs text-muted-foreground">
          This button provides additional information
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of accessible button implementations with proper ARIA attributes and focus management'
      }
    }
  }
};

// Theme responsiveness
export const ThemeExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Theme-Aware Variants</h3>
        <p className="text-xs text-muted-foreground mb-2">
          These buttons adapt to light/dark themes automatically
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button variant="pill">Pill</Button>
          <Button variant="badge">Badge</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of how buttons adapt to different themes and color schemes'
      }
    }
  }
};
