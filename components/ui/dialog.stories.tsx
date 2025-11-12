import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Badge } from './badge';
import { Alert, AlertDescription } from './alert';
import { Separator } from './separator';
import {
  User,
  Mail,
  Phone,
  Settings,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
  Trash2,
  Edit,
  Plus,
  Save
} from 'lucide-react';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal dialog component with accessibility features, keyboard navigation, and theme support. Built on Radix UI primitives.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// Basic dialog
export const Basic: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Basic Dialog</DialogTitle>
          <DialogDescription>
            This is a basic dialog with a title and description.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Dialog content goes here. You can put any content inside the dialog.</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic dialog with header, content, and footer sections'
      }
    }
  }
};

// Form dialog
export const FormDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Service Request
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Service Request</DialogTitle>
          <DialogDescription>
            Create a new website project request. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="customer-name">Customer Name</Label>
            <Input id="customer-name" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service-type">Service Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="powder-coating">Powder Coating</SelectItem>
                <SelectItem value="cnc-machining">CNC Machining</SelectItem>
                <SelectItem value="wheel-straightening">Wheel Straightening</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the work needed..."
              rows={3}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Submit Request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A form dialog for creating new service requests with various input types'
      }
    }
  }
};

// Confirmation dialog
export const ConfirmationDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete Service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Delete Service Request
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this service request? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This will permanently delete the service request for "Wheel Straightening - 18 inch rims".
            </AlertDescription>
          </Alert>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete Request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A confirmation dialog for destructive actions with warning styling'
      }
    }
  }
};

// Success dialog
export const SuccessDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Changes Saved Successfully
          </DialogTitle>
          <DialogDescription>
            Your service request has been updated and saved to your account.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Service Type:</span>
              <span className="font-medium">Powder Coating</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Status:</span>
              <Badge variant="secondary">In Progress</Badge>
            </div>
            <div className="flex justify-between text-sm">
              <span>Estimated Completion:</span>
              <span className="font-medium">2-3 business days</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Continue</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A success confirmation dialog with positive messaging and status information'
      }
    }
  }
};

// Large content dialog
export const LargeContentDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Service Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Powder Coating Service Details</DialogTitle>
          <DialogDescription>
            Comprehensive information about our powder coating services
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div>
            <h4 className="font-semibold mb-2">Service Overview</h4>
            <p className="text-sm text-muted-foreground">
              Professional powder coating service for automotive wheels with RAL color matching,
              UV-resistant finishes, and industry-standard durability.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3">Available Colors</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-black rounded"></div>
                <span className="text-sm">Matte Black</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white border rounded"></div>
                <span className="text-sm">Gloss White</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <span className="text-sm">Royal Blue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600 rounded"></div>
                <span className="text-sm">Candy Red</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <span className="text-sm">Silver Metallic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                <span className="text-sm">Custom Colors</span>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3">Process Steps</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <h5 className="font-medium">Surface Preparation</h5>
                  <p className="text-sm text-muted-foreground">Chemical stripping and abrasive blasting</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <h5 className="font-medium">Color Application</h5>
                  <p className="text-sm text-muted-foreground">Electrostatic powder coating application</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <h5 className="font-medium">Curing Process</h5>
                  <p className="text-sm text-muted-foreground">High-temperature oven curing (200°C)</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h5 className="font-medium">Important Notes</h5>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• 2-year warranty on powder coating finish</li>
                  <li>• Color matching available for custom requests</li>
                  <li>• Rush service available for additional fee</li>
                  <li>• Free pickup and delivery within 50km</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button>Request Quote</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A large dialog with extensive content, proper scrolling, and rich information display'
      }
    }
  }
};

// Nested dialogs example
export const NestedDialogs: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Update your account information and preferences.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Delete Account
                </DialogTitle>
                <DialogDescription>
                  This will permanently delete your account and all associated data.
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive">Yes, Delete Account</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Nested dialogs demonstrating complex interaction patterns and confirmation flows'
      }
    }
  }
};

// Without close button
export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Important Notice</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            System Maintenance
          </DialogTitle>
          <DialogDescription>
            Our system will be undergoing maintenance from 2:00 AM to 4:00 AM EST.
            Service requests submitted during this time will be processed when we return.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Scheduled maintenance window: March 15, 2024, 2:00 AM - 4:00 AM EST
            </AlertDescription>
          </Alert>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>I Understand</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A dialog without the close button, forcing user interaction through footer actions'
      }
    }
  }
};
