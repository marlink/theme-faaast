import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Label } from './label';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { User, Mail, Phone, Lock, Search, Calendar } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with built-in validation states, accessibility features, and theme support.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The input type'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required'
    }
  },
  args: {
    placeholder: 'Enter text...',
    type: 'text'
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

// Basic input
export const Basic: Story = {
  render: (args) => <Input {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'A basic input field with default styling'
      }
    }
  }
};

// Different input types
export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="text-input">Text Input</Label>
        <Input id="text-input" type="text" placeholder="Enter text" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email-input">Email Input</Label>
        <Input id="email-input" type="email" placeholder="Enter email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-input">Password Input</Label>
        <Input id="password-input" type="password" placeholder="Enter password" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="number-input">Number Input</Label>
        <Input id="number-input" type="number" placeholder="Enter number" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tel-input">Phone Input</Label>
        <Input id="tel-input" type="tel" placeholder="Enter phone" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="url-input">URL Input</Label>
        <Input id="url-input" type="url" placeholder="Enter URL" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="search-input">Search Input</Label>
        <Input id="search-input" type="search" placeholder="Search..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input types with appropriate labels and placeholders'
      }
    }
  }
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="normal-input">Normal State</Label>
        <Input id="normal-input" placeholder="Normal input" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled-input">Disabled State</Label>
        <Input id="disabled-input" placeholder="Disabled input" disabled />
      </div>

      <div className="space-y-2">
        <Label htmlFor="required-input">Required Field</Label>
        <Input id="required-input" placeholder="Required input" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="error-input">Error State</Label>
        <Input
          id="error-input"
          placeholder="Input with error"
          aria-invalid="true"
          className="border-destructive focus-visible:ring-destructive/20"
        />
        <p className="text-sm text-destructive">This field is required</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various input states including disabled, required, and error states'
      }
    }
  }
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="user-input">Username</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="user-input" placeholder="Enter username" className="pl-10" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email-input">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="email-input" type="email" placeholder="Enter email" className="pl-10" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone-input">Phone</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="phone-input" type="tel" placeholder="Enter phone" className="pl-10" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-input">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="password-input" type="password" placeholder="Enter password" className="pl-10" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="search-input">Search</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="search-input" type="search" placeholder="Search..." className="pl-10" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with icons for better visual context and user experience'
      }
    }
  }
};

// Form examples
export const FormExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Enter your message..."
              className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              rows={3}
            />
          </div>

          <Button className="w-full">Send Message</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Login Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input id="login-email" type="email" placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="login-password">Password</Label>
            <Input id="login-password" type="password" placeholder="Enter your password" />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">Cancel</Button>
            <Button className="flex-1">Sign In</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete form examples showing inputs in real form contexts'
      }
    }
  }
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Small Input (h-8)</Label>
        <Input placeholder="Small input" className="h-8 text-sm" />
      </div>

      <div className="space-y-2">
        <Label>Default Input (h-9)</Label>
        <Input placeholder="Default input" />
      </div>

      <div className="space-y-2">
        <Label>Large Input (h-11)</Label>
        <Input placeholder="Large input" className="h-11 text-base" />
      </div>

      <div className="space-y-2">
        <Label>Extra Large Input (h-12)</Label>
        <Input placeholder="Extra large input" className="h-12 text-lg" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input components in different sizes for various design needs'
      }
    }
  }
};

// Validation examples
export const Validation: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="valid-input">Valid Input</Label>
        <Input
          id="valid-input"
          placeholder="Valid input"
          className="border-green-500 focus-visible:ring-green-500/20"
        />
        <p className="text-sm text-green-600">✓ Looks good!</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="warning-input">Warning Input</Label>
        <Input
          id="warning-input"
          placeholder="Input with warning"
          className="border-yellow-500 focus-visible:ring-yellow-500/20"
        />
        <p className="text-sm text-yellow-600">⚠ Please review this field</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="error-input">Error Input</Label>
        <Input
          id="error-input"
          placeholder="Input with error"
          aria-invalid="true"
          className="border-destructive focus-visible:ring-destructive/20"
        />
        <p className="text-sm text-destructive">✕ This field is required</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="success-input">Success Input</Label>
        <Input
          id="success-input"
          placeholder="Successfully validated"
          className="border-green-500 focus-visible:ring-green-500/20"
        />
        <p className="text-sm text-green-600">✓ Validation passed</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input validation states with appropriate styling and feedback messages'
      }
    }
  }
};
