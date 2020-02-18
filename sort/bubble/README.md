# Bubble Sort

Sorts a given array. 

The bubble sort algorithm is a simple sorting algorith that works with repeatedly swapping the followed item if they are in wrong order.

## Algo Example:

### First Pass:
( **5** **1** 4 2 8 ) –> ( **1** **5** 4 2 8 ), Swap since 5 > 1.

( 1 **5** **4** 2 8 ) –>  ( 1 **4** **5** 2 8 ), Swap since 5 > 4

( 1 4 **5** **2** 8 ) –>  ( 1 4 **2** **5** 8 ), Swap since 5 > 2

( 1 4 2 **5** **8** ) –> ( 1 4 2 **5** **8** ), Do nothing they are already in order.

### Second Pass:
( **1** **4** 2 5 8 ) –> ( **1** **4** 2 5 8 )

( 1 **4** **2** 5 8 ) –> ( 1 **2** **4** 5 8 ), Swap four with two because: 4 > 2

( 1 2 **4** **5** 8 ) –> ( 1 2 **4** **5** 8 )

( 1 2 4 **5** **8** ) –>  ( 1 2 4 **5** **8** )

The array would now already be sorted. But the bubble sort algorithm can't know if this is actually the case at this point. 
The only way the bubble sort algorithm can detect if the array is completly sorted is with a complete run without any swap.

### Third Pass:
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

Now the bubble sort algo knows that anything is sorted as expected.

## Example

``` javascript
import {bubbleSort} from './index.js';

console.log(
  bubbleSort(
    'asc',
    [
      5,
      1,
      4,
      2,
      8
    ]
  )
);
// > [1, 2, 4, 5, 8]
```
