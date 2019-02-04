/**
 * Compute the n-grams of any string.
 *
 * @param {number} n - Value of "n". Example: n = 2 computes the bigrams.
 * @param {string} str - The string to compute the n-gram for.
 */
export function ngrams(n: number, str: string): Set<string> {
  const strlen = str.length

  // If "n" equals or exceeds the length of the string, then it is the only ngram.
  // Also, if "n" is negative, the input is spurious, return the string.
  if (n >= strlen || n < 0) {
    return new Set<string>([str])
  }

  const results = new Set<string>()

  let idx = 0
  while (idx < strlen - n + 1) {
    const ngram = str.slice(idx, idx + n)
    results.add(ngram)

    idx += 1
  }

  return results
}

/**
 * Computes the Sørensen–Dice coefficient of two strings.
 *  (Ref. https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient)
 *
 * In addition to the usual computation, we alter the input strings by removing
 * whitespace.
 *
 * @param {string} first
 * @param {string} second
 * @returns {number}
 */
export function sorensenDiceCoefficient(first: string, second: string): number {
  const x = first.replace(/\s+/g, '')
  const y = second.replace(/\s+/g, '')

  const xBigrams = ngrams(2, x)
  const yBigrams = ngrams(2, y)
  const tBigrams = new Set([...xBigrams].filter(entry => yBigrams.has(entry)))

  const num = 2 * tBigrams.size
  const denom = xBigrams.size + yBigrams.size

  return num / denom
}
