<template>
  <div>
    <div class="heading">
      <h1 class="title">New {{ $route.params.type }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new'
  // computed: {
  //   title () {
  //     const dict = {
  //       blog: 'Blog',
  //       page: 'Page'
  //     }
  //     return dict[this.$route.params.type]
  //   }
  // }
}
</script>
