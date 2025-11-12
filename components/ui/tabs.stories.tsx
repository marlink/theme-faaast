import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import {
  User,
  Settings,
  Bell,
  CreditCard,
  FileText,
  BarChart3,
  Calendar,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertTriangle,
  Truck,
  Wrench,
  Palette,
  Zap
} from 'lucide-react';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tabbed interface component for organizing content into separate views. Built on Radix UI with keyboard navigation and accessibility features.'
      }
    }
  },
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
      description: 'The default active tab value'
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs'
    }
  },
  args: {
    defaultValue: 'tab1'
  }
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Basic tabs
export const Basic: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-96">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4 border rounded-lg mt-2">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2" className="p-4 border rounded-lg mt-2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3" className="p-4 border rounded-lg mt-2">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic tabbed interface with three tabs and simple content'
      }
    }
  }
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="profile" className="w-96">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="p-4 border rounded-lg mt-2">
        <div className="space-y-4">
          <h3 className="font-medium">Profile Information</h3>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
        <div className="space-y-4">
          <h3 className="font-medium">Account Settings</h3>
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="notifications" className="p-4 border rounded-lg mt-2">
        <div className="space-y-4">
          <h3 className="font-medium">Notification Preferences</h3>
          <div className="space-y-2">
            <Label htmlFor="email-notif">Email Notifications</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All notifications</SelectItem>
                <SelectItem value="important">Important only</SelectItem>
                <SelectItem value="none">No notifications</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with icons and more complex form content in each tab'
      }
    }
  }
};

// Dashboard layout
export const Dashboard: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-4xl">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="services" className="flex items-center gap-2">
          <Wrench className="h-4 w-4" />
          Services
        </TabsTrigger>
        <TabsTrigger value="orders" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Orders
        </TabsTrigger>
        <TabsTrigger value="analytics" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          Analytics
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">+3 from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from yesterday</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="services" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Powder Coating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Active Orders:</span>
                  <Badge>8</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Completed Today:</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Avg. Completion:</span>
                  <span>2.5 days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                CNC Machining
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Active Orders:</span>
                  <Badge>5</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Completed Today:</span>
                  <Badge variant="secondary">1</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Avg. Completion:</span>
                  <span>4.2 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="orders" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'ORD-001', customer: 'John Doe', service: 'Powder Coating', status: 'In Progress', date: '2024-01-15' },
                { id: 'ORD-002', customer: 'Jane Smith', service: 'Wheel Straightening', status: 'Completed', date: '2024-01-14' },
                { id: 'ORD-003', customer: 'Mike Johnson', service: 'CNC Machining', status: 'Pending', date: '2024-01-13' },
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-muted-foreground">{order.customer} - {order.service}</div>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      order.status === 'Completed' ? 'secondary' :
                      order.status === 'In Progress' ? 'default' : 'outline'
                    }>
                      {order.status}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">{order.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="analytics" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              <div className="mt-4 h-20 bg-muted rounded flex items-end justify-around">
                <div className="w-2 bg-primary rounded-t" style={{ height: '40%' }}></div>
                <div className="w-2 bg-primary rounded-t" style={{ height: '60%' }}></div>
                <div className="w-2 bg-primary rounded-t" style={{ height: '80%' }}></div>
                <div className="w-2 bg-primary rounded-t" style={{ height: '100%' }}></div>
                <div className="w-2 bg-primary rounded-t" style={{ height: '70%' }}></div>
                <div className="w-2 bg-primary rounded-t" style={{ height: '90%' }}></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Popularity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Powder Coating</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">CNC Machining</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Wheel Straightening</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive dashboard layout with multiple tabs showing different data views'
      }
    }
  }
};

// Vertical tabs
export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" orientation="vertical" className="flex w-full max-w-4xl">
      <TabsList className="flex flex-col h-fit w-48">
        <TabsTrigger value="general" className="justify-start">
          General Settings
        </TabsTrigger>
        <TabsTrigger value="security" className="justify-start">
          Security
        </TabsTrigger>
        <TabsTrigger value="notifications" className="justify-start">
          Notifications
        </TabsTrigger>
        <TabsTrigger value="billing" className="justify-start">
          Billing
        </TabsTrigger>
      </TabsList>

      <div className="flex-1 ml-6">
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="SmartWheels" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Time</SelectItem>
                    <SelectItem value="cst">Central Time</SelectItem>
                    <SelectItem value="mst">Mountain Time</SelectItem>
                    <SelectItem value="pst">Pacific Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="two-factor" className="rounded" />
                <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email updates about your orders</p>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive text messages for urgent updates</p>
                </div>
                <input type="checkbox" className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">Receive promotional offers and updates</p>
                </div>
                <input type="checkbox" className="rounded" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="save-card" className="rounded" />
                <Label htmlFor="save-card">Save card for future payments</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical tab layout perfect for settings pages and detailed forms'
      }
    }
  }
};

// Service details tabs
export const ServiceDetails: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-4xl">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="specifications">Specs</TabsTrigger>
        <TabsTrigger value="pricing">Pricing</TabsTrigger>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Powder Coating Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Professional powder coating service for automotive wheels with RAL color matching,
              UV-resistant finishes, and industry-standard durability.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2-3</div>
                <div className="text-sm text-muted-foreground">Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Years Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Colors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">UV</div>
                <div className="text-sm text-muted-foreground">Protected</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="specifications" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Process Details</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Chemical stripping and abrasive blasting</li>
                    <li>• Electrostatic powder application</li>
                    <li>• High-temperature curing (200°C)</li>
                    <li>• Quality inspection and finishing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Quality Standards</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• RAL color matching accuracy</li>
                    <li>• 60-80 micron coating thickness</li>
                    <li>• UV resistance testing</li>
                    <li>• Salt spray corrosion resistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="pricing" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Pricing Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">$89</div>
                    <div className="text-sm text-muted-foreground">Standard</div>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Basic color selection</li>
                      <li>• Standard turnaround</li>
                      <li>• 2-year warranty</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 border rounded-lg border-primary">
                  <div className="text-center">
                    <Badge className="mb-2">Most Popular</Badge>
                    <div className="text-2xl font-bold">$129</div>
                    <div className="text-sm text-muted-foreground">Premium</div>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Premium colors</li>
                      <li>• Priority service</li>
                      <li>• 3-year warranty</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">$169</div>
                    <div className="text-sm text-muted-foreground">Custom</div>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Custom color matching</li>
                      <li>• Express service</li>
                      <li>• 5-year warranty</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="gallery" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Before & After Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Gallery Image {i}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Transformation example showing before/after powder coating results
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Detailed service information organized in tabs, perfect for product/service detail pages'
      }
    }
  }
};
