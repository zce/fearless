// import { computed, onMounted, ref, UnwrapRef } from 'vue'
// import VkLoader from '@/components/VkLoader.vue'

// export const useRequest = <T>(promise: Promise<T>) => {
//   const data = ref<T | null>(null)
//   const isErrored = ref<boolean>(false)
//   const isLoading = computed(() => data.value === null)

//   onMounted(async () => {
//     try {
//       data.value = (await promise) as UnwrapRef<T>
//     } catch {
//       isErrored.value = true
//     }
//   })

//   return {
//     data,
//     isLoading,
//     isErrored,
//     VkLoader
//   }
// }
