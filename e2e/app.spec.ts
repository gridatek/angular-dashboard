import { test, expect } from '@playwright/test';

test.describe('Angular Dashboard', () => {
  test('should display welcome message', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', { name: /Welcome to angular-dashboard!/i }),
    ).toBeVisible();
  });

  test('should have correct title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/AngularDashboard/);
  });
});
