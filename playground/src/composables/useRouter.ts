import { useCreateRouter } from 'uni-use-router'

export const router = useCreateRouter({
  webview: '/pages/webview',
})

router.beforeEach((to, from) => {
  if (!from.includes('/pages/create'))
    return true

  if (to.includes('/pages/webview')) {
    console.warn('拦截器不允许跳转到 webview 页面')
    return false
  }
})
