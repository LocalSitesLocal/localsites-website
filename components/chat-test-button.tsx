'use client'

import { FlowButton } from '@/components/flow-button'
import { openLocalSitesChat } from '@/lib/chat'

type ChatTestButtonProps = {
  text?: string
  tone?: 'dark' | 'orange' | 'blue'
  className?: string
}

export function ChatTestButton({
  text = 'KI-Empfang live testen',
  tone = 'blue',
  className,
}: ChatTestButtonProps) {
  return <FlowButton text={text} tone={tone} className={className} onClick={() => openLocalSitesChat()} />
}
