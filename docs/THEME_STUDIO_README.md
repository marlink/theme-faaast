# Theme Studio: Advanced Theme Management System

## Overview

Theme Studio is a comprehensive, enterprise-grade theme management system built for ThemeFaaast. It provides advanced website customization capabilities with real-time editing, version control, device-specific optimizations, and WCAG accessibility compliance.

**🎯 New: Website Builder Integration** - Theme Studio now includes a powerful website builder that allows users to create custom pages with selected components, automatically integrating with the site's navigation system.

## Architecture

### Core Components

#### 🎨 Theme Engine

- **Design Tokens**: Semantic color, spacing, typography tokens
- **CSS Variables**: Dynamic CSS custom properties
- **Theme Context**: React context for theme state management
- **Validation**: Zod schemas for theme JSON validation

#### 🌐 Website Builder Engine

- **Component Registry**: 25+ pre-built components (hero, services, contact forms, etc.)
- **Page Management**: Create up to 3 pages with custom titles and URLs
- **Component Selection**: Choose up to 5 components per page from available library
- **Dynamic Routing**: Automatic page creation with `/pages/[slug]` routing
- **Navigation Integration**: Pages automatically appear in site navigation

#### 🖥️ Device Support Matrix

| Device Type   | Width Range     | Touch | Priority Features                      |
| ------------- | --------------- | ----- | -------------------------------------- |
| Mobile Phones | 300px - 767px   | ✅    | Touch optimization, reduced effects    |
| Tablets       | 768px - 1023px  | ✅    | Hybrid touch/hover, medium effects     |
| Laptops       | 1024px - 1279px | ❌    | Full interactions, advanced effects    |
| Desktops      | 1280px - 1919px | ❌    | Maximum effects, complex animations    |
| Ultra-wide    | 1920px+         | ❌    | Multi-column layouts, enhanced effects |

#### 📱 Responsive Breakpoints

```css
--breakpoint-xs: 300px; /* Small phones */
--breakpoint-sm: 480px; /* Large phones */
--breakpoint-md: 768px; /* Tablets */
--breakpoint-lg: 1024px; /* Small laptops */
--breakpoint-xl: 1280px; /* Laptops */
--breakpoint-2xl: 1536px; /* Desktops */
--breakpoint-3xl: 1920px; /* Large screens */
--breakpoint-4xl: 2400px; /* Ultra-wide */
```

## User Stories

### Core User Stories

#### US-001: Theme Creation

**As a** designer/developer
**I want to** create custom themes from scratch
**So that** I can brand the website according to specific requirements

**Acceptance Criteria:**

- Access theme editor from footer link
- Start with base template or blank theme
- Real-time preview of changes
- Save theme with custom name

#### US-002: Visual Customization

**As a** user
**I want to** customize colors, spacing, and effects
**So that** I can achieve the desired visual appearance

**Acceptance Criteria:**

- Color picker with OKLCH support
- Gradient builder (linear, radial, conic)
- Spacing controls with responsive breakpoints
- Shadow and blur effect controls
- Border radius and stroke customization

#### US-003: Device Optimization

**As a** user
**I want** themes to work optimally across devices
**So that** the experience is consistent and performant

**Acceptance Criteria:**

- Automatic device detection
- Device-specific theme adjustments
- Touch target validation (minimum 44px)
- Performance tier optimization

#### US-004: Accessibility Compliance

**As a** user
**I want** themes to meet WCAG standards automatically
**So that** the website remains accessible

**Acceptance Criteria:**

- Automatic contrast ratio validation (4.5:1 minimum)
- Focus state management
- Keyboard navigation support
- Screen reader optimization

#### US-005: Version Management

**As a** user
**I want to** manage multiple theme versions
**So that** I can experiment and rollback if needed

**Acceptance Criteria:**

- Save named versions
- Change history with timeline
- Undo/redo functionality
- Version comparison

#### US-006: Theme Export

**As a** user
**I want to** export themes in multiple formats
**So that** I can use them in other projects

**Acceptance Criteria:**

