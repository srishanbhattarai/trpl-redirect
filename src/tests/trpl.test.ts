import { findClosestNewURL, newBaseURL, oldBaseURL } from '../trpl'

describe('findClosestNewURL', () => {
  it('should correctly get the new URL for perfect matches', () => {
    const old = `${oldBaseURL}/ch19-03-advanced-traits.html`
    const newLink = `${newBaseURL}/ch19-03-advanced-traits.html`

    expect(findClosestNewURL(old)).toEqual(newLink)
  })

  it('should correctly get the new URL for slight character differences', () => {
    const old = `${oldBaseURL}/appendix-05-translation.html`
    const newLink = `${newBaseURL}/appendix-06-translation.html`

    expect(findClosestNewURL(old)).toEqual(newLink)
  })

  it('should correctly handle large differences in strings', () => {
    const old = `${oldBaseURL}/appendix-04-macros.html`
    const newLink = `${newBaseURL}/ch19-06-macros.html`

    expect(findClosestNewURL(old)).toEqual(newLink)
  })
})
