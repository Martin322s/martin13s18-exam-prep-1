const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  await page.goto('https://martin13s18-exam.onrender.com/about');
  const heading = await page.$('h1');
  const text = await heading.textContent();
  console.log(text);
  expect(text).toBe('About');
});