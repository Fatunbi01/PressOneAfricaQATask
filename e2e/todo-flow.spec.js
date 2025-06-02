// import { test, expect } from '@playwright/test';

// test('basic todo flow', async ({ page }) => {
//   // Example: replace with your actual app URL
//   await page.goto('http://localhost:3000/login'); // adjust if needed

//   // Login
//   await page.fill('input[name="email"]', 'test@example.com');
//   await page.fill('input[name="password"]', 'password');
//   await page.click('button[type="submit"]');
//   await expect(page).toHaveURL('http://localhost:3000/');

//   // Create 3 todos
//   const todos = ['Buy milk', 'Read book', 'Write tests'];
//   for (const todo of todos) {
//     await page.fill('input[placeholder="Add a todo"]', todo);
//     await page.keyboard.press('Enter');
//   }

//   // Delete the second todo
//   const todoToDelete = page.locator('ul > li', { hasText: 'Read book' });
//   await todoToDelete.locator('button', { hasText: 'Delete' }).click();

//   // Check it's no longer there
//   await expect(page.locator('ul')).not.toContainText('Read book');

//   // Logout
//   await page.click('text=Logout');
//   await expect(page).toHaveURL('http://localhost:3000/login');
// });

// import { test, expect } from '@playwright/test';

// test('complete todo flow', async ({ page }) => {
//   // Login
//   await page.goto('/login');
//   await page.fill('input[type="text"]', 'testuser');
//   await page.fill('input[type="password"]', 'password');
//   await page.click('button[type="submit"]');
//   await expect(page).toHaveURL('/');

//   // Add todos
//   const todos = [
//     'Buy groceries',
//     'Write Playwright tests',
//     'Learn Vue.js'
//   ];
  
//   for (const todo of todos) {
//     await page.fill('input[placeholder="Add a todo"]', todo);
//     await page.press('input[placeholder="Add a todo"]', 'Enter');
//     await expect(page.locator('li', { hasText: todo })).toBeVisible();
//   }

//   // Delete middle todo
//   const todoToDelete = page.locator('li', { hasText: 'Write Playwright tests' });
//   await todoToDelete.locator('button', { hasText: 'Delete' }).click();
//   await expect(todoToDelete).not.toBeVisible();

//   // Verify remaining todos
//   await expect(page.locator('li')).toHaveCount(2);
//   await expect(page.locator('li')).toContainText(['Buy groceries', 'Learn Vue.js']);

//   // Test filter
//   await page.selectOption('select', 'short');
//   const shortTodos = await page.locator('li').count();
//   for (let i = 0; i < shortTodos; i++) {
//     const text = await page.locator('li').nth(i).textContent();
//     expect(text.length).toBeLessThanOrEqual(12); // "Buy groceries" is 12 chars
//   }

//   // Logout
//   await page.click('text=Logout');
//   await expect(page).toHaveURL('/login');
// });

// e2e/todo-flow.spec.js
import { test, expect } from '@playwright/test';

test('complete todo workflow with login', async ({ page }) => {
  // 1. Login
  await page.goto('http://localhost:3000/login');
  
  // Fill login form (adjust selectors to match your actual form)
  await page.fill('input[type="text"]', 'testuser');
  await page.fill('input[type="password"]', 'password');
  await page.click('button[type="submit"]');
  
  // Verify successful login redirect
  await expect(page).toHaveURL('http://localhost:3000/');
  await expect(page.locator('.todo-container')).toBeVisible();

  // 2. Create Todos
  const testTodos = [
    'Buy groceries',
    'Write documentation',
    'Fix critical bug'
  ];

  for (const todo of testTodos) {
    await page.fill('input[placeholder="Add a todo"]', todo);
    await page.press('input[placeholder="Add a todo"]', 'Enter');
    await expect(page.locator('li', { hasText: todo })).toBeVisible();
  }

  // 3. Delete Middle Todo
  const todoToDelete = page.locator('li', { hasText: 'Write documentation' });
  await todoToDelete.locator('button', { hasText: 'Delete' }).click();
  await expect(todoToDelete).not.toBeVisible();

  // 4. Test Filters
  // Verify initial count
  await expect(page.locator('li')).toHaveCount(2);
  
  // Test short filter
  await page.selectOption('select', 'short');
  const shortTodos = await page.locator('li').all();
  for (const todo of shortTodos) {
    const text = await todo.textContent();
    expect(text.length).toBeLessThanOrEqual(10);
  }

  // 5. Logout
  await page.click('text=Logout');
  await expect(page).toHaveURL('http://localhost:3000/login');
  await expect(page.locator('input[type="password"]')).toBeVisible();
});