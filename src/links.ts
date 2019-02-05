/**
 * Remove elements from the list of TRPL links that will sway the heuristic
 * algorithms unnecessarily.
 *
 * @param {string[]} links
 * @returns {string[]}
 */
export const cleanAll = (links: string[]): string[] => links.map(clean)

/**
 * Remove elements from a single link.
 *
 * @param {string} link
 * @returns {string}
 */
export const clean = (link: string): string =>
  link.replace(/appendix-|ch\d\d-/g, '')

/**
 * All relative links that are available on the second edition of TRPL.
 *  (Ref. https://github.com/rust-lang/book/tree/master/2018-edition/src)
 */
export const secondEdition = [
  'SUMMARY.html',
  'appendix-00.html',
  'appendix-01-keywords.html',
  'appendix-02-operators.html',
  'appendix-03-derivable-traits.html',
  'appendix-04-useful-development-tools.html',
  'appendix-05-editions.html',
  'appendix-06-translation.html',
  'appendix-07-nightly-rust.html',
  'ch00-00-introduction.html',
  'ch01-00-getting-started.html',
  'ch01-01-installation.html',
  'ch01-02-hello-world.html',
  'ch01-03-hello-cargo.html',
  'ch02-00-guessing-game-tutorial.html',
  'ch03-00-common-programming-concepts.html',
  'ch03-01-variables-and-mutability.html',
  'ch03-02-data-types.html',
  'ch03-03-how-functions-work.html',
  'ch03-04-comments.html',
  'ch03-05-control-flow.html',
  'ch04-00-understanding-ownership.html',
  'ch04-01-what-is-ownership.html',
  'ch04-02-references-and-borrowing.html',
  'ch04-03-slices.html',
  'ch05-00-structs.html',
  'ch05-01-defining-structs.html',
  'ch05-02-example-structs.html',
  'ch05-03-method-syntax.html',
  'ch06-00-enums.html',
  'ch06-01-defining-an-enum.html',
  'ch06-02-match.html',
  'ch06-03-if-let.html',
  'ch07-00-packages-crates-and-modules.html',
  'ch07-01-packages-and-crates-for-making-libraries-and-executables.html',
  'ch07-02-modules-and-use-to-control-scope-and-privacy.html',
  'ch08-00-common-collections.html',
  'ch08-01-vectors.html',
  'ch08-02-strings.html',
  'ch08-03-hash-maps.html',
  'ch09-00-error-handling.html',
  'ch09-01-unrecoverable-errors-with-panic.html',
  'ch09-02-recoverable-errors-with-result.html',
  'ch09-03-to-panic-or-not-to-panic.html',
  'ch10-00-generics.html',
  'ch10-01-syntax.html',
  'ch10-02-traits.html',
  'ch10-03-lifetime-syntax.html',
  'ch11-00-testing.html',
  'ch11-01-writing-tests.html',
  'ch11-02-running-tests.html',
  'ch11-03-test-organization.html',
  'ch12-00-an-io-project.html',
  'ch12-01-accepting-command-line-arguments.html',
  'ch12-02-reading-a-file.html',
  'ch12-03-improving-error-handling-and-modularity.html',
  'ch12-04-testing-the-librarys-functionality.html',
  'ch12-05-working-with-environment-variables.html',
  'ch12-06-writing-to-stderr-instead-of-stdout.html',
  'ch13-00-functional-features.html',
  'ch13-01-closures.html',
  'ch13-02-iterators.html',
  'ch13-03-improving-our-io-project.html',
  'ch13-04-performance.html',
  'ch14-00-more-about-cargo.html',
  'ch14-01-release-profiles.html',
  'ch14-02-publishing-to-crates-io.html',
  'ch14-03-cargo-workspaces.html',
  'ch14-04-installing-binaries.html',
  'ch14-05-extending-cargo.html',
  'ch15-00-smart-pointers.html',
  'ch15-01-box.html',
  'ch15-02-deref.html',
  'ch15-03-drop.html',
  'ch15-04-rc.html',
  'ch15-05-interior-mutability.html',
  'ch15-06-reference-cycles.html',
  'ch16-00-concurrency.html',
  'ch16-01-threads.html',
  'ch16-02-message-passing.html',
  'ch16-03-shared-state.html',
  'ch16-04-extensible-concurrency-sync-and-send.html',
  'ch17-00-oop.html',
  'ch17-01-what-is-oo.html',
  'ch17-02-trait-objects.html',
  'ch17-03-oo-design-patterns.html',
  'ch18-00-patterns.html',
  'ch18-01-all-the-places-for-patterns.html',
  'ch18-02-refutability.html',
  'ch18-03-pattern-syntax.html',
  'ch19-00-advanced-features.html',
  'ch19-01-unsafe-rust.html',
  'ch19-02-advanced-lifetimes.html',
  'ch19-03-advanced-traits.html',
  'ch19-04-advanced-types.html',
  'ch19-05-advanced-functions-and-closures.html',
  'ch19-06-macros.html',
  'ch20-00-final-project-a-web-server.html',
  'ch20-01-single-threaded.html',
  'ch20-02-multithreaded.html',
  'ch20-03-graceful-shutdown-and-cleanup.html',
  'foreword.html'
]

