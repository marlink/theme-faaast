import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  XCircle,
  Truck,
  Settings,
  Star,
  Zap,
  Crown,
  Shield,
  Users,
  DollarSign,
  Calendar,
  MapPin
} from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component for status indicators, tags, and labels. Supports multiple variants and can be used as links.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The visual style variant of the badge'
    },
    children: {
      control: { type: 'text' },
      description: 'The badge content'
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Whether to render as a child component'
    }
  },
  args: {
    children: 'Badge',
    variant: 'default'
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Basic variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Badge Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available badge variants showcasing different visual styles'
      }
    }
  }
};

// Status indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Service Request Status</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Pending
          </Badge>
          <Badge variant="default" className="flex items-center gap-1">
            <Settings className="h-3 w-3" />
            In Progress
          </Badge>
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            On Hold
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Completed
          </Badge>
          <Badge variant="destructive" className="flex items-center gap-1">
            <XCircle className="h-3 w-3" />
            Cancelled
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Delivery Status</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Truck className="h-3 w-3" />
            Preparing
          </Badge>
          <Badge variant="default" className="flex items-center gap-1">
            <Truck className="h-3 w-3" />
            In Transit
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            Out for Delivery
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Delivered
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status badges for service requests and delivery tracking with icons'
      }
    }
  }
};

// Tags and categories
export const TagsAndCategories: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Service Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Powder Coating</Badge>
          <Badge variant="secondary">CNC Machining</Badge>
          <Badge variant="secondary">Wheel Straightening</Badge>
          <Badge variant="secondary">Wheel Repair</Badge>
          <Badge variant="secondary">Custom Work</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Wheel Sizes</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">17"</Badge>
          <Badge variant="outline">18"</Badge>
          <Badge variant="outline">19"</Badge>
          <Badge variant="outline">20"</Badge>
          <Badge variant="outline">21"</Badge>
          <Badge variant="outline">22"</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Color Options</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Matte Black</Badge>
          <Badge variant="outline">Gloss White</Badge>
          <Badge variant="outline">Candy Red</Badge>
          <Badge variant="outline">Royal Blue</Badge>
          <Badge variant="outline">Custom Color</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Category and tag badges for filtering and organization'
      }
    }
  }
};

// Pricing and features
export const PricingAndFeatures: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Pricing Tiers</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <DollarSign className="h-3 w-3" />
            Basic
          </Badge>
          <Badge variant="default" className="flex items-center gap-1">
            <Star className="h-3 w-3" />
            Premium
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Crown className="h-3 w-3" />
            VIP
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Service Features</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Warranty
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Zap className="h-3 w-3" />
            Rush Service
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Truck className="h-3 w-3" />
            Free Delivery
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            Expert Craftsmanship
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pricing tiers and service features with descriptive badges'
      }
    }
  }
};

// Interactive badges
export const InteractiveBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Clickable Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" asChild>
            <button onClick={() => alert('Filter by Powder Coating')}>
              Powder Coating ×
            </button>
          </Badge>
          <Badge variant="outline" asChild>
            <button onClick={() => alert('Filter by 18 inch')}>
              18" ×
            </button>
          </Badge>
          <Badge variant="outline" asChild>
            <button onClick={() => alert('Remove Matte Black filter')}>
              Matte Black ×
            </button>
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Navigation Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" asChild>
            <a href="#services" className="cursor-pointer">
              Services
            </a>
          </Badge>
          <Badge variant="secondary" asChild>
            <a href="#portfolio" className="cursor-pointer">
              Portfolio
            </a>
          </Badge>
          <Badge variant="secondary" asChild>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive badges that can be used as buttons or links'
      }
    }
  }
};

// In context examples
export const InContext: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Service Request #12345</CardTitle>
            <Badge variant="default">In Progress</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Customer:</span>
            <span className="text-sm font-medium">John Doe</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Service:</span>
            <Badge variant="secondary">Powder Coating</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Wheel Size:</span>
            <Badge variant="outline">18"</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Priority:</span>
            <Badge variant="destructive">Rush</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Status:</span>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Settings className="h-3 w-3" />
              Being Processed
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">Powder Coating</h4>
                <p className="text-sm text-muted-foreground">Professional color coating service</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary">$89</Badge>
                <Badge variant="outline">2-3 days</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">CNC Machining</h4>
                <p className="text-sm text-muted-foreground">Precision wheel modifications</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary">$149</Badge>
                <Badge variant="outline">3-5 days</Badge>
                <Badge variant="default">Popular</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">Wheel Straightening</h4>
                <p className="text-sm text-muted-foreground">Website bug fix service</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary">$79</Badge>
                <Badge variant="outline">1-2 days</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Filter Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium mb-2">Active Filters</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" asChild>
                  <button>Service: Powder Coating ×</button>
                </Badge>
                <Badge variant="default" asChild>
                  <button>Size: 18" ×</button>
                </Badge>
                <Badge variant="default" asChild>
                  <button>Status: In Progress ×</button>
                </Badge>
                <Button variant="ghost" size="sm">Clear All</Button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Quick Filters</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" asChild>
                  <button>Rush Orders</button>
                </Badge>
                <Badge variant="outline" asChild>
                  <button>Completed Today</button>
                </Badge>
                <Badge variant="outline" asChild>
                  <button>High Priority</button>
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges used in real application contexts like service requests, pricing, and filtering'
      }
    }
  }
};

// Sizes and variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Badge Sizes (via className)</h3>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
            XS
          </Badge>
          <Badge variant="secondary">
            SM
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            MD
          </Badge>
          <Badge variant="secondary" className="text-base px-4 py-1.5">
            LG
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Badge Shapes</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="rounded-full">
            Rounded
          </Badge>
          <Badge variant="outline" className="rounded-none">
            Square
          </Badge>
          <Badge variant="outline" className="rounded-sm">
            Slightly Rounded
          </Badge>
          <Badge variant="outline" className="rounded-lg">
            More Rounded
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different badge sizes and shapes using Tailwind classes'
      }
    }
  }
};
