function isMatch(s: string, p: string): boolean {
  let i = 0;
  let j = 0;
  let star = -1;
  let match = 0;
  while (i < s.length) {
    if (j < p.length && (s[i] === p[j] || p[j] === '?')) {
      i++;
      j++;
    } else if (j < p.length && p[j] === '*') {
      star = j;
      match = i;
      j++;
    } else if (star !== -1) {
      j = star + 1;
      i = match + 1;
      match++;
    } else {
      return false;
    }
  }
  while (j < p.length && p[j] === '*') {
    j++;
  }
  return j === p.length;
};