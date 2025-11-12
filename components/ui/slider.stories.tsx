import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';
import { Label } from './label';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { Volume2, VolumeX, Sun, Moon, DollarSign, Clock, Zap } from 'lucide-react';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A slider component for selecting values within a range, with support for single and multiple handles.'
      }
    }
  },
  argTypes: {
    min: {
      control: { type: 'number' },
      description: 'The minimum value'
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum value'
    },
    step: {
      control: { type: 'number' },
      description: 'The step increment'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the slider is disabled'
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the slider'
    }
  },
  args: {
    min: 0,
    max: 100,
    defaultValue: [50]
  }
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Basic slider
export const Basic: Story = {
  render: (args) => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <Label>Volume</Label>
        <Slider {...args} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic slider with default configuration'
      }
    }
  }
};

// Volume control
export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = React.useState([30]);

    return (
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {volume[0] === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            Volume Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Volume Level</Label>
              <Badge variant="secondary">{volume[0]}%</Badge>
            </div>
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setVolume([0])}
            >
              Mute
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setVolume([50])}
            >
              50%
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setVolume([100])}
            >
              Max
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive volume control with real-time value updates'
      }
    }
  }
};

// Price range selector
export const PriceRange: Story = {
  render: () => {
    const [priceRange, setPriceRange] = React.useState([50, 200]);

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Price Range
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Service Price Range</Label>
              <Badge variant="secondary">${priceRange[0]} - ${priceRange[1]}</Badge>
            </div>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              min={0}
              max={500}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0</span>
              <span>$250</span>
              <span>$500</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <Label className="text-xs text-muted-foreground">Minimum Price</Label>
              <div className="font-medium">${priceRange[0]}</div>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Maximum Price</Label>
              <div className="font-medium">${priceRange[1]}</div>
            </div>
          </div>

          <Button className="w-full">Apply Filter</Button>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dual-handle price range slider for filtering services'
      }
    }
  }
};

// Brightness control
export const BrightnessControl: Story = {
  render: () => {
    const [brightness, setBrightness] = React.useState([75]);

    return (
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {brightness[0] < 30 ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            Display Brightness
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Brightness Level</Label>
              <Badge variant="secondary">{brightness[0]}%</Badge>
            </div>
            <Slider
              value={brightness}
              onValueChange={setBrightness}
              max={100}
              step={5}
              className="w-full"
            />
          </div>

          {/* Visual representation */}
          <div className="p-4 border rounded-lg bg-gradient-to-r from-black to-white">
            <div
              className="h-8 rounded transition-all duration-200"
              style={{
                backgroundColor: `hsl(0, 0%, ${brightness[0]}%)`,
                filter: brightness[0] > 50 ? 'none' : 'brightness(0.8)'
              }}
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBrightness([25])}
            >
              Dim
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBrightness([75])}
            >
              Normal
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBrightness([100])}
            >
              Bright
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Brightness control with visual feedback and preset buttons'
      }
    }
  }
};

// Service duration selector
export const ServiceDuration: Story = {
  render: () => {
    const [duration, setDuration] = React.useState([3]);

    const getDurationLabel = (days: number) => {
      if (days === 1) return '1 day';
      if (days === 7) return '1 week';
      if (days === 14) return '2 weeks';
      return `${days} days`;
    };

    const getDurationColor = (days: number) => {
      if (days <= 2) return 'text-green-600';
      if (days <= 5) return 'text-yellow-600';
      return 'text-red-600';
    };

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Service Duration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Expected Completion Time</Label>
              <Badge variant="secondary">{getDurationLabel(duration[0])}</Badge>
            </div>
            <Slider
              value={duration}
              onValueChange={setDuration}
              min={1}
              max={14}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 day</span>
              <span>1 week</span>
              <span>2 weeks</span>
            </div>
          </div>

          <div className={`text-center p-3 rounded-lg border ${
            duration[0] <= 2 ? 'bg-green-50 border-green-200' :
            duration[0] <= 5 ? 'bg-yellow-50 border-yellow-200' :
            'bg-red-50 border-red-200'
          }`}>
            <div className={`font-medium ${getDurationColor(duration[0])}`}>
              {duration[0] <= 2 ? 'Express Service' :
               duration[0] <= 5 ? 'Standard Service' :
               'Extended Service'}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {duration[0] <= 2 ? 'Priority processing with additional fees' :
               duration[0] <= 5 ? 'Regular processing time' :
               'Extended timeline for complex work'}
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDuration([1])}
            >
              Rush (1 day)
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDuration([3])}
            >
              Standard (3 days)
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDuration([7])}
            >
              Regular (1 week)
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Service duration selector with contextual feedback and pricing implications'
      }
    }
  }
};

