function findSubstring(s: string, words: string[]): number[] {
  if (!s || !words || words.length === 0) return [];
  let len = words[0].length;
  let wordMap = new Map<string, number>();
  let wordCount = words.length;
  for (let i = 0; i < words.length; i++) {
    if (wordMap.has(words[i])) {
      wordMap.set(words[i], wordMap.get(words[i]) + 1);
    } else {
      wordMap.set(words[i], 1);
    }
  }
  let result = [];
  for (let i = 0; i < s.length - len * wordCount + 1; i++) {
    let tempMap = new Map<string, number>();
    let j = 0;
    while (j < wordCount) {
      let word = s.substr(i + j * len, len);
      if (wordMap.has(word)) {
        if (tempMap.has(word)) {
          tempMap.set(word, tempMap.get(word) + 1);
        } else {
          tempMap.set(word, 1);
        }
        if (tempMap.get(word) > wordMap.get(word)) {
          break;
        }
      } else {
        break;
      }
      j++;
    }
    if (j === wordCount) {
      result.push(i);
    }
  }
  return result;
};