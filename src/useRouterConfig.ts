import type { RouterConfig } from './types'
import { setConfig, useConfig } from './shared'

export function useRouterConfig(options: RouterConfig): RouterConfig {
  try {
    setConfig(options)
  }
  catch (error) {
    console.error('[RouterConfig set error]:', error)
  }

  return useConfig()
}
