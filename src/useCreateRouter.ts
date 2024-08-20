import { useRouter } from './useRouter'
import type { Router, RouterConfig } from './types'

export function useCreateRouter(options: RouterConfig): Router {
  return useRouter(options)
}
