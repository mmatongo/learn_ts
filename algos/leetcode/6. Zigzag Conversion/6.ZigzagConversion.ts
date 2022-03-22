function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }
  let rowIndex = 0;
  let goingDown = false;
  for (let i = 0; i < s.length; i++) {
    rows[rowIndex].push(s[i]);
    if (rowIndex === 0 || rowIndex === numRows - 1) {
      goingDown = !goingDown;
    }
    rowIndex += goingDown ? 1 : -1;
  }
  return rows.map(row => row.join("")).join("");
};