import type { Meta, StoryObj } from '@storybook/react';
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command';
import { Button } from './button';
import { Badge } from './badge';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  Plus,
  FileText,
  Wrench,
  Palette,
  Truck,
  Phone,
  Mail,
  MapPin,
  Edit,
  Trash2,
  Copy,
  Download,
  Upload,
  Star,
  Heart,
  Share2,
  Bell
} from 'lucide-react';

const meta: Meta<typeof Command> = {
  title: 'UI/Command',
  component: Command,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A command palette component with search functionality, keyboard navigation, and grouped results. Perfect for global search and quick actions.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Command>;

// Basic command palette
export const Basic: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-96">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic command palette with search input and suggestions'
      }
    }
  }
};

// Command dialog (full palette)
export const CommandDialog: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      };
      document.addEventListener('keydown', down);
      return () => document.removeEventListener('keydown', down);
    }, []);

    return (
      <>
        <Button
          variant="outline"
          className="w-96 justify-between text-sm text-muted-foreground"
          onClick={() => setOpen(true)}
        >
          <span>Search commands...</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Quick Actions">
              <CommandItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>New Service Request</span>
              </CommandItem>
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Schedule Appointment</span>
              </CommandItem>
              <CommandItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>View Orders</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Services">
              <CommandItem>
                <Palette className="mr-2 h-4 w-4" />
                <span>Powder Coating</span>
              </CommandItem>
              <CommandItem>
                <Wrench className="mr-2 h-4 w-4" />
                <span>CNC Machining</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Wheel Straightening</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Preferences</span>
              </CommandItem>
              <CommandItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Full command dialog with keyboard shortcut trigger and comprehensive command palette'
      }
    }
  }
};

// Service search command
export const ServiceSearch: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-full max-w-2xl">
      <CommandInput placeholder="Search services, orders, or customers..." />
      <CommandList>
        <CommandEmpty>No services found.</CommandEmpty>

        <CommandGroup heading="Popular Services">
          <CommandItem>
            <Palette className="mr-2 h-4 w-4" />
            <span>Powder Coating</span>
            <Badge variant="secondary" className="ml-auto">Most Popular</Badge>
          </CommandItem>
          <CommandItem>
            <Wrench className="mr-2 h-4 w-4" />
            <span>CNC Machining</span>
            <Badge variant="secondary" className="ml-auto">Premium</Badge>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Wheel Straightening</span>
            <Badge variant="outline" className="ml-auto">Standard</Badge>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Recent Orders">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Order #ORD-001 - John Doe</span>
            <CommandShortcut>2 days ago</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Order #ORD-002 - Jane Smith</span>
            <CommandShortcut>5 days ago</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Order #ORD-003 - Mike Johnson</span>
            <CommandShortcut>1 week ago</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick Actions">
          <CommandItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>Create New Order</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Schedule Pickup</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Truck className="mr-2 h-4 w-4" />
            <span>Track Delivery</span>
            <CommandShortcut>⌘T</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Service search command with grouped results, badges, and keyboard shortcuts'
      }
    }
  }
};

// Customer search command
export const CustomerSearch: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-full max-w-2xl">
      <CommandInput placeholder="Search customers..." />
      <CommandList>
        <CommandEmpty>No customers found.</CommandEmpty>

        <CommandGroup heading="Recent Customers">
          <CommandItem>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="h-3 w-3 text-white" />
              </div>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">john@example.com</div>
              </div>
            </div>
            <CommandShortcut>12 orders</CommandShortcut>
          </CommandItem>

          <CommandItem>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <User className="h-3 w-3 text-white" />
              </div>
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-muted-foreground">jane@example.com</div>
              </div>
            </div>
            <CommandShortcut>8 orders</CommandShortcut>
          </CommandItem>

          <CommandItem>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <User className="h-3 w-3 text-white" />
              </div>
              <div>
                <div className="font-medium">Mike Johnson</div>
                <div className="text-sm text-muted-foreground">mike@example.com</div>
              </div>
            </div>
            <CommandShortcut>3 orders</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Customer Actions">
          <CommandItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>Add New Customer</span>
            <CommandShortcut>⌘⇧N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>View Customer Reports</span>
            <CommandShortcut>⌘R</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Send Bulk Email</span>
            <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customer search command with avatars, order counts, and customer management actions'
      }
    }
  }
};

