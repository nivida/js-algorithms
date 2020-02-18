
/**
 * Sorts the given array with bubble sort.
 *  
 * @param {string} sorOrder - 'asc' or 'desc' 
 * @param {Array<number>} array 
 */
export function bubbleSort(sorOrder, array) {
    
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