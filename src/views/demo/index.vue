<template>
  <div>
    <div class="heading">
      <h1 class="title">演示</h1>
    </div>
    <ul class="demos-links">
      <li v-for="item in demos" :key="item">
        <router-link :to="item">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo',
  computed: {
    demos () {
      return this.$store.getters.header.menus
        .find(m => m.name === 'demo').children
        .filter(m => m.name)
    }
  }
}
</script>
