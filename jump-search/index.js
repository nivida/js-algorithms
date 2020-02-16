

/**
 * 
 * @param {number} blockSize 
 * @param {string} sortOrder 
 * @param {Array<number>} sortedArray 
 * @param {number} searchedValue 
 */
export function jumpSearch(blockSize, sortOrder, sortedArray, searchedValue) {
    if (blockSize > sortedArray.length) {
        return -1;
    }

    let lastBlocKStart;
    for (let i = blockSize; i <= (sortedArray.length - 1); i = i + blockSize) {
        if (sortedArray[i] < searchedValue) {
            return;
        }

        if (sortedArray[i] > searchedValue) {
            lastBlocKStart = i - blockSize;
            break;
        }
    }

    while (sortedArray[lastBlocKStart] < searchedValue) {
        lastBlocKStart++;
    }

    if (sortedArray[lastBlocKStart] === searchedValue) {
        return lastBlocKStart;
    }

    return -1;
}