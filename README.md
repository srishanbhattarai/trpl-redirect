# trpl-redirect &middot; [![Build Status](https://travis-ci.com/srishanbhattarai/trpl-redirect.svg?token=r9ZKJZspyajhDz5EguyH&branch=master)](https://travis-ci.com/srishanbhattarai/trpl-redirect)
> Browser extension to redirect outdated links to The Rust Programming Language book to the right URLs.

![Image of TRPL Redirect](https://github.com/srishanbhattarai/trpl-redirect/blob/master/screenshot.png)

# Background
For a while now, links to the second edition of TRPL have shown a message saying that the link is outdated, and that you should refer to the new edition.
However, there are two problems here:
1. The (new) link that you are asked to open, just goes to the Foreword page each time, regardless of what page you were trying to view on the old book.
2. Searching for a topic in the book, example Advanced Traits, always yields the outdated URL.

This extension takes the outdated book, and tries to find out what EXACT page in the new book you should actually be on. Then, it redirects you there.

So, for example, if you were on the page for Advanced Traits on the outdated book, you would automatically be redirected to Advanced Traits on the new book.

# Installation
## Chrome
For now, only a manual installation is possible. Availability on the Chrome web store is imminent.
1. Download a zip of this repository [here](https://github.com/srishanbhattarai/trpl-redirect/archive/master.zip)
2. Go to the URL - `chrome://extensions` 
3. Press `Load Unpacked Extension` and provide it the zip you downloaded.
4. Profit

## Firefox
The extension can be downloaded as an [add-on](https://addons.mozilla.org/en-US/firefox/addon/trpl-redirect/).

# Contributions & Issues
Please file an issue if you find that there's a case that is not covered by this extension. Better yet, send in a pull request!

# License
MIT
