export const OPEN_CHAT_EVENT = 'localsites:open-chat'

declare global {
  interface Window {
    __localsitesChatReady?: boolean
    __localsitesOpenChat?: () => void
  }
}

export function openLocalSitesChat(fallbackHref = '/ki-empfang') {
  if (typeof window === 'undefined') return

  if (window.__localsitesOpenChat) {
    window.__localsitesOpenChat()
    return
  }

  window.dispatchEvent(new CustomEvent(OPEN_CHAT_EVENT))

  window.setTimeout(() => {
    if (!window.__localsitesChatReady && fallbackHref) {
      window.location.href = fallbackHref
    }
  }, 80)
}
