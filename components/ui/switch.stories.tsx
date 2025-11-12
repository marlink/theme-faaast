import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { Label } from './label';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Separator } from './separator';
import { Bell, Moon, Sun, Wifi, Volume2, VolumeX, Eye, EyeOff, Lock, Unlock } from 'lucide-react';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle switch component for on/off states, with accessibility features and keyboard navigation.'
      }
    }
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the switch is checked'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the switch is disabled'
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'The default checked state'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Basic switch
export const Basic: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <Label>Enable notifications</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic switch with label'
      }
    }
  }
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>On State</Label>
        <Switch defaultChecked />
      </div>

      <div className="flex items-center justify-between">
        <Label>Off State</Label>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <Label>Disabled On</Label>
        <Switch defaultChecked disabled />
      </div>

      <div className="flex items-center justify-between">
        <Label>Disabled Off</Label>
        <Switch disabled />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different switch states: on, off, disabled'
      }
    }
  }
};

// Settings panel
export const SettingsPanel: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive email updates about your orders
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Push Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Get notified about important updates
            </p>
          </div>
          <Switch />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Marketing Emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive promotional offers and updates
            </p>
          </div>
          <Switch />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">SMS Updates</Label>
            <p className="text-sm text-muted-foreground">
              Text message updates for urgent matters
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Two-Factor Authentication</Label>
            <p className="text-sm text-muted-foreground">
              Add an extra layer of security
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Recommended</Badge>
            <Switch />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Settings panel with various toggle switches for user preferences'
      }
    }
  }
};

// Feature toggles
export const FeatureToggles: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Service Features</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Bell className="h-4 w-4 text-primary" />
            </div>
            <div className="space-y-0.5">
              <Label className="text-base">Priority Scheduling</Label>
              <p className="text-sm text-muted-foreground">Faster processing time</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">+$25</div>
            <Switch />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Wifi className="h-4 w-4 text-blue-600" />
            </div>
            <div className="space-y-0.5">
              <Label className="text-base">Express Service</Label>
              <p className="text-sm text-muted-foreground">24-hour turnaround</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">+$75</div>
            <Switch defaultChecked />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Lock className="h-4 w-4 text-green-600" />
            </div>
            <div className="space-y-0.5">
              <Label className="text-base">Premium Warranty</Label>
              <p className="text-sm text-muted-foreground">Extended 5-year coverage</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">+$50</div>
            <Switch />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Eye className="h-4 w-4 text-purple-600" />
            </div>
            <div className="space-y-0.5">
              <Label className="text-base">Quality Inspection</Label>
              <p className="text-sm text-muted-foreground">Detailed quality report</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">+$15</div>
            <Switch defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Feature toggles with pricing and icons for service add-ons'
      }
    }
  }
};

// Theme switcher
export const ThemeSwitcher: Story = {
  render: () => {
    const [isDark, setIsDark] = React.useState(false);

    return (
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            Theme Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">
                Switch to dark theme
              </p>
            </div>
            <Switch
              checked={isDark}
              onCheckedChange={setIsDark}
            />
          </div>

          <div className="p-4 rounded-lg border">
            <div className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>
              Preview: This text changes color based on the theme toggle
            </div>
            <div className={`mt-2 p-2 rounded ${isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
              Background also changes with theme
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive theme switcher with live preview'
      }
    }
  }
};

// Privacy settings
export const PrivacySettings: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Privacy & Security</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Profile Visibility
            </Label>
            <p className="text-sm text-muted-foreground">
              Make your profile visible to other customers
            </p>
          </div>
          <Switch />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base flex items-center gap-2">
              <EyeOff className="h-4 w-4" />
              Hide Contact Info
            </Label>
            <p className="text-sm text-muted-foreground">
              Keep your phone and email private
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base flex items-center gap-2">
              <Unlock className="h-4 w-4" />
              Data Analytics
            </Label>
            <p className="text-sm text-muted-foreground">
              Help improve our services with usage data
            </p>
          </div>
          <Switch />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Marketing Tracking
            </Label>
            <p className="text-sm text-muted-foreground">
              Allow personalized marketing recommendations
            </p>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Privacy and security toggles with descriptive icons'
      }
    }
  }
};

// Audio/Video controls
export const MediaControls: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Media Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Volume2 className="h-4 w-4 text-red-600" />
            </div>
            <div className="space-y-0.5">
              <Label className="text-base">Sound Effects</Label>
              <p className="text-sm text-muted-foreground">Play UI sound effects</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <VolumeX className="h-4 w-4 text-blue-600" />
            </div>
            <div className="space-y-0.5">
              <Label className="text-base">Background Music</Label>
              <p className="text-sm text-muted-foreground">Play ambient background music</p>
            </div>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Bell className="h-4 w-4 text-green-600" />
            </div>
            <div className="space-y-0.5">
              <Label className="text-base">Notification Sounds</Label>
              <p className="text-sm text-muted-foreground">Audio alerts for notifications</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Eye className="h-4 w-4 text-purple-600" />
            </div>
            <div className="space-y-0.5">
              <Label className="text-base">Visual Effects</Label>
              <p className="text-sm text-muted-foreground">Show animation and transition effects</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Media and accessibility toggles with themed icons'
      }
    }
  }
};

// Quick toggles
export const QuickToggles: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div className="space-y-0.5">
          <Label className="text-base">Maintenance Mode</Label>
          <p className="text-sm text-muted-foreground">Temporarily disable new orders</p>
        </div>
        <Switch />
      </div>

      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div className="space-y-0.5">
          <Label className="text-base">Auto-save</Label>
          <p className="text-sm text-muted-foreground">Automatically save changes</p>
        </div>
        <Switch defaultChecked />
      </div>

      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div className="space-y-0.5">
          <Label className="text-base">Debug Mode</Label>
          <p className="text-sm text-muted-foreground">Show developer information</p>
        </div>
        <Switch />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple toggle switches for quick on/off settings'
      }
    }
  }
};
