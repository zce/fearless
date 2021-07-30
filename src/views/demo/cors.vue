<template>
  <div>
    <div class="heading">
      <h1 class="title">CORS</h1>
    </div>
    <div>
      <button @click="fetch()">Fetch typicode api by cors</button>
    </div>
    <div v-if="error">
      <h2>{{ error.message }}</h2>
      <pre><code>{{ error.stack }}</code></pre>
    </div>
    <ul v-else>
      <li v-for="item in photos" :key="item">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo-cors',
  data () {
    return { photos: {}, error: false }
  },
  methods: {
    fetch () {
      const url = 'http://jsonplaceholder.typicode.com/photos'
      this.$axios.get(url)
        .then(res => {
          console.log(res.data)
          console.log(res.status)
          console.log(res.statusText)
          console.log(res.headers)
          console.log(res.config)
          this.photos = res.data
          this.error = false
        })
        .catch(err => {
          this.error = err
        })
    }
  }
}
</script>
