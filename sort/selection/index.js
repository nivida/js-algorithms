
/**
 * Selection sort. (could also get implemented with the sort mapping function of the Array object)
 * 
 * @param {string} sortOrder - 'asc' or 'desc' 
 * @param {Array<number>} array 
 * 
 * @returns {Array}
 */
export function selectionSort(sortOrder, array) {
    const length = array.length - 1;
    let lowestItem = 0;

    // Iterate over each item of the array
    for (let i = 0; i <= length; i++) {
        lowestItem = i;

        // Iterate over each sub array item and detect the lowest value
        for (let y = i + 1; y < length; y++) {
            // Compare item one with item two depending on the configured sort order
            if (compare(sortOrder, array[y], array[lowestItem])) {
                lowestItem = y;
            }
        }

        // Move lowest element to the first position of the array
        array = swap(lowestItem, i);
    }

    return array;
}

/**
 * Compares to items by the given sort order.
 * 
 * @param {string} sortOrder - 'asc' or desc
 * @param {number} itemOne 
 * @param {number} itemTwo 
 * 
 * @returns {boolean}
 */
function compare(sortOrder, itemOne, itemTwo) {
    if (sortOrder === 'asc') {
        return itemOne < itemTwo;
    }

    return itemOne > itemTwo;
}

/**
 * Swaps two elements of an array and returns the array.
 * 
 * @param {number} one 
 * @param {number} two 
 * @param {Array<number>} array
 * 
 * @returns {Array} 
 */
function swap(one, two, array) {
    const tmp = array[one];
    array[one] = array[two];
    array[two] = tmp;
    
    return array;
}