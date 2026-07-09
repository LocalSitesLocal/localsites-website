'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navItems } from '@/lib/navigation'
import { jumpToPageTop } from '@/lib/scroll'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isHomePage = pathname === '/'

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHomePage) return

    event.preventDefault()
    jumpToPageTop('smooth')
    window.history.replaceState(null, '', '/')
    setIsOpen(false)
  }

  useEffect(() => {
    const onScroll = () => {
      const nextIsScrolled = window.scrollY > 14
      setIsScrolled((current) => (current === nextIsScrolled ? current : nextIsScrolled))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]',
        isScrolled || !isHomePage
          ? 'bg-white/86 shadow-[0_18px_60px_rgba(19,45,84,0.08)] backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" onClick={handleLogoClick} scroll className="group flex items-center gap-1 text-[1.7rem] font-black tracking-[-0.04em] text-[#061637]">
          LocalSites<span aria-hidden="true" className="mt-4 h-1.5 w-1.5 rounded-full bg-[#0b63ce] transition-transform duration-200 group-hover:scale-125" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#061637]/78 transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#0b63ce] after:transition-all after:duration-300 hover:text-[#061637] hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="fixed right-5 top-5 z-[80] lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e7f7] bg-white/92 text-[#061637] shadow-[0_10px_30px_rgba(15,55,100,0.12)] backdrop-blur transition-colors hover:bg-[#eaf3ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/40"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-[#d7e7f7] bg-white p-0 sm:w-[390px]">
              <div className="flex h-full flex-col">
                <div className="border-b border-[#d7e7f7] p-5 text-2xl font-black tracking-[-0.04em] text-[#061637]">
                  LocalSites<span aria-hidden="true" className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b63ce]" />
                </div>
                <nav className="flex flex-col gap-1 p-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl px-4 py-4 text-lg font-semibold text-[#061637] transition-colors hover:bg-[#f0f7ff]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
