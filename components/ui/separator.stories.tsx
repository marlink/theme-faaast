import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible separator component for dividing content sections with horizontal or vertical orientations.'
      }
    }
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator'
    }
  },
  args: {
    orientation: 'horizontal'
  }
};

export default meta;
type Story = StoryObj<typeof Separator>;

// Basic horizontal separator
export const Horizontal: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Section 1</h3>
        <p className="text-sm text-muted-foreground">
          This is the first section with some content.
        </p>
      </div>

      <Separator />

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Section 2</h3>
        <p className="text-sm text-muted-foreground">
          This is the second section separated by a horizontal line.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic horizontal separator dividing content sections'
      }
    }
  }
};

// Vertical separator
export const Vertical: Story = {
  render: () => (
    <div className="flex h-32 items-center space-x-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Left Panel</h3>
        <p className="text-xs text-muted-foreground">
          Content on the left side
        </p>
        <Button size="sm">Action</Button>
      </div>

      <Separator orientation="vertical" />

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Right Panel</h3>
        <p className="text-xs text-muted-foreground">
          Content on the right side
        </p>
        <Button size="sm" variant="outline">Action</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical separator creating side-by-side layout sections'
      }
    }
  }
};

// In card with sections
export const CardSections: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Service Request Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Order ID</span>
            <Badge variant="secondary">#ORD-001</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Status</span>
            <Badge variant="default">In Progress</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Service</span>
            <span className="text-sm">Powder Coating</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Customer Information</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>John Doe</div>
            <div>john@example.com</div>
            <div>+1 (555) 123-4567</div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Service Details</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>18" Alloy Wheels × 4</div>
            <div>Color: Matte Black</div>
            <div>Finish: UV Resistant</div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Total</span>
          <span className="text-lg font-bold">$89.00</span>
        </div>

        <div className="flex gap-2 pt-4">
          <Button variant="outline" className="flex-1">Edit Order</Button>
          <Button className="flex-1">Complete</Button>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Separators used within a card to organize different information sections'
      }
    }
  }
};

// Form sections
export const FormSections: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Multi-Step Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-3">Step 1: Service Selection</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="service" className="rounded" />
                <span className="text-sm">Powder Coating</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="service" className="rounded" />
                <span className="text-sm">CNC Machining</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="service" className="rounded" />
                <span className="text-sm">Wheel Straightening</span>
              </label>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium mb-3">Step 2: Specifications</h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Project type (e.g., E-commerce site)"
                className="w-full px-3 py-2 border rounded text-sm"
              />
              <input
                type="text"
                placeholder="Design preferences"
                className="w-full px-3 py-2 border rounded text-sm"
              />
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium mb-3">Step 3: Contact Information</h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-3 py-2 border rounded text-sm"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded text-sm"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-3 py-2 border rounded text-sm"
              />
            </div>
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <Button variant="outline">Previous</Button>
            <div className="flex gap-2">
              <Button variant="outline">Save Draft</Button>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Separators organizing different steps in a multi-step form'
      }
    }
  }
};

// Navigation sections
export const NavigationSections: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Main Navigation</h4>
        <nav className="space-y-1">
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Dashboard</a>
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Orders</a>
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Services</a>
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Customers</a>
        </nav>
      </div>

      <Separator />

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Account</h4>
        <nav className="space-y-1">
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Profile</a>
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Settings</a>
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Billing</a>
        </nav>
      </div>

      <Separator />

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Support</h4>
        <nav className="space-y-1">
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Help Center</a>
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Contact Us</a>
          <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Feedback</a>
        </nav>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Separators organizing different sections in a navigation sidebar'
      }
    }
  }
};

// Data table sections
export const DataTableSections: Story = {
  render: () => (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 font-medium text-sm pb-2 border-b">
            <div>Order ID</div>
            <div>Customer</div>
            <div>Service</div>
            <div>Status</div>
            <div className="text-right">Amount</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            <div className="grid grid-cols-5 gap-4 text-sm py-2">
              <div className="font-medium">#ORD-001</div>
              <div>John Doe</div>
              <div>Powder Coating</div>
              <div><Badge variant="secondary">Completed</Badge></div>
              <div className="text-right">$89.00</div>
            </div>

            <div className="grid grid-cols-5 gap-4 text-sm py-2">
              <div className="font-medium">#ORD-002</div>
              <div>Jane Smith</div>
              <div>CNC Machining</div>
              <div><Badge variant="default">In Progress</Badge></div>
              <div className="text-right">$149.00</div>
            </div>

            <div className="grid grid-cols-5 gap-4 text-sm py-2">
              <div className="font-medium">#ORD-003</div>
              <div>Mike Johnson</div>
              <div>Wheel Straightening</div>
              <div><Badge variant="outline">Pending</Badge></div>
              <div className="text-right">$79.00</div>
            </div>
          </div>

          <Separator />

          {/* Summary */}
          <div className="flex justify-between items-center pt-2">
            <span className="font-medium">Total for March</span>
            <span className="text-lg font-bold">$317.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Separators organizing data table sections and summary information'
      }
    }
  }
};

// Themed separators
export const ThemedSeparators: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default Separator</h3>
        <div className="space-y-2">
          <p className="text-sm">Content above</p>
          <Separator />
          <p className="text-sm">Content below</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Thicker Separator</h3>
        <div className="space-y-2">
          <p className="text-sm">Content above</p>
          <Separator className="h-0.5" />
          <p className="text-sm">Content below</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Dashed Separator</h3>
        <div className="space-y-2">
          <p className="text-sm">Content above</p>
          <Separator className="border-dashed" />
          <p className="text-sm">Content below</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Colored Separator</h3>
        <div className="space-y-2">
          <p className="text-sm">Content above</p>
          <Separator className="bg-blue-200" />
          <p className="text-sm">Content below</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different separator styles and customizations using Tailwind classes'
      }
    }
  }
};
