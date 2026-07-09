export function jumpToPageTop(behavior: ScrollBehavior = 'auto') {
  const html = document.documentElement
  const previousScrollBehavior = html.style.scrollBehavior

  html.style.scrollBehavior = behavior
  window.scrollTo({ top: 0, left: 0, behavior })

  window.requestAnimationFrame(() => {
    html.style.scrollBehavior = previousScrollBehavior
  })
}