// Quality settings
export const QualitySettings: Story = {
  render: () => {
    const [quality, setQuality] = React.useState([75]);

    const getQualityLabel = (value: number) => {
      if (value >= 90) return 'Premium';
      if (value >= 75) return 'High';
      if (value >= 50) return 'Standard';
      if (value >= 25) return 'Basic';
      return 'Economy';
    };

    const getQualityColor = (value: number) => {
      if (value >= 90) return 'text-purple-600';
      if (value >= 75) return 'text-blue-600';
      if (value >= 50) return 'text-green-600';
      if (value >= 25) return 'text-yellow-600';
      return 'text-gray-600';
    };

    const getQualityPrice = (value: number) => {
      if (value >= 90) return '+$75';
      if (value >= 75) return '+$25';
      if (value >= 50) return 'Base price';
      if (value >= 25) return '-$15';
      return '-$30';
    };

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Service Quality
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Quality Level</Label>
              <div className="text-right">
                <div className={`font-medium ${getQualityColor(quality[0])}`}>
                  {getQualityLabel(quality[0])}
                </div>
                <div className="text-sm text-muted-foreground">
                  {getQualityPrice(quality[0])}
                </div>
              </div>
            </div>
            <Slider
              value={quality}
              onValueChange={setQuality}
              min={0}
              max={100}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Economy</span>
              <span>Standard</span>
              <span>Premium</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg">
              <div className="font-medium text-sm">Processing Time</div>
              <div className={`text-lg font-bold ${getQualityColor(quality[0])}`}>
                {quality[0] >= 75 ? '2-3 days' :
                 quality[0] >= 50 ? '3-5 days' :
                 '5-7 days'}
              </div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="font-medium text-sm">Warranty</div>
              <div className={`text-lg font-bold ${getQualityColor(quality[0])}`}>
                {quality[0] >= 75 ? '3 years' :
                 quality[0] >= 50 ? '2 years' :
                 '1 year'}
              </div>
            </div>
          </div>

          <Button className="w-full">Apply Quality Settings</Button>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Quality settings slider with dynamic pricing and feature changes'
      }
    }
  }
};

// Multiple range sliders
export const MultipleRanges: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <Card>
        <CardHeader>
          <CardTitle>Advanced Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Price Range ($)</Label>
            <Slider
              defaultValue={[50, 300]}
              min={0}
              max={500}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0</span>
              <span>$500</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Wheel Size (inches)</Label>
            <Slider
              defaultValue={[17, 20]}
              min={15}
              max={24}
              step={0.5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>15"</span>
              <span>24"</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Completion Time (days)</Label>
            <Slider
              defaultValue={[2, 7]}
              min={1}
              max={14}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 day</span>
              <span>14 days</span>
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple range sliders for advanced filtering options'
      }
    }
  }
};

// Vertical slider
export const VerticalSliders: Story = {
  render: () => (
    <div className="flex gap-8 items-end h-64">
      <div className="flex flex-col items-center gap-4">
        <Label>Volume</Label>
        <div className="h-32">
          <Slider
            orientation="vertical"
            defaultValue={[60]}
            max={100}
            step={10}
            className="h-full"
          />
        </div>
        <Badge variant="secondary">60%</Badge>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Label>Brightness</Label>
        <div className="h-32">
          <Slider
            orientation="vertical"
            defaultValue={[80]}
            max={100}
            step={5}
            className="h-full"
          />
        </div>
        <Badge variant="secondary">80%</Badge>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Label>Contrast</Label>
        <div className="h-32">
          <Slider
            orientation="vertical"
            defaultValue={[70]}
            max={100}
            step={5}
            className="h-full"
          />
        </div>
        <Badge variant="secondary">70%</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical sliders for controls like audio/video settings'
      }
    }
  }
};
