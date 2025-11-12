import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter
} from './card';
import { Button } from './button';
import { Badge } from './badge';
import { User, Settings, MoreVertical, Heart, Share2 } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component for displaying content in organized sections. Supports headers, content areas, and footers with various layouts.'
      }
    }
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The card content'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

// Basic card structure
export const Basic: Story = {
  render: () => (
    <Card className="w-80">
      <CardContent>
        <p>This is a basic card with content.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A simple card with basic content'
      }
    }
  }
};

// Complete card with all sections
export const CompleteCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          A brief description of what this card contains.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card demonstrates all the available sections: header with title,
          description, and action; content area; and footer with buttons.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">
          Save
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A complete card showcasing all available sections and components'
      }
    }
  }
};

// Different card layouts
export const Layouts: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Content Only</h3>
        <Card className="w-80">
          <CardContent>
            <p>Simple card with just content.</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Header Only</h3>
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Header Only</CardTitle>
            <CardDescription>Card with header but no main content section.</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Footer Only</h3>
        <Card className="w-80">
          <CardContent>
            <p>Card with footer but minimal content.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different card layouts showing various combinations of sections'
      }
    }
  }
};

// Real-world use cases
export const UseCases: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">User Profile Card</h3>
        <Card className="w-80">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Premium Customer</CardDescription>
              </div>
            </div>
            <CardAction>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Member since:</span>
                <span>2023</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total orders:</span>
                <span>15</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Profile</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Product Card</h3>
        <Card className="w-80">
          <CardHeader>
            <div className="aspect-video bg-muted rounded-lg mb-4"></div>
            <CardTitle>Premium Wheel Set</CardTitle>
            <CardDescription>High-performance web solutions</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">$299.99</span>
              <Badge variant="secondary">In Stock</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button className="flex-1">Add to Cart</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Service Card</h3>
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Powder Coating</CardTitle>
            <CardDescription>Professional wheel refinishing service</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1">
              <li>• RAL color matching</li>
              <li>• UV-resistant finish</li>
              <li>• 2-year warranty</li>
            </ul>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline">Learn More</Button>
            <Button>Request Quote</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world card examples showing different use cases in your SmartWheels application'
      }
    }
  }
};

// Card grid layout
export const GridLayout: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Service {i}</CardTitle>
            <CardDescription>Professional web development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Comprehensive website development and customization services.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm" className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards arranged in a responsive grid layout, perfect for service listings'
      }
    }
  }
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Small Card</h3>
        <Card className="w-64">
          <CardHeader>
            <CardTitle className="text-lg">Compact</CardTitle>
            <CardDescription>Small card for tight spaces</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Minimal content in a compact layout.</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Medium Card</h3>
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Standard</CardTitle>
            <CardDescription>Medium card for most content</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a standard card size that works well for most content types and provides good readability.</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Large Card</h3>
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Expanded</CardTitle>
            <CardDescription>Large card for detailed content</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This larger card provides more space for detailed information, images, or complex layouts. It's perfect for product showcases or detailed service descriptions.</p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm">Additional content area for more details.</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Secondary Action</Button>
            <Button>Primary Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards in different sizes showing how they adapt to various content amounts'
      }
    }
  }
};
