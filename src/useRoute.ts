import type { PageParams } from './types'

interface _PageInstance extends Page.PageInstance {
  $page: PageParams
}

export function useRoute() {
  const pages = getCurrentPages()
  const current = pages[pages.length - 1] as _PageInstance

  const { options, ...pageObj } = current.$page

  return {
    ...pageObj,
    query: options,
  }
}
