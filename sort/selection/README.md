# Selection Sort

Sorts a given array. 

The selection sort algorithm sorts an array by repeadetly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning.

The algorithm maintain two subarray in a given array: 

1. The subarray which is already sorted
2. Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

Steps for ``array[64, 25, 12, 22, 11]``:

* (1) Find the minimum element in ``array[0...4]`` and place it at the beginning
  * ``array[11, 25, 12, 22, 64]``
* (2) Find the minimum element in ``array[1...4]`` and place it at the beginning
  * ``array[11, 12, 25, 22, 64]``
* (3) Find the minimum element in ``array[2...4]`` and place it at the beginning
  * ``array[11, 12, 22, 25, 64]``
* (4) Find the minimum element in ``array[3...4]`` and place it at the beginning
  * ``array[11, 12, 22, 25, 64]``

## Example

``` javascript
import {selectionSort} from './index.js';

console.log(
    selectionSort(
        'asc',
        [11, 12, 22, 25, 64]
    )
);
```
