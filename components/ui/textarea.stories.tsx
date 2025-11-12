import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';
import { Label } from './label';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { MessageSquare, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A multi-line text input component with auto-sizing capabilities and accessibility features.'
      }
    }
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when empty'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled'
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible rows'
    }
  },
  args: {
    placeholder: 'Enter your message...',
    rows: 3
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// Basic textarea
export const Basic: Story = {
  render: (args) => (
    <div className="w-80">
      <Textarea {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic textarea with default styling'
      }
    }
  }
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Small (2 rows)</Label>
        <Textarea placeholder="Small textarea" rows={2} />
      </div>

      <div className="space-y-2">
        <Label>Medium (3 rows)</Label>
        <Textarea placeholder="Medium textarea" rows={3} />
      </div>

      <div className="space-y-2">
        <Label>Large (5 rows)</Label>
        <Textarea placeholder="Large textarea" rows={5} />
      </div>

      <div className="space-y-2">
        <Label>Auto-sizing (no fixed rows)</Label>
        <Textarea placeholder="This textarea will grow as you type..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textareas with different row counts and auto-sizing behavior'
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
        <Textarea placeholder="Normal textarea" />
      </div>

      <div className="space-y-2">
        <Label>Disabled State</Label>
        <Textarea placeholder="Disabled textarea" disabled />
      </div>

      <div className="space-y-2">
        <Label>Error State</Label>
        <Textarea
          placeholder="Textarea with error"
          className="border-destructive focus-visible:ring-destructive/20"
        />
        <p className="text-sm text-destructive">This field is required</p>
      </div>

      <div className="space-y-2">
        <Label>Success State</Label>
        <Textarea
          placeholder="Textarea with success"
          className="border-green-500 focus-visible:ring-green-500/20"
        />
        <p className="text-sm text-green-600">✓ Looks good!</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different textarea states including disabled, error, and success'
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
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Contact Form
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your website development needs..."
              rows={4}
            />
          </div>

          <Button className="w-full">Send Message</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Service Request
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="service-description">Service Description</Label>
            <Textarea
              id="service-description"
              placeholder="Describe the website project you need in detail..."
              rows={5}
              defaultValue="I need a custom theme for my e-commerce website. It currently has a basic design and I want modern styling with improved user experience."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="special-instructions">Special Instructions</Label>
            <Textarea
              id="special-instructions"
              placeholder="Any special handling instructions..."
              rows={3}
            />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">Save Draft</Button>
            <Button className="flex-1">Submit Request</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Issue Report
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="issue-description">Describe the Issue</Label>
            <Textarea
              id="issue-description"
              placeholder="Please provide detailed information about the problem..."
              rows={4}
              className="border-destructive focus-visible:ring-destructive/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="steps-to-reproduce">Steps to Reproduce</Label>
            <Textarea
              id="steps-to-reproduce"
              placeholder="1. Step one&#10;2. Step two&#10;3. Step three"
              rows={3}
            />
          </div>

          <Button variant="destructive" className="w-full">Submit Report</Button>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete forms using textareas for different purposes: contact, service requests, and issue reports'
      }
    }
  }
};

// With character counter
export const WithCharacterCounter: Story = {
  render: () => {
    const [text, setText] = React.useState('');
    const maxLength = 500;

    return (
      <div className="space-y-2 w-80">
        <Label htmlFor="feedback">Feedback (max {maxLength} characters)</Label>
        <Textarea
          id="feedback"
          placeholder="Share your feedback about our services..."
          rows={4}
          maxLength={maxLength}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Provide detailed feedback to help us improve</span>
          <span>{text.length}/{maxLength}</span>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with character counter and length validation'
      }
    }
  }
};

// Auto-resizing example
export const AutoResizing: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Auto-resizing Textarea</Label>
        <Textarea
          placeholder="Start typing to see the textarea grow..."
          className="field-sizing-content min-h-16 max-h-32 resize-none"
        />
        <p className="text-xs text-muted-foreground">
          This textarea automatically adjusts its height based on content
        </p>
      </div>

      <div className="space-y-2">
        <Label>Comments Section</Label>
        <Textarea
          placeholder="Add your comments here..."
          className="field-sizing-content min-h-20"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textareas that automatically resize based on content length'
      }
    }
  }
};

// With validation feedback
export const ValidationFeedback: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const [isValid, setIsValid] = React.useState(true);
    const minLength = 10;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      setIsValid(newValue.length >= minLength);
    };

    return (
      <div className="space-y-2 w-80">
        <Label htmlFor="description">Project Description (minimum {minLength} characters)</Label>
        <Textarea
          id="description"
          placeholder="Describe your project in detail..."
          rows={4}
          value={value}
          onChange={handleChange}
          className={!isValid && value.length > 0 ? 'border-destructive focus-visible:ring-destructive/20' : ''}
        />
        <div className="flex justify-between items-center">
          {!isValid && value.length > 0 && (
            <p className="text-sm text-destructive">
              Description must be at least {minLength} characters long
            </p>
          )}
          {isValid && value.length >= minLength && (
            <p className="text-sm text-green-600 flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Description meets requirements
            </p>
          )}
          <span className="text-xs text-muted-foreground ml-auto">
            {value.length}/{minLength}
          </span>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with real-time validation feedback and character counting'
      }
    }
  }
};
