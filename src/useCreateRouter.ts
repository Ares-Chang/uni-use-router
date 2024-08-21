import { useRouter } from './useRouter'
import type { RouterConfig } from './types'
import { afterEach, beforeEach } from './interceptor'

export function useCreateRouter(options: RouterConfig) {
  const router = useRouter(options)
  return {
    ...router,
    beforeEach,
    afterEach,
  }
}
