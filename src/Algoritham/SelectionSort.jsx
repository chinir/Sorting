export default function SelectionSort(array) {
    let animations = [];
    let minIndex;
    for (let i = 0; i < array.length; i++) {
      minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        animations.push([minIndex, j]);
        animations.push([minIndex, j]);
        if (array[minIndex] > array[j]) {
          minIndex = j;
        }
        animations.push([minIndex, j, array[minIndex], array[j]]);
      }
      animations.push([minIndex, i]);
      animations.push([minIndex, i]);
      animations.push([minIndex, i, array[i], array[minIndex]]);
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
    console.log(animations);
    return animations;
  }
  