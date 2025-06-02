# Bug Analysis: Duplicate Todo Items on Rapid Entry

## Steps to Reproduce
1. Open the Todo app.
2. In the input field, type a task (e.g., “Buy groceries”).
3. Rapidly press `Enter` multiple times within 1 second.
4. Observe that the task appears multiple times in the list.
5. Delete one instance — sometimes all identical entries disappear at once.

## Root Cause Hypothesis
The issue is likely due to the way IDs are generated. If the todos are assigned an `id` based on the current timestamp (`Date.now()`), rapid submissions within the same millisecond can lead to duplicate IDs. When deletion is based on `id`, removing one entry inadvertently affects all todos sharing the same `id`.

## How to Prevent Regression
- **Fix**: Use a truly unique ID per todo item — e.g., `crypto.randomUUID()` or a combination of timestamp and a random suffix.
- **Unit Test**: Add tests to confirm that adding multiple todos in quick succession always produces unique IDs.
- **E2E Test**: Simulate rapid entry and assert that deletion removes only one item.
- **Code Review Checklist**: Add "ID uniqueness and key usage" as a mandatory review item for list-based components.