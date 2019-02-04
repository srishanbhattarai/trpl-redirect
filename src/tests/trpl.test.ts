import { newURL, oldBaseURL, newBaseURL } from '../trpl'

describe('newURL', () => {
  it('should correctly get the new URL', () => {
    const old = `${oldBaseURL}/ch19-03-advanced-traits.html`
    const newLink = `${newBaseURL}/ch19-03-advanced-traits.html`

    expect(newURL(old)).toEqual(newLink)
  });
});
