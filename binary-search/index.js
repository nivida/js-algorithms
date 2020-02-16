
export function binarySearch(sortOrder, sortedArray, start, end, searchedValue) {
    if (end >= 1) {
        const middle = getMiddle(start, end)

        if (sortedArray[middle] === searchedValue) {
            return middle; 
        }

        if (searchLeftHalf(sortOrder, sortedArray[middle], searchedValue)) {
            return binarySearch(sortedArray, start, middle, searchedValue);
        }

        if (searchRightHalf(sortOrder, sortedArray[middle], searchedValue)) {
            return binarySearch(sortedArray, middle, end, searchedValue);
        }
    }
}

function searchLeftHalf(sortOrder, element, searchedValue) {
    if (sortOrder === 'asc') {
        return element < searchedValue;
    }

    return element > searchedValue;
}

function searchRightHalf(sortOrder, element, searchedValue) {
    if (sortOrder === 'asc') {
        return element > searchedValue;
    }

    return element < searchedValue;
}

function getMiddle(start, end) {
    return Math.floor(start + (end - 1) / 2);
}