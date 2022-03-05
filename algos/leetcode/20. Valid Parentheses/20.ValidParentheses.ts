function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (const c of s) {
    if (map[c]) {
      stack.push(c);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (map[last] !== c) return false;
    }
  }
  return stack.length === 0;
};