import { test, expect } from '@playwright/test';

/**
 * Smoke tests for SessionHouse MVP
 *
 * These tests cover the critical happy paths:
 * 1. Authentication flow
 * 2. Listing creation (host)
 * 3. Search and discovery (guest)
 * 4. Booking flow (guest)
 */

test.describe('Authentication', () => {
  test('should redirect unauthenticated users to sign-in', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/.*sign-in.*/);
  });

  test('should allow user to sign up', async ({ page }) => {
    // TODO: Implement after Clerk integration
    test.skip();
  });

  test('should allow user to sign in', async ({ page }) => {
    // TODO: Implement after Clerk integration
    test.skip();
  });
});

test.describe('Host Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // TODO: Setup authenticated session
    test.skip();
  });

  test('should display listings dashboard', async ({ page }) => {
    await page.goto('/dashboard/listings');
    await expect(page.getByRole('heading', { name: /listings/i })).toBeVisible();
  });

  test('should create new listing', async ({ page }) => {
    await page.goto('/dashboard/listings/new');

    // Fill listing form
    await page.fill('input[name="title"]', 'Premium Planar Listening Room');
    await page.fill('textarea[name="description"]', 'High-end system with Magnepan speakers');
    await page.fill('input[name="city"]', 'Dallas');
    await page.fill('input[name="hourlyPrice"]', '150');
    await page.fill('input[name="capacity"]', '4');

    // TODO: Add photo upload
    // TODO: Add gear chain

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/.*dashboard\/listings$/);
    await expect(page.getByText('Premium Planar Listening Room')).toBeVisible();
  });

  test('should edit existing listing', async ({ page }) => {
    // TODO: Implement after listing CRUD
    test.skip();
  });
});

test.describe('Search and Discovery', () => {
  test('should display search page with map', async ({ page }) => {
    await page.goto('/search');

    await expect(page.getByRole('heading', { name: /search/i })).toBeVisible();
    // TODO: Check for map element after Mapbox integration
  });

  test('should filter listings by city', async ({ page }) => {
    await page.goto('/search');

    await page.fill('input[name="city"]', 'Dallas');
    await page.click('button[type="submit"]');

    await expect(page.getByText(/Dallas/)).toBeVisible();
  });

  test('should view listing detail', async ({ page }) => {
    // TODO: Seed database with test listing
    await page.goto('/listings/test-listing-id');

    await expect(page.getByRole('heading')).toBeVisible();
    await expect(page.getByText(/hour/i)).toBeVisible(); // Price display
  });
});

test.describe('Booking Flow', () => {
  test.beforeEach(async ({ page }) => {
    // TODO: Setup authenticated guest session
    test.skip();
  });

  test('should calculate booking price correctly', async ({ page }) => {
    await page.goto('/listings/test-listing-id');

    // Select 3 hours
    await page.selectOption('select[name="hours"]', '3');

    // Check price calculation (3h × $150 = $450 + fees)
    await expect(page.getByText(/\$450/)).toBeVisible();
  });

  test('should complete booking with test card', async ({ page }) => {
    await page.goto('/listings/test-listing-id');

    // Select date/time
    await page.click('button[aria-label="Pick a date"]');
    // TODO: Select future date from calendar

    // Select hours
    await page.selectOption('select[name="hours"]', '3');

    await page.click('button:has-text("Book Now")');

    // Fill Stripe test card (4242 4242 4242 4242)
    const stripeFrame = page.frameLocator('iframe[name^="__privateStripeFrame"]');
    await stripeFrame.locator('input[name="cardnumber"]').fill('4242424242424242');
    await stripeFrame.locator('input[name="exp-date"]').fill('1234'); // 12/34
    await stripeFrame.locator('input[name="cvc"]').fill('123');

    await page.click('button:has-text("Confirm Booking")');

    await expect(page.getByText(/booking confirmed/i)).toBeVisible();
  });
});

test.describe('Stripe Connect Onboarding', () => {
  test.beforeEach(async ({ page }) => {
    // TODO: Setup authenticated host session
    test.skip();
  });

  test('should generate Stripe Connect onboarding link', async ({ page }) => {
    await page.goto('/dashboard/payouts');

    await page.click('button:has-text("Setup Payouts")');

    // Should redirect to Stripe
    await expect(page).toHaveURL(/.*stripe.com.*/);
  });
});

test.describe('Health Check', () => {
  test('should return 200 from health endpoint', async ({ page }) => {
    const response = await page.goto('/api/health');
    expect(response?.status()).toBe(200);
  });
});
