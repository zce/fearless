<template>
  <div>
    <div class="heading">
      <h1 class="title">Vuex - Counter</h1>
    </div>
    <h2>{{ count }}</h2>
    <div class="actions">
      <button @click="increment">INC</button>
      <button @click="incrementAsync">INC ASYNC</button>
      <button @click="decrement">DEC</button>
      <button @click="decrementAsync">DEC ASYNC</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'demo-vuex',
  computed: mapGetters({
    count: 'count'
  }),
  methods: mapActions({
    increment: 'increment',
    incrementAsync: 'incrementAsync',
    decrement: 'decrement',
    decrementAsync: 'decrementAsync'
  })
}
</script>

<style scoped>
h2 {
  width: 20rem;
  margin: 2rem auto;
  padding: 5rem;
  font-size: 10rem;
  text-align: center;
  background-color: #e0e0e0;
}
.actions {
  display: flex;
  width: 20rem;
  margin: 2rem auto;
  justify-content: space-around;
}
</style>
