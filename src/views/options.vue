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
  name: 'options',
  computed: {
    title () {
      const dict = {
        general: 'General Settings',
        writing: 'Writing Settings',
        reading: 'Reading Settings',
        discussion: 'Discussion Settings',
        media: 'Media Settings',
        permalink: 'Permalink Settings'
      }
      return dict[this.$route.params.type]
    }
  }
}
</script>
