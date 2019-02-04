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
      matchIdx: perfectMatchIdx,
      score: -1
    }
  }

  const diceCoeffcients = haystack.map(item => sorensenDiceCoefficient(needle, item))
  const maxDiceCoefficient = Math.max(...diceCoeffcients)
  const itemIdx = diceCoeffcients.findIndex(c => c === maxDiceCoefficient)

  return {
    match: haystack[itemIdx],
    matchIdx: itemIdx,
    score: maxDiceCoefficient
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
