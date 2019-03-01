import { findClosestNewURL } from './trpl'
;(() => {
  console.log('[TRPL]: LOADED!')

  const source = window.location.href
  const destination = findClosestNewURL(source)
  console.log(`[TRPL]: Redirecting from ${source} to ${destination}`)

  // If destination and source are same, nothing to do.
  if (destination === source) {
    return
  }

  window.location.replace(destination)
})()
