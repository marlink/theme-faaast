# SmartWheels Storybook Documentation

## 🎨 Overview

Storybook is now set up and expanded for your SmartWheels project! You have a comprehensive design system documentation site that showcases your components, theme variations, and real-world usage patterns.

## 🚀 Getting Started

### Launch Storybook
```bash
pnpm run storybook
```

This will start Storybook on `http://localhost:6006`

### Available Stories

#### ✅ **Completed Stories**

1. **Theme Tokens** (`stories/theme-tokens.stories.tsx`)
   - Color palette showcase
   - Spacing scale visualization
   - Typography examples
   - Themed component demonstrations

2. **Button Component** (`components/ui/button.stories.tsx`)
   - All 10 variants (default, destructive, outline, secondary, ghost, link, pill, pill-outline, badge, badge-outline)
   - All 8 sizes (xs, sm, default, lg, xl, 2xl, icon, icon-sm, icon-lg)
   - Icon combinations
   - Interactive states
   - Real-world use cases
   - Accessibility examples
   - Theme responsiveness

3. **Card Component** (`components/ui/card.stories.tsx`)
   - Complete card structures
   - All sub-components (Header, Title, Description, Action, Content, Footer)
   - Different layouts
   - Real-world examples (User Profile, Product, Service cards)
   - Grid layouts
   - Size variations

4. **Input Component** (`components/ui/input.stories.tsx`)
   - All input types (text, email, password, number, tel, url, search)
   - State variations (normal, disabled, required, error)
   - Icon combinations
   - Form examples
   - Size variations
   - Validation states

## 🎯 **Storybook Features**

### **Enhanced Preview Configuration**
- **Responsive Viewports**: Mobile, tablet, desktop breakpoints
- **Theme Backgrounds**: Dark, light, and transparent backgrounds
- **Interactive Controls**: Real-time prop editing
- **Documentation**: Auto-generated docs with live examples

### **Development Workflow**
- **Component Development**: Test components in isolation
- **Visual Regression**: Compare against previous versions
- **Theme Testing**: See components in different themes
- **Responsive Design**: Test across device sizes
- **Accessibility**: Verify keyboard navigation and screen reader support

## 📋 **Next Steps for Expansion**

### **Phase 2: Core Form Components**
Add stories for your remaining form components:
- `Select` - Dropdown selections
- `Textarea` - Multi-line text input
- `Checkbox` - Boolean inputs
- `RadioGroup` - Single selection
- `Switch` - Toggle inputs
- `Slider` - Range inputs

### **Phase 3: Layout Components**
Document your layout system:
- `Dialog` - Modal dialogs
- `Sheet` - Slide-out panels
- `Tabs` - Tabbed interfaces
- `Accordion` - Collapsible content
- `NavigationMenu` - Complex navigation
- `Breadcrumb` - Navigation trails

### **Phase 4: Data Display**
Showcase data presentation:
- `Table` - Data tables
- `Badge` - Status indicators
- `Progress` - Progress bars
- `Chart` - Data visualization
- `Avatar` - User images
- `Empty` - Empty states

### **Phase 5: Theme Studio Integration**
Create stories for your website builder:
- `ColorPicker` - Theme color selection
- `SpacingControls` - Layout spacing
- `TypographyControls` - Font customization
- `WebsitePreview` - Live preview components

## 🛠️ **Creating New Stories**

### **Template for Component Stories**
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './your-component';

const meta: Meta<typeof YourComponent> = {
  title: 'UI/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Description of what this component does.'
      }
    }
  },
  argTypes: {
    // Define controllable props
    variant: {
      control: { type: 'select' },
      options: ['option1', 'option2']
    }
  },
  args: {
    // Default props
    children: 'Example content'
  }
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

// Basic usage
export const Basic: Story = {
  render: (args) => <YourComponent {...args} />
};

// Advanced examples
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <YourComponent variant="option1">Content 1</YourComponent>
      <YourComponent variant="option2">Content 2</YourComponent>
    </div>
  )
};
```

### **Best Practices**
1. **Use Real Content**: Show components with realistic data
2. **Document Variants**: Cover all available options
3. **Show Use Cases**: Demonstrate real-world usage
4. **Include States**: Error, loading, disabled states
5. **Responsive**: Test across different screen sizes
6. **Accessible**: Verify keyboard navigation

## 🔍 **Using Storybook for Development**

### **Component Development**
```bash
# Start Storybook
pnpm run storybook

# Navigate to your component story
# Edit component code - Storybook hot-reloads
# Test different props and variants
# Copy working examples to your app
```

### **Theme Testing**
- Switch between light/dark themes
- Test component consistency
- Verify theme variable usage
- Check responsive behavior

### **Visual Regression**
- Stories serve as visual specifications
- Compare against previous versions
- Catch unintended style changes
- Document component appearance

## 🎨 **Theme Integration**

Your stories automatically support your theme system:

- **CSS Variables**: Components use your theme variables
- **Theme Switching**: Toggle between themes in Storybook
- **Consistent Styling**: All components follow your design system
- **Live Updates**: Theme changes reflect immediately

## 🚀 **Integration with Testing**

Your Storybook complements your Playwright tests:

- **Component Stories**: Document component behavior
- **Visual Testing**: Stories show expected appearance
- **Interaction Testing**: Stories demonstrate user flows
- **Regression Prevention**: Both catch different types of issues

## 📚 **Resources**

- **Storybook Docs**: https://storybook.js.org/docs
- **Component Examples**: Check existing stories for patterns
- **Theme Tokens**: Your `theme-tokens.stories.tsx` shows advanced usage
- **Chromatic**: Set up visual testing with `pnpm run chromatic`

## 🎯 **Impact on Development**

### **Before Storybook**
- Components tested only in app context
- No visual documentation
- Theme changes require full app testing
- Component usage learned through trial/error

### **After Storybook**
- Components tested in isolation
- Visual documentation always available
- Theme changes previewed instantly
- Component usage clearly documented
- Faster development and fewer bugs

Your Storybook is now a powerful design system tool that will accelerate development and ensure consistency across your SmartWheels application! 🎉
