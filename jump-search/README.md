# Jump Search

Searching of a sorted array. 

1. Define a block size to jump
  * Depends on how fast the values increase or decrease and the length of the array.
2. Jummp through the array in the defined block size.
  * In the case the array is sorted in ascending order:
    * If the element is smaller than the searched item jump up
    * If the element is greater than the searched item jump back and linear iterate up until found

TC: ``O(√n)``

## Example

``` javascript

```