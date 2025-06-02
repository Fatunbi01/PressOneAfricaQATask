# Test Plan for Todo.vue
## Objective
Ensure the 'Todo.vue' component allows users to add, delete, filter todos correctly and provides appropriate validation feedback.
## Types of Tests
1. **Unit Tests** – Test 'addTodo', 'deleteTodo' and 'filteredTodos'.
2. **Integration Tests** – Verify component interactions (input, list, filter).
3. **End-to-End (E2E)** – Simulate real user behavior using Playwright.
## Priorities
- Input validation & error handling – High
- Adding & deleting todos – High
- Filtering logic – Medium
- UI/accessibility checks – Low
## Test Strategy / Approach
- **Manual Testing**: Exploratory and manual regression checks.
- **Automated Testing**:
   - Unit/Integration: Vue Test Utils + Vitest
   - E2E: Playwright with Cucumber (i.e for BDD-style scenarios if possible) 
## Entry & Exit Criteria
- **Entry**: Code complete for 'Todo.vue', test environment setup & test data available.
- **Exit**: All high/medium priority test cases pass, no critical bugs remains.
## Timeline / Schedule
- Day 1: Test plan & manual test cases
- Day 2: Write & run unit/integration tests
- Day 3: Create Playwright E2E tests and finalize reporting
## Environment Needs
- Node.js, Vue 3, Vitest, Playwright
- Local test server or dev build
## Assumptions & Dependencies
- Component is standalone with no backend/API dependency
- Vue 3 with script setup is fully supported in test tools
## Risks & Mitigation
- **Vue Test Utils compatibility issues** → Use latest compatible version
- **DOM async behavior** → Use 'await nextTick()' in tests
- **Time constraints** → Prioritize critical tests first

## Test Cases
### TC1: Adding a Valid Todo
**Description:** Verify a user can add a valid todo item

**Preconditions:** 
- Todo list is empty or contains existing items
- App is in default state

**Steps:**
1. Type "Buy groceries" in the input field
2. Press Enter key

**Expected Result:**
- Todo "Buy groceries" appears in the list
- Input field clears
- No error message shown
### TC2: Adding Empty Todo 
**Description:** Verify system handles empty todo submission

**Preconditions:** 
- Todo list is in any state

**Steps:**
1. Leave input field empty
2. Press Enter key

**Expected Result:**
- Error message "Todo cannot be empty" appears
- No todo is added to the list

### TC3: Deleting a Todo
**Description:** Verify a user can delete a todo item

**Preconditions:** 
- Todo list contains at least one item

**Steps:**
1. Click "Delete" button next to any todo item

**Expected Result:**
- Selected todo is removed from the list
- Other todos remain unaffected

### TC4: Filtering Short Todos
**Description:** Verify filter shows only short todos (≤10 chars)

**Preconditions:** 
- Todo list contains both short and long items

**Steps:**
1. Select "Short (≤10 chars)" from filter dropdown

**Expected Result:**
- Only todos with ≤10 characters are displayed
- Count in filter reflects correct number

### TC5: Filtering Long Todos
**Description:** Verify filter shows only long todos (>10 chars)

**Preconditions:** 
- Todo list contains both short and long items

**Steps:**
1. Select "Long (>10 chars)" from filter dropdown

**Expected Result:**
- Only todos with >10 characters are displayed
- Count in filter reflects correct number