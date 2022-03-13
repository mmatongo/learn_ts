function countAndSay(n: number): string {
  let num = '1';
  for (let i = 1; i < n; i++) {
    num = countAndSayHelper(num);
  }
  return num;

  function countAndSayHelper(num: string): string {
    let count = 1;
    let result = '';
    for (let i = 0; i < num.length; i++) {
      if (num[i] !== num[i + 1]) {
        result += `${count}${num[i]}`;
        count = 1;
      } else {
        count++;
      }
    }
    return result;
  }
};