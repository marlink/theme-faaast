import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { Button } from './button';
import { Badge } from './badge';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Separator } from './separator';
import {
  Settings,
  User,
  Bell,
  Palette,
  Share2,
  MoreVertical,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Edit,
  Trash2,
  Copy,
  Download
} from 'lucide-react';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A popover component for displaying rich content in a floating panel, triggered by user interaction.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Popover>;

// Basic popover
export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium">Popover Content</h4>
          <p className="text-sm text-muted-foreground">
            This is a basic popover with some content. You can put any content here.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic popover with simple content'
      }
    }
  }
};

// User menu popover
export const UserMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="h-3 w-3 text-white" />
          </div>
          John Doe
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground">john@example.com</div>
            </div>
          </div>

          <Separator />

          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </div>

          <Separator />

          <Button variant="ghost" className="w-full justify-start text-red-600">
            <Trash2 className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: 'User menu popover with profile information and navigation options'
      }
    }
  }
};

// Settings popover
export const SettingsPopover: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Quick Settings</h4>
            <p className="text-sm text-muted-foreground">
              Adjust your preferences quickly
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Email Notifications</Label>
              <input type="checkbox" id="notifications" defaultChecked className="rounded" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="theme">Dark Mode</Label>
              <input type="checkbox" id="theme" className="rounded" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="auto-save">Auto-save</Label>
              <input type="checkbox" id="auto-save" defaultChecked className="rounded" />
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Language</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full">Save Settings</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Settings popover with toggle switches and select dropdown'
      }
    }
  }
};

// Filter popover
export const FilterPopover: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
          <Badge variant="secondary" className="ml-2">3</Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Filter Services</h4>
            <p className="text-sm text-muted-foreground">
              Narrow down your service search
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <Label className="text-sm font-medium">Service Type</Label>
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="powder-coating" defaultChecked className="rounded" />
                  <Label htmlFor="powder-coating" className="text-sm">Powder Coating</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="cnc-machining" defaultChecked className="rounded" />
                  <Label htmlFor="cnc-machining" className="text-sm">CNC Machining</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="performance-optimization" className="rounded" />
                  <Label htmlFor="performance-optimization" className="text-sm">Performance Optimization</Label>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <Label className="text-sm font-medium">Price Range</Label>
              <div className="flex gap-2 mt-2">
                <Input placeholder="Min" className="w-20" />
                <span className="text-muted-foreground">-</span>
                <Input placeholder="Max" className="w-20" />
              </div>
            </div>

            <Separator />

            <div>
              <Label className="text-sm font-medium">Status</Label>
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="active" defaultChecked className="rounded" />
                  <Label htmlFor="active" className="text-sm">Active</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="completed" className="rounded" />
                  <Label htmlFor="completed" className="text-sm">Completed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="pending" className="rounded" />
                  <Label htmlFor="pending" className="text-sm">Pending</Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">Clear All</Button>
            <Button className="flex-1">Apply Filters</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Advanced filter popover with multiple filter options and controls'
      }
    }
  }
};

// Share menu popover
export const ShareMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-3">
          <div>
            <h4 className="font-medium">Share Service</h4>
            <p className="text-sm text-muted-foreground">
              Share this service with others
            </p>
          </div>

          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Copy className="h-4 w-4 mr-2" />
              Copy Link
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>

          <Separator />

          <div>
            <Label className="text-sm font-medium">Share URL</Label>
            <div className="flex gap-2 mt-2">
              <Input
                value="https://smartwheels.com/services/powder-coating"
                readOnly
                className="text-xs"
              />
              <Button size="sm" variant="outline">
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Share menu popover with multiple sharing options'
      }
    }
  }
};

// Contact info popover
export const ContactPopover: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <User className="h-4 w-4 mr-2" />
          Contact John
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground">Lead Technician</div>
              <Badge variant="secondary">Available</Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted cursor-pointer">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Call</div>
                <div className="text-xs text-muted-foreground">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted cursor-pointer">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Email</div>
                <div className="text-xs text-muted-foreground">john@smartwheels.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted cursor-pointer">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Schedule Meeting</div>
                <div className="text-xs text-muted-foreground">Check availability</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            Response time: Usually within 2 hours during business hours
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Contact information popover with multiple contact methods'
      }
    }
  }
};

// Color picker popover
export const ColorPicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Palette className="h-4 w-4 mr-2" />
          Choose Color
          <div className="w-4 h-4 bg-blue-500 rounded ml-2"></div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Select Color</h4>
            <p className="text-sm text-muted-foreground">
              Choose your preferred powder coating color
            </p>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {[
              '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00',
              '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#008000', '#808080',
              '#FFC0CB', '#A52A2A', '#000080', '#008080', '#FF4500', '#2E8B57'
            ].map((color) => (
              <button
                key={color}
                className="w-8 h-8 rounded border-2 border-muted hover:border-primary transition-colors"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
        </div>

          <div className="space-y-2">
            <Label>Custom Color</Label>
            <Input type="color" defaultValue="#3b82f6" />
          </div>

          <div className="space-y-2">
            <Label>Finish Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select finish" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="glossy">Glossy</SelectItem>
                <SelectItem value="matte">Matte</SelectItem>
                <SelectItem value="satin">Satin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full">Apply Color</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Color picker popover for selecting powder coating colors'
      }
    }
  }
};

// Actions menu popover
export const ActionsMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Edit className="h-4 w-4 mr-2" />
            Edit Service
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Copy className="h-4 w-4 mr-2" />
            Duplicate
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Separator />
          <Button variant="ghost" className="w-full justify-start text-red-600">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Service
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Actions menu popover for service management operations'
      }
    }
  }
};

// Date/time picker popover
export const DateTimePicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Pickup
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Schedule Service Pickup</h4>
            <p className="text-sm text-muted-foreground">
              Choose your preferred pickup date and time
            </p>
          </div>

          <div className="space-y-2">
            <Label>Date</Label>
            <Input type="date" />
          </div>

          <div className="space-y-2">
            <Label>Time</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9am">9:00 AM</SelectItem>
                <SelectItem value="10am">10:00 AM</SelectItem>
                <SelectItem value="11am">11:00 AM</SelectItem>
                <SelectItem value="1pm">1:00 PM</SelectItem>
                <SelectItem value="2pm">2:00 PM</SelectItem>
                <SelectItem value="3pm">3:00 PM</SelectItem>
                <SelectItem value="4pm">4:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Estimated completion: 2 hours after pickup</span>
            </div>
          </div>

          <Button className="w-full">Schedule Pickup</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Date and time picker popover for scheduling services'
      }
    }
  }
};
