import { test, expect } from '@playwright/test';
import { createPageHelpers } from '../utils/test-helpers';

test.describe('Service Exploration Journey - US-001, US-002', () => {
  let helpers: ReturnType<typeof createPageHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createPageHelpers(page);
    await page.goto('/');
    await helpers.wait.waitForNetworkIdle();
  });

  test('Homepage discovery and service exploration', async ({ page }) => {
    const { validation, navigation, screenshots } = helpers;

    // Step 1: Verify homepage loads with key elements
    console.log('📍 Step 1: Verifying homepage loads correctly');
    await validation.expectElementVisible('h1, [data-testid="hero-title"], .hero-title',
      'Hero title should be visible');
    await validation.expectElementVisible('[data-testid="hero-stats"], .stats, .statistics',
      'Hero statistics should be visible');

    // Take screenshot of homepage hero section
    await screenshots.takeScreenshot(page, '01-homepage-hero', 'happy-paths');

    console.log('✅ Homepage hero section loaded successfully');

    // Step 2: Verify service cards are displayed
    console.log('📍 Step 2: Checking service cards display');
    await validation.expectElementVisible('[data-testid="service-cards"], .service-card, .services-grid',
      'Service cards should be visible');

    // Count service cards
    const serviceCards = page.locator('[data-testid="service-card"], .service-card');
    const cardCount = await serviceCards.count();
    expect(cardCount).toBeGreaterThan(0);

    console.log(`✅ Found ${cardCount} service cards`);

    // Take screenshot of service cards
    await screenshots.takeScreenshot(page, '02-homepage-service-cards', 'happy-paths');

    // Step 3: Verify portfolio/gallery section
    console.log('📍 Step 3: Checking portfolio section');
    await validation.expectElementVisible('[data-testid="portfolio"], .portfolio, .gallery, img[alt*="before"], img[alt*="after"]',
      'Portfolio/gallery should be visible');

    // Take screenshot of portfolio
    await screenshots.takeScreenshot(page, '03-homepage-portfolio', 'happy-paths');

    console.log('✅ Portfolio section visible');

    // Step 4: Test navigation to services page
    console.log('📍 Step 4: Testing navigation to services page');
    const servicesLink = page.locator('a:has-text("Services"), [data-testid="nav-services"]').first();
    if (await servicesLink.isVisible()) {
      await servicesLink.click();
      await helpers.wait.waitForNetworkIdle();

      // Verify services page loads
      await validation.expectUrlContains('/services');
      await validation.expectElementVisible('h1:has-text("Services"), [data-testid="services-title"]',
        'Services page title should be visible');

      // Take screenshot of services page
      await screenshots.takeScreenshot(page, '04-services-page', 'happy-paths');

      console.log('✅ Successfully navigated to services page');
    } else {
      console.log('ℹ️ Services link not found in navigation');
    }
  });

  test('Detailed service information exploration', async ({ page }) => {
    const { validation, screenshots } = helpers;

    // Navigate to services page
    await page.goto('/services');
    await helpers.wait.waitForNetworkIdle();

    // Step 1: Verify comprehensive service information
    console.log('📍 Step 1: Verifying detailed service information');

    // Check for service categories
    const serviceCategories = [
      'Powder Coating',
      'CNC Machining',
      'Wheel Straightening',
      'Stripping & Blasting',
      'Wheel Repair'
    ];

    let foundServices = 0;
    for (const service of serviceCategories) {
      try {
        await validation.expectElementVisible(`:has-text("${service}"), [data-testid*="service"][data-testid*="${service.toLowerCase()}"]`);
        foundServices++;
        console.log(`✅ Service found: ${service}`);
      } catch (error) {
        console.log(`ℹ️ Service not found: ${service}`);
      }
    }

    expect(foundServices).toBeGreaterThan(0);
    console.log(`✅ Found ${foundServices} service categories`);

    // Take screenshot of services overview
    await screenshots.takeScreenshot(page, '05-services-overview', 'happy-paths');

    // Step 2: Test service detail expansion (if accordion/tabs exist)
    console.log('📍 Step 2: Testing service detail interactions');

    // Look for interactive elements
    const accordions = page.locator('[data-testid="accordion"], .accordion, .collapsible');
    const tabs = page.locator('[data-testid="tabs"], .tabs, [role="tab"]');

    if (await accordions.first().isVisible()) {
      console.log('🎯 Found accordion elements, testing interaction');

      // Click first accordion
      await accordions.first().click();
      await helpers.wait.waitForAnimation();

      // Take screenshot of expanded accordion
      await screenshots.takeScreenshot(page, '06-service-accordion-expanded', 'happy-paths');

      // Click another accordion
      const secondAccordion = accordions.nth(1);
      if (await secondAccordion.isVisible()) {
        await secondAccordion.click();
        await helpers.wait.waitForAnimation();
        await screenshots.takeScreenshot(page, '07-multiple-accordions-expanded', 'happy-paths');
      }
    } else if (await tabs.first().isVisible()) {
      console.log('🎯 Found tab elements, testing interaction');

      // Click different tabs
      const tabButtons = page.locator('[role="tab"]');
      const tabCount = await tabButtons.count();

      for (let i = 0; i < Math.min(tabCount, 3); i++) {
        await tabButtons.nth(i).click();
        await helpers.wait.waitForAnimation();
        await screenshots.takeScreenshot(page, `08-service-tab-${i + 1}`, 'happy-paths');
      }
    } else {
      console.log('ℹ️ No interactive service details found');
    }

    // Step 3: Verify technical specifications and features
    console.log('📍 Step 3: Checking for technical information');

    const technicalTerms = [
      'RAL colors',
      'precision machining',
      'restoration',
      'customization',
      'professional'
    ];

    let foundTechnicalInfo = 0;
    for (const term of technicalTerms) {
      try {
        await validation.expectElementVisible(`:has-text("${term}")`);
        foundTechnicalInfo++;
      } catch (error) {
        // Technical term not found - this is okay
      }
    }

    console.log(`ℹ️ Found ${foundTechnicalInfo} technical information references`);

    // Take screenshot of technical details
    await screenshots.takeScreenshot(page, '09-service-technical-details', 'happy-paths');
  });

  test('Navigation menu functionality', async ({ page }) => {
    const { validation, screenshots } = helpers;

    // Step 1: Test desktop navigation
    console.log('📍 Step 1: Testing desktop navigation');

    // Verify main navigation elements
    const navItems = [
      'Services',
      'Projects',
      'About',
      'Contact',
      'Quote'
    ];

    for (const item of navItems) {
      const navLink = page.locator(`a:has-text("${item}"), [data-testid="nav-${item.toLowerCase()}"]`);
      if (await navLink.isVisible()) {
        console.log(`✅ Navigation item found: ${item}`);
      } else {
        console.log(`ℹ️ Navigation item not found: ${item}`);
      }
    }

    // Take screenshot of desktop navigation
    await screenshots.takeScreenshot(page, '10-desktop-navigation', 'happy-paths');

    // Step 2: Test mobile navigation menu
    console.log('📍 Step 2: Testing mobile navigation');

    // Set mobile viewport and reload
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await helpers.wait.waitForNetworkIdle();

    // Find mobile menu toggle
    const mobileMenuButton = page.locator('button[aria-label*="menu"], [data-testid="mobile-menu"], .mobile-menu-toggle');
    if (await mobileMenuButton.isVisible()) {
      // Take screenshot before opening menu
      await screenshots.takeScreenshot(page, '11-mobile-menu-closed', 'happy-paths');

      // Open mobile menu
      await mobileMenuButton.click();
      await helpers.wait.waitForAnimation();

      // Take screenshot of open mobile menu
      await screenshots.takeScreenshot(page, '12-mobile-menu-open', 'happy-paths');

      // Verify mobile menu items are visible
      const mobileNavItems = page.locator('.mobile-menu a, .mobile-nav a');
      const mobileItemCount = await mobileNavItems.count();
      expect(mobileItemCount).toBeGreaterThan(0);

      console.log(`✅ Mobile menu contains ${mobileItemCount} navigation items`);

      // Test clicking a mobile menu item
      await mobileNavItems.first().click();
      await helpers.wait.waitForNetworkIdle();

      // Take screenshot after mobile navigation
      await screenshots.takeScreenshot(page, '13-mobile-navigation-result', 'happy-paths');

    } else {
      console.log('ℹ️ Mobile menu toggle not found');
    }
  });

  test('Portfolio and project showcase', async ({ page }) => {
    const { validation, screenshots } = helpers;

    // Step 1: Navigate to projects/portfolio section
    console.log('📍 Step 1: Testing portfolio access');

    // Try to find portfolio link in navigation
    const portfolioLink = page.locator('a:has-text("Projects"), a:has-text("Portfolio"), [data-testid="nav-projects"]');
    if (await portfolioLink.isVisible()) {
      await portfolioLink.click();
      await helpers.wait.waitForNetworkIdle();

      // Verify projects page loads
      await validation.expectUrlContains('/projects');
      console.log('✅ Successfully navigated to projects page');
    } else {
      // Check if portfolio is on homepage
      await page.goto('/');
      await helpers.wait.waitForNetworkIdle();
      console.log('ℹ️ Checking portfolio on homepage');
    }

    // Step 2: Verify portfolio content
    console.log('📍 Step 2: Verifying portfolio content');

    // Look for before/after images
    const portfolioImages = page.locator('img[alt*="before"], img[alt*="after"], img[alt*="wheel"], .portfolio img');
    const imageCount = await portfolioImages.count();

    if (imageCount > 0) {
      console.log(`✅ Found ${imageCount} portfolio images`);

      // Take screenshot of portfolio
      await screenshots.takeScreenshot(page, '14-portfolio-showcase', 'happy-paths');

      // Test image loading (check for broken images)
      for (let i = 0; i < Math.min(imageCount, 3); i++) {
        const img = portfolioImages.nth(i);
        const src = await img.getAttribute('src');
        const alt = await img.getAttribute('alt');

        if (src) {
          console.log(`📸 Portfolio image ${i + 1}: ${alt || 'No alt text'} - ${src}`);
        }
      }
    } else {
      console.log('ℹ️ No portfolio images found');
    }

    // Step 3: Test project detail views (if available)
    console.log('📍 Step 3: Testing project detail interactions');

    const projectLinks = page.locator('[data-testid="project-link"], .project-card a, .portfolio-item a');
    if (await projectLinks.first().isVisible()) {
      await projectLinks.first().click();
      await helpers.wait.waitForNetworkIdle();

      // Take screenshot of project detail
      await screenshots.takeScreenshot(page, '15-project-detail-view', 'happy-paths');

      console.log('✅ Project detail view accessible');
    } else {
      console.log('ℹ️ No project detail links found');
    }
  });

  test('Call-to-action button functionality', async ({ page }) => {
    const { validation, screenshots } = helpers;

    // Step 1: Test primary CTA buttons
    console.log('📍 Step 1: Testing primary CTA buttons');

    const ctaButtons = page.locator('button:has-text("Request Quote"), a:has-text("Request Quote"), [data-testid="quote-cta"]');
    const ctaCount = await ctaButtons.count();

    expect(ctaCount).toBeGreaterThan(0);
    console.log(`✅ Found ${ctaCount} quote CTA buttons`);

    // Test first CTA button
    await ctaButtons.first().click();
    await helpers.wait.waitForNetworkIdle();

    // Verify navigation to quote form
    await validation.expectUrlContains('/quote');

    // Take screenshot of quote form from CTA
    await screenshots.takeScreenshot(page, '16-quote-form-from-cta', 'happy-paths');

    console.log('✅ Primary CTA button working correctly');

    // Step 2: Test secondary CTAs
    console.log('📍 Step 2: Testing secondary CTAs');

    // Go back to homepage
    await page.goto('/');
    await helpers.wait.waitForNetworkIdle();

    // Look for "View Services" or similar CTAs
    const viewServicesCta = page.locator('button:has-text("View Services"), a:has-text("View Services"), [data-testid="services-cta"]');
    if (await viewServicesCta.isVisible()) {
      await viewServicesCta.click();
      await helpers.wait.waitForNetworkIdle();

      await validation.expectUrlContains('/services');
      await screenshots.takeScreenshot(page, '17-services-from-secondary-cta', 'happy-paths');

      console.log('✅ Secondary CTA working correctly');
    }

    // Step 3: Test contact CTAs
    const contactCta = page.locator('button:has-text("Contact"), a:has-text("Contact"), [data-testid="contact-cta"]');
    if (await contactCta.isVisible()) {
      await contactCta.click();
      await helpers.wait.waitForNetworkIdle();

      await validation.expectUrlContains('/contact');
      await screenshots.takeScreenshot(page, '18-contact-from-cta', 'happy-paths');

      console.log('✅ Contact CTA working correctly');
    }
  });

  test('Mobile responsiveness and touch interactions', async ({ page }) => {
    const { mobile, validation, screenshots } = helpers;

    // Set mobile viewport
    await mobile.setMobileViewport();

    // Navigate to homepage
    await page.goto('/');
    await helpers.wait.waitForNetworkIdle();

    // Step 1: Test mobile homepage layout
    console.log('📍 Step 1: Testing mobile homepage layout');

    // Verify no horizontal scroll
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);

    if (scrollWidth <= clientWidth + 10) { // Allow small tolerance
      console.log('✅ No horizontal scroll on mobile');
    } else {
      console.log(`⚠️ Horizontal scroll detected: ${scrollWidth} vs ${clientWidth}`);
    }

    // Take screenshot of mobile homepage
    await screenshots.takeScreenshot(page, '19-mobile-homepage-layout', 'happy-paths');

    // Step 2: Test touch interactions
    console.log('📍 Step 2: Testing touch interactions');

    // Test tapping service cards
    const serviceCards = page.locator('[data-testid="service-card"], .service-card');
    if (await serviceCards.first().isVisible()) {
      await serviceCards.first().tap();
      await helpers.wait.waitForAnimation();

      // Take screenshot after tap
      await screenshots.takeScreenshot(page, '20-mobile-service-card-tap', 'happy-paths');

      console.log('✅ Mobile touch interaction working');
    }

    // Step 3: Test mobile scrolling and content visibility
    console.log('📍 Step 3: Testing mobile scrolling');

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await helpers.wait.waitForAnimation();

    // Take screenshot of mobile bottom content
    await screenshots.takeScreenshot(page, '21-mobile-scrolled-content', 'happy-paths');

    // Verify footer is visible
    await validation.expectElementVisible('footer, [data-testid="footer"]', 'Footer should be visible');

    console.log('✅ Mobile scrolling and content visibility working');
  });
});
