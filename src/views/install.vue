<template>
  <div>
    <div class="heading">
      <h1 class="title">{{ title }}</h1>
    </div>
    <p>Not yet!</p>
  </div>
</template>

<script>
export default {
  name: 'install',
  computed: {
    title () {
      const dict = {
        plugin: 'Install plugin',
        theme: 'Install theme'
      }
      return dict[this.$route.params.type]
    }
  }
}
</script>
