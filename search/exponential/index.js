import {binarySearch} from '../binary-search/index.js';

/**
 * Returns the index of the search element from the given array.
 * 
 * @param {string} sortOrder - 'asc' or 'desc'
 * @param {Array<number>} sortedArray 
 * @param {number} searchWord 
 * 
 * @returns {number}
 */
export function exponentialSearch(sortOrder, sortedArray, searchValue) {
    if (sortedArray[0] === searchValue) {
        return sortedArray[0];
    }

    let i = 0;
    const length = sortedArray.length;

    // Iterate over the whole array in a exponential meaning until the value is bigger than the value we are looking for
    while (i < length && sortedArray[i] <= searchValue) {
        i *= 2;
    }

    // Math min is required in the case "i" is bigger than the array length.
    // "i" does get divided by 2 because the current index "i" is bigger than the searched value
    return binarySearch(
        sortOrder,
        sortedArray,
        i / 2,
        Math.min(i, length),
        searchValue
    );
}