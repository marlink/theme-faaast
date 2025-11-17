/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
/**
 * Documentation Markers for Code
 *
 * Add these JSDoc-style markers to your code to automatically sync
 * with documentation. The docs-sync script will pick these up.
 *
 * Usage Examples:
 */

// Example component with markers
/**
 * @component HeroSection
 * @description Large banner section with headline, subtext, and CTA
 * @category marketing
 * @complexity simple
 * @feature hero-display
 * @user-story US-001
 */
export function HeroSection({ title: _title, subtitle: _subtitle, ctaText: _ctaText }) {
  // Component implementation
}

// Example API route with markers
/**
 * @api themes
 * @description Theme management endpoints
 * @methods GET, POST, PUT, DELETE
 * @feature theme-management
 * @user-story US-006
 */
export async function GET(_request) {
  // API implementation
}

// Example feature implementation
/**
 * @feature website-builder
 * @description Drag-and-drop website creation tool
 * @user-story US-007, US-008, US-009, US-010
 * @status implemented
 * @version 1.0.0
 */
export class WebsiteBuilder {
  // Implementation
}

/**
 * Marker Types:
 *
 * @component <Name> - Mark a React component for documentation
 * @feature <ID> - Mark a feature implementation
 * @user-story <ID> - Link to user story (e.g., US-001)
 * @api <Name> - Mark an API endpoint
 * @status <implemented|planned|deprecated> - Feature status
 * @version <semver> - Version when feature was added
 * @category <type> - Component/feature category
 * @complexity <simple|medium|advanced> - Implementation complexity
 *
 * The docs-sync script automatically scans for these markers and
 * keeps documentation synchronized.
 */
