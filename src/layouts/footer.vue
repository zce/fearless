<template>
  <n-layout-footer>
    <n-p>
      <n-a href="https://github.com/zce/fearless">&lt;/&gt;</n-a> with <n-text type="error">♥</n-text> by
      <n-a href="https://zce.me">zce</n-a>. Licensed under the MIT License.
    </n-p>
    <n-p>&copy; {{ new Date().getFullYear() }} Lei’s. All rights reserved.</n-p>
  </n-layout-footer>
</template>

<style scoped>
.n-layout-footer {
  opacity: 0.6;
  padding: 30px;
  text-align: center;
}
</style>
