/* ------------------------------ Rotate Matrix ----------------------------- */
/**
 *
 * Time: O(n^2)
 * Space: O(n^2)
 *
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
export function rotateMatrix(matrix: number[][]): number[][] {
  const w = matrix.length;

  // create a NxN matrix
  const newMatrix = matrix.map((row) => row.map((v) => v));

  // read and write
  for (let i = 0, n = 0; i < w; ++i, ++n) {
    for (let j = 0, m = w - 1; j < w; ++j, --m) {
      // read from the original matrix, but in different order
      newMatrix[i][j] = matrix[m][n];
    }
  }

  return newMatrix;
}

/**
 * According to matrix multiplication in linear algebra, rotate clockwise can be done in two steps:
 * 1. Swap element diagnally - (x, y) -> (y, x)
 * 2. Reverse rows
 *
 * Time: O(n^2)
 * Space: O(1)
 *
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
export function rotateMatrixInPlace(matrix: number[][]): number[][] {
  const n = matrix.length;
  // swap elements diagnally
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // reverse each row
  for (let i = 0; i < n; ++i) {
    matrix[i].reverse();
  }

  return matrix;
}
