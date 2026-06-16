'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type FlowButtonProps = {
  text?: string
  href?: string
  className?: string
  tone?: 'dark' | 'orange' | 'blue'
  onClick?: () => void
}

const toneClasses = {
  dark: {
    button: 'border-[#111111]/35 text-[#111111]',
    circle: 'bg-[#111111]',
    arrow: 'stroke-[#111111]',
  },
  orange: {
    button: 'border-[#ff6a00]/45 text-[#0a1733]',
    circle: 'bg-[#ff6a00]',
    arrow: 'stroke-[#ff6a00]',
  },
  blue: {
    button: 'border-[#0b63ce]/45 text-[#0a1733]',
    circle: 'bg-[#0b63ce]',
    arrow: 'stroke-[#0b63ce]',
  },
}

export function FlowButton({
  text = 'Modern Button',
  href,
  className,
  tone = 'dark',
  onClick,
}: FlowButtonProps) {
  const styles = toneClasses[tone]
  const content = (
    <>
      <ArrowRight
        className={cn(
          'absolute left-[-25%] z-[9] h-4 w-4 fill-none transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-hover:stroke-white',
          styles.arrow
        )}
      />
      <span className="relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out group-hover:translate-x-3">
        {text}
      </span>
      <span
        className={cn(
          'absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[520px] group-hover:w-[520px] group-hover:opacity-100',
          styles.circle
        )}
      />
      <ArrowRight
        className={cn(
          'absolute right-4 z-[9] h-4 w-4 fill-none transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-hover:stroke-white',
          styles.arrow
        )}
      />
    </>
  )

  const sharedClassName = cn(
    'group relative inline-flex min-h-12 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] bg-white/70 px-8 py-3 text-sm font-semibold shadow-[0_12px_35px_rgba(15,40,80,0.08)] backdrop-blur transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[12px] hover:border-transparent hover:text-white active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce] focus-visible:ring-offset-2',
    styles.button,
    className
  )

  if (href) {
    return (
      <Link href={href} className={sharedClassName} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button className={sharedClassName} type="button" onClick={onClick}>
      {content}
    </button>
  )
}
