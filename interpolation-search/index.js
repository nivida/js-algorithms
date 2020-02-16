
/**
 * Interpolation search implemented with recursion
 * 
 * @param {string} sortOrder 
 * @param {Array<number>} sortedArray 
 * @param {number} searchedValue 
 */
export function interpolationSearch(sortOrder, sortedArray, searchedValue) {
    if (!sortedArray.length) {
        return -1;
    }

    const position = getPosition(sortOrder, sortedArray, searchedValue);

    if (sortedArray[position] === searchedValue) {
        return position;
    }

    if (sortedArray[position] < searchedValue) {
        return interpolationSearch(sortOrder, sortedArray.slice(0, sortedArray[position]), searchedValue);
    }

    if (sortedArray[position] > searchedValue) {
        return interpolationSearch(sortOrder, sortedArray.slice(sortedArray[position]), searchedValue);
    }
}

/**
 * Returns the prope position with the interpolation formula
 * 
 * @param {string} sortOrder 
 * @param {Array<number>} sortedArray 
 * @param {number} searchedValue
 * 
 * @returns {nummber} 
 */
function getPosition(sortOrder, sortedArray, searchedValue) {
    let low = 0;
    let high = sortedArray.length - 1;

    if (sortOrder === 'desc') {
        low = sortedArray.length - 1;
        high = 0;
    }

    return low + Math.floor(((searchedValue  - sortedArray[low]) * (high - low) / (sortedArray[high] - sortedArray[low])));
}
