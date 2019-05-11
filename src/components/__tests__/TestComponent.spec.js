import { shallowMount} from "@vue/test-utils"
import TestComponent from '../TestComponent.vue'

describe("Hello world", () => {
  test('renders Hello World!', () => {
    const wrapper = shallowMount(TestComponent)
    expect(wrapper.text()).toContain('Hello World')
  })
})
