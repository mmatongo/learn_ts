function groupAnagrams(strs: string[]): string[][] {
  const map: { [key: string]: string[] } = {};
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map[sorted]) map[sorted] = [];
    map[sorted].push(str);
  }
  return Object.values(map);
};