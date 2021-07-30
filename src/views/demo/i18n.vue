<template>
  <div>
    <div class="heading">
      <h1 class="title">多语言</h1>
    </div>
    <p>{{ $t('message.hello') }}</p>
    <p>{{ $t('message.hello2', { name: '汪磊' }) }}</p>
  </div>
</template>

<script>
export default {
  name: 'demo-i18n'
}
</script>
