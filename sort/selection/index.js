
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

    for (let i = 0; i <= length; i++) {
        lowestItem = i;

        for (let y = i + 1; y < length; y++) {
            if (compare(sortOrder, array[y], array[lowestItem])) {
                lowestItem = y;
            }
        }

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