import { clean, latestEdition, secondEdition } from '../links'

describe('secondEdition and latestEdition', () => {
  it('the links should match their snapshots', () => {
    expect(secondEdition).toMatchSnapshot()
    expect(latestEdition).toMatchSnapshot()
  })
})

describe('clean()', () => {
  it('should remove the appendix and chXX prefixes from any entry', () => {
    const links = [
      'SUMMARY.md',
      'appendix-00.md',
      'appendix-01-keywords.md',
      'ch00-00-introduction.md',
      'ch01-00-getting-started.md'
    ]

    const expected = [
      'SUMMARY.md',
      '00.md',
      '01-keywords.md',
      '00-introduction.md',
      '00-getting-started.md'
    ]

    expect(clean(links)).toEqual(expected)
  })
})
