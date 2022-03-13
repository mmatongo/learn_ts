function longestValidParentheses(s: string): number {
  let max = 0;
  const stack: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      if (stack.length > 0 && s[stack[stack.length - 1]] === "(") {
        stack.pop();
        max = Math.max(max, i - (stack.length > 0 ? stack[stack.length - 1] : -1));
      } else {
        stack.push(i);
      }
    }
  }
  return max;
};