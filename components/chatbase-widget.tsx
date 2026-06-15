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

    window.embeddedChatbotConfig = {
      chatbotId,
      domain: 'www.chatbase.co',
    }

    const script = document.createElement('script')
    script.id = 'chatbase-embed-script'
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.defer = true
    script.setAttribute('chatbotId', chatbotId)
    script.setAttribute('domain', 'www.chatbase.co')
    document.body.appendChild(script)
  }, [chatbotId])

  return null
}
