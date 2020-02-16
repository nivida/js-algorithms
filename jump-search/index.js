

/**
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
    while (sortedArray[stepStartIndex] < searchedValue) {
        stepStartIndex += blockSize;

        if (stepStartIndex > length) {
            return -1;
        }
    }

    let lastBlocKStart = stepStartIndex - blockSize;

    while (sortedArray[lastBlocKStart] < searchedValue) {
        lastBlocKStart++;
    }

    if (sortedArray[lastBlocKStart - 1] === searchedValue || sortedArray[lastBlocKStart] === searchedValue) {
        return lastBlocKStart;
    }

    return -1;
}