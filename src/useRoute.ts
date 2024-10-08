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

export function useRoute<T extends Partial<RouteLocationRaw> = RouteLocationRaw>() {
  /**
   * @TODO: 类型错误，不会写了
   *
   * const route = useRoute<{
   *   query: {
   *     id: number
   *   }
   * }>()
   * const id = route.query.id // 这里类型是 any，应该是 number
   */
  const obj = reactive<T | RouteLocationRaw>({
    fullPath: '',
    path: '',
    query: {},
    current: undefined,
    matched: [],
  })

  function setObj() {
    const pages = getCurrentPages()
    const current = pages[pages.length - 1] as _PageInstance

    const { fullPath, options } = current?.$page || {}

    obj.fullPath = fullPath || ''
    obj.path = current.route || ''
    obj.query = current.options || options || {}
    obj.current = current
    obj.matched = pages
  }
  // 首次调用，方便 interceptor 中使用，不影响页面中使用
  setObj()

  /**
   * 不包含在 setTimeout 中 options 和 $page 中的值在小程序端可能取不出来
   * @TODO: 逻辑肯定有问题，暂时没找到好的方法替代
   */
  setTimeout(setObj, 0)

  return obj
}
