/* --------------------------- String Compression --------------------------- */
/**
 * Compare adjacent characters
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
export function compress(str: string): string {
  if (str.length <= 1) return str;

  const res: string[] = [];
  let cnt = 1;
  for (let i = 1; i < str.length; ++i) {
    if (str[i] === str[i - 1]) cnt++;
    else {
      res.push(`${str[i - 1]}${cnt}`);
      cnt = 1;
    }
  }
  res.push(`${str[str.length - 1]}${cnt}`);

  const compressed = res.join("");
  return compressed.length < str.length ? compressed : str;
}
