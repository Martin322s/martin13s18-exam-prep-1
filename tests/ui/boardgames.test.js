const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://martin13s18-exam.onrender.com/collection');
    const list = await page.$('ul');
    console.log(list);
    expect(list).toBeFalsy();
  });
  