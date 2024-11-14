// function Merging(arr1, arr2) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// }

// function MergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let middle = Math.floor(arr.length / 2);
//   //left
//   let left = MergeSort(arr.slice(0, middle));
//   //right
//   let right = MergeSort(arr.slice(middle));

//   return Merging(left, right);
// }

// export default MergeSort;

//OTHER WAY OF MERGE SORT

export default function MergeSort(array) {
    const animations = [];
    if (array.length <= 1) {
      return array;
    }
    // here we are assigning same array to auxiliaryArray, but arrays should not be assigned directly(it refers to same array) so use slice method to assign it to other variable
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIndex,
    endIndex,
    auxiliaryArray,
    animations
  ) {
    if (startIndex === endIndex) {
      return;
    }
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(
      auxiliaryArray,
      startIndex,
      middleIndex,
      mainArray,
      animations
    );
    mergeSortHelper(
      auxiliaryArray,
      middleIndex + 1,
      endIndex,
      mainArray,
      animations
    );
    doMerge(
      mainArray,
      startIndex,
      middleIndex,
      endIndex,
      auxiliaryArray,
      animations
    );
  }
  
  function doMerge(
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    animations
  ) {
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;
  
    while (i <= middleIndex && j <= endIndex) {
      // These are the values that we are comparing; we push them once
      // to change their color
      animations.push([i, j]);
      // These are the values that we are comparing; we push them second
      // time to revert their color
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at the index k in the original array with the
        // value at the index i in the auxilary array
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at the index k in the original array with the
        // value at the index j in the auxilary array
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIndex) {
      // These are the values that we are comparing; we push them once
      // to change their color
      animations.push([i, i]);
      // These are the values that we are comparing; we push them second
      // time to revert their color
      animations.push([i, i]);
      // We overwrite the value at the index k in the original array with the
      // value at the index i in the auxilary array
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIndex) {
      // These are the values that we are comparing; we push them once
      // to change their color
      animations.push([j, j]);
      // These are the values that we are comparing; we push them second
      // time to revert their color
      animations.push([j, j]);
      // We overwrite the value at the index k in the original array with the
      // value at the index i in the auxilary array
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  