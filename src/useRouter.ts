import { isBrowser, isString } from '@antfu/utils'
import { toQueryStringify } from './utils'
import { useConfig } from './shared'
import type { Router, RouterConfig, RouterLocationRaw } from './types'

export function useRouter(options: RouterConfig = {}): Router {
  const config = {
    ...useConfig(),
    ...options,
  }

  function push(to: RouterLocationRaw) {
    let url = ''
    let replace = false
    let tabBar = false
    let arg = {}

    if (isString(to)) {
      url = to
    }
    else {
      const { query: _query, path: _path, url: _url, replace: _replace, tabBar: _tabBar, ..._arg } = to
      const queryParams = toQueryStringify(_query || {})
      url = `${_path || _url}?${queryParams}`
      replace = _replace || false
      tabBar = _tabBar || false
      arg = _arg || {}
    }

    const isLink = url.startsWith('http')
    if (isLink) {
      // 有 window 证明是浏览器环境
      if (isBrowser)
        return window.open(url, replace ? '_self' : '_blank')

      if (config?.webview) {
        uni.navigateTo({
          url: `${config.webview}?url=${url}`,
          ...arg,
        })
      }
      else { throw new Error('请先配置 webview 路由地址') }

      return
    }

    if (tabBar)
      return uni.switchTab({ ...arg, url })

    if (replace)
      uni.redirectTo({ ...arg, url })
    else
      uni.navigateTo({ ...arg, url })
  }

  function replace(to: RouterLocationRaw) {
    const arg = isString(to) ? { path: to } : to

    push({
      ...arg,
      replace: true,
    })
  }

  function back(delta = 1) {
    uni.navigateBack({
      delta,
    })
  }

  return {
    push,
    replace,
    back,
  }
}
