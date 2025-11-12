import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip';
import { Button } from './button';
import { Badge } from './badge';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import {
  HelpCircle,
  Info,
  AlertTriangle,
  Settings,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Star,
  Heart,
  Share2,
  Edit,
  Trash2,
  Eye,
  Download
} from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component that displays contextual information when hovering over or focusing on an element.'
      }
    }
  },
  argTypes: {
    delayDuration: {
      control: { type: 'number' },
      description: 'Delay in milliseconds before showing the tooltip'
    }
  },
  args: {
    delayDuration: 0
  }
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Basic tooltips
export const Basic: Story = {
  render: (args) => (
    <div className="flex gap-4 p-8">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Get help with this feature</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View information</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open settings</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic tooltips with simple text content'
      }
    }
  }
};

// Icon buttons with tooltips
export const IconButtons: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Service Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View service details</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit service information</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share service details</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to favorites</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download service report</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete service</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon buttons with descriptive tooltips for better UX'
      }
    }
  }
};

// Status indicators with tooltips
export const StatusTooltips: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Order Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium">Order #12345</span>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="cursor-help">Completed</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-medium">Service Completed</p>
                  <p className="text-xs">Ready for pickup • March 15, 2024</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium">Order #12346</span>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="default" className="cursor-help">In Progress</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-medium">Currently Processing</p>
                  <p className="text-xs">Powder coating • Est. completion: 2 hours</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="font-medium">Order #12347</span>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline" className="cursor-help">Pending</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-medium">Awaiting Approval</p>
                  <p className="text-xs">Waiting for final confirmation</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="font-medium">Order #12348</span>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="destructive" className="cursor-help">On Hold</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-medium">Service On Hold</p>
                  <p className="text-xs">Waiting for parts • Contact customer service</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status badges with detailed tooltip information'
      }
    }
  }
};

// Form field help
export const FormHelp: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Service Request Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Service Type</label>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="max-w-xs">
                  <p className="font-medium">Choose the right service</p>
                  <p className="text-xs mt-1">
                    Select the type of digital service you need. Each service has different pricing and timelines.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <select className="w-full p-2 border rounded">
            <option>Select service...</option>
            <option>Powder Coating</option>
            <option>CNC Machining</option>
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Wheel Specifications</label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="max-w-xs">
                  <p className="font-medium">Provide accurate specs</p>
                  <p className="text-xs mt-1">
                    Include diameter, width, offset, and bolt pattern. This helps us provide accurate quotes.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <input
            type="text"
            placeholder="e.g., Responsive e-commerce site"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Urgency Level</label>
            <Tooltip>
              <TooltipTrigger asChild>
                <AlertTriangle className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="max-w-xs">
                  <p className="font-medium">Rush services available</p>
                  <p className="text-xs mt-1">
                    Express service reduces processing time but includes additional fees. Standard service is recommended for most customers.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <select className="w-full p-2 border rounded">
            <option>Standard (5-7 days)</option>
            <option>Rush (2-3 days) +$50</option>
            <option>Express (24 hours) +$150</option>
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Additional Notes</label>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="max-w-xs">
                  <p className="font-medium">Help us serve you better</p>
                  <p className="text-xs mt-1">
                    Mention any special requirements, preferred colors, or specific issues you'd like us to address.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <textarea
            placeholder="Any special features or integrations needed..."
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        <Button className="w-full">Submit Request</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form fields with helpful tooltip guidance for users'
      }
    }
  }
};

