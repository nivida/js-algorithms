

/**
 * 
 * @param {number} blockSize 
 * @param {string} sortOrder - 'asc' or 'desc'
 * @param {Array<number>} sortedArray 
 * @param {number} searchedValue 
 */
export function jumpSearch(blockSize, sortOrder, sortedArray, searchedValue) {
    const length = (sortedArray.length - 1);

    if (blockSize > sortedArray.length) {
        return -1;
    }

    let i = 0;
    while (sortedArray[i] < searchedValue) {
        i += blockSize;

        if (i > length) {
            return -1;
        }
    }

    let lastBlocKStart = i - blockSize;

    while (sortedArray[lastBlocKStart] < searchedValue) {
        lastBlocKStart++;

        if (lastBlocKStart === length || lastBlocKStart === i) {
            return -1;
        }
    }

    if (sortedArray[lastBlocKStart] === searchedValue) {
        return lastBlocKStart;
    }

    return -1;
}