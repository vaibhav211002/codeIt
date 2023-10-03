
## Merge Sort Algorithm

Merge sort is a recursive algorithm that continuously splits the array in half until it cannot be further divided i.e., the array has only one element left (an array with one element is always sorted). Then the sorted subarrays are merged into one sorted array.

### Here's a step-by-step explanation of how merge sort works:

**Step-1 : Divide** : The first step is to divide the unsorted list into two halves. This is typically done by finding the middle point of the list. This step continues recursively until each sublist contains only one element. This is the base case of the recursion.

**Step-2 : Conquer** : Once the list is divided into sublists with one element each, you can consider them sorted because a single element is always sorted. If the list has more than one element in a sublist, you recursively sort each sublist. This is done by applying the merge sort algorithm to each of the sublists.

**Step-3 : Merge**: After sorting the sublists, the merging step comes into play. In this step, you merge two sorted sublists into a single sorted list. To do this, you start with two pointers, one for each sublist, pointing to the first element. Compare the elements pointed to by the two pointers, and select the smaller of the two. Add this smaller element to the new merged list. Move the pointer in the sublist from which you took the element one step forward. Continue this process until you've merged all elements from both sublists into a single sorted list.

**Step-4 : Repeat** : Continue the divide-conquer-merge process recursively until you have merged all the way up to the original list's size. At this point, you have a fully sorted list.

Combine: Finally, you have a sorted list obtained by merging smaller sorted sublists. This sorted list is the final result of the merge sort algorithm.


### Advantages of Merge Sort

The advantages of Merge Sort are mentioned below:
**Stability** : Merge sort is a stable sorting algorithm, which means it maintains the relative order of equal elements in the input array.
**Guaranteed worst-case performance**: Merge sort has a worst-case time complexity of O(N logN), which means it performs well even on large datasets.
**Parallelizable** : Merge sort is a naturally parallelizable algorithm, which means it can be easily parallelized to take advantage of multiple processors or threads.