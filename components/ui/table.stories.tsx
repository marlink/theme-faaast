import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { Checkbox } from './checkbox';
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  XCircle,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  DollarSign,
  Calendar,
  User,
  Wrench,
  Truck
} from 'lucide-react';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A responsive table component with sorting, selection, and action capabilities. Includes proper accessibility features and mobile-responsive design.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Table>;

// Basic data table
export const Basic: Story = {
  render: () => (
    <Table>
      <TableCaption>Recent service orders</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">#12345</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>Powder Coating</TableCell>
          <TableCell>
            <Badge variant="secondary">Completed</Badge>
          </TableCell>
          <TableCell className="text-right">$89.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">#12346</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>CNC Machining</TableCell>
          <TableCell>
            <Badge variant="default">In Progress</Badge>
          </TableCell>
          <TableCell className="text-right">$149.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">#12347</TableCell>
          <TableCell>Mike Johnson</TableCell>
          <TableCell>Wheel Straightening</TableCell>
          <TableCell>
            <Badge variant="outline">Pending</Badge>
          </TableCell>
          <TableCell className="text-right">$79.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic table with service order data and status badges'
      }
    }
  }
};

// Orders management table
export const OrdersTable: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Service Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">#ORD-001</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">john@example.com</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>Powder Coating</TableCell>
              <TableCell>Mar 15, 2024</TableCell>
              <TableCell>
                <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                  <CheckCircle className="h-3 w-3" />
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="text-right">$89.00</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">#ORD-002</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-sm text-muted-foreground">jane@example.com</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>CNC Machining</TableCell>
              <TableCell>Mar 14, 2024</TableCell>
              <TableCell>
                <Badge variant="default" className="flex items-center gap-1 w-fit">
                  <Wrench className="h-3 w-3" />
                  In Progress
                </Badge>
              </TableCell>
              <TableCell className="text-right">$149.00</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">#ORD-003</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Mike Johnson</div>
                    <div className="text-sm text-muted-foreground">mike@example.com</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>Wheel Straightening</TableCell>
              <TableCell>Mar 13, 2024</TableCell>
              <TableCell>
                <Badge variant="outline" className="flex items-center gap-1 w-fit">
                  <Clock className="h-3 w-3" />
                  Pending
                </Badge>
              </TableCell>
              <TableCell className="text-right">$79.00</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6} className="text-right font-medium">Total</TableCell>
              <TableCell className="text-right font-bold">$317.00</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive orders table with selection, avatars, status badges, and actions'
      }
    }
  }
};

// Service catalog table
export const ServiceCatalog: Story = {
  render: () => (
    <Table>
      <TableCaption>Available digital services and pricing</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead className="text-center">Warranty</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Wrench className="h-4 w-4 text-blue-600" />
              </div>
              Powder Coating
            </div>
          </TableCell>
          <TableCell>Professional color coating with UV protection</TableCell>
          <TableCell>2-3 days</TableCell>
          <TableCell className="text-center">
            <Badge variant="secondary">2 years</Badge>
          </TableCell>
          <TableCell className="text-right font-medium">$89</TableCell>
          <TableCell className="text-center">
            <Button size="sm">Select</Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Settings className="h-4 w-4 text-green-600" />
              </div>
              CNC Machining
            </div>
          </TableCell>
          <TableCell>Precision wheel modifications and detailing</TableCell>
          <TableCell>3-5 days</TableCell>
          <TableCell className="text-center">
            <Badge variant="secondary">2 years</Badge>
          </TableCell>
          <TableCell className="text-right font-medium">$149</TableCell>
          <TableCell className="text-center">
            <Button size="sm">Select</Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
              </div>
              Wheel Straightening
            </div>
          </TableCell>
          <TableCell>Website bug fixes and optimization service</TableCell>
          <TableCell>1-2 days</TableCell>
          <TableCell className="text-center">
            <Badge variant="outline">1 year</Badge>
          </TableCell>
          <TableCell className="text-right font-medium">$79</TableCell>
          <TableCell className="text-center">
            <Button size="sm">Select</Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="h-4 w-4 text-red-600" />
              </div>
              Wheel Repair
            </div>
          </TableCell>
          <TableCell>Comprehensive website development service</TableCell>
          <TableCell>5-7 days</TableCell>
          <TableCell className="text-center">
            <Badge variant="outline">1 year</Badge>
          </TableCell>
          <TableCell className="text-right font-medium">$199</TableCell>
          <TableCell className="text-center">
            <Button size="sm">Select</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Service catalog table with icons, descriptions, and pricing'
      }
    }
  }
};

