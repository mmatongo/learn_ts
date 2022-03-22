function longestPalindrome(s: string): string {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    const odd = longestPalindromeHelper(s, i, i);
    const even = longestPalindromeHelper(s, i, i + 1);
    const longestSubstring = odd.length > even.length ? odd : even;
    longest = longestSubstring.length > longest.length ? longestSubstring : longest;
  }
  return longest;

  function longestPalindromeHelper(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }
};