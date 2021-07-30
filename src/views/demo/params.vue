<template>
  <div>
    <div class="heading">
      <h1 class="title">路由参数</h1>
    </div>
    <h3>Param: {{ $route.params.name }}</h3>
    <p>尝试修改URL中的<strong>汪磊</strong>为其他的值，然后回车查看。</p>
  </div>
</template>

<script>
export default {
  name: 'demo-params'
}
</script>
