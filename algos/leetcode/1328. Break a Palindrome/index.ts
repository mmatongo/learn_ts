function breakPalindrome(palindrome: string): string {
  if (palindrome.length === 1) {
    return '';
  }
  let isOdd = palindrome.length % 2 === 1;
  let mid = Math.floor(palindrome.length / 2);
  let i = 0;
  while (i < mid) {
    if (palindrome[i] !== 'a') {
      let arr = palindrome.split('');
      arr[i] = 'a';
      return arr.join('');
    }
    i++;
  }
  let arr = palindrome.split('');
  arr[palindrome.length - 1] = 'b';
  return arr.join('');
};