// Inventory table
export const InventoryTable: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Last Restocked</TableHead>
              <TableHead className="text-right">Unit Cost</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Matte Black Powder</TableCell>
              <TableCell>Coating Materials</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <span className="text-sm">3 cans</span>
                </div>
              </TableCell>
              <TableCell>AutoParts Inc.</TableCell>
              <TableCell>Mar 10, 2024</TableCell>
              <TableCell className="text-right">$45.00</TableCell>
              <TableCell className="text-center">
                <Badge variant="destructive">Low Stock</Badge>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">Clear Coat</TableCell>
              <TableCell>Coating Materials</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <span className="text-sm">1 gallon</span>
                </div>
              </TableCell>
              <TableCell>Chemical Supplies Co.</TableCell>
              <TableCell>Mar 8, 2024</TableCell>
              <TableCell className="text-right">$89.00</TableCell>
              <TableCell className="text-center">
                <Badge variant="secondary">Reorder Soon</Badge>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">CNC Bits (Set of 10)</TableCell>
              <TableCell>Tools & Equipment</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-sm">17 sets</span>
                </div>
              </TableCell>
              <TableCell>Precision Tools Ltd.</TableCell>
              <TableCell>Mar 12, 2024</TableCell>
              <TableCell className="text-right">$125.00</TableCell>
              <TableCell className="text-center">
                <Badge variant="secondary">In Stock</Badge>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">Wheel Weights (50g)</TableCell>
              <TableCell>Parts & Accessories</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <span className="text-sm">200 pcs</span>
                </div>
              </TableCell>
              <TableCell>Balance Masters</TableCell>
              <TableCell>Mar 15, 2024</TableCell>
              <TableCell className="text-right">$12.50</TableCell>
              <TableCell className="text-center">
                <Badge variant="secondary">Well Stocked</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inventory management table with stock levels, progress bars, and status indicators'
      }
    }
  }
};

// Customer management table
export const CustomerTable: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Customer Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Total Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Last Order</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">Premium Customer</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>john.doe@email.com</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </TableCell>
              <TableCell className="font-medium">12</TableCell>
              <TableCell className="font-medium">$2,450</TableCell>
              <TableCell>Mar 15, 2024</TableCell>
              <TableCell>
                <Badge variant="secondary">Active</Badge>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex gap-1 justify-center">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-sm text-muted-foreground">Regular Customer</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>jane.smith@email.com</div>
                  <div className="text-muted-foreground">+1 (555) 987-6543</div>
                </div>
              </TableCell>
              <TableCell className="font-medium">8</TableCell>
              <TableCell className="font-medium">$1,320</TableCell>
              <TableCell>Mar 10, 2024</TableCell>
              <TableCell>
                <Badge variant="secondary">Active</Badge>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex gap-1 justify-center">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Mike Johnson</div>
                    <div className="text-sm text-muted-foreground">New Customer</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>mike.johnson@email.com</div>
                  <div className="text-muted-foreground">+1 (555) 456-7890</div>
                </div>
              </TableCell>
              <TableCell className="font-medium">1</TableCell>
              <TableCell className="font-medium">$89</TableCell>
              <TableCell>Mar 5, 2024</TableCell>
              <TableCell>
                <Badge variant="outline">Inactive</Badge>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex gap-1 justify-center">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2} className="font-medium">Total Customers: 3</TableCell>
              <TableCell className="font-medium">21 orders</TableCell>
              <TableCell className="font-medium">$3,859</TableCell>
              <TableCell colSpan={3}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customer management table with contact info, order history, and customer segmentation'
      }
    }
  }
};
