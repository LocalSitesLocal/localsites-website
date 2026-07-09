'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { jumpToPageTop } from '@/lib/scroll'

export function RouteScrollReset() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (window.location.hash) return

    jumpToPageTop()
  }, [pathname])

  return null
}
