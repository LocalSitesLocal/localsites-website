'use client'

import { FlowButton } from '@/components/flow-button'
import {
  OFFER_SELECTION_STORAGE_KEY,
  OFFER_SUMMARY_STORAGE_KEY,
  createStoredOfferSelectionMessage,
  type StoredOfferSummary,
} from '@/lib/offers'

type DirectOfferRequestButtonProps = {
  text: string
  summary: StoredOfferSummary
  tone?: 'dark' | 'orange' | 'blue'
  className?: string
}

export function DirectOfferRequestButton({
  text,
  summary,
  tone = 'orange',
  className,
}: DirectOfferRequestButtonProps) {
  const saveSelection = () => {
    window.sessionStorage.setItem(OFFER_SELECTION_STORAGE_KEY, createStoredOfferSelectionMessage(summary))
    window.sessionStorage.setItem(OFFER_SUMMARY_STORAGE_KEY, JSON.stringify(summary))
  }

  return (
    <FlowButton
      text={text}
      href="/#kontakt"
      tone={tone}
      className={className}
      onClick={saveSelection}
    />
  )
}
