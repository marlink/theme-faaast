import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './alert';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Badge } from './badge';
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  Bell,
  Shield,
  Truck,
  Clock,
  DollarSign,
  Settings,
  Zap,
  AlertCircle
} from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Alert component for displaying important messages, warnings, errors, and success states with optional icons.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
      description: 'The visual style variant of the alert'
    }
  },
  args: {
    variant: 'default'
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

// Basic alerts
export const Basic: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is a basic information alert with an icon and description.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          This is a destructive alert for error messages and warnings.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic alert examples with different variants and icons'
      }
    }
  }
};

// Status alerts
export const StatusAlerts: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your order has been successfully submitted and is being processed.
        </AlertDescription>
      </Alert>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          Your service request has been received. We'll contact you within 24 hours.
        </AlertDescription>
      </Alert>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please review your order details before proceeding with payment.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          There was an error processing your request. Please try again later.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status-based alerts for different feedback scenarios'
      }
    }
  }
};

// Service notifications
export const ServiceNotifications: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <Truck className="h-4 w-4" />
        <AlertTitle>Order Shipped</AlertTitle>
        <AlertDescription>
          Your powder coating service order #12345 has been shipped and is on its way to our facility.
        </AlertDescription>
      </Alert>

      <Alert>
        <Clock className="h-4 w-4" />
        <AlertTitle>Service Started</AlertTitle>
        <AlertDescription>
          Work has begun on your wheel straightening service. Expected completion: 2-3 business days.
        </AlertDescription>
      </Alert>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Service Completed</AlertTitle>
        <AlertDescription>
          Your CNC machining service has been completed and is ready for pickup. Please bring your receipt.
        </AlertDescription>
      </Alert>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Additional Work Required</AlertTitle>
        <AlertDescription>
          During inspection, we found additional damage that requires repair. We'll contact you with options.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Service-specific notifications for different stages of the process'
      }
    }
  }
};

// System alerts
export const SystemAlerts: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <Bell className="h-4 w-4" />
        <AlertTitle>System Maintenance</AlertTitle>
        <AlertDescription>
          Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM. Service may be temporarily unavailable.
        </AlertDescription>
      </Alert>

      <Alert>
        <Shield className="h-4 w-4" />
        <AlertTitle>Security Update</AlertTitle>
        <AlertDescription>
          We've enhanced our security measures. All data is now encrypted and protected with additional safeguards.
        </AlertDescription>
      </Alert>

      <Alert>
        <Zap className="h-4 w-4" />
        <AlertTitle>New Feature Available</AlertTitle>
        <AlertDescription>
          Express service is now available for rush orders. Complete your website project in 24 hours!
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Service Disruption</AlertTitle>
        <AlertDescription>
          We're experiencing technical difficulties. Some services may be temporarily unavailable. We're working to resolve this quickly.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'System-wide alerts for maintenance, updates, and disruptions'
      }
    }
  }
};

// Alerts with actions
export const AlertsWithActions: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Quote Generated</AlertTitle>
        <AlertDescription>
          Your service quote has been generated. Review the details and proceed with booking.
        </AlertDescription>
        <div className="flex gap-2 mt-3">
          <Button size="sm">View Quote</Button>
          <Button size="sm" variant="outline">Book Now</Button>
        </div>
      </Alert>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Payment Required</AlertTitle>
        <AlertDescription>
          Your order is pending payment. Complete your payment to begin service processing.
        </AlertDescription>
        <div className="flex gap-2 mt-3">
          <Button size="sm">Pay Now</Button>
          <Button size="sm" variant="outline">View Details</Button>
        </div>
      </Alert>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Account Verification</AlertTitle>
        <AlertDescription>
          Please verify your email address to access all account features and receive updates.
        </AlertDescription>
        <div className="flex gap-2 mt-3">
          <Button size="sm">Send Verification</Button>
          <Button size="sm" variant="outline">Skip</Button>
        </div>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Payment Failed</AlertTitle>
        <AlertDescription>
          Your payment could not be processed. Please check your payment method and try again.
        </AlertDescription>
        <div className="flex gap-2 mt-3">
          <Button size="sm">Try Again</Button>
          <Button size="sm" variant="outline">Contact Support</Button>
        </div>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with actionable buttons for user interaction'
      }
    }
  }
};

