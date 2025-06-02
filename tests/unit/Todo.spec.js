import { mount } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'
import { nextTick } from 'vue'

describe('Todo.vue', () => {

  // ✅ 1. Computed Property Test – Tests filtering by "short" todos
  it('computes filteredTodos based on "short" filter', async () => {
    const wrapper = mount(Todo)

    // Set up mock todos
    wrapper.vm.todos = [
      { id: 1, text: 'short' },
      { id: 2, text: 'this is a very long todo item' }
    ]
    wrapper.vm.filter = 'short'

    await nextTick()
    expect(wrapper.vm.filteredTodos).toEqual([{ id: 1, text: 'short' }])
  })

  // ✅ 2. User Interaction Test – Simulates typing and pressing Enter to add a todo
  it('adds a todo on Enter key', async () => {
    const wrapper = mount(Todo)
    const input = wrapper.find('input')

    await input.setValue('Buy milk')
    await input.trigger('keydown.enter')

    expect(wrapper.text()).toContain('Buy milk')
  })

  // ✅ 3. Edge Case Test – Shows error when trying to submit empty input
  it('shows error when submitting empty input', async () => {
    const wrapper = mount(Todo)
    const input = wrapper.find('input')

    await input.setValue('')
    await input.trigger('keydown.enter')

    expect(wrapper.text()).toContain('Todo cannot be empty')
  })
})
