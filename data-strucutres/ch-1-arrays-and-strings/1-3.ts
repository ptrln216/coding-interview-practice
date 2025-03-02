/* --------------------------------- URLify --------------------------------- */
/**
 * Replace space in place
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {string[]} url URL string as character array to be updated in place
 * @param {number} trueLength
 * @returns {string}
 */
export function urlify(url: string[], trueLength: number): string {
  let spaceCount = 0;
  for (let i = 0; i < trueLength; ++i) {
    if (url[i]) spaceCount++;
  }
  const newLength = trueLength + 2 * spaceCount;
  for (let i = newLength - 1, j = trueLength - 1; i >= 0; --i, --j) {
    if (url[j] === " ") {
      url[i--] = "0";
      url[i--] = "2";
      url[i] = "%";
    } else url[i] = url[j];
  }
  return url.join("");
}
