const pancakeSort = function(arr) {
  //to save the flips done
  const flipped = [];

  //start from the end of the array
  let i = arr.length - 1;
  while(i > 0) {
    //find max value index from 0 to i inclusive
    let maxValueIndex = 0;
    let maxValue = arr[maxValueIndex]
    for (let j = 1; j <= i; j++) {
      if (maxValue < arr[j]) {
        maxValueIndex = j
        maxValue = arr[j]
      }
    }

    //if max value index is not at the index i, do flips
    if (maxValueIndex !== i) {
      //push k's
      flipped.push(maxValueIndex + 1)
      flipped.push(i + 1)

      //flip from 0 to maxValueIndex subarray, so the max value is at 0th place.
      let initial = 0
      let end = maxValueIndex;
      while (initial < end) {
        [arr[initial], arr[end]] = [arr[end], arr[initial]]
        initial++;
        end--;
      }

      //flip the array from 0 to i, so the max value will now be at the correct place.
      initial = 0;
      end = i;
      while (initial < end) {
        [arr[initial], arr[end]] = [arr[end], arr[initial]]
        initial++;
        end--;
      }
    }

    //if max value index is the same as i, do no flips
    //go to the next index to the left
    i--;
  }
  //it will be an empty array if no sorting is needed
  return flipped;
}
//Time complexity: O(N^2)
//Space complexity: O(N)

const arr1 = [3, 2, 4, 1]
console.log(pancakeSort(arr1));
const arr2 = [1, 2, 3, 4]
console.log(pancakeSort(arr2));
