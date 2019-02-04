"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heuristics_1 = require("./heuristics");
const links_1 = require("./links");
/**
 * The old and new base URL for TRPL. Used for redirection.
 */
exports.newBaseURL = 'https://doc.rust-lang.org/book';
exports.oldBaseURL = 'https://doc.rust-lang.org/book/second-edition';
/**
 * Uses several heuristic strategies to find the closest needle in the haystack.
 *
 * @param {string} needle - The item to search for
 * @param {string} haystack - The list to search in
 * @returns {string}
 */
exports.findBestMatch = (needle, haystack) => {
    // 1. Check if the needle itself exists. If it does, that's a perfect match.
    const perfectMatchIdx = haystack.findIndex(item => item === needle);
    if (perfectMatchIdx !== -1) {
        return {
            match: haystack[perfectMatchIdx],
            matchIdx: perfectMatchIdx,
            score: -1
        };
    }
    // TODO: Improve the efficiency here.
    const diceCoeffcients = haystack.map(item => heuristics_1.sorensenDiceCoefficient(needle, item));
    const maxDiceCoefficient = Math.max(...diceCoeffcients);
    const itemIdx = diceCoeffcients.findIndex(c => c === maxDiceCoefficient);
    return {
        match: haystack[itemIdx],
        matchIdx: itemIdx,
        score: maxDiceCoefficient
    };
};
/**
 * Find the best URL in the new book, for a link in the old book.
 *
 * @param {string} oldURL - The full absolute URL to a page in the old book.
 * @returns {string}
 */
exports.findClosestNewURL = (oldURL) => {
    // If it's not an old link, nothing to do.
    if (oldURL.indexOf(exports.oldBaseURL) === -1) {
        return oldURL;
    }
    // Get the relative path, and remove the leading "/"
    const relativePath = oldURL.split(exports.oldBaseURL)[1];
    const entry = relativePath.split('/')[1];
    const entryClean = links_1.clean(entry);
    const { matchIdx } = exports.findBestMatch(entryClean, links_1.cleanAll(links_1.latestEdition));
    return `${exports.newBaseURL}/${links_1.latestEdition[matchIdx]}`;
};
