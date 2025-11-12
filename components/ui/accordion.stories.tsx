import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './accordion';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import {
  Wrench,
  Palette,
  Settings,
  FileText,
  HelpCircle,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Truck,
  Shield,
  Star,
  Users
} from 'lucide-react';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A collapsible accordion component for organizing content into expandable sections with smooth animations.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Whether multiple items can be open simultaneously'
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'The default open item(s)'
    }
  },
  args: {
    type: 'single',
    collapsible: true
  }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Basic accordion
export const Basic: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>What services do you offer?</AccordionTrigger>
        <AccordionContent>
          We offer comprehensive digital services including theme design, custom development,
          performance optimization, and bug fixes. Each service is performed by
          certified developers using modern technologies and best practices.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How long does service take?</AccordionTrigger>
        <AccordionContent>
          Service times vary by complexity. Basic powder coating typically takes 2-3 days,
          while CNC machining may require 3-5 days. Rush services are available for an
          additional fee with 24-hour turnaround.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Do you offer warranties?</AccordionTrigger>
        <AccordionContent>
          Yes, all our services come with comprehensive warranties. Powder coating includes
          a 2-year warranty against fading and peeling. CNC work and straightening services
          include 1-year structural warranties. Extended warranties are available.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic single-select accordion with collapsible items'
      }
    }
  }
};

// Service details accordion
export const ServiceDetails: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-2xl">
      <AccordionItem value="powder-coating">
        <AccordionTrigger className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Powder Coating Service
          <Badge variant="secondary">$89</Badge>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Professional powder coating service with RAL color matching and UV-resistant finishes.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Duration:</strong> 2-3 days
              </div>
              <div>
                <strong>Warranty:</strong> 2 years
              </div>
              <div>
                <strong>Colors:</strong> 50+ options
              </div>
              <div>
                <strong>Finish:</strong> Matte/Gloss
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Learn More</Button>
              <Button size="sm" variant="outline">Get Quote</Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="cnc-machining">
        <AccordionTrigger className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          CNC Machining
          <Badge variant="secondary">$149</Badge>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Precision CNC machining for custom wheel modifications and detailing.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Duration:</strong> 3-5 days
              </div>
              <div>
                <strong>Warranty:</strong> 2 years
              </div>
              <div>
                <strong>Precision:</strong> ±0.01mm
              </div>
              <div>
                <strong>Materials:</strong> Aluminum alloys
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Learn More</Button>
              <Button size="sm" variant="outline">Get Quote</Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="wheel-straightening">
        <AccordionTrigger className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          Wheel Straightening
          <Badge variant="secondary">$79</Badge>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Professional wheel straightening service for bent or damaged rims.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Duration:</strong> 1-2 days
              </div>
              <div>
                <strong>Warranty:</strong> 1 year
              </div>
              <div>
                <strong>Max Bend:</strong> 2 inches
              </div>
              <div>
                <strong>Success Rate:</strong> 95%
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Learn More</Button>
              <Button size="sm" variant="outline">Get Quote</Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Service details in accordion format with pricing and specifications'
      }
    }
  }
};

// FAQ accordion
export const FAQ: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-2xl">
      <AccordionItem value="shipping">
        <AccordionTrigger className="text-left">
          How do you handle shipping and delivery?
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p>We offer comprehensive shipping solutions:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Free pickup and delivery within 50km of our facility</li>
              <li>Professional crating and insurance for long-distance shipping</li>
              <li>Real-time tracking for all shipments</li>
              <li>White-glove delivery service available</li>
            </ul>
            <div className="flex items-center gap-2 mt-3">
              <Truck className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Most orders ship within 24 hours</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="insurance">
        <AccordionTrigger className="text-left">
          Do you provide insurance for my wheels?
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p>Yes, we provide comprehensive insurance coverage:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Full value insurance during transportation</li>
              <li>On-site storage insurance</li>
              <li>Processing liability coverage</li>
              <li>Claims handled within 24 hours</li>
            </ul>
            <div className="bg-blue-50 p-3 rounded-lg mt-3">
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Peace of Mind</p>
                  <p className="text-xs text-blue-700">Your wheels are fully protected throughout the entire process.</p>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="rush-orders">
        <AccordionTrigger className="text-left">
          Do you accept rush orders?
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p>We offer expedited service options:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="border rounded-lg p-3">
                <div className="font-medium text-sm">Rush Service</div>
                <div className="text-lg font-bold text-orange-600">2-3 days</div>
                <div className="text-xs text-muted-foreground">+$50 fee</div>
              </div>
              <div className="border rounded-lg p-3">
                <div className="font-medium text-sm">Express Service</div>
                <div className="text-lg font-bold text-red-600">24 hours</div>
                <div className="text-xs text-muted-foreground">+$150 fee</div>
              </div>
              <div className="border rounded-lg p-3 bg-green-50">
                <div className="font-medium text-sm">Standard</div>
                <div className="text-lg font-bold text-green-600">5-7 days</div>
                <div className="text-xs text-muted-foreground">No extra charge</div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="warranty">
        <AccordionTrigger className="text-left">
          What warranties do you offer?
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p>Comprehensive warranty coverage for all services:</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 border rounded">
                <span className="text-sm">Powder Coating</span>
                <Badge>2 Years</Badge>
              </div>
              <div className="flex justify-between items-center p-2 border rounded">
                <span className="text-sm">CNC Machining</span>
                <Badge>2 Years</Badge>
              </div>
              <div className="flex justify-between items-center p-2 border rounded">
                <span className="text-sm">Wheel Straightening</span>
                <Badge>1 Year</Badge>
              </div>
              <div className="flex justify-between items-center p-2 border rounded">
                <span className="text-sm">Custom Work</span>
                <Badge>1 Year</Badge>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              All warranties cover workmanship and materials. Transportation damage is covered separately.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Frequently asked questions organized in an accordion format'
      }
    }
  }
};

