function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      const leftBound = findLeftBound(nums, mid, target);
      const rightBound = findRightBound(nums, mid, target);
      return [leftBound, rightBound];
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];

  function findLeftBound(nums: number[], mid: number, target: number): number {
    let left = mid;
    while (left >= 0 && nums[left] === target) {
      left--;
    }
    return left + 1;
  }

  function findRightBound(nums: number[], mid: number, target: number): number {
    let right = mid;
    while (right < nums.length && nums[right] === target) {
      right++;
    }
    return right - 1;
  }

  return [-1, -1];
};