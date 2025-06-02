# Unit Test Notes for Todo.vue

This document explains the approach and decisions taken while writing unit tests for the 'Todo.vue' component using Vue Test Utils.

## Test Coverage

The unit tests cover the following areas:

1. **Computed Property**  
   - Verified the behavior of the 'filteredTodos' computed property when the filter is set to 'short'.  
   - Ensures only todos with text length ≤ 10 are returned.

2. **User Interaction**  
   - Simulated typing in the input and pressing the 'Enter' key to add a todo item.  
   - Checked that the item appears in the DOM after submission.

3. **Edge Case**  
   - Tested form submission with empty input.  
   - Verified that the error message 'Todo cannot be empty' is shown.

## Mocking Explanation

No advanced mocking was required. The component is self-contained and does not depend on external modules or API calls. We directly manipulated 'ref' values (like 'todos' and 'filter') and used 'nextTick()' to wait for reactivity to take effect.

## Failing Test Example & Fix

**Issue**: Initially, the computed property test failed when we forgot to call 'await nextTick()' after setting 'filter'.

**Fix**: Wrapped the test assertion with 'await nextTick()' to allow the reactivity system to update.

```js
await nextTick()
expect(wrapper.vm.filteredTodos).toEqual([{ id: 1, text: 'short' }])