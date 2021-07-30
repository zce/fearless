<template>
  <div>
    <div class="heading">
      <h1 class="title">HTTP 代理</h1>
    </div>
    <div>
      <p>本示例只有在本地开发环境工作，线上托管环境没有代理配置。</p>
      <p>！！！过时的示例！！！</p>
      <button @click="fetch()">Fetch jsonplaceholder api by proxy</button>
    </div>
    <div v-if="error">
      <h2>{{ error.message }}</h2>
      <pre><code>{{ error.stack }}</code></pre>
    </div>
    <ul v-else>
      <li v-for="item in posts" :key="item">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo-proxy',
  data () {
    return { posts: {}, error: false }
  },
  methods: {
    fetch () {
      this.$axios
        .get('/posts')
        .then(res => {
          console.log(res.data)
          console.log(res.status)
          console.log(res.statusText)
          console.log(res.headers)
          console.log(res.config)
          this.posts = res.data
          this.error = false
        })
        .catch(err => {
          this.error = err
        })
    }
  }
}
</script>
