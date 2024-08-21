import { isUndefined } from '@antfu/utils'
import { useRoute } from './useRoute'
import { useRouter } from './useRouter'
import type { RouterConfig, RouterLocationRaw } from './types'

const targetList = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab', 'navigateBack']

type NavigationGuardWith = (to: string, from: string, next: (options?: RouterConfig & RouterLocationRaw) => void) => void

export function beforeEach(guard: NavigationGuardWith) {
  targetList.forEach((target) => {
    uni.addInterceptor(target, {
      invoke: ({ url, delta }) => {
        const route = useRoute()

        // 处理回退逻辑，取上一个存储的路由
        if (!isUndefined(delta)) {
          url = route.matched.at(-1)?.route || ''
        }

        return guard(url, route.path, (options) => {
          if (isUndefined(options))
            return true

          const router = useRouter(options)
          router.push(options)

          return false
        })
      },
    })
  })
}

type NavigationHookAfter = (to: string, from: string, failure?: any) => any

export function afterEach(guard: NavigationHookAfter) {
  targetList.forEach((target) => {
    let to = ''

    uni.addInterceptor(target, {
      invoke: ({ url, delta }) => {
        const route = useRoute()
        // 处理回退逻辑，取上一个存储的路由
        if (!isUndefined(delta)) {
          url = route.matched.at(-1)?.route || ''
        }

        to = url
      },
      returnValue: async (e) => {
        const route = useRoute()

        return guard(to, route.path, await e)
      },
    })
  })
}
