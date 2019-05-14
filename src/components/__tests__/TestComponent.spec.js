import { shallowMount } from "@vue/test-utils"
import TestComponent from '../TestComponent.vue'
import Child from '../Child.vue'

describe('TestComponent.vue', () => {
  test('render Child component', () => {
    window.items = [{}, {}]
    const wrapper = shallowMount(TestComponent)
    const items = wrapper.findAll(Child)
    const a = wrapper.find('a')
    const p = wrapper.find('p')
    expect(a.attributes().href).toBe('https://google.com')
    expect(p.element.style.color).toBe('red')
    expect(items).toHaveLength(window.items.length)
    items.wrappers.forEach(wrapper => {
      expect(wrapper.props().testProp).toBe('some-value')
    })
  })
})
