import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import {
  CheckCircle,
  Clock,
  Settings,
  Truck,
  Upload,
  Download,
  Zap,
  Wrench,
  FileText,
  Users
} from 'lucide-react';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A progress bar component for showing completion status, loading states, and task progress.'
      }
    }
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'The progress value (0-100)'
    }
  },
  args: {
    value: 50
  }
};

export default meta;
type Story = StoryObj<typeof Progress>;

// Basic progress bar
export const Basic: Story = {
  render: (args) => (
    <div className="w-80 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>{args.value}%</span>
      </div>
      <Progress {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic progress bar with percentage display'
      }
    }
  }
};

// Service progress tracking
export const ServiceProgress: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Service Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Order Received</div>
                  <div className="text-sm text-muted-foreground">March 15, 2024 - 9:00 AM</div>
                </div>
              </div>
              <Badge variant="secondary">Completed</Badge>
            </div>
            <Progress value={100} />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Wrench className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <div className="font-medium">Surface Preparation</div>
                  <div className="text-sm text-muted-foreground">Stripping and cleaning</div>
                </div>
              </div>
              <Badge variant="default">In Progress</Badge>
            </div>
            <Progress value={65} />
            <div className="text-xs text-muted-foreground">Estimated completion: 2 hours</div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Settings className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium">Powder Coating</div>
                  <div className="text-sm text-muted-foreground">Color application</div>
                </div>
              </div>
              <Badge variant="outline">Pending</Badge>
            </div>
            <Progress value={0} />
            <div className="text-xs text-muted-foreground">Starts after surface preparation</div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium">Quality Inspection</div>
                  <div className="text-sm text-muted-foreground">Final quality check</div>
                </div>
              </div>
              <Badge variant="outline">Pending</Badge>
            </div>
            <Progress value={0} />
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Service progress tracking with multiple steps and status indicators'
      }
    }
  }
};

// File upload progress
export const FileUploadProgress: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          File Upload Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">wheel-photos-001.jpg</div>
                <div className="text-sm text-muted-foreground">2.4 MB</div>
              </div>
            </div>
            <Badge variant="default">Uploading</Badge>
          </div>
          <Progress value={75} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1.8 MB uploaded</span>
            <span>75%</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium">damage-assessment.pdf</div>
                <div className="text-sm text-muted-foreground">1.2 MB</div>
              </div>
            </div>
            <Badge variant="secondary">Completed</Badge>
          </div>
          <Progress value={100} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Upload complete</span>
            <span>100%</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <div className="font-medium">before-after-comparison.zip</div>
                <div className="text-sm text-muted-foreground">8.7 MB</div>
              </div>
            </div>
            <Badge variant="outline">Queued</Badge>
          </div>
          <Progress value={0} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Waiting to upload</span>
            <span>0%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'File upload progress with different states and file information'
      }
    }
  }
};

// Project completion tracking
export const ProjectCompletion: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-muted-foreground">Overall Progress</div>
              <Progress value={85} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-sm text-muted-foreground">Completed Tasks</div>
              <Progress value={100} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
              <Progress value={60} className="mt-2" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Task Progress</h4>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Customer Consultation</span>
                  <span>100%</span>
                </div>
                <Progress value={100} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Parts Procurement</span>
                  <span>100%</span>
                </div>
                <Progress value={100} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Surface Preparation</span>
                  <span>90%</span>
                </div>
                <Progress value={90} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Powder Coating Application</span>
                  <span>60%</span>
                </div>
                <Progress value={60} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Quality Inspection</span>
                  <span>0%</span>
                </div>
                <Progress value={0} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Final Delivery</span>
                  <span>0%</span>
                </div>
                <Progress value={0} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Project completion tracking with overall progress and individual task status'
      }
    }
  }
};

// Skill level indicators
export const SkillLevels: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Team Skills Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Powder Coating Expertise</span>
              <span className="font-medium">95%</span>
            </div>
            <Progress value={95} />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>CNC Machining Skills</span>
              <span className="font-medium">88%</span>
            </div>
            <Progress value={88} />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Wheel Straightening</span>
              <span className="font-medium">92%</span>
            </div>
            <Progress value={92} />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Quality Control</span>
              <span className="font-medium">98%</span>
            </div>
            <Progress value={98} />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Customer Service</span>
              <span className="font-medium">85%</span>
            </div>
            <Progress value={85} />
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span>Overall Team Proficiency</span>
            <span className="font-bold text-lg">92%</span>
          </div>
          <Progress value={92} className="mt-2" />
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Skill level indicators showing team competencies and overall proficiency'
      }
    }
  }
};

// Loading states
export const LoadingStates: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="space-y-6 w-80">
        <Card>
          <CardHeader>
            <CardTitle>Loading States</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing order...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading files...</span>
                <span>65%</span>
              </div>
              <Progress value={65} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Generating report...</span>
                <span>30%</span>
              </div>
              <Progress value={30} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Syncing data...</span>
                <span>80%</span>
              </div>
              <Progress value={80} />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive loading states with animated progress bars'
      }
    }
  }
};

// Storage usage
export const StorageUsage: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Storage Usage
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Overall Storage</span>
            <span>7.2 GB of 10 GB used</span>
          </div>
          <Progress value={72} />
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Photos & Images</span>
              <span>4.1 GB</span>
            </div>
            <Progress value={41} className="h-1" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Documents</span>
              <span>2.3 GB</span>
            </div>
            <Progress value={23} className="h-1" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Reports</span>
              <span>0.8 GB</span>
            </div>
            <Progress value={8} className="h-1" />
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Available Space</span>
            <span className="font-medium">2.8 GB</span>
          </div>
        </div>

        <Button className="w-full">Manage Storage</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Storage usage visualization with breakdown by category'
      }
    }
  }
};
