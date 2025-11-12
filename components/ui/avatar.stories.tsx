import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import {
  User,
  Settings,
  Crown,
  Star,
  Shield,
  Wrench,
  Truck,
  CheckCircle,
  Clock,
  MessageSquare
} from 'lucide-react';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible avatar component with image support and fallback options for user profiles and team members.'
      }
    }
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Avatar content (typically AvatarImage and AvatarFallback)'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Basic avatars
export const Basic: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="Company" />
        <AvatarFallback>CO</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic avatar examples with images and fallback initials'
      }
    }
  }
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>XS</AvatarFallback>
        </Avatar>
        <div className="text-xs text-muted-foreground mt-1">24px</div>
      </div>

      <div className="text-center">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <div className="text-xs text-muted-foreground mt-1">32px</div>
      </div>

      <div className="text-center">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <div className="text-xs text-muted-foreground mt-1">40px</div>
      </div>

      <div className="text-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
        <div className="text-xs text-muted-foreground mt-1">48px</div>
      </div>

      <div className="text-center">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>XL</AvatarFallback>
        </Avatar>
        <div className="text-xs text-muted-foreground mt-1">64px</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar components in different sizes for various UI contexts'
      }
    }
  }
};

// Team members
export const TeamMembers: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Our Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground">Lead Technician</div>
              <div className="flex items-center gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">Powder Coating</Badge>
                <Badge variant="secondary" className="text-xs">CNC Expert</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">Contact</Button>
          </div>

          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-blue-100 text-blue-600">SJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">Quality Control</div>
              <div className="flex items-center gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">Quality Assurance</Badge>
                <Badge variant="secondary" className="text-xs">5+ years</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">Contact</Button>
          </div>

          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-green-100 text-green-600">MJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">Mike Johnson</div>
              <div className="text-sm text-muted-foreground">Customer Service</div>
              <div className="flex items-center gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">Customer Support</Badge>
                <Badge variant="secondary" className="text-xs">Manager</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">Contact</Button>
          </div>

          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-purple-100 text-purple-600">AL</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">Anna Lee</div>
              <div className="text-sm text-muted-foreground">Logistics Coordinator</div>
              <div className="flex items-center gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">Shipping</Badge>
                <Badge variant="secondary" className="text-xs">Inventory</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">Contact</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Team member profiles with avatars, roles, and specializations'
      }
    }
  }
};

// Customer avatars with status
export const CustomerAvatars: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Recent Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 border rounded-lg">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1">
              <div className="font-medium">Robert Brown</div>
              <div className="text-sm text-muted-foreground">Premium customer • 15 orders</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">$2,450</div>
              <div className="text-xs text-muted-foreground">Total spent</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 border rounded-lg">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-orange-100 text-orange-600">KW</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1">
              <div className="font-medium">Karen Wilson</div>
              <div className="text-sm text-muted-foreground">Regular customer • 8 orders</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">$1,320</div>
              <div className="text-xs text-muted-foreground">Total spent</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 border rounded-lg">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-blue-100 text-blue-600">DT</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1">
              <div className="font-medium">David Thompson</div>
              <div className="text-sm text-muted-foreground">New customer • 1 order</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">$89</div>
              <div className="text-xs text-muted-foreground">Total spent</div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Active customer</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Recent activity</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>Inactive</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customer profiles with status indicators and activity levels'
      }
    }
  }
};

// Avatar groups/stacks
export const AvatarGroups: Story = {
  render: () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Teams</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Powder Coating Service</div>
              <div className="text-sm text-muted-foreground">Currently working on 3 orders</div>
            </div>
            <div className="flex -space-x-2">
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-blue-100 text-blue-600">SJ</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-green-100 text-green-600">MJ</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white bg-muted">
                <AvatarFallback className="text-xs">+2</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">CNC Machining</div>
              <div className="text-sm text-muted-foreground">Specialized precision work</div>
            </div>
            <div className="flex -space-x-2">
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-purple-100 text-purple-600">AL</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white bg-muted">
                <AvatarFallback className="text-xs">+1</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Quality Control</div>
              <div className="text-sm text-muted-foreground">Final inspection team</div>
            </div>
            <div className="flex -space-x-2">
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-red-100 text-red-600">KW</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-yellow-100 text-yellow-600">DT</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Online Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-blue-100 text-blue-600">SJ</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-green-100 text-green-600">MJ</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-purple-100 text-purple-600">AL</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-sm">
              <span className="font-medium">4 team members</span> online now
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar groups showing team assignments and online status'
      }
    }
  }
};

// Status indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Team Member Status</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Available
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-blue-100 text-blue-600">SJ</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <div className="font-medium">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Busy
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-gray-100 text-gray-600">MJ</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <div className="font-medium">Mike Johnson</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Offline
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-red-100 text-red-600">AL</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <div className="font-medium">Anna Lee</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Do Not Disturb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars with status indicators for team member availability'
      }
    }
  }
};

// Comments and reviews
export const CommentsAndReviews: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Recent Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>RB</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">Robert Brown</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">2 days ago</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Excellent service! The powder coating on my wheels looks incredible.
              The team was professional and the turnaround time was exactly as promised.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-green-100 text-green-600">KW</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">Karen Wilson</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">1 week ago</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Very satisfied with the CNC machining work. Precision was excellent
              and the finish quality exceeded my expectations.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-blue-100 text-blue-600">DT</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">David Thompson</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">2 weeks ago</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Outstanding customer service and quality work. The team went above
              and beyond to ensure everything was perfect. Highly recommended!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customer reviews and comments with avatars and rating stars'
      }
    }
  }
};

// Fallback variations
export const FallbackVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Fallback Styles</h3>
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback className="bg-blue-100 text-blue-600">SJ</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback className="bg-green-100 text-green-600">MJ</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback className="bg-purple-100 text-purple-600">AL</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-600 text-white">
              <Crown className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback className="bg-gradient-to-br from-blue-400 to-cyan-600 text-white">
              <Shield className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Icon Fallbacks</h3>
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback>
              <Settings className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback>
              <Wrench className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback>
              <Truck className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various fallback styles including colors, gradients, and icons'
      }
    }
  }
};
