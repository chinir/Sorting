function pivotHelper(arr, start = 0, end = arr.length - 1, animations) {
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      animations.push([start, i]);
      animations.push([start, i]);
      if (pivot > arr[i]) {
        swapIndex++;
        //swapping
        animations.push([swapIndex, i, arr[i], arr[swapIndex]]);
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      } else {
        animations.push([i, i, arr[i], arr[i]]);
      }
    }
    // Swap the pivot from the start the swapPoint
    animations.push([swapIndex, start]);
    animations.push([swapIndex, start]);
    animations.push([swapIndex, start, arr[start], arr[swapIndex]]);
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
  
    return swapIndex;
  }
  
  function quickSortHelper(arr, start = 0, end = arr.length - 1, animations) {
    if (start < end) {
      let pivotIndex = pivotHelper(arr, start, end, animations);
      //Left
      quickSortHelper(arr, start, pivotIndex - 1, animations);
      //Right
      quickSortHelper(arr, pivotIndex + 1, end, animations);
    }
  
    return arr;
  }
  
  export default function QuickSort(array) {
    const animations = [];
  
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  