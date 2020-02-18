
/**
 * Returns the index of the searched element.
 * 
 * @param {string} sortOrder - 'asc' or 'desc'
 * @param {Array<number>} sortedArray 
 * @param {number} start 
 * @param {number} end 
 * @param {number} searchedValue 
 * 
 * @returns {number} - The index of the element
 */
function binarySearch(sortOrder, sortedArray, start, end, searchedValue) {
    if (end >= 1) {
        const middle = getMiddle(start, end);

        if (sortedArray[middle] === searchedValue) {
            return middle; 
        }

        if (searchLeftHalf(sortOrder, sortedArray[middle], searchedValue)) {
            return binarySearch(sortOrder, sortedArray, start, middle, searchedValue);
        }

        if (searchRightHalf(sortOrder, sortedArray[middle], searchedValue)) {
            return binarySearch(sortOrder, sortedArray, middle, end, searchedValue);
        }
    }
}

/**
 * Returns true if the searched value is in the left half of the array.
 * 
 * @param {string} sortOrder - 'asc' or 'desc'
 * @param {number} element 
 * @param {number} searchedValue
 * 
 * @returns {boolean} 
 */
function searchLeftHalf(sortOrder, element, searchedValue) {
    if (sortOrder === 'asc') {
        return searchedValue < element;
    }

    return searchedValue > element;
}

/**
 * Returns true if the searched value in the right half of the array
 * 
 * @param {string} sortOrder - 'asc' or 'desc'
 * @param {number} element 
 * @param {number} searchedValue 
 * 
 * @returns {boolean}
 */
function searchRightHalf(sortOrder, element, searchedValue) {
    if (sortOrder === 'asc') {
        return searchedValue > element;
    }

    return searchedValue < element;
}

/**
 * Returns the middle index
 * 
 * @param {number} start 
 * @param {number} end
 * 
 * @returns {number} 
 */
function getMiddle(start, end) {
    return Math.floor((start + (end - 1)) / 2);
}

const searchArray = [0, 1, 5, 10, 20, 25, 30, 40, 42, 50];
console.log(binarySearch('asc', searchArray, 0, searchArray.length, 30));