const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('http://localhost:8081/collection');
    const list = await page.$('ul');
    console.log(list);
    expect(list).toBeFalsy();
  });
  