// Navigation command
export const NavigationCommand: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-80">
      <CommandInput placeholder="Go to..." />
      <CommandList>
        <CommandEmpty>Page not found.</CommandEmpty>

        <CommandGroup heading="Services">
          <CommandItem>
            <Palette className="mr-2 h-4 w-4" />
            <span>Powder Coating</span>
          </CommandItem>
          <CommandItem>
            <Wrench className="mr-2 h-4 w-4" />
            <span>CNC Machining</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Wheel Straightening</span>
          </CommandItem>
          <CommandItem>
            <Truck className="mr-2 h-4 w-4" />
            <span>Wheel Repair</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Account">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>My Orders</span>
          </CommandItem>
          <CommandItem>
            <Heart className="mr-2 h-4 w-4" />
            <span>Favorites</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Support">
          <CommandItem>
            <Phone className="mr-2 h-4 w-4" />
            <span>Contact Us</span>
          </CommandItem>
          <CommandItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help Center</span>
          </CommandItem>
          <CommandItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Live Chat</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Navigation command palette for quick page navigation and feature access'
      }
    }
  }
};

// File operations command
export const FileOperations: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-96">
      <CommandInput placeholder="Search files or operations..." />
      <CommandList>
        <CommandEmpty>No files found.</CommandEmpty>

        <CommandGroup heading="Recent Files">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>service-quote-001.pdf</span>
            <CommandShortcut>2 hours ago</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>wheel-specs-18inch.xlsx</span>
            <CommandShortcut>1 day ago</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>customer-list.csv</span>
            <CommandShortcut>3 days ago</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="File Operations">
          <CommandItem>
            <Upload className="mr-2 h-4 w-4" />
            <span>Upload Files</span>
            <CommandShortcut>⌘U</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Download Report</span>
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Share2 className="mr-2 h-4 w-4" />
            <span>Share Files</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick Actions">
          <CommandItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Quote</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
            <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy Link</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: 'File operations command with recent files, upload/download actions, and quick shortcuts'
      }
    }
  }
};

// Settings command
export const SettingsCommand: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-96">
      <CommandInput placeholder="Search settings..." />
      <CommandList>
        <CommandEmpty>No settings found.</CommandEmpty>

        <CommandGroup heading="Account Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile Information</span>
          </CommandItem>
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Email Preferences</span>
          </CommandItem>
          <CommandItem>
            <Bell className="mr-2 h-4 w-4" />
            <span>Notification Settings</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Service Preferences">
          <CommandItem>
            <Palette className="mr-2 h-4 w-4" />
            <span>Default Colors</span>
          </CommandItem>
          <CommandItem>
            <Truck className="mr-2 h-4 w-4" />
            <span>Shipping Preferences</span>
          </CommandItem>
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Appointment Settings</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="System">
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Advanced Settings</span>
          </CommandItem>
          <CommandItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Export Data</span>
          </CommandItem>
          <CommandItem>
            <Trash2 className="mr-2 h-4 w-4 text-red-600" />
            <span>Delete Account</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Settings command palette for quick access to all application settings and preferences'
      }
    }
  }
};

// Emoji picker command
export const EmojiPicker: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-80">
      <CommandInput placeholder="Search emojis..." />
      <CommandList>
        <CommandEmpty>No emojis found.</CommandEmpty>

        <CommandGroup heading="Smileys & People">
          <CommandItem>
            <span className="mr-2 text-lg">😀</span>
            <span>Grinning Face</span>
          </CommandItem>
          <CommandItem>
            <span className="mr-2 text-lg">😂</span>
            <span>Face with Tears of Joy</span>
          </CommandItem>
          <CommandItem>
            <span className="mr-2 text-lg">❤️</span>
            <span>Red Heart</span>
          </CommandItem>
          <CommandItem>
            <span className="mr-2 text-lg">👍</span>
            <span>Thumbs Up</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Activities">
          <CommandItem>
            <span className="mr-2 text-lg">⚽</span>
            <span>Soccer Ball</span>
          </CommandItem>
          <CommandItem>
            <span className="mr-2 text-lg">🎯</span>
            <span>Direct Hit</span>
          </CommandItem>
          <CommandItem>
            <span className="mr-2 text-lg">🎨</span>
            <span>Artist Palette</span>
          </CommandItem>
          <CommandItem>
            <span className="mr-2 text-lg">🏆</span>
            <span>Trophy</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Objects">
          <CommandItem>
            <span className="mr-2 text-lg">🔧</span>
            <span>Wrench</span>
          </CommandItem>
          <CommandItem>
            <span className="mr-2 text-lg">⚙️</span>
            <span>Gear</span>
          </CommandItem>
          <CommandItem>
            <span className="mr-2 text-lg">🚗</span>
            <span>Car</span>
          </CommandItem>
          <CommandItem>
            <span className="mr-2 text-lg">🛞</span>
            <span>Wheel</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Emoji picker command with categorized emoji selection'
      }
    }
  }
};
