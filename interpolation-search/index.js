
/**
 * Interpolation search implemented with recursion 
 * 
 * @param {string} sortOrder 
 * @param {Array<number>} sortedArray 
 * @param {number} searchedValue 
 */
export function interpolationSearchRecursive(sortOrder, sortedArray, searchedValue) {
    if (!sortedArray.length) {
        return -1;
    }

    const {high, low} = getHighAndLow(sortOrder, sortedArray);
    const position = getPosition(sortedArray, searchedValue, high, low);

    if (sortedArray[position] === searchedValue) {
        return position;
    }

    if (sortedArray[position] < searchedValue) {
        return interpolationSearchRecursive(
            sortOrder,
            sortedArray.slice(0, position + 1),
            searchedValue
        );
    }

    return interpolationSearchRecursive(
        sortOrder,
        sortedArray.slice(position - 1),
        searchedValue
    );
}

/**
 * Interpolation search implemented with dynamic programming 
 * 
 * @param {string} sortOrder - 'asc' or 'desc' 
 * @param {Array<number>} sortedArray 
 * @param {number} searchedValue 
 * 
 * @returns {number}
 */
export function interpolationSearchDynamic(sortOrder, sortedArray, searchedValue) {
    if (!sortedArray.length) {
        return -1;
    }

    const {high, low} = getHighAndLow(sortOrder, sortedArray);
    let position;

    // low <= high : As long the low value doesn't exceed the array length
    // searchedValue >= array[low]: As long as the searched value is greater or equals than the lowest value
    // searchedValue <= array[high]: As long as the searched value is smaller or equals than the highest value
    while (low <= high && searchedValue >= array[low] && searchedValue <= array[high]) { 
        position = getPosition(sortOrder, sortedArray, searchedValue, high, low);

        if (sortedArray[position] === searchedValue) {
            return position;
        }

        if (sortedArray[position] < searchedValue) {
            low = position + 1; 
        }

        if (sortedArray[position] > searchedValue) {
            high = position - 1;
        }
    }
}

/**
 * Returns the correct high and low values depending on the sort order
 * 
 * @param {string} sortOrder - 'asc' or 'desc' 
 * @param {Array<number>} sortedArray 
 * 
 * @returns {Object<low, high>}
 */
function getHighAndLow(sortOrder, sortedArray) {
    if (sortOrder === 'desc') {
        return {
            low: sortedArray.length - 1,
            high: 0
        };
    }

    return {
        low: 0,
        high: sortedArray.length - 1
    };
}

/**
 * Returns the prope position with the interpolation formula
 * 
 * @param {Array<number>} sortedArray 
 * @param {number} searchedValue
 * 
 * @returns {nummber} 
 */
function getPosition(sortedArray, searchedValue, high, low) {
    return low + Math.floor(
        ((searchedValue  - sortedArray[low]) * (high - low) / (sortedArray[high] - sortedArray[low]))
    );
}
