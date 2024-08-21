import { reactive } from 'vue'
import type { RouteLocationRaw } from './types'

/**
 * 页面路由参数, 多端不统一，尽量不要用，值可能都没有
 */
interface PageParams {
  fullPath: string
  id?: number
  meta?: object
  openType?: string
  options?: object
  path?: string
  route?: string
  statusBarStyle?: string
  [key: string]: any
}

interface _PageInstance extends Page.PageInstance {
  $page: PageParams
  options: object
}

export function useRoute() {
  const obj = reactive<RouteLocationRaw>({
    fullPath: '',
    path: '',
    query: {},
    current: undefined,
    matched: [],
  })

  /**
   * 不包含在 setTimeout 中 options 和 $page 中的值在小程序端可能取不出来
   * @TODO: 逻辑肯定有问题，暂时没找到好的方法替代
   */
  setTimeout(() => {
    const pages = getCurrentPages()
    const current = pages[pages.length - 1] as _PageInstance

    const { fullPath, options } = current?.$page || {}

    obj.fullPath = fullPath || ''
    obj.path = current.route || ''
    obj.query = current.options || options || {}
    obj.current = current
    obj.matched = pages
  }, 0)

  return obj
}
