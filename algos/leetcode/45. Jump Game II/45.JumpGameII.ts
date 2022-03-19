function jump(nums: number[]): number {
  let jumps = 0;
  let max = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      jumps++;
      max = end;
    }
    end = Math.max(end, i + nums[i]);
  }
  return jumps;
};