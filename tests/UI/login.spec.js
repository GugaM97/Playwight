import { test, expect } from '@playwright/test';

test('Login com sucesso no Serverest', async ({ page }) => {
  await page.goto('https://front.serverest.dev/login');

  await page.fill('input[name="email"]', 'gugamartins2025@gmail.com');
  await page.fill('input[name="password"]', 'guga123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('https://front.serverest.dev/admin/home');
});

test('Login inválido no Serverest', async ({ page }) => {
  await page.goto('https://front.serverest.dev/login');

  await page.fill('input[name="email"]', 'teste123@gmail.com');
  await page.fill('input[name="password"]', 'guga123');
  await page.click('button[type="submit"]');

  const errorSpan = page.locator('span', { hasText: 'Email e/ou senha inválidos' });
  await expect(errorSpan).toBeVisible();
  await expect(errorSpan).toHaveText('Email e/ou senha inválidos');
});