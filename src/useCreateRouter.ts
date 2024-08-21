import { isUndefined } from '@antfu/utils'
import { useRouter } from './useRouter'
import { useRoute } from './useRoute'
import type { RouterConfig } from './types'

export function useCreateRouter(options: RouterConfig) {
  const router = useRouter(options)
  return {
    ...router,
    beforeEach,
    afterEach,
  }
}

const targetList = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab', 'navigateBack']

type NavigationGuardWith = (to: string, from: string) => void

function beforeEach(guard: NavigationGuardWith) {
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

type NavigationHookAfter = (to: string, from: string, failure?: any) => any

function afterEach(guard: NavigationHookAfter) {
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
