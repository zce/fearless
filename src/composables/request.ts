import { ref, UnwrapRef, Ref } from 'vue'

interface Request<T> {
  result: Ref<UnwrapRef<T>>
  isLoading: Ref<boolean>
  error: Ref<Error | null>
}

export const useRequest = <T>(promise: Promise<T>, defaults: T): Request<T> => {
  const result = ref<T>(defaults)
  const isLoading = ref<boolean>(true)
  const error = ref<Error | null>(null)

  promise.then(
    val => {
      result.value = val as UnwrapRef<T>
      isLoading.value = false
    },
    e => {
      error.value = e
      isLoading.value = false
    }
  )

  // onMounted(async () => {
  //   try {
  //     result.value = (await promise) as UnwrapRef<T>
  //   } catch {
  //     isErrored.value = true
  //   }
  // })

  return { result, isLoading, error }
}
