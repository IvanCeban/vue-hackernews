<template>
  <div>
    <li>
      <a :href="item.url">{{ item.title }}</a>
      {{ item.score }}
      {{ item.author }}
    </li>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
