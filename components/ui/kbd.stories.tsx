import type { Meta, StoryObj } from '@storybook/react';
import { Kbd, KbdGroup } from './kbd';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Search, Command, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Kbd> = {
  title: 'UI/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A keyboard shortcut component for displaying keyboard keys and key combinations in a consistent, accessible way.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Kbd>;

// Basic keyboard shortcuts
export const Basic: Story = {
  render: () => (
    <div className="flex gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>C</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Esc</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic keyboard key representations'
      }
    }
  }
};

// Common shortcuts
export const CommonShortcuts: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Keyboard Shortcuts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Search</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">New item</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>N</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Save</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Copy</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Paste</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>V</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Undo</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>Z</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Select all</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>A</Kbd>
            </KbdGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common keyboard shortcuts displayed with Kbd components'
      }
    }
  }
};

// Arrow keys
export const ArrowKeys: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Navigation</h3>
        <div className="flex gap-2">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With modifiers</h3>
        <div className="flex gap-2">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>↑</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>↓</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Shift</Kbd>
            <Kbd>↑</Kbd>
          </KbdGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Arrow key representations and combinations'
      }
    }
  }
};

// Command palette trigger
export const CommandPalette: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Command Palette
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <span className="text-sm text-muted-foreground">Search commands...</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>

          <div className="mt-4 space-y-2">
            <div className="text-sm">
              <strong>Popular commands:</strong>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>New service request</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>N</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span>View orders</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>O</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span>Open settings</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>,</Kbd>
                </KbdGroup>
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
        story: 'Command palette with keyboard shortcuts for quick actions'
      }
    }
  }
};

// Form shortcuts
export const FormShortcuts: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Form Shortcuts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Submit form</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>Enter</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Save draft</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Reset form</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>R</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Focus first field</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>1</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Navigate fields</span>
            <KbdGroup>
              <Kbd>Tab</Kbd>
            </KbdGroup>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground">
            Press the keyboard shortcuts while filling out forms for faster navigation.
          </p>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form-specific keyboard shortcuts for improved user experience'
      }
    }
  }
};

// Editor shortcuts
export const EditorShortcuts: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Text Editor Shortcuts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Text Formatting</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Bold</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>B</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Italic</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>I</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Underline</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>U</Kbd>
                </KbdGroup>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Navigation</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Beginning of line</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>←</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>End of line</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>→</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Select all</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>A</Kbd>
                </KbdGroup>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text editor keyboard shortcuts organized by functionality'
      }
    }
  }
};

// Platform-specific shortcuts
export const PlatformShortcuts: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Platform-Specific Shortcuts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">macOS</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Command</span>
                  <Kbd>⌘</Kbd>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Option</span>
                  <Kbd>⌥</Kbd>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Control</span>
                  <Kbd>⌃</Kbd>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Shift</span>
                  <Kbd>⇧</Kbd>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Windows/Linux</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Control</span>
                  <Kbd>Ctrl</Kbd>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Alt</span>
                  <Kbd>Alt</Kbd>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Shift</span>
                  <Kbd>Shift</Kbd>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Windows</span>
                  <Kbd>⊞</Kbd>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Note:</strong> The application automatically detects your platform and shows the appropriate shortcuts.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Platform-specific modifier keys for cross-platform applications'
      }
    }
  }
};

// Inline shortcuts
export const InlineShortcuts: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <div className="space-y-2">
        <p className="text-sm">
          Press <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup> to open the command palette.
        </p>
        <p className="text-sm">
          Use <KbdGroup><Kbd>⌘</Kbd><Kbd>N</Kbd></KbdGroup> to create a new service request.
        </p>
        <p className="text-sm">
          Navigate with <Kbd>↑</Kbd> <Kbd>↓</Kbd> <Kbd>←</Kbd> <Kbd>→</Kbd> arrow keys.
        </p>
        <p className="text-sm">
          Press <Kbd>Enter</Kbd> to submit or <Kbd>Esc</Kbd> to cancel.
        </p>
      </div>

      <div className="p-3 border rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm">Search commands...</span>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Keyboard shortcuts integrated inline with text content'
      }
    }
  }
};

// Accessibility features
export const AccessibilityFeatures: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Accessibility Shortcuts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Skip to main content</span>
            <KbdGroup>
              <Kbd>Alt</Kbd>
              <Kbd>1</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Skip to navigation</span>
            <KbdGroup>
              <Kbd>Alt</Kbd>
              <Kbd>2</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Focus search</span>
            <KbdGroup>
              <Kbd>Alt</Kbd>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Toggle high contrast</span>
            <KbdGroup>
              <Kbd>Alt</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Screen reader mode</span>
            <KbdGroup>
              <Kbd>Alt</Kbd>
              <Kbd>R</Kbd>
            </KbdGroup>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground">
            These shortcuts help users with disabilities navigate the application more easily.
          </p>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility-focused keyboard shortcuts for inclusive design'
      }
    }
  }
};
