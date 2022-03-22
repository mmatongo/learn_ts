function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let start = 0;
  let end = 0;
  const map = new Map();
  while (end < s.length) {
    const char = s[end];
    if (map.has(char)) {
      max = Math.max(max, end - start);
      start = Math.max(start, map.get(char) + 1);
    }
    map.set(char, end);
    end++;
  }
  max = Math.max(max, end - start);
  return max;
};