import { isObject } from '@antfu/utils'
import type { LocationQueryRaw } from './types'

export function toQueryStringify(params: LocationQueryRaw) {
  return Object.entries(params) // 将对象转换成 [key, value] 数组
    .map(([key, value]) => encodeURI(
      `${key}=${isObject(value) ? JSON.stringify(value) : value}`,
    )) // 将每个数组元素转换成 key=value 字符串，需要对 value 进行 JSON 序列化和 URL 编码
    .join('&') // 将数组用 & 符号连接成字符串
}
