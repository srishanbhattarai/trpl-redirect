!function(t){var e={};function h(c){if(e[c])return e[c].exports;var n=e[c]={i:c,l:!1,exports:{}};return t[c].call(n.exports,n,n.exports,h),n.l=!0,n.exports}h.m=t,h.c=e,h.d=function(t,e,c){h.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},h.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},h.t=function(t,e){if(1&e&&(t=h(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(h.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)h.d(c,n,function(e){return t[e]}.bind(null,n));return c},h.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return h.d(e,"a",e),e},h.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},h.p="",h(h.s=0)}([function(t,e,h){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const c=h(1);(()=>{console.log("[TRPL]: LOADED!");const t=window.location.href,e=c.findClosestNewURL(t);console.log(`[TRPL]: Redirecting from ${t} to ${e}`),e!==t&&window.location.replace(e)})()},function(t,e,h){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const c=h(2),n=h(3);e.newBaseURL="https://doc.rust-lang.org/book",e.oldBaseURL="https://doc.rust-lang.org/book/second-edition",e.findBestMatch=((t,e)=>{const h=e.findIndex(e=>e===t);if(-1!==h)return{match:e[h],matchIdx:h};const n=e.reduce((e,h)=>{const n=c.sorensenDiceCoefficient(t,e),l=c.sorensenDiceCoefficient(t,h);return Math.max(n,l)===n?e:h}),l=e.findIndex(t=>t===n);return{match:n,matchIdx:l}}),e.findClosestNewURL=(t=>{if(-1===t.indexOf(e.oldBaseURL))return t;const h=t.split(e.oldBaseURL)[1].split("/")[1],{matchIdx:c}=e.findBestMatch(n.clean(h),n.cleanAll(n.latestEdition));return`${e.newBaseURL}/${n.latestEdition[c]}`})},function(t,e,h){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ngrams=((t,e)=>{const h=e.length;if(t>=h||t<0)return new Set([e]);const c=new Set;let n=0;for(;n<h-t+1;){const h=e.slice(n,n+t);c.add(h),n+=1}return c}),e.sorensenDiceCoefficient=((t,h)=>{const c=t.replace(/\s+/g,""),n=h.replace(/\s+/g,""),l=e.ngrams(2,c),r=e.ngrams(2,n);return 2*new Set([...l].filter(t=>r.has(t))).size/(l.size+r.size)})},function(t,e,h){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cleanAll=(t=>t.map(e.clean)),e.clean=(t=>t.replace(/appendix-|ch\d\d-/g,"")),e.secondEdition=["SUMMARY.html","appendix-00.html","appendix-01-keywords.html","appendix-02-operators.html","appendix-03-derivable-traits.html","appendix-04-useful-development-tools.html","appendix-05-editions.html","appendix-06-translation.html","appendix-07-nightly-rust.html","ch00-00-introduction.html","ch01-00-getting-started.html","ch01-01-installation.html","ch01-02-hello-world.html","ch01-03-hello-cargo.html","ch02-00-guessing-game-tutorial.html","ch03-00-common-programming-concepts.html","ch03-01-variables-and-mutability.html","ch03-02-data-types.html","ch03-03-how-functions-work.html","ch03-04-comments.html","ch03-05-control-flow.html","ch04-00-understanding-ownership.html","ch04-01-what-is-ownership.html","ch04-02-references-and-borrowing.html","ch04-03-slices.html","ch05-00-structs.html","ch05-01-defining-structs.html","ch05-02-example-structs.html","ch05-03-method-syntax.html","ch06-00-enums.html","ch06-01-defining-an-enum.html","ch06-02-match.html","ch06-03-if-let.html","ch07-00-packages-crates-and-modules.html","ch07-01-packages-and-crates-for-making-libraries-and-executables.html","ch07-02-modules-and-use-to-control-scope-and-privacy.html","ch08-00-common-collections.html","ch08-01-vectors.html","ch08-02-strings.html","ch08-03-hash-maps.html","ch09-00-error-handling.html","ch09-01-unrecoverable-errors-with-panic.html","ch09-02-recoverable-errors-with-result.html","ch09-03-to-panic-or-not-to-panic.html","ch10-00-generics.html","ch10-01-syntax.html","ch10-02-traits.html","ch10-03-lifetime-syntax.html","ch11-00-testing.html","ch11-01-writing-tests.html","ch11-02-running-tests.html","ch11-03-test-organization.html","ch12-00-an-io-project.html","ch12-01-accepting-command-line-arguments.html","ch12-02-reading-a-file.html","ch12-03-improving-error-handling-and-modularity.html","ch12-04-testing-the-librarys-functionality.html","ch12-05-working-with-environment-variables.html","ch12-06-writing-to-stderr-instead-of-stdout.html","ch13-00-functional-features.html","ch13-01-closures.html","ch13-02-iterators.html","ch13-03-improving-our-io-project.html","ch13-04-performance.html","ch14-00-more-about-cargo.html","ch14-01-release-profiles.html","ch14-02-publishing-to-crates-io.html","ch14-03-cargo-workspaces.html","ch14-04-installing-binaries.html","ch14-05-extending-cargo.html","ch15-00-smart-pointers.html","ch15-01-box.html","ch15-02-deref.html","ch15-03-drop.html","ch15-04-rc.html","ch15-05-interior-mutability.html","ch15-06-reference-cycles.html","ch16-00-concurrency.html","ch16-01-threads.html","ch16-02-message-passing.html","ch16-03-shared-state.html","ch16-04-extensible-concurrency-sync-and-send.html","ch17-00-oop.html","ch17-01-what-is-oo.html","ch17-02-trait-objects.html","ch17-03-oo-design-patterns.html","ch18-00-patterns.html","ch18-01-all-the-places-for-patterns.html","ch18-02-refutability.html","ch18-03-pattern-syntax.html","ch19-00-advanced-features.html","ch19-01-unsafe-rust.html","ch19-02-advanced-lifetimes.html","ch19-03-advanced-traits.html","ch19-04-advanced-types.html","ch19-05-advanced-functions-and-closures.html","ch19-06-macros.html","ch20-00-final-project-a-web-server.html","ch20-01-single-threaded.html","ch20-02-multithreaded.html","ch20-03-graceful-shutdown-and-cleanup.html","foreword.html"],e.latestEdition=["SUMMARY.html","appendix-00.html","appendix-01-keywords.html","appendix-02-operators.html","appendix-03-derivable-traits.html","appendix-04-useful-development-tools.html","appendix-05-editions.html","appendix-06-translation.html","appendix-07-nightly-rust.html","ch00-00-introduction.html","ch01-00-getting-started.html","ch01-01-installation.html","ch01-02-hello-world.html","ch01-03-hello-cargo.html","ch02-00-guessing-game-tutorial.html","ch03-00-common-programming-concepts.html","ch03-01-variables-and-mutability.html","ch03-02-data-types.html","ch03-03-how-functions-work.html","ch03-04-comments.html","ch03-05-control-flow.html","ch04-00-understanding-ownership.html","ch04-01-what-is-ownership.html","ch04-02-references-and-borrowing.html","ch04-03-slices.html","ch05-00-structs.html","ch05-01-defining-structs.html","ch05-02-example-structs.html","ch05-03-method-syntax.html","ch06-00-enums.html","ch06-01-defining-an-enum.html","ch06-02-match.html","ch06-03-if-let.html","ch07-00-managing-growing-projects-with-packages-crates-and-modules.html","ch07-01-packages-and-crates.html","ch07-02-defining-modules-to-control-scope-and-privacy.html","ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html","ch07-04-bringing-paths-into-scope-with-the-use-keyword.html","ch07-05-separating-modules-into-different-files.html","ch08-00-common-collections.html","ch08-01-vectors.html","ch08-02-strings.html","ch08-03-hash-maps.html","ch09-00-error-handling.html","ch09-01-unrecoverable-errors-with-panic.html","ch09-02-recoverable-errors-with-result.html","ch09-03-to-panic-or-not-to-panic.html","ch10-00-generics.html","ch10-01-syntax.html","ch10-02-traits.html","ch10-03-lifetime-syntax.html","ch11-00-testing.html","ch11-01-writing-tests.html","ch11-02-running-tests.html","ch11-03-test-organization.html","ch12-00-an-io-project.html","ch12-01-accepting-command-line-arguments.html","ch12-02-reading-a-file.html","ch12-03-improving-error-handling-and-modularity.html","ch12-04-testing-the-librarys-functionality.html","ch12-05-working-with-environment-variables.html","ch12-06-writing-to-stderr-instead-of-stdout.html","ch13-00-functional-features.html","ch13-01-closures.html","ch13-02-iterators.html","ch13-03-improving-our-io-project.html","ch13-04-performance.html","ch14-00-more-about-cargo.html","ch14-01-release-profiles.html","ch14-02-publishing-to-crates-io.html","ch14-03-cargo-workspaces.html","ch14-04-installing-binaries.html","ch14-05-extending-cargo.html","ch15-00-smart-pointers.html","ch15-01-box.html","ch15-02-deref.html","ch15-03-drop.html","ch15-04-rc.html","ch15-05-interior-mutability.html","ch15-06-reference-cycles.html","ch16-00-concurrency.html","ch16-01-threads.html","ch16-02-message-passing.html","ch16-03-shared-state.html","ch16-04-extensible-concurrency-sync-and-send.html","ch17-00-oop.html","ch17-01-what-is-oo.html","ch17-02-trait-objects.html","ch17-03-oo-design-patterns.html","ch18-00-patterns.html","ch18-01-all-the-places-for-patterns.html","ch18-02-refutability.html","ch18-03-pattern-syntax.html","ch19-00-advanced-features.html","ch19-01-unsafe-rust.html","ch19-02-advanced-lifetimes.html","ch19-03-advanced-traits.html","ch19-04-advanced-types.html","ch19-05-advanced-functions-and-closures.html","ch19-06-macros.html","ch20-00-final-project-a-web-server.html","ch20-01-single-threaded.html","ch20-02-multithreaded.html","ch20-03-graceful-shutdown-and-cleanup.html","foreword.html","title-page.html"]}]);