// Inline alerts in forms
export const FormValidation: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Service Request Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Service Type</label>
          <select className="w-full p-2 border rounded">
            <option>Select a service...</option>
            <option>Powder Coating</option>
            <option>CNC Machining</option>
          </select>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please select a service type to continue.
            </AlertDescription>
          </Alert>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Project Specifications</label>
          <input
            type="text"
            placeholder="e.g., E-commerce website theme"
            className="w-full p-2 border rounded"
          />
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Include make, model, and size for accurate quoting.
            </AlertDescription>
          </Alert>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Urgency</label>
          <select className="w-full p-2 border rounded">
            <option>Standard (5-7 days)</option>
            <option>Rush (2-3 days) - +$50</option>
            <option>Express (24 hours) - +$150</option>
          </select>
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Rush orders may have additional fees and limited availability.
            </AlertDescription>
          </Alert>
        </div>

        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Ready to Submit</AlertTitle>
          <AlertDescription>
            Your form is complete and ready for submission. We'll provide a quote within 24 hours.
          </AlertDescription>
        </Alert>

        <Button className="w-full">Submit Request</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form validation alerts and helpful guidance messages'
      }
    }
  }
};

// Contextual alerts in dashboard
export const DashboardAlerts: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Daily Summary</AlertTitle>
        <AlertDescription>
          Today: 12 services completed, 8 new orders, $2,450 in revenue.
          <Badge variant="secondary" className="ml-2">+15% vs yesterday</Badge>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Alert>
          <Clock className="h-4 w-4" />
          <AlertTitle>Upcoming Appointments</AlertTitle>
          <AlertDescription>
            3 services scheduled for today. Next: Powder coating at 2:00 PM.
          </AlertDescription>
        </Alert>

        <Alert>
          <DollarSign className="h-4 w-4" />
          <AlertTitle>Outstanding Payments</AlertTitle>
          <AlertDescription>
            5 invoices pending payment totaling $1,250.
          </AlertDescription>
        </Alert>
      </div>

      <Alert>
        <Settings className="h-4 w-4" />
        <AlertTitle>System Health</AlertTitle>
        <AlertDescription>
          All systems operational. Last backup: 2 hours ago.
          <Badge variant="secondary" className="ml-2">Healthy</Badge>
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Inventory Alert</AlertTitle>
        <AlertDescription>
          Low stock warning: Matte Black powder (3 cans remaining), Clear coat (1 gallon remaining).
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashboard contextual alerts showing business metrics and system status'
      }
    }
  }
};

// Dismissible alerts
export const DismissibleAlerts: Story = {
  render: () => {
    const [visibleAlerts, setVisibleAlerts] = React.useState({
      welcome: true,
      update: true,
      maintenance: true
    });

    const dismissAlert = (key: string) => {
      setVisibleAlerts(prev => ({ ...prev, [key]: false }));
    };

    return (
      <div className="space-y-4 w-96">
        {visibleAlerts.welcome && (
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Welcome Back!</AlertTitle>
            <AlertDescription>
              Your account is active and you have 3 pending service quotes.
            </AlertDescription>
            <button
              onClick={() => dismissAlert('welcome')}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </Alert>
        )}

        {visibleAlerts.update && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Account Updated</AlertTitle>
            <AlertDescription>
              Your profile information has been successfully updated.
            </AlertDescription>
            <button
              onClick={() => dismissAlert('update')}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </Alert>
        )}

        {visibleAlerts.maintenance && (
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Scheduled Maintenance</AlertTitle>
            <AlertDescription>
              System maintenance scheduled for tonight. Service may be temporarily unavailable.
            </AlertDescription>
            <button
              onClick={() => dismissAlert('maintenance')}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </Alert>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alerts that users can close with interactive close buttons'
      }
    }
  }
};
