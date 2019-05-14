<template>
    <div>
      <child v-for="item in items" :key="item.id" testProp="some-value"/>
      <a href="https://google.com">Link</a>
      <p :style="{'color': 'red'}">Some text</p>
    </div>
</template>

<script>
  import Child from './Child.vue'
  export default {
    name: "TestComponent",
    components: { Child },
    data () {
      return {
        items: window.items
      }
    }
  }
</script>

<style scoped>

</style>
