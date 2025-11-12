import { Page, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Test data constants
export const TEST_DATA = {
  users: {
    testUser: {
      email: 'test@example.com',
      password: 'TestPassword123!',
      name: 'Test User'
    },
    adminUser: {
      email: 'admin@smartwheels.com',
      password: 'AdminPass123!',
      name: 'Admin User'
    }
  },
  forms: {
    quoteRequest: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+31612345678',
      serviceType: 'Powder Coating',
      wheelCount: '4',
      description: 'Test quote request for powder coating services'
    },
    contactForm: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      message: 'Inquiry about wheel straightening services'
    }
  }
};

// Screenshot utility functions
export class ScreenshotManager {
  private baseDir: string;

  constructor(baseDir: string = 'tests/screenshots') {
    this.baseDir = baseDir;
  }

  async takeScreenshot(page: Page, filename: string, category: 'happy-paths' | 'unhappy-paths' | 'regression' = 'happy-paths') {
    const fullPath = path.join(this.baseDir, category, `${filename}.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`📸 Screenshot saved: ${fullPath}`);
    return fullPath;
  }

  async takeElementScreenshot(page: Page, selector: string, filename: string, category: 'happy-paths' | 'unhappy-paths' | 'regression' = 'happy-paths') {
    const element = page.locator(selector);
    await element.waitFor({ state: 'visible' });
    const fullPath = path.join(this.baseDir, category, `${filename}.png`);
    await element.screenshot({ path: fullPath });
    console.log(`📸 Element screenshot saved: ${fullPath}`);
    return fullPath;
  }
}

// Navigation helpers
export class NavigationHelper {
  constructor(private page: Page) {}

  async navigateTo(path: string, waitForNetworkIdle = true) {
    await this.page.goto(path);
    if (waitForNetworkIdle) {
      await this.page.waitForLoadState('networkidle');
    }
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle');
  }

  async scrollToElement(selector: string) {
    const element = this.page.locator(selector);
    await element.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500); // Allow time for scroll animation
  }
}

// Form helpers
export class FormHelper {
  constructor(private page: Page) {}

  async fillQuoteForm(data: typeof TEST_DATA.forms.quoteRequest) {
    await this.page.fill('input[name="name"]', data.name);
    await this.page.fill('input[name="email"]', data.email);
    await this.page.fill('input[name="phone"]', data.phone);
    await this.page.selectOption('select[name="serviceType"]', data.serviceType);
    await this.page.fill('input[name="wheelCount"]', data.wheelCount);
    await this.page.fill('textarea[name="description"]', data.description);
  }

  async fillContactForm(data: typeof TEST_DATA.forms.contactForm) {
    await this.page.fill('input[name="name"]', data.name);
    await this.page.fill('input[name="email"]', data.email);
    await this.page.fill('textarea[name="message"]', data.message);
  }

  async submitForm(selector: string = 'form') {
    const form = this.page.locator(selector);
    await form.locator('button[type="submit"]').click();
  }
}

// Authentication helpers
export class AuthHelper {
  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page.goto('/auth/login');
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
    await this.page.waitForURL(/\/profile|\/dashboard/);
  }

  async signup(email: string, password: string, name: string) {
    await this.page.goto('/auth/signup');
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.fill('input[name="name"]', name);
    await this.page.click('button[type="submit"]');
    // Wait for either success redirect or email verification
    await this.page.waitForTimeout(2000);
  }

  async logout() {
    // Click logout button in navigation or profile
    await this.page.click('button:has-text("Sign Out")');
    await this.page.waitForURL('/');
  }

  async isLoggedIn(): Promise<boolean> {
    const logoutButton = this.page.locator('button:has-text("Sign Out")');
    return await logoutButton.isVisible();
  }
}

// Validation helpers
export class ValidationHelper {
  constructor(private page: Page) {}

  async expectElementVisible(selector: string, description?: string) {
    const element = this.page.locator(selector);
    await expect(element).toBeVisible();
    if (description) {
      console.log(`✅ ${description} is visible`);
    }
  }

  async expectElementContainsText(selector: string, text: string, description?: string) {
    const element = this.page.locator(selector);
    await expect(element).toContainText(text);
    if (description) {
      console.log(`✅ ${description} contains expected text: "${text}"`);
    }
  }

  async expectPageTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async expectUrlContains(path: string) {
    await expect(this.page).toHaveURL(new RegExp(path));
  }

  async expectSuccessMessage(message?: string) {
    const successToast = this.page.locator('[data-testid="success-toast"], .toast-success, .success-message');
    await expect(successToast).toBeVisible();
    if (message) {
      await expect(successToast).toContainText(message);
    }
    console.log(`✅ Success message displayed: ${message || 'Success'}`);
  }

  async expectErrorMessage(message?: string) {
    const errorToast = this.page.locator('[data-testid="error-toast"], .toast-error, .error-message');
    await expect(errorToast).toBeVisible();
    if (message) {
      await expect(errorToast).toContainText(message);
    }
    console.log(`⚠️ Error message displayed: ${message || 'Error'}`);
  }
}

// Wait helpers
export class WaitHelper {
  constructor(private page: Page) {}

  async waitForNetworkIdle(timeout = 5000) {
    await this.page.waitForLoadState('networkidle', { timeout });
  }

  async waitForElement(selector: string, timeout = 5000) {
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'visible', timeout });
  }

  async waitForElementToDisappear(selector: string, timeout = 5000) {
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'hidden', timeout });
  }

  async waitForAnimation(timeout = 1000) {
    await this.page.waitForTimeout(timeout);
  }
}

// Mobile helpers
export class MobileHelper {
  constructor(private page: Page) {}

  async setMobileViewport() {
    await this.page.setViewportSize({ width: 375, height: 667 });
  }

  async setTabletViewport() {
    await this.page.setViewportSize({ width: 768, height: 1024 });
  }

  async setDesktopViewport() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  async tapElement(selector: string) {
    const element = this.page.locator(selector);
    await element.tap();
  }

  async swipeLeft(selector: string) {
    const element = this.page.locator(selector);
    const box = await element.boundingBox();
    if (box) {
      await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await this.page.mouse.down();
      await this.page.mouse.move(box.x, box.y + box.height / 2);
      await this.page.mouse.up();
    }
  }
}

// Export instances for convenience
export const screenshotManager = new ScreenshotManager();

export function createPageHelpers(page: Page) {
  return {
    navigation: new NavigationHelper(page),
    forms: new FormHelper(page),
    auth: new AuthHelper(page),
    validation: new ValidationHelper(page),
    wait: new WaitHelper(page),
    mobile: new MobileHelper(page),
    screenshots: new ScreenshotManager()
  };
}
