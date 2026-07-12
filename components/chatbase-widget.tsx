'use client'

import { useCallback, useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { OPEN_CHAT_EVENT } from '@/lib/chat'
import { cn } from '@/lib/utils'

type ChatbaseWidgetProps = {
  chatbotId?: string
}

export function ChatbaseWidget({ chatbotId }: ChatbaseWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const openChat = useCallback(() => {
    setHasOpened(true)
    setIsOpen(true)
  }, [])

  useEffect(() => {
    window.__localsitesChatReady = Boolean(chatbotId)
    window.__localsitesOpenChat = openChat
    window.addEventListener(OPEN_CHAT_EVENT, openChat)

    return () => {
      window.removeEventListener(OPEN_CHAT_EVENT, openChat)
      delete window.__localsitesChatReady
      delete window.__localsitesOpenChat
    }
  }, [chatbotId, openChat])

  if (!chatbotId) return null

  return (
    <div
      className={cn(
        'fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      <button
        type="button"
        onClick={openChat}
        className={cn(
          'pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#061637] bg-[#061637] px-4 py-3 text-sm font-black text-white shadow-[0_18px_50px_rgba(15,55,100,0.2)] transition-[opacity,transform,background-color] duration-250 hover:-translate-y-0.5 hover:bg-[#0b63ce] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/40',
          isOpen ? 'pointer-events-none translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
        )}
        aria-label="KI-Empfang live testen"
        aria-controls="localsites-chat-panel"
        aria-expanded={isOpen}
      >
        <MessageCircle className="h-4 w-4 text-[#0b63ce]" />
        KI-Empfang
      </button>
      <div
        id="localsites-chat-panel"
        aria-hidden={!isOpen}
        className={cn(
          'h-[min(680px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] overflow-hidden rounded-[12px] border border-[#b8d0ec] bg-[#061637] shadow-[0_28px_90px_rgba(6,22,55,0.24)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[390px]',
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        )}
      >
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#061637] px-4 text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0b63ce] text-white">
              <MessageCircle className="h-3.5 w-3.5" />
            </span>
            <p className="text-sm font-black">KI-Empfang</p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Chat schliessen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {hasOpened && (
          <iframe
            title="LocalSites KI-Chat"
            src={`https://www.chatbase.co/chatbot-iframe/${chatbotId}`}
            loading="lazy"
            className="h-[calc(100%-3rem)] w-full border-0"
          />
        )}
      </div>
    </div>
  )
}
