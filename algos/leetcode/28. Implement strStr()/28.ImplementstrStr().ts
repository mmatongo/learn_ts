function strStr(haystack: string, needle: string): number {
  if (!needle) return 0;
  if (!haystack) return -1;
  let i = 0;
  let j = 0;
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }
  if (j === needle.length) return i - j;
  return -1;
};