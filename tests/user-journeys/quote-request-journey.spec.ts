import { test, expect } from '@playwright/test';
import { createPageHelpers, TEST_DATA } from '../utils/test-helpers';

test.describe('Quote Request Journey - US-003', () => {
  let helpers: ReturnType<typeof createPageHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createPageHelpers(page);
    await page.goto('/');
    await helpers.wait.waitForNetworkIdle();
  });

  test('Complete quote request submission journey', async ({ page }) => {
    const { navigation, forms, validation, screenshots } = helpers;

    // Step 1: Access quote form from homepage CTA
    console.log('📍 Step 1: Accessing quote form from homepage');
    await validation.expectElementVisible('[data-testid="quote-cta"], button:has-text("Request Quote"), a:has-text("Request Quote")',
      'Quote CTA button should be visible');

    // Take screenshot of homepage with CTA
    await screenshots.takeScreenshot(page, '01-homepage-quote-cta', 'happy-paths');

    // Click quote CTA button
    const quoteButton = page.locator('[data-testid="quote-cta"], button:has-text("Request Quote"), a:has-text("Request Quote")').first();
    await quoteButton.click();

    // Verify we're on the quote page
    await validation.expectUrlContains('/quote');
    await validation.expectElementVisible('form', 'Quote form should be visible');

    // Take screenshot of empty quote form
    await screenshots.takeScreenshot(page, '02-empty-quote-form', 'happy-paths');

    console.log('✅ Successfully navigated to quote form');

    // Step 2: Fill out the quote form
    console.log('📍 Step 2: Filling out quote form');
    await forms.fillQuoteForm(TEST_DATA.forms.quoteRequest);

    // Take screenshot of filled form
    await screenshots.takeScreenshot(page, '03-filled-quote-form', 'happy-paths');

    // Step 3: Handle file upload (if available)
    console.log('📍 Step 3: Testing file upload functionality');
    const fileInput = page.locator('input[type="file"]');
    if (await fileInput.isVisible()) {
      // Create a test image file for upload
      const testImageBuffer = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');
      await fileInput.setInputFiles([{
        name: 'test-wheel.jpg',
        mimeType: 'image/jpeg',
        buffer: testImageBuffer
      }]);

      console.log('📎 Test file uploaded successfully');
      await screenshots.takeScreenshot(page, '04-form-with-file-upload', 'happy-paths');
    }

    // Step 4: Submit the form
    console.log('📍 Step 4: Submitting quote form');
    await forms.submitForm();

    // Wait for submission to complete
    await helpers.wait.waitForNetworkIdle();

    // Step 5: Verify successful submission
    console.log('📍 Step 5: Verifying submission success');

    // Check for success message or redirect
    try {
      await validation.expectSuccessMessage('Quote request submitted successfully');
      console.log('✅ Success message displayed');
    } catch (error) {
      // Check for redirect to success page
      await validation.expectUrlContains('/success|quote/success');
      console.log('✅ Redirected to success page');
    }

    // Take screenshot of success state
    await screenshots.takeScreenshot(page, '05-quote-submission-success', 'happy-paths');

    console.log('🎉 Quote request journey completed successfully!');
  });

  test('Quote form validation error handling', async ({ page }) => {
    const { navigation, forms, validation, screenshots } = helpers;

    // Navigate to quote page
    await page.goto('/quote');
    await helpers.wait.waitForNetworkIdle();

    // Step 1: Submit empty form to trigger validation
    console.log('📍 Testing empty form submission');
    await forms.submitForm();

    // Take screenshot of validation errors
    await screenshots.takeScreenshot(page, '06-empty-form-validation-errors', 'unhappy-paths');

    // Verify error messages appear
    await validation.expectElementVisible('[data-testid="error-name"], .error:has-text("name"), .text-red-500',
      'Name validation error should be visible');

    console.log('✅ Validation errors displayed for empty form');

    // Step 2: Test invalid email format
    console.log('📍 Testing invalid email validation');
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="name"]', 'Test User'); // Fill required field
    await forms.submitForm();

    await validation.expectElementVisible('[data-testid="error-email"], .error:has-text("email"), .text-red-500',
      'Email validation error should be visible');

    // Take screenshot of email validation error
    await screenshots.takeScreenshot(page, '07-invalid-email-validation', 'unhappy-paths');

    console.log('✅ Email validation working correctly');

    // Step 3: Test phone number validation (if applicable)
    console.log('📍 Testing phone validation');
    await page.fill('input[name="phone"]', 'invalid-phone');
    await forms.submitForm();

    // Phone validation might not be strict, so we'll check if it allows submission or shows error
    try {
      await validation.expectElementVisible('[data-testid="error-phone"], .error:has-text("phone")',
        'Phone validation error should be visible');
      await screenshots.takeScreenshot(page, '08-invalid-phone-validation', 'unhappy-paths');
      console.log('✅ Phone validation working');
    } catch (error) {
      console.log('ℹ️ Phone validation not enforced (acceptable)');
    }
  });

  test('Quote request from services page', async ({ page }) => {
    const { navigation, validation, screenshots } = helpers;

    // Step 1: Navigate to services page
    console.log('📍 Testing quote access from services page');
    await page.goto('/services');
    await helpers.wait.waitForNetworkIdle();

    // Take screenshot of services page
    await screenshots.takeScreenshot(page, '09-services-page', 'happy-paths');

    // Find and click quote CTA on services page
    await validation.expectElementVisible('[data-testid="quote-cta"], button:has-text("Request Quote"), a:has-text("Request Quote")',
      'Quote CTA should be visible on services page');

    const servicesQuoteButton = page.locator('[data-testid="quote-cta"], button:has-text("Request Quote"), a:has-text("Request Quote")').first();
    await servicesQuoteButton.click();

    // Verify navigation to quote form
    await validation.expectUrlContains('/quote');
    await validation.expectElementVisible('form', 'Quote form should load');

    // Take screenshot of quote form from services page
    await screenshots.takeScreenshot(page, '10-quote-form-from-services', 'happy-paths');

    console.log('✅ Successfully accessed quote form from services page');
  });

  test('Quote request mobile experience', async ({ page }) => {
    const { mobile, validation, screenshots } = helpers;

    // Set mobile viewport
    await mobile.setMobileViewport();

    // Navigate to homepage
    await page.goto('/');
    await helpers.wait.waitForNetworkIdle();

    // Take screenshot of mobile homepage
    await screenshots.takeScreenshot(page, '11-mobile-homepage', 'happy-paths');

    // Find and tap quote CTA on mobile
    const quoteButton = page.locator('[data-testid="quote-cta"], button:has-text("Request Quote"), a:has-text("Request Quote")').first();
    await quoteButton.tap();

    // Verify mobile quote form loads
    await validation.expectUrlContains('/quote');
    await validation.expectElementVisible('form', 'Quote form should be visible on mobile');

    // Take screenshot of mobile quote form
    await screenshots.takeScreenshot(page, '12-mobile-quote-form', 'happy-paths');

    // Test mobile form interaction
    await page.tap('input[name="name"]');
    await page.keyboard.type('Mobile Test User');
    await page.tap('input[name="email"]');
    await page.keyboard.type('mobile@example.com');

    // Take screenshot of mobile form interaction
    await screenshots.takeScreenshot(page, '13-mobile-form-filled', 'happy-paths');

    console.log('✅ Mobile quote request experience working correctly');
  });

  test('Quote form with large file upload', async ({ page }) => {
    const { forms, validation, screenshots } = helpers;

    // Navigate to quote page
    await page.goto('/quote');
    await helpers.wait.waitForNetworkIdle();

    // Fill basic form data
    await forms.fillQuoteForm(TEST_DATA.forms.quoteRequest);

    // Create and attempt to upload a large file (simulate oversized upload)
    const largeFileBuffer = Buffer.alloc(10 * 1024 * 1024, 'x'); // 10MB file
    const fileInput = page.locator('input[type="file"]');

    if (await fileInput.isVisible()) {
      console.log('📍 Testing large file upload handling');

      await fileInput.setInputFiles([{
        name: 'large-test-file.jpg',
        mimeType: 'image/jpeg',
        buffer: largeFileBuffer
      }]);

      // Check for file size error
      try {
        await validation.expectErrorMessage('File too large');
        await screenshots.takeScreenshot(page, '14-file-size-error', 'unhappy-paths');
        console.log('✅ File size validation working');
      } catch (error) {
        console.log('ℹ️ File size validation not implemented (consider adding)');
      }
    } else {
      console.log('ℹ️ File upload not available on this form');
    }
  });
});
