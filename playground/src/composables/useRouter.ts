import { useCreateRouter } from '../../../src/index'

export const router = useCreateRouter({
  webview: '/pages/webview',
})

router.beforeEach((to, from, next) => {
  if (to.includes('/pages/intercept'))
    return next({ replace: true, path: '/pages/index/index' })

  if (to.includes('/pages/webview')) {
    console.warn('拦截器不允许跳转到 webview 页面')
    return false
  }

  if (!from.includes('/pages/create'))
    return next()
})

router.afterEach((to, from) => {
  // eslint-disable-next-line no-console
  console.log('[affterEach]: ', to, from)
})
