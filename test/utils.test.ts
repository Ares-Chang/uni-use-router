import { describe, expect, it } from 'vitest'
import { toQueryStringify } from '../src/utils'

describe('utils 工具集', () => {
  it('toQueryStringify', () => {
    const params = {
      a: 1,
      b: '2',
      c: null,
    }
    expect(toQueryStringify(params)).toBe('a=1&b=2&c=null')
  })
})
