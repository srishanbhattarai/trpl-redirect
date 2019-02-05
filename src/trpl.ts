import { sorensenDiceCoefficient } from './heuristics'
import { clean, cleanAll, latestEdition, secondEdition } from './links'

/**
 * The old and new base URL for TRPL. Used for redirection.
 */
export const newBaseURL = 'https://doc.rust-lang.org/book'
export const oldBaseURL = 'https://doc.rust-lang.org/book/second-edition'

/**
 * Uses several heuristic strategies to find the closest needle in the haystack.
 *
 * @param {string} needle - The item to search for
 * @param {string} haystack - The list to search in
 * @returns {string}
 */
export const findBestMatch = (needle: string, haystack: string[]) => {
  // 1. Check if the needle itself exists. If it does, that's a perfect match.
  const perfectMatchIdx = haystack.findIndex(item => item === needle)
  if (perfectMatchIdx !== -1) {
    return {
      match: haystack[perfectMatchIdx],
      matchIdx: perfectMatchIdx
    }
  }

  // 2. Find the item with the highest Sorenson Dice coefficient to the needle.
  const bestMatch = haystack.reduce((x, y) => {
    const xCoefficient = sorensenDiceCoefficient(needle, x)
    const yCoefficient = sorensenDiceCoefficient(needle, y)

    return Math.max(xCoefficient, yCoefficient) === xCoefficient ? x : y
  })
  const bestMatchIdx = haystack.findIndex(item => item === bestMatch)

  return {
    match: bestMatch,
    matchIdx: bestMatchIdx
  }
}

/**
 * Find the best URL in the new book, for a link in the old book.
 *
 * @param {string} oldURL - The full absolute URL to a page in the old book.
 * @returns {string}
 */
export const findClosestNewURL = (oldURL: string) => {
  // If it's not an old link, nothing to do.
  if (oldURL.indexOf(oldBaseURL) === -1) {
    return oldURL
  }

  // Get the relative path, and remove the leading "/"
  const relativePath = oldURL.split(oldBaseURL)[1]
  const entry = relativePath.split('/')[1]

  const entryClean = clean(entry)

  const { matchIdx } = findBestMatch(entryClean, cleanAll(latestEdition))

  return `${newBaseURL}/${latestEdition[matchIdx]}`
}
