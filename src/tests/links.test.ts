import { secondEdition, latestEdition } from '../links'

describe('TRPL links', () => {
  it('should match snapshot', () => {
    expect(secondEdition).toMatchSnapshot()
    expect(latestEdition).toMatchSnapshot()
  })
})
