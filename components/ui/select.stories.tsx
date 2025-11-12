import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';
import { Label } from './label';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { User, Settings, Palette, Wrench, Truck } from 'lucide-react';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible select component with keyboard navigation, accessibility features, and theme support. Built on Radix UI primitives.'
      }
    }
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

// Basic select
export const Basic: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic select with three options'
      }
    }
  }
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Small Size</Label>
        <Select>
          <SelectTrigger size="sm" className="w-full">
            <SelectValue placeholder="Small select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small1">Small Option 1</SelectItem>
            <SelectItem value="small2">Small Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Default Size</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Default select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default1">Default Option 1</SelectItem>
            <SelectItem value="default2">Default Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select components in different sizes'
      }
    }
  }
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Service Type</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="powder-coating">
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Powder Coating
              </div>
            </SelectItem>
            <SelectItem value="cnc-machining">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                CNC Machining
              </div>
            </SelectItem>
            <SelectItem value="wheel-straightening">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                Wheel Straightening
              </div>
            </SelectItem>
            <SelectItem value="delivery">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Delivery Service
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select options with icons for better visual context'
      }
    }
  }
};

// Grouped options
export const GroupedOptions: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Project Scope</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select project scope" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Project Types</SelectLabel>
              <SelectItem value="landing-page">Landing Page</SelectItem>
              <SelectItem value="ecommerce">E-commerce Site</SelectItem>
              <SelectItem value="corporate">Corporate Website</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Advanced Projects</SelectLabel>
              <SelectItem value="web-app">Web Application</SelectItem>
              <SelectItem value="mobile-app">Mobile App</SelectItem>
              <SelectItem value="api-integration">API Integration</SelectItem>
              <SelectItem value="cms-integration">CMS Integration</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Premium Services</SelectLabel>
              <SelectItem value="seo-optimization">SEO Optimization</SelectItem>
              <SelectItem value="performance-audit">Performance Audit</SelectItem>
              <SelectItem value="security-review">Security Review</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select with grouped options and separators for better organization'
      }
    }
  }
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Normal State</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Normal select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="normal1">Normal Option 1</SelectItem>
            <SelectItem value="normal2">Normal Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Disabled State</Label>
        <Select disabled>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Disabled select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="disabled1">Disabled Option 1</SelectItem>
            <SelectItem value="disabled2">Disabled Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Error State</Label>
        <Select>
          <SelectTrigger className="w-full border-destructive focus-visible:ring-destructive/20">
            <SelectValue placeholder="Select with error" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="error1">Error Option 1</SelectItem>
            <SelectItem value="error2">Error Option 2</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-destructive">Please select a valid option</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different select states including disabled and error states'
      }
    }
  }
};

// Real-world form examples
export const FormExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Service Request Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="service-type">Service Type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="powder-coating">Powder Coating</SelectItem>
                <SelectItem value="cnc-machining">CNC Machining</SelectItem>
                <SelectItem value="wheel-straightening">Wheel Straightening</SelectItem>
                <SelectItem value="wheel-repair">Wheel Repair</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="wheel-size">Wheel Size</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="17">17 inches</SelectItem>
                <SelectItem value="18">18 inches</SelectItem>
                <SelectItem value="19">19 inches</SelectItem>
                <SelectItem value="20">20 inches</SelectItem>
                <SelectItem value="21">21 inches</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority Level</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">
                  <div className="flex items-center gap-2">
                    Standard (5-7 days)
                    <Badge variant="secondary">Most Popular</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="rush">
                  <div className="flex items-center gap-2">
                    Rush (2-3 days)
                    <Badge variant="outline">+$50</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="express">
                  <div className="flex items-center gap-2">
                    Express (24 hours)
                    <Badge variant="destructive">+$150</Badge>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme Preference</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">System Default</SelectItem>
                <SelectItem value="light">Light Mode</SelectItem>
                <SelectItem value="dark">Dark Mode</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notifications">Email Notifications</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Notification frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All notifications</SelectItem>
                <SelectItem value="important">Important only</SelectItem>
                <SelectItem value="none">No notifications</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete form examples showing select components in real SmartWheels forms'
      }
    }
  }
};

// Long list with scrolling
export const LongList: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Country Selection</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
            <SelectItem value="fr">France</SelectItem>
            <SelectItem value="it">Italy</SelectItem>
            <SelectItem value="es">Spain</SelectItem>
            <SelectItem value="nl">Netherlands</SelectItem>
            <SelectItem value="be">Belgium</SelectItem>
            <SelectItem value="ch">Switzerland</SelectItem>
            <SelectItem value="at">Austria</SelectItem>
            <SelectItem value="se">Sweden</SelectItem>
            <SelectItem value="no">Norway</SelectItem>
            <SelectItem value="dk">Denmark</SelectItem>
            <SelectItem value="fi">Finland</SelectItem>
            <SelectItem value="pl">Poland</SelectItem>
            <SelectItem value="cz">Czech Republic</SelectItem>
            <SelectItem value="hu">Hungary</SelectItem>
            <SelectItem value="ro">Romania</SelectItem>
            <SelectItem value="bg">Bulgaria</SelectItem>
            <SelectItem value="gr">Greece</SelectItem>
            <SelectItem value="pt">Portugal</SelectItem>
            <SelectItem value="tr">Turkey</SelectItem>
            <SelectItem value="ru">Russia</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
            <SelectItem value="kr">South Korea</SelectItem>
            <SelectItem value="cn">China</SelectItem>
            <SelectItem value="in">India</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
            <SelectItem value="nz">New Zealand</SelectItem>
            <SelectItem value="za">South Africa</SelectItem>
            <SelectItem value="br">Brazil</SelectItem>
            <SelectItem value="mx">Mexico</SelectItem>
            <SelectItem value="ar">Argentina</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">
          Demonstrates scrolling behavior with many options
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select with many options to demonstrate scrolling and keyboard navigation'
      }
    }
  }
};

// Pre-selected values
export const PreSelected: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Pre-selected Service</Label>
        <Select defaultValue="powder-coating">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="powder-coating">Powder Coating</SelectItem>
            <SelectItem value="cnc-machining">CNC Machining</SelectItem>
            <SelectItem value="wheel-straightening">Wheel Straightening</SelectItem>
            <SelectItem value="wheel-repair">Wheel Repair</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Pre-selected Size</Label>
        <Select defaultValue="18">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="17">17 inches</SelectItem>
            <SelectItem value="18">18 inches</SelectItem>
            <SelectItem value="19">19 inches</SelectItem>
            <SelectItem value="20">20 inches</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select components with pre-selected default values'
      }
    }
  }
};
