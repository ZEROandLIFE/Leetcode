function generate(numRows: number): number[][] {
  const triangle: number[][] = [];

  if (numRows === 0) return triangle;

  // 第一行
  triangle.push([1]);
  if (numRows === 1) return triangle;

  // 第二行
  triangle.push([1, 1]);
  if (numRows === 2) return triangle;

  // 从第三行开始
  for (let i = 2; i < numRows; i++) {
    const prevRow = triangle[i - 1];
    const row = [1]; // 每一行的第一个元素是1

    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }

    row.push(1); // 每一行的最后一个元素是1
    triangle.push(row);
  }

  return triangle;
}
