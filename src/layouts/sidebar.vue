<template>
  <n-layout-sider
    :collapsed="collapsed"
    collapse-mode="width"
    :width="220"
    show-trigger
    bordered
    @update:collapsed="toggle"
  >
    <router-link to="/" #="{ navigate, href }" custom>
      <n-a class="logo" :href="href" @click="navigate">
        <svg viewBox="0 0 472 450">
          <defs>
            <mask id="mask" fill="#fff">
              <path d="M472 114.26L203.029 335.74H407.1L472 449.48H64.9L0 335.74l268.971-221.48H64.9L0 .52h407.1z" />
            </mask>
            <filter id="shadow" x="-12.7%" y="-13.4%" width="125.4%" height="126.7%" filterUnits="objectBoundingBox">
              <feOffset in="SourceAlpha" result="offset-outer" />
              <feGaussianBlur stdDeviation="20" in="offset-outer" result="blue-outer" />
              <feComposite in="blue-outer" in2="SourceAlpha" operator="out" result="blue-outer" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="blue-outer" />
            </filter>
          </defs>
          <g mask="url(#mask)">
            <path fill="currentColor" d="M0 0h472v449H0z" />
            <path d="M0 335.74l64.9 113.74L472 114.26 407.1.52z" filter="url(#shadow)" />
          </g>
        </svg>
        <span>{{ store.state.name }}</span>
      </n-a>
    </router-link>
    <n-menu :options="menuOptions" :root-indent="18" />
  </n-layout-sider>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { useMenuOptions, useSidebarCollapsed } from '../composables'

const store = useStore()
const menuOptions = useMenuOptions('main')
const { collapsed, toggle } = useSidebarCollapsed()
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  /* border-bottom: 1px solid var(--border-color); */
  font-size: 1.8em;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition: padding 0.3s var(--bezier), font-size 0.3s var(--bezier);
}

.n-layout-sider--collapsed .logo {
  padding: 8px;
  font-size: 0;
}

.logo svg {
  flex: 0 0 32px;
  height: 32px;
  margin-right: 12px;
  transition: margin 0.3s var(--bezier);
}

.n-layout-sider--collapsed .logo svg {
  margin-right: 0;
}
</style>
