//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//and two integers m and n, representing the number of elements in nums1 and nums2
//respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//The final sorted array should not be returned by the function, but instead be stored
//inside the array nums1. To accommodate this, nums1 has a length of m + n, where the
//first m elements denote the elements that should be merged, and the last n elements are
//set to 0 and should be ignored. nums2 has a length of n.
//Your result must satisfy the requirements below:
//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 | Result = [1,2,2,3,5,6]

function mergeArrs(nums1, m, nums2, n) {
  debugger;
  let first = m - 1;
  let second = n - 1;
  let k = m + n - 1;

  while (first >= 0 && second >= 0) {
    let firstTemp = nums1[first];
    let secondTemp = nums2[second];

    if (firstTemp > secondTemp) {
      nums1[k] = firstTemp;
      k--;
      first--;
    } else {
      nums1[k] = secondTemp;
      k--;
      second--;
    }
  }
}
