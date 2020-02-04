// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

const list = [-2, -3, 4, -1, -2, 1, 5, -3];

const largestSumContiguousSubarray = numberList => {
  let max_so_far = 0;
  let max_ending_here = 0;

  for (let index = 0; index < numberList.length; index++) {
    max_ending_here += numberList[index];

    if (max_ending_here < 0) {
      max_ending_here = 0;
    }

    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
  }

  return max_so_far;
};

console.log('Maximum contiguous sum is', largestSumContiguousSubarray(list));
