import { test, expect } from '@playwright/test';

test('Deve navegar para a página de exemplo e verificar o título', async ({ page }) => {
  // 1. Navegação para a URL oficial de testes do Playwright
  await page.goto('https://demo.playwright.dev/todomvc/');

  // 2. Mapeamento do título <h1>
  const titulo = page.locator('h1');

  // 3. Validação se está visível
  await expect(titulo).toBeVisible();
});