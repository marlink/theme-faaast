import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Separator } from './separator';
import { Truck, Clock, Zap, Shield, Star, DollarSign, CheckCircle } from 'lucide-react';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/Radio Group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A radio group component for single selection from multiple options, with accessibility features and keyboard navigation.'
      }
    }
  },
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
      description: 'The default selected value'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio group is disabled'
    }
  },
  args: {
    defaultValue: 'option1'
  }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// Basic radio group
export const Basic: Story = {
  render: (args) => (
    <RadioGroup {...args} className="space-y-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic radio group with three options'
      }
    }
  }
};

// Service priority selection
export const ServicePriority: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Select Service Priority</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="standard" className="space-y-4">
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="standard" id="standard" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="standard"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Standard Service
              </Label>
              <p className="text-xs text-muted-foreground">
                5-7 business days • $89 base price
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <RadioGroupItem value="rush" id="rush" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="rush"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Rush Service
              </Label>
              <p className="text-xs text-muted-foreground">
                2-3 business days • +$50 rush fee
              </p>
              <Badge variant="secondary" className="w-fit">Most Popular</Badge>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <RadioGroupItem value="express" id="express" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="express"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Express Service
              </Label>
              <p className="text-xs text-muted-foreground">
                24 hours • +$150 express fee
              </p>
              <Badge variant="destructive" className="w-fit">Limited Availability</Badge>
            </div>
          </div>
        </RadioGroup>

        <Separator className="my-4" />

        <Button className="w-full">Continue with Selection</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Service priority selection with detailed descriptions and pricing'
      }
    }
  }
};

// Delivery method selection
export const DeliveryMethod: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5" />
          Choose Delivery Method
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="pickup" className="space-y-4">
          <div className="flex items-start space-x-3 p-4 border rounded-lg">
            <RadioGroupItem value="pickup" id="pickup" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none flex-1">
              <Label
                htmlFor="pickup"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Store Pickup
              </Label>
              <p className="text-xs text-muted-foreground">
                Pick up your wheels at our facility in Mocktown
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Ready in 2-3 days</span>
                <Badge variant="secondary" className="ml-auto">Free</Badge>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border rounded-lg">
            <RadioGroupItem value="delivery" id="delivery" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none flex-1">
              <Label
                htmlFor="delivery"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Home Delivery
              </Label>
              <p className="text-xs text-muted-foreground">
                Professional delivery to your location within 50km
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Truck className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">1-2 days delivery</span>
                <Badge variant="secondary" className="ml-auto">$25</Badge>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border rounded-lg">
            <RadioGroupItem value="express" id="express" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none flex-1">
              <Label
                htmlFor="express"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Express Delivery
              </Label>
              <p className="text-xs text-muted-foreground">
                Priority delivery with tracking and insurance
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Zap className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Same day delivery</span>
                <Badge variant="secondary" className="ml-auto">$75</Badge>
              </div>
            </div>
          </div>
        </RadioGroup>

        <Button className="w-full mt-4">Confirm Delivery Method</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Delivery method selection with detailed options and pricing'
      }
    }
  }
};

// Payment method selection
export const PaymentMethod: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="card" className="space-y-3">
          <div className="flex items-center space-x-3 p-3 border rounded-lg">
            <RadioGroupItem value="card" id="card" />
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <div className="grid gap-1 leading-none">
                <Label
                  htmlFor="card"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Credit/Debit Card
                </Label>
                <p className="text-xs text-muted-foreground">Pay securely with any card</p>
              </div>
              <Badge variant="secondary" className="ml-auto">Instant</Badge>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 border rounded-lg">
            <RadioGroupItem value="paypal" id="paypal" />
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <div className="grid gap-1 leading-none">
                <Label
                  htmlFor="paypal"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  PayPal
                </Label>
                <p className="text-xs text-muted-foreground">Pay with your PayPal account</p>
              </div>
              <Badge variant="secondary" className="ml-auto">Secure</Badge>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 border rounded-lg">
            <RadioGroupItem value="bank" id="bank" disabled />
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <div className="grid gap-1 leading-none">
                <Label
                  htmlFor="bank"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Bank Transfer
                </Label>
                <p className="text-xs text-muted-foreground">Direct bank transfer (3-5 days)</p>
              </div>
              <Badge variant="outline" className="ml-auto">Coming Soon</Badge>
            </div>
          </div>
        </RadioGroup>

        <Button className="w-full mt-4">Complete Payment</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Payment method selection with icons and status indicators'
      }
    }
  }
};

// Service plan selection
export const ServicePlan: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
      <RadioGroup defaultValue="basic" className="space-y-4">
        <div className="relative">
          <input type="radio" name="plan" value="basic" className="sr-only peer" defaultChecked />
          <Card className="cursor-pointer peer-checked:border-primary transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                Basic Plan
                <RadioGroupItem value="basic" className="absolute top-4 right-4" />
              </CardTitle>
              <div className="text-3xl font-bold">$89</div>
              <p className="text-sm text-muted-foreground">One service per order</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Powder coating
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Basic inspection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  2-year warranty
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="premium" className="space-y-4">
        <div className="relative">
          <Card className="cursor-pointer peer-checked:border-primary transition-colors border-primary">
            <CardHeader className="text-center">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                Most Popular
              </Badge>
              <CardTitle className="flex items-center justify-center gap-2">
                Premium Plan
                <RadioGroupItem value="premium" className="absolute top-4 right-4" />
              </CardTitle>
              <div className="text-3xl font-bold">$149</div>
              <p className="text-sm text-muted-foreground">Multiple services</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  All basic services
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  CNC machining
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Priority scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  3-year warranty
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="vip" className="space-y-4">
        <div className="relative">
          <Card className="cursor-pointer peer-checked:border-primary transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                VIP Plan
                <RadioGroupItem value="vip" className="absolute top-4 right-4" />
              </CardTitle>
              <div className="text-3xl font-bold">$299</div>
              <p className="text-sm text-muted-foreground">Complete restoration</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  All premium services
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Custom color matching
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Express service
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  5-year warranty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  VIP support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Service plan selection with pricing cards and feature comparison'
      }
    }
  }
};

// Survey/rating selection
export const RatingSelection: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>How satisfied are you with our service?</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="4" className="flex gap-1">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`} className="flex items-center gap-1 cursor-pointer">
                <Star className={`h-4 w-4 ${rating <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                <span className="sr-only">{rating} star{rating !== 1 ? 's' : ''}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="mt-4 text-sm text-muted-foreground">
          <p>1 = Very Dissatisfied, 5 = Very Satisfied</p>
        </div>

        <Button className="w-full mt-4">Submit Rating</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Star rating selection using radio buttons with visual feedback'
      }
    }
  }
};

// Contact preference
export const ContactPreference: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Preferred Contact Method</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="email" className="space-y-3">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="email" id="email" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </Label>
              <p className="text-xs text-muted-foreground">
                We'll send updates to john@example.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <RadioGroupItem value="phone" id="phone" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="phone"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Phone
              </Label>
              <p className="text-xs text-muted-foreground">
                We'll call +1 (555) 123-4567 for urgent updates
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <RadioGroupItem value="sms" id="sms" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="sms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                SMS/Text
              </Label>
              <p className="text-xs text-muted-foreground">
                Quick updates via text message
              </p>
            </div>
          </div>
        </RadioGroup>

        <Button className="w-full mt-4">Save Preference</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Contact method preference selection with detailed descriptions'
      }
    }
  }
};
