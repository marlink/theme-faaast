# SmartWheels - Professional Wheel Restoration & Customization

[![Documentation Sync](https://github.com/your-org/smartwheels/workflows/Documentation%20Sync/badge.svg)](https://github.com/your-org/smartwheels/actions)
[![Docs Status](https://img.shields.io/badge/docs-synchronized-brightgreen.svg)](https://github.com/your-org/smartwheels/docs)

Transform your wheels with professional restoration and customization services. From powder coating to CNC machining, we bring your vehicle back to showroom condition.

## ✨ Features

🎨 **25 Components** - Professional UI component library with theme integration
⚡ **10 Features** - Advanced theme customization and website building
📄 **8 Pages** - Dynamic page generation with custom layouts
🌐 **Website Builder** - Drag-and-drop page creation with component selection
🎯 **Theme Studio** - Advanced color, spacing, and typography controls
📱 **Responsive Design** - Mobile-first approach with device optimization
♿ **Accessibility** - WCAG 2.1 AA compliant with automatic contrast checking

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open Theme Studio
# Navigate to /theme-studio to customize themes and build pages

# Run documentation sync
npm run docs:sync
```

## 📚 Documentation Synchronization

This project uses an automated documentation synchronization system to keep user stories, technical documentation, and feature inventory up-to-date with code changes.

### How It Works

1. **Code Analysis**: Scans source files for documentation markers and feature implementations
2. **Automatic Updates**: Updates user stories, README metrics, and feature inventories
3. **Drift Detection**: Identifies when documentation becomes out of sync with code
4. **Git Integration**: Pre-commit hooks ensure documentation stays current

### Documentation Markers

Add these markers to your code to automatically sync with documentation:

```javascript
/**
 * @component HeroSection
 * @description Large banner with headline, subtext, and CTA
 * @category marketing
 * @complexity simple
 * @feature hero-display
 * @user-story US-001
 */
export function HeroSection({ title, subtitle, ctaText }) {
  // Component implementation
}
```

### Available Scripts

```bash
# Sync all documentation with codebase
npm run docs:sync

# Check for missing documentation markers
npm run docs:markers

# Generate feature inventory
npm run docs:inventory

# Validate theme configurations
npm run theme:validate
```

### Git Hooks

- **Pre-commit**: Checks documentation synchronization before allowing commits
- **Post-commit**: Automatically updates documentation after successful commits

### CI/CD Integration

GitHub Actions automatically:
- Validates documentation markers
- Synchronizes documentation with code changes
- Detects documentation drift
- Updates feature counts and metrics
- Comments on PRs with documentation issues

## 🏗️ Architecture

### Core Systems

- **Theme Engine**: Advanced theming with CSS variables and device optimization
- **Component Registry**: 25+ reusable components with automatic documentation
- **Website Builder**: Drag-and-drop page creation with component selection
- **Navigation System**: Dynamic menu generation based on created pages
- **Documentation Sync**: Automated documentation maintenance

### Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: Radix UI primitives with custom theming
- **State Management**: React Context with localStorage persistence
- **Testing**: Playwright for E2E, Jest for unit tests
- **Documentation**: Automated markdown generation

## 🎯 User Stories

### Website Builder User
**Goal**: Customize website with theme and content

1. **Theme Customization**: Access 50+ theme variables and color schemes
2. **Component Selection**: Browse and select from 25+ pre-built components
3. **Page Creation**: Create up to 3 pages with custom titles and layouts
4. **Navigation Integration**: Pages automatically appear in site navigation
5. **Live Preview**: Real-time preview of website structure and theming

### Developer Experience
**Goal**: Maintain up-to-date documentation automatically

1. **Code Markers**: Add documentation markers to sync with user stories
2. **Automated Updates**: Documentation updates on every code change
3. **Drift Detection**: Alerts when documentation becomes outdated
4. **Feature Inventory**: Automatic generation of component and feature lists

## 📖 Documentation

- [Theme Studio Guide](docs/THEME_STUDIO_README.md) - Complete theme system documentation
- [User Journeys](docs/user-journeys/) - Happy and unhappy path scenarios
- [API Documentation](docs/api/) - Endpoint specifications and examples
- [Component Library](docs/components/) - UI component documentation
- [Feature Inventory](docs/FEATURE_INVENTORY.md) - Auto-generated feature list

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Development Workflow

1. **Branch Creation**: Create feature branch from `develop`
2. **Code Development**: Implement features with documentation markers
3. **Documentation Sync**: Run `npm run docs:sync` to update docs
4. **Testing**: Run full test suite with `npm run test`
5. **Pull Request**: Create PR with documentation checklist
6. **Code Review**: Automated checks for documentation drift

### Code Quality

- **ESLint**: Configured for React/Next.js best practices
- **Prettier**: Automatic code formatting
- **TypeScript**: Strict type checking enabled
- **Testing**: 80%+ code coverage required

## 🚀 Deployment

### Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Theme validation
npm run theme:validate
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Add documentation markers to new code
4. Run `npm run docs:sync` to update documentation
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Documentation Requirements

All contributions must include:
- [ ] Documentation markers in code (`@component`, `@feature`, etc.)
- [ ] Updated user stories in `docs/user-journeys/`
- [ ] Updated technical documentation
- [ ] Tests with 80%+ coverage
- [ ] Updated README metrics

## 📈 Success Metrics

### Technical Metrics
- **Theme Switch Time**: < 100ms
- **Bundle Size**: < 50KB theme impact
- **Lighthouse Score**: > 90
- **Documentation Drift**: < 1% (auto-detected)

### User Experience Metrics
- **Theme Creation Completion**: > 90%
- **Website Builder Usage**: > 75% of users
- **Documentation Accuracy**: > 95%
- **User Satisfaction**: > 4.5/5

### Business Metrics
- **Quote Conversion Rate**: > 25%
- **User Retention**: > 60%
- **Feature Adoption**: > 80%
- **Support Ticket Reduction**: > 40%

## 📞 Support

- **Email**: support@marceli.online
- **Issues**: [GitHub Issues](https://github.com/your-org/smartwheels/issues)
- **Documentation**: [Full Docs](docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Theme System**: Built on advanced CSS custom properties and design tokens
- **Component Library**: Leveraging Radix UI primitives with custom theming
- **Documentation Sync**: Automated system ensuring documentation accuracy
- **User Experience**: Focused on professional website development workflows

---

*Documentation automatically synchronized with codebase changes. Last updated: $(date)*