- JSON export for theme data
- CSS export for direct implementation
- Tailwind config export
- Theme package download

#### US-007: Website Builder - Component Selection

**As a** website owner
**I want to** select which components to include in my website
**So that** I can customize the content and functionality

**Acceptance Criteria:**

- Access to 25+ pre-built components
- Category-based filtering (layout, content, interactive, marketing)
- Search functionality for finding components
- Visual component preview with icons and descriptions
- Select all/clear all functionality per category

#### US-008: Website Builder - Page Creation

**As a** website owner
**I want to** create custom pages with selected components
**So that** I can organize my content effectively

**Acceptance Criteria:**

- Create up to 3 pages with custom titles
- Automatic URL slug generation from page titles
- Add up to 5 components per page
- Drag-and-drop page reordering
- Visual page management interface

#### US-009: Website Builder - Navigation Integration

**As a** website owner
**I want** newly created pages to automatically appear in navigation
**So that** visitors can easily find and access my content

**Acceptance Criteria:**

- Pages automatically added to desktop navigation
- Pages automatically added to mobile navigation menu
- Navigation updates in real-time when pages are created/modified
- SEO-friendly URLs (/pages/custom-slug format)
- Proper page titles in navigation menu

#### US-010: Website Builder - Live Preview

**As a** website owner
**I want to** preview how my website will look
**So that** I can make informed decisions about layout and content

**Acceptance Criteria:**

- Real-time preview of page structure
- Component placement visualization
- Theme integration in preview
- Mock browser interface simulation
- Export-ready summary with statistics

## Technical Requirements

### Functional Requirements

#### FR-001: Theme Engine

- Support for 50+ CSS custom properties
- Real-time theme application
- Theme validation and sanitization
- Performance monitoring

#### FR-002: Editor Interface

- Intuitive controls for all theme properties
- Real-time preview
- Device simulation
- Accessibility validation

#### FR-003: Storage & Persistence

- localStorage for development
- IndexedDB for production
- Optional cloud synchronization
- Data export/import

#### FR-004: Website Builder

- Component registry with 25+ reusable components
- Dynamic page creation with Next.js routing
- Navigation auto-integration
- Real-time preview system
- Component limitation enforcement (max 3 pages, 5 components/page)

#### FR-005: Responsive Design

- Mobile-first CSS approach
- Flexbox grid system
- Touch device optimization
- Performance scaling per device

### Non-Functional Requirements

#### NFR-001: Performance

- Theme switch time < 100ms
- Bundle size impact < 50KB
- Lighthouse scores > 90
- Memory usage optimization

#### NFR-002: Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- High contrast support

#### NFR-003: Security

- CSS injection prevention
- Input sanitization
- Rate limiting
- Sandboxed preview

#### NFR-004: Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Dependencies

### Core Dependencies

```json
{
  "zod": "^3.25.76", // Schema validation
  "idb": "^8.0.0", // IndexedDB wrapper
  "colorjs.io": "^0.4.0", // Advanced color manipulation
  "react-colorful": "^5.6.1", // Color picker
  "framer-motion": "^11.0.0", // Animations
  "lucide-react": "^0.454.0", // Icons
  "clsx": "^2.1.1", // Class utilities
  "tailwind-merge": "^2.5.5" // Tailwind utilities
}
```

### Development Dependencies

```json
{
  "@storybook/react": "^8.0.0", // Component stories
  "@playwright/test": "^1.40.0", // E2E testing
  "@chromatic-com/storybook": "^1.0.0", // Visual testing
  "chromatic": "^11.0.0", // Visual regression
  "storybook": "^8.0.0"
}
```

## Project Structure

