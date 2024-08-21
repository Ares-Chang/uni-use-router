import { isUndefined } from '@antfu/utils'
import { useRouter } from './useRouter'
import { useRoute } from './useRoute'
import type { RouterConfig } from './types'

export function useCreateRouter(options: RouterConfig) {
  const router = useRouter(options)
  return {
    ...router,
    beforeEach,
  }
}

function beforeEach(guard: (to: string, from: string) => void) {
  const targetList = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab', 'navigateBack']

  targetList.forEach((target) => {
    uni.addInterceptor(target, {
      invoke: ({ url, delta }) => {
        const route = useRoute()

        // 处理回退逻辑，取上一个存储的路由
        if (!isUndefined(delta)) {
          url = route.matched.at(-1)?.route || ''
        }

        return guard(url, route.path)
      },
    })
  })
}
