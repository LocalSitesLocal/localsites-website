'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    embeddedChatbotConfig?: {
      chatbotId: string
      domain: string
    }
  }
}

type ChatbaseWidgetProps = {
  chatbotId?: string
}

export function ChatbaseWidget({ chatbotId }: ChatbaseWidgetProps) {
  useEffect(() => {
    if (!chatbotId || document.getElementById('chatbase-embed-script')) return

    const script = document.createElement('script')
    script.id = chatbotId
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.defer = true
    script.setAttribute('domain', 'www.chatbase.co')
    document.body.appendChild(script)
  }, [chatbotId])

  return null
}
