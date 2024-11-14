export default function InsertionSort(array) {
    let animations = [];
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j > 0; j--) {
        animations.push([j, j - 1]);
        animations.push([j, j - 1]);
        if (array[j] < array[j - 1]) {
          animations.push([j, j - 1, array[j - 1], array[j]]);
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
        } else {
          animations.push([j, j, array[j], array[j]]);
          break;
        }
      }
    }
    return animations;
  }
  