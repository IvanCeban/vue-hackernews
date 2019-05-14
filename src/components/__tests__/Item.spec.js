import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('renders a link to the item.url with item.title as text', () => {
    const item = {
      url: 'http://some-url.com',
      title: 'some title',
      score: 15,
      author: 'Author',
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)
    expect(wrapper.text()).toContain(item.score)
    expect(wrapper.text()).toContain(item.author)
  })
})

