function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage:
  const unsortedArray = [5, 2, 9, 3, 6, 1, 8, 7];
  const sortedArray = quickSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 5, 6, 7, 8, 9]
  