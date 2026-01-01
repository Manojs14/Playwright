import { test, expect } from '@playwright/test';

test('YouTube Shorts video display', async ({ page }) => {
  await page.goto('https://www.youtube.com/watch?v=xRb8hxwN5zc&list=RDxRb8hxwN5zc&start_radio=1', {
    waitUntil: 'domcontentloaded',
  });

  await page.pause();
});