/**
 * All relative links that are available on the newest edition of TRPL.
 *  (Ref. https://github.com/rust-lang/book/tree/master/src)
 */
export const latestEdition = [
  'SUMMARY.html',
  'appendix-00.html',
  'appendix-01-keywords.html',
  'appendix-02-operators.html',
  'appendix-03-derivable-traits.html',
  'appendix-04-useful-development-tools.html',
  'appendix-05-editions.html',
  'appendix-06-translation.html',
  'appendix-07-nightly-rust.html',
  'ch00-00-introduction.html',
  'ch01-00-getting-started.html',
  'ch01-01-installation.html',
  'ch01-02-hello-world.html',
  'ch01-03-hello-cargo.html',
  'ch02-00-guessing-game-tutorial.html',
  'ch03-00-common-programming-concepts.html',
  'ch03-01-variables-and-mutability.html',
  'ch03-02-data-types.html',
  'ch03-03-how-functions-work.html',
  'ch03-04-comments.html',
  'ch03-05-control-flow.html',
  'ch04-00-understanding-ownership.html',
  'ch04-01-what-is-ownership.html',
  'ch04-02-references-and-borrowing.html',
  'ch04-03-slices.html',
  'ch05-00-structs.html',
  'ch05-01-defining-structs.html',
  'ch05-02-example-structs.html',
  'ch05-03-method-syntax.html',
  'ch06-00-enums.html',
  'ch06-01-defining-an-enum.html',
  'ch06-02-match.html',
  'ch06-03-if-let.html',
  'ch07-00-managing-growing-projects-with-packages-crates-and-modules.html',
  'ch07-01-packages-and-crates.html',
  'ch07-02-defining-modules-to-control-scope-and-privacy.html',
  'ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html',
  'ch07-04-bringing-paths-into-scope-with-the-use-keyword.html',
  'ch07-05-separating-modules-into-different-files.html',
  'ch08-00-common-collections.html',
  'ch08-01-vectors.html',
  'ch08-02-strings.html',
  'ch08-03-hash-maps.html',
  'ch09-00-error-handling.html',
  'ch09-01-unrecoverable-errors-with-panic.html',
  'ch09-02-recoverable-errors-with-result.html',
  'ch09-03-to-panic-or-not-to-panic.html',
  'ch10-00-generics.html',
  'ch10-01-syntax.html',
  'ch10-02-traits.html',
  'ch10-03-lifetime-syntax.html',
  'ch11-00-testing.html',
  'ch11-01-writing-tests.html',
  'ch11-02-running-tests.html',
  'ch11-03-test-organization.html',
  'ch12-00-an-io-project.html',
  'ch12-01-accepting-command-line-arguments.html',
  'ch12-02-reading-a-file.html',
  'ch12-03-improving-error-handling-and-modularity.html',
  'ch12-04-testing-the-librarys-functionality.html',
  'ch12-05-working-with-environment-variables.html',
  'ch12-06-writing-to-stderr-instead-of-stdout.html',
  'ch13-00-functional-features.html',
  'ch13-01-closures.html',
  'ch13-02-iterators.html',
  'ch13-03-improving-our-io-project.html',
  'ch13-04-performance.html',
  'ch14-00-more-about-cargo.html',
  'ch14-01-release-profiles.html',
  'ch14-02-publishing-to-crates-io.html',
  'ch14-03-cargo-workspaces.html',
  'ch14-04-installing-binaries.html',
  'ch14-05-extending-cargo.html',
  'ch15-00-smart-pointers.html',
  'ch15-01-box.html',
  'ch15-02-deref.html',
  'ch15-03-drop.html',
  'ch15-04-rc.html',
  'ch15-05-interior-mutability.html',
  'ch15-06-reference-cycles.html',
  'ch16-00-concurrency.html',
  'ch16-01-threads.html',
  'ch16-02-message-passing.html',
  'ch16-03-shared-state.html',
  'ch16-04-extensible-concurrency-sync-and-send.html',
  'ch17-00-oop.html',
  'ch17-01-what-is-oo.html',
  'ch17-02-trait-objects.html',
  'ch17-03-oo-design-patterns.html',
  'ch18-00-patterns.html',
  'ch18-01-all-the-places-for-patterns.html',
  'ch18-02-refutability.html',
  'ch18-03-pattern-syntax.html',
  'ch19-00-advanced-features.html',
  'ch19-01-unsafe-rust.html',
  'ch19-02-advanced-lifetimes.html',
  'ch19-03-advanced-traits.html',
  'ch19-04-advanced-types.html',
  'ch19-05-advanced-functions-and-closures.html',
  'ch19-06-macros.html',
  'ch20-00-final-project-a-web-server.html',
  'ch20-01-single-threaded.html',
  'ch20-02-multithreaded.html',
  'ch20-03-graceful-shutdown-and-cleanup.html',
  'foreword.html',
  'title-page.html'
]
