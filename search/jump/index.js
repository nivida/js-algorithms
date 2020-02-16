
/**
 * Returns the index of the searched element.
 * 
 * @param {string} sortOrder - 'asc' or 'desc'
 * @param {number} blockSize 
 * @param {Array<number>} sortedArray 
 * @param {number} searchedValue 
 */
export function jumpSearch(sortOrder, blockSize, sortedArray, searchedValue) {
    const length = (sortedArray.length - 1);

    if (blockSize > sortedArray.length) {
        return -1;
    }

    let stepStartIndex = 0;
    while (compare(sortOrder, sortedArray[stepStartIndex], searchedValue)) {
        stepStartIndex += blockSize;

        if (stepStartIndex > length) {
            return -1;
        }
    }

    let lastBlocKStart = stepStartIndex - blockSize;

    while (compare(sortOrder, sortedArray[stepStartIndex], searchedValue)) {
        lastBlocKStart++;
    }

    if (sortedArray[lastBlocKStart - 1] === searchedValue || sortedArray[lastBlocKStart] === searchedValue) {
        return lastBlocKStart;
    }

    return -1;
}

/**
 * Compares the passed valued by the given sort order.
 * 
 * @param {string} sortOrder  - 'asc' or 'desc'
 * @param {number} itemOne 
 * @param {number} itemTwo 
 */
function compare(sortOrder, itemOne, itemTwo) {
    if (sortOrder === 'asc') {
        return itemOne < itemTwo;
    }

    return itemOne > itemTwo;
}