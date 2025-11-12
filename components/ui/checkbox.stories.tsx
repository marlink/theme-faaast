import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Label } from './label';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Separator } from './separator';
import { CheckCircle, Settings, Bell, Shield, Truck, CreditCard } from 'lucide-react';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox input component with accessibility features, keyboard navigation, and consistent styling.'
      }
    }
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is required'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Basic checkbox
export const Basic: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label>Accept terms and conditions</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic checkbox with label'
      }
    }
  }
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox />
        <Label>Unchecked</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox defaultChecked />
        <Label>Checked</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox disabled />
        <Label>Disabled (unchecked)</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox defaultChecked disabled />
        <Label>Disabled (checked)</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox required />
        <Label>Required field</Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different checkbox states: checked, unchecked, disabled, and required'
      }
    }
  }
};

// Service selection
export const ServiceSelection: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Select Services</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Checkbox id="powder-coating" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="powder-coating"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Powder Coating
              </Label>
              <p className="text-xs text-muted-foreground">
                Professional color coating with UV protection - $89
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="cnc-machining" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="cnc-machining"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                CNC Machining
              </Label>
              <p className="text-xs text-muted-foreground">
                Precision wheel modifications - $149
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="performance-optimization" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="performance-optimization"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Performance Optimization
              </Label>
              <p className="text-xs text-muted-foreground">
                Website bug fixes service - $79
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="custom-development" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="custom-development"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Custom Development
              </Label>
              <p className="text-xs text-muted-foreground">
                Comprehensive website development - $199
              </p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="font-medium">Total: $0</span>
          </div>
          <Button>Continue</Button>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Service selection interface using checkboxes with detailed descriptions'
      }
    }
  }
};

// Terms and conditions
export const TermsAndConditions: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Terms & Conditions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          By placing this order, you agree to our terms of service and acknowledge that you have read our privacy policy.
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Checkbox id="terms" required />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the Terms of Service
              </Label>
              <p className="text-xs text-muted-foreground">
                Required to proceed with your order
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="privacy" required />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="privacy"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the Privacy Policy
              </Label>
              <p className="text-xs text-muted-foreground">
                Required to proceed with your order
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="marketing" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="marketing"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subscribe to marketing emails
              </Label>
              <p className="text-xs text-muted-foreground">
                Optional - Receive updates about new services
              </p>
            </div>
          </div>
        </div>

        <Button className="w-full" disabled>
          Place Order
        </Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Legal agreement checkboxes with required and optional selections'
      }
    }
  }
};

// Settings panel
export const SettingsPanel: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Notification Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-3">Email Notifications</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Checkbox id="order-updates" defaultChecked />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="order-updates"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Order Updates
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Status changes and completion notifications
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="marketing-emails" />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="marketing-emails"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Marketing Emails
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Promotions and service announcements
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="newsletter" defaultChecked />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="newsletter"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Weekly Newsletter
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Industry news and tips
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium mb-3">Push Notifications</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Checkbox id="urgent-alerts" defaultChecked />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="urgent-alerts"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Urgent Alerts
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Important service notifications
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="reminders" />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="reminders"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Service Reminders
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Upcoming maintenance notifications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full">Save Preferences</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Settings panel with grouped notification preferences'
      }
    }
  }
};

// Filter options
export const FilterOptions: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Filter Services</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-3">Service Type</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="filter-powder" defaultChecked />
              <Label htmlFor="filter-powder" className="text-sm">Powder Coating</Label>
              <Badge variant="secondary" className="ml-auto">12</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="filter-cnc" defaultChecked />
              <Label htmlFor="filter-cnc" className="text-sm">CNC Machining</Label>
              <Badge variant="secondary" className="ml-auto">8</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="filter-straightening" />
              <Label htmlFor="filter-straightening" className="text-sm">Wheel Straightening</Label>
              <Badge variant="secondary" className="ml-auto">5</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="filter-repair" />
              <Label htmlFor="filter-repair" className="text-sm">Wheel Repair</Label>
              <Badge variant="secondary" className="ml-auto">3</Badge>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium mb-3">Wheel Size</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="size-17" />
              <Label htmlFor="size-17" className="text-sm">17 inches</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-18" defaultChecked />
              <Label htmlFor="size-18" className="text-sm">18 inches</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-19" defaultChecked />
              <Label htmlFor="size-19" className="text-sm">19 inches</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-20" />
              <Label htmlFor="size-20" className="text-sm">20 inches</Label>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium mb-3">Status</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="status-pending" defaultChecked />
              <Label htmlFor="status-pending" className="text-sm">Pending</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="status-progress" defaultChecked />
              <Label htmlFor="status-progress" className="text-sm">In Progress</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="status-completed" />
              <Label htmlFor="status-completed" className="text-sm">Completed</Label>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button variant="outline" className="flex-1">Clear All</Button>
          <Button className="flex-1">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Advanced filtering interface with grouped options and counts'
      }
    }
  }
};

// Bulk actions
export const BulkActions: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Service Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Bulk action bar */}
          <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
            <Checkbox id="select-all" />
            <Label htmlFor="select-all" className="text-sm font-medium">
              Select All Orders
            </Label>
            <div className="ml-auto flex gap-2">
              <Button variant="outline" size="sm">Mark as Read</Button>
              <Button variant="outline" size="sm">Archive</Button>
              <Button variant="destructive" size="sm">Delete</Button>
            </div>
          </div>

          {/* Order items */}
          <div className="space-y-2">
            {[
              { id: 'ORD-001', customer: 'John Doe', service: 'Powder Coating', status: 'In Progress' },
              { id: 'ORD-002', customer: 'Jane Smith', service: 'CNC Machining', status: 'Pending' },
              { id: 'ORD-003', customer: 'Mike Johnson', service: 'Wheel Straightening', status: 'Completed' },
            ].map((order) => (
              <div key={order.id} className="flex items-center gap-4 p-3 border rounded-lg">
                <Checkbox id={`order-${order.id}`} />
                <div className="flex-1">
                  <div className="font-medium">{order.id}</div>
                  <div className="text-sm text-muted-foreground">{order.customer} - {order.service}</div>
                </div>
                <Badge variant={
                  order.status === 'Completed' ? 'secondary' :
                  order.status === 'In Progress' ? 'default' : 'outline'
                }>
                  {order.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Bulk selection interface for managing multiple items with actions'
      }
    }
  }
};
