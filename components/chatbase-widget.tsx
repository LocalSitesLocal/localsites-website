'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

type ChatbaseWidgetProps = {
  chatbotId?: string
}

export function ChatbaseWidget({ chatbotId }: ChatbaseWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!chatbotId) return null

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div className="h-[min(680px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] overflow-hidden rounded-[14px] border border-[#d7e7f7] bg-white shadow-[0_28px_90px_rgba(6,22,55,0.22)] sm:w-[390px]">
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
            className="h-[calc(100%-3.5rem)] w-full border-0"
          />
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group flex h-13 items-center gap-3 rounded-full border border-[#ff9a4d]/55 bg-white px-4 text-[#061637] shadow-[0_18px_50px_rgba(255,106,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff6a00] hover:bg-[#fff7f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]/35 sm:px-5"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Chat schliessen' : 'Chat oeffnen'}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff6a00] text-white transition-transform duration-300 group-hover:scale-105">
          {isOpen ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        </span>
        <span className="hidden text-sm font-black sm:inline">{isOpen ? 'Schliessen' : 'KI-Chat'}</span>
      </button>
    </div>
  )
}
