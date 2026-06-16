'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

type ChatbaseWidgetProps = {
  chatbotId?: string
}

export function ChatbaseWidget({ chatbotId }: ChatbaseWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const openChat = () => setIsOpen(true)
    window.addEventListener('localsites:open-chat', openChat)
    return () => window.removeEventListener('localsites:open-chat', openChat)
  }, [])

  if (!chatbotId) return null

  return (
    <div
      className={cn(
        'fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      <div
        aria-hidden={!isOpen}
        className={cn(
          'h-[min(680px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] overflow-hidden rounded-[14px] border border-[#d7e7f7] bg-white shadow-[0_28px_90px_rgba(6,22,55,0.22)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[390px]',
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-[#d7e7f7] bg-[#f8fbff] px-4">
          <div>
            <p className="text-sm font-black text-[#061637]">LocalSites KI-Chat</p>
            <p className="text-xs text-[#52647d]">Antwortet auf erste Fragen.</p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7e7f7] bg-white text-[#061637] transition-colors hover:bg-[#eef6ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/40"
            aria-label="Chat schliessen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <iframe
          title="LocalSites KI-Chat"
          src={`https://www.chatbase.co/chatbot-iframe/${chatbotId}`}
          loading="eager"
          className="h-[calc(100%-3.5rem)] w-full border-0"
        />
      </div>
    </div>
  )
}
