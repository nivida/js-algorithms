# Interpolation Search

Searching of a uniformed sorted array. 

The interpolation search is an improved version of the binary search algorithm. 
Instead of just going always to the middle of the given array does the interpolation search use the highest and lowest value of the given array.
This means if the searched value for example is closer to the end (highest in ascending sorted array) will the interpolation search algorithm
likely start to search towards the end (highest value).

Note: I have implemented it with recursion just for fun. Implementing it with dynamic programming would use less operations.

## Example

``` javascript
import {interpolationSearch} from './index.js';

console.log(
    interpolationSearch(
        'asc',
        [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        40
    )
);
```