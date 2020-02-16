# Binary Search

Searching of a sorted array. 

1. Repeaditly dividing the search range in half
2. If the value of the search kex is less than the item in the middle of the interval, iterate through the lower half.
3. If the value of the search key is higher than the item in the midlle iterate through the upper half.

TC: ``O(log n)``