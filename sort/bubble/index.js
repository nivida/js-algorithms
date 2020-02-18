
/**
 * Sorts the given array with bubble sort.
 *  
 * @param {string} sortOrder - 'asc' or 'desc' 
 * @param {Array<number>} array 
 * 
 * @returns {Array<number}
 */
function bubbleSort(sortOrder, array) {
    let subLength;

    // Iterate over each item of the array and swap them correctly
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        subLength = array.length - i - 1;
        for (let j = 0; j < subLength; j++) { 
            if (compare(sortOrder, array[j], array[j + 1])) {
                swap(j, j + 1, array);
            }   
        }
    }

    return array;
}

/**
 * Swaps two elements of an array and returns the array.
 * 
 * @param {number} one 
 * @param {number} two 
 * @param {Array<number>} array
 * 
 * @returns {Array<number>} 
 */
function swap(one, two, array) {
    const tmp = array[one];
    array[one] = array[two];
    array[two] = tmp;
    
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
        return itemOne > itemTwo;
    }

    return itemOne < itemTwo;
}

console.log(bubbleSort('asc', [5, 1, 4, 2, 8]));