# trpl-redirect
Browser extension to redirect outdated links to The Rust Programming Language book to the right URLs.

# Background
For a while now, links to the second edition of TRPL have shown a message saying that the link is outdated, and that you should refer to the new edition.
However, there are two problems here. 
1. The (new) link that you are asked to open, just goes to the Foreword page each time, regardless of what page you were trying to view on the old book.
2. Searching for a topic in the book, example Advanced Traits, always yields the outdated URL.

This extension takes the outdated book, and tries to find out what EXACT page in the new book you should actually be on. Then, it redirects you there.

So, for example, if you were on the page for Advanced Traits on the outdated book, you would automatically be redirected to Advanced Traits on the new book.

# Installation
For now, only manual installation is possible. Chrome and Firefox support is imminent.
