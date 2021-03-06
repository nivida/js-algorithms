
/**
 * Sorts the given array with bubble sort.
 *  
 * @param {string} sortOrder - 'asc' or 'desc' 
 * @param {Array<number>} array 
 * 
 * @returns {Array<number}
 */
export function bubbleSort(sortOrder, array) {
    let subLength;
    let swapped = false;
    const length = array.length;

    // Iterate over each item of the array and swap them correctly
    for (let i = 0; i < length; i++) {
        swapped = false;
        subLength = length - i - 1;
        for (let j = 0; j < subLength; j++) {
            if (compare(sortOrder, array[j], array[j + 1])) {
                swap(j, j + 1, array);
                swapped = true;
            }   
        }

        if (!swapped) {
            break;
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
