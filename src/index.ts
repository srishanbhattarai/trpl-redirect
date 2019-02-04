import { findClosestNewURL } from './trpl'

/**
 * Get the current tab and replace the old TRPL URL with the new one.
 */
chrome.tabs.getCurrent(tab => {
  // May be undefined if called from a non-tab context
  // (for example, a background page or popup view).
  if (!tab) {
    return
  }

  // This property is only present if the extension's manifest
  // includes the "tabs" permission.
  if (!tab.url) {
    return
  }

  window.location.replace(findClosestNewURL(tab.url))
})
