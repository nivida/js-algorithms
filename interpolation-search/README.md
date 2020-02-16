# Interpolation Search

Searching of a sorted array. 

The interpolation search is an improved version of the binary search algorithm. 
Instead of just going always to the middle of the given array does the interpolation search use the highest and lowest value of the given array.
This means if the searched value for example is closer to the end (highest in ascending sorted array) will the interpolation search algorithm
likely start to search towards the end (highest value).

## Example

``` javascript
import {interpolationSearch} from './index.js';

console.log(
    interpolationSearch(
        'asc',
        [0, 1, 5, 10, 20, 25, 30, 40, 42, 50],
        40
    )
);
```