// Order status tracking
export const OrderStatus: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-2xl">
      <AccordionItem value="order-12345">
        <AccordionTrigger className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">#12345</Badge>
            <span>Powder Coating Service</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Completed
            </Badge>
            <span className="text-sm text-muted-foreground">March 15, 2024</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Service:</strong> Powder Coating - Matte Black
              </div>
              <div>
                <strong>Duration:</strong> 2 days
              </div>
              <div>
                <strong>Cost:</strong> $89
              </div>
              <div>
                <strong>Technician:</strong> John Smith
              </div>
            </div>

            <div className="border-l-2 border-green-500 pl-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Order received - March 13, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Processing started - March 13, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Quality inspection completed - March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Ready for pickup - March 15, 2024</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm">Download Invoice</Button>
              <Button size="sm" variant="outline">Leave Review</Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="order-12346">
        <AccordionTrigger className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">#12346</Badge>
            <span>CNC Machining</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="flex items-center gap-1">
              <Settings className="h-3 w-3" />
              In Progress
            </Badge>
            <span className="text-sm text-muted-foreground">Expected: March 18</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Service:</strong> Custom CNC Detailing
              </div>
              <div>
                <strong>Duration:</strong> 3-5 days
              </div>
              <div>
                <strong>Cost:</strong> $149
              </div>
              <div>
                <strong>Technician:</strong> Sarah Johnson
              </div>
            </div>

            <div className="border-l-2 border-blue-500 pl-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Order received - March 14, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Settings className="h-4 w-4 text-blue-600" />
                  <span>CNC programming completed - March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Machining in progress - Expected completion: March 18</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm">Contact Technician</Button>
              <Button size="sm" variant="outline">Modify Order</Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="order-12347">
        <AccordionTrigger className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">#12347</Badge>
            <span>Wheel Straightening</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Pending
            </Badge>
            <span className="text-sm text-muted-foreground">Scheduled: March 20</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Service:</strong> Wheel Straightening (4 wheels)
              </div>
              <div>
                <strong>Duration:</strong> 1-2 days
              </div>
              <div>
                <strong>Cost:</strong> $79
              </div>
              <div>
                <strong>Status:</strong> Awaiting parts
              </div>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                We're waiting for specialized straightening equipment. Your service is scheduled for March 20.
              </AlertDescription>
            </Alert>

            <div className="flex gap-2">
              <Button size="sm">Reschedule</Button>
              <Button size="sm" variant="outline">Cancel Order</Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Order status tracking with expandable details and progress indicators'
      }
    }
  }
};

// Multiple open accordion
export const MultipleOpen: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-2xl">
      <AccordionItem value="getting-started">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Welcome to SmartWheels! Here's how to get started:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Create your account or sign in</li>
              <li>Choose your service from our catalog</li>
              <li>Upload photos of your wheels</li>
              <li>Receive instant quote</li>
              <li>Schedule pickup or delivery</li>
            </ol>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="account-setup">
        <AccordionTrigger>Account Setup</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Set up your account for a better experience:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Verify your email address</li>
              <li>Add your vehicle information</li>
              <li>Set notification preferences</li>
              <li>Save payment methods</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="service-process">
        <AccordionTrigger>Service Process</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Our streamlined service process:</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center">
              <div className="p-3 border rounded-lg">
                <div className="font-bold text-lg">1</div>
                <div className="text-sm">Order</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-bold text-lg">2</div>
                <div className="text-sm">Pickup</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-bold text-lg">3</div>
                <div className="text-sm">Service</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-bold text-lg">4</div>
                <div className="text-sm">Return</div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pricing">
        <AccordionTrigger>Pricing Information</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Transparent pricing for all services:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg">
                <div className="font-medium">Powder Coating</div>
                <div className="text-2xl font-bold">$89</div>
                <div className="text-xs text-muted-foreground">2-3 days</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-medium">CNC Machining</div>
                <div className="text-2xl font-bold">$149</div>
                <div className="text-xs text-muted-foreground">3-5 days</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-medium">Wheel Straightening</div>
                <div className="text-2xl font-bold">$79</div>
                <div className="text-xs text-muted-foreground">1-2 days</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-medium">Wheel Repair</div>
                <div className="text-2xl font-bold">$199</div>
                <div className="text-xs text-muted-foreground">5-7 days</div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple accordion items that can be open simultaneously'
      }
    }
  }
};
