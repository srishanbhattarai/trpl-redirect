import { sorensenDiceCoefficient, ngrams } from '../heuristics'

describe('Sørensen–Dice coefficient', () => {
  it('should correctly compute the coefficient', () => {
    expect(sorensenDiceCoefficient('night', 'nacht')).toEqual(0.25)
  })
})

describe('N-grams', () => {
  it('should correctly compute the ngrams', () => {
    expect(ngrams(2, 'night')).toEqual(new Set(['ni', 'ig', 'gh', 'ht']))
    expect(ngrams(2, 'ab')).toEqual(new Set(['ab']))
    expect(ngrams(3, 'word')).toEqual(new Set(['wor', 'ord']))
  })

  it('should handle cases where "n > str.length"', () => {
    expect(ngrams(5, 'xy')).toEqual(new Set(['xy']))
  })

  it('should handle cases where "n" is negative', () => {
    expect(ngrams(-1, 'xy')).toEqual(new Set(['xy']))
  })
})
