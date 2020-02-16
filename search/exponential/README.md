# Exponential Search

Searching of a sorted array. 

The idea of this algorithm is to start at a subsize ``1``, compare its last item with the number we search for, then try size ``2``, then ``4`` and so on. 
This will get repeated until the last element of the current sub-array isn't greater than the value we are looking for.
When we have found the last element of a sub-array which isn't greater than the value we are searching for, we know the value has to be between ``index/1`` and ``index``.

## Example

``` javascript
import {exponentialSearch} from './index.js';

console.log(
    exponentialSearch(
        'asc',
        [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        40
    )
);

```