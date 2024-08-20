import type { RouterConfig } from './types'

let config: RouterConfig = {
  webview: '',
}

export function useConfig() {
  return config
}

export function setConfig(options: RouterConfig) {
  config = {
    ...config,
    ...options,
  }
}