// Pricing information
export const PricingTooltips: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Service Pricing</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">Powder Coating</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="max-w-xs">
                    <p className="font-medium">Professional Color Coating</p>
                    <p className="text-xs mt-1">
                      High-quality powder coating with UV protection and 2-year warranty.
                      Available in 50+ colors including custom matches.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="text-2xl font-bold">$89</div>
            <div className="text-sm text-muted-foreground">2-3 days</div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">CNC Machining</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="max-w-xs">
                    <p className="font-medium">Precision Customization</p>
                    <p className="text-xs mt-1">
                      Computer-controlled machining for custom wheel modifications.
                      ±0.01mm precision with 2-year warranty.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="text-2xl font-bold">$149</div>
            <div className="text-sm text-muted-foreground">3-5 days</div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">Wheel Straightening</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="max-w-xs">
                    <p className="font-medium">Bent Wheel Repair</p>
                    <p className="text-xs mt-1">
                      Professional straightening service for damaged rims.
                      Can fix bends up to 2 inches with 1-year warranty.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="text-2xl font-bold">$79</div>
            <div className="text-sm text-muted-foreground">1-2 days</div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">Wheel Repair</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="max-w-xs">
                    <p className="font-medium">Complete Restoration</p>
                    <p className="text-xs mt-1">
                      Full wheel restoration including structural repairs,
                      refinishing, and quality inspection. 1-year comprehensive warranty.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="text-2xl font-bold">$199</div>
            <div className="text-sm text-muted-foreground">5-7 days</div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium">Pricing Information</p>
              <p className="text-sm text-muted-foreground mt-1">
                All prices are starting prices for standard wheel sizes. Custom work may incur additional charges.
                Hover over the info icons for detailed service descriptions.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pricing cards with detailed tooltip information for each service'
      }
    }
  }
};

// Contact information
export const ContactTooltips: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 p-3 border rounded-lg">
          <User className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-muted-foreground">Lead Technician</div>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Call John: +1 (555) 123-4567</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email: john@smartwheels.com</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center gap-3 p-3 border rounded-lg">
          <User className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <div className="font-medium">Sarah Johnson</div>
            <div className="text-sm text-muted-foreground">Quality Control</div>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Call Sarah: +1 (555) 987-6543</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email: sarah@smartwheels.com</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center gap-3 p-3 border rounded-lg">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <div className="font-medium">Workshop Location</div>
            <div className="text-sm text-muted-foreground">123 Industrial Ave, City, ST</div>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <MapPin className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-center">
                <p className="font-medium">Get Directions</p>
                <p className="text-xs">Mon-Fri: 8AM-6PM</p>
                <p className="text-xs">Sat: 9AM-4PM</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center gap-3 p-3 border rounded-lg">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <div className="font-medium">Business Hours</div>
            <div className="text-sm text-muted-foreground">Mon-Fri: 8AM-6PM</div>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Calendar className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-center">
                <p className="font-medium">Schedule Appointment</p>
                <p className="text-xs">Online booking available</p>
                <p className="text-xs">Same-day service possible</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Contact information with action tooltips for calling, emailing, and navigation'
      }
    }
  }
};

// Rich tooltips with formatting
export const RichTooltips: Story = {
  render: () => (
    <div className="flex gap-4 p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            Service Status
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">All Systems Operational</span>
            </div>
            <div className="text-xs space-y-1">
              <div>• Powder coating: Available</div>
              <div>• CNC machining: Available</div>
              <div>• Wheel straightening: Available</div>
              <div>• Customer service: Online</div>
            </div>
            <div className="pt-2 border-t">
              <div className="text-xs text-muted-foreground">
                Last updated: 5 minutes ago
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Star className="h-4 w-4 mr-2" />
            Customer Rating
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium">4.9/5.0</span>
            </div>
            <div className="text-xs space-y-1">
              <div>Based on 247 reviews</div>
              <div>• Quality: 4.9/5</div>
              <div>• Service: 4.8/5</div>
              <div>• Timeliness: 4.9/5</div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            Warranty Info
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <div className="space-y-2">
            <div className="font-medium">Service Warranties</div>
            <div className="text-xs space-y-1">
              <div className="flex justify-between">
                <span>Powder Coating:</span>
                <Badge variant="secondary">2 Years</Badge>
              </div>
              <div className="flex justify-between">
                <span>CNC Machining:</span>
                <Badge variant="secondary">2 Years</Badge>
              </div>
              <div className="flex justify-between">
                <span>Wheel Straightening:</span>
                <Badge variant="outline">1 Year</Badge>
              </div>
            </div>
            <div className="pt-2 border-t">
              <div className="text-xs text-muted-foreground">
                Covers workmanship and materials only
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Rich tooltips with formatted content, badges, and structured information'
      }
    }
  }
};