```
/
├── app/
│   ├── theme-studio/          # Main theme editor
│   │   ├── page.tsx          # Editor interface
│   │   ├── components/       # Editor components
│   │   └── utils/           # Editor utilities
│   ├── pages/                # Dynamic website builder pages
│   │   └── [slug]/          # Dynamic route for custom pages
│   │       └── page.tsx     # Page renderer
│   ├── api/
│   │   └── themes/          # Theme API endpoints
│   └── globals.css          # Enhanced with theme variables
├── components/
│   ├── theme-studio/        # Theme editor components
│   │   ├── editor/          # Color, background, typography editors
│   │   ├── website-builder/ # Website builder components
│   │   │   ├── component-selector.tsx
│   │   │   ├── page-manager.tsx
│   │   │   └── website-preview.tsx
│   │   ├── preview/         # Preview components
│   │   ├── history/         # Version history
│   │   └── export/          # Export functionality
│   ├── ui/                  # Enhanced UI components
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   ├── theme-engine/        # Core theme logic
│   ├── validation/          # Schema validation
│   ├── storage/            # Storage utilities
│   └── responsive/         # Responsive utilities
├── docs/                   # Documentation
├── stories/               # Storybook stories
└── types/                 # TypeScript definitions
```

## Implementation Phases

### Phase 1: Foundation (Week 1-2)

- Project structure optimization
- Core dependencies setup
- Basic theme engine
- CSS variables system
- Storybook configuration

### Phase 2: Core Editor (Week 3-4)

- Theme editor interface
- Color and spacing controls
- Real-time preview
- Basic validation

### Phase 3: Advanced Features (Week 5-6)

- Responsive controls
- Device optimization
- Advanced effects (gradients, shadows)
- Version management

### Phase 4: Website Builder (Week 7-8)

- Component registry development
- Page management system
- Navigation integration
- Dynamic routing implementation
- Preview system

### Phase 5: Testing & Polish (Week 9-10)

- Comprehensive testing suite
- Performance optimization
- Security hardening
- Documentation completion

## Testing Strategy

### Unit Tests

- Theme schema validation
- CSS variable mapping
- Utility functions
- Component rendering

### Integration Tests

- Theme application
- Context updates
- Storage operations
- API interactions

### E2E Tests (Playwright)

- Theme creation workflow
- Device responsiveness
- Accessibility compliance
- Export functionality
- Website builder page creation
- Navigation integration
- Component selection and management

### Visual Regression Tests (Chromatic)

- Component snapshots
- Theme variations
- Responsive breakpoints
- Cross-browser consistency

## Security Considerations

### Input Sanitization

- CSS property validation
- URL sanitization (no javascript: or data:)
- Size limits (200KB max per theme)
- XSS prevention

### Sandboxing

- iframe preview with sandbox attribute
- Content Security Policy
- Origin isolation
- Script execution prevention

### Rate Limiting

- 30 saves/minute authenticated
- 10 saves/minute anonymous
- Import/export limits
- API request throttling

## Performance Optimization

### Bundle Optimization

- Lazy loading for editor components
- Code splitting by feature
- Tree shaking unused dependencies
- Compression and minification

### Runtime Performance

- CSS variable batch updates
- Debounced theme changes
- Memory leak prevention
- GPU acceleration for animations

### Caching Strategy

- IndexedDB for theme storage
- Service worker for offline support
- CDN for static assets
- Browser cache optimization

## Deployment Strategy

### Development

- localStorage for quick iteration
- Hot reload for instant feedback
- Development-specific features

### Production

- IndexedDB for offline storage
- Cloud sync for persistence
- Error tracking and monitoring
- Performance monitoring

## Success Metrics

### Technical Metrics

- Theme switch time < 50ms
- Bundle size < 100KB gzipped
- Lighthouse scores > 95
- Zero accessibility violations

### User Experience Metrics

- Theme creation completion rate > 90%
- Export success rate > 95%
- Error rate < 1%
- User satisfaction > 4.5/5

## Risk Assessment

### High Risk

- CSS injection vulnerabilities
- Performance impact on main site
- Complex state management
- Cross-browser compatibility

### Mitigation Strategies

- Comprehensive security review
- Performance monitoring
- Incremental feature rollout
- Extensive cross-browser testing

## Conclusion

This Theme Studio represents a comprehensive solution for advanced theme management with enterprise-grade features, security, and performance. The modular architecture allows for incremental implementation while maintaining code quality and user experience standards.
