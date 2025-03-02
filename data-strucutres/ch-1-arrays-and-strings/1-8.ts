/* ------------------------------- Zero Matrix ------------------------------ */
/**
 *
 * Time: O(m*n)
 * Space: O(m*n)
 *
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
export function zeroMatrixBrute(matrix: number[][]): number[][] {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let newMatrix = matrix.map((row) => row.map((v) => v));

  for (let i = 0; i < rowLen; ++i) {
    for (let j = 0; j < colLen; ++j) {
      if (matrix[i][j] === 0) {
        // set entire row to 0
        for (let k = 0; k < colLen; ++k) {
          newMatrix[i][k] = 0;
        }
        // set entkre column to 0
        for (let k = 0; k < rowLen; ++k) {
          newMatrix[k][j] = 0;
        }
      }
    }
  }

  return newMatrix;
}

/**
 * Set flag for entire row or col
 *
 * Time: O(m*n)
 * Space: O(m+n)
 *
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
export function zeroMatrix(matrix: number[][]): number[][] {
  let rows: boolean[] = Array(matrix.length).fill(false);
  let cols: boolean[] = Array(matrix[0].length).fill(false);

  for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < cols.length; ++j) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < cols.length; ++j) {
      if (rows[i] || cols[j]) matrix[i][j] = 0;
    }
  }

  return matrix;
}
