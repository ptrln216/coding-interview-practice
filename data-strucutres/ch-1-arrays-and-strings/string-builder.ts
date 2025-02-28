// Frequent string concatenation or manipulation could lead to possible performance issue,
// instead of using string which is an immutable type, use Array could avoid massive string re-declaration and garbage recollection.
// As for big O time, it could be optimized from O(xn^2) to amortized O(1) time complexity.
// ----------------------------------- //
// NOTE: To learn more about string manipulation in JavaScript, read articles below
// [Why JavaScript does not need StringBuilder](https://josephmate.github.io/java/javascript/stringbuilder/2020/07/27/javascript-does-not-need-stringbuilder.html)
// [Efficient string building in JavaScript](https://www.freecodecamp.org/news/efficient-string-building-in-javascript/)
export class StringBuilder {
  #buffer: string[];
  #length: number;

  constructor(initialValue?: string) {
    this.#buffer = initialValue ? [initialValue] : [];
    this.#length = initialValue?.length ?? 0;
  }

  private _checkIndexRange(index: number) {
    if (index < 0 || index >= this.#length) {
      throw new RangeError(`IndexOutOfBoundsException: ${index}`);
    }
  }

  private _checkIntervalRange(start: number, end: number) {
    if (
      start < 0 ||
      start >= this.#length ||
      end >= this.#length ||
      start >= end
    ) {
      throw new RangeError(`Invalid Range: [${start}, ${end})`);
    }
  }

  append(str: string) {
    this.#buffer.push(str);
    this.#length += str.length;
    return this;
  }

  insert(index: number, str: string) {
    this._checkIndexRange(index);
    const current = this.toString();
    this.#buffer = [current.slice(0, index), str, current.slice(index)];
    this.#length += str.length;
    return this;
  }

  // 將 start 到 end（不含 end）的內容替換為 str
  replace(start: number, end: number, str: string) {
    this._checkIntervalRange(start, end);
    const current = this.toString();
    this.#buffer = [current.slice(0, start), str, current.slice(end)];
    this.#length = this.#length - (end - start) + str.length;
    return this;
  }

  // 刪除索引 start 到 end（不含 end）之間的字元
  delete(start: number, end: number) {
    this._checkIntervalRange(start, end);
    const current = this.toString();
    this.#buffer = [current.slice(0, start), current.slice(end)];
    this.#length -= end - start;
    return this;
  }

  reverse() {
    const current = this.toString();
    this.#buffer = [];
    for (let i = current.length; i >= 0; --i) {
      this.#buffer.push(current[i]);
    }
    return this;
  }

  clear() {
    this.#buffer = [];
    this.#length = 0;
  }

  length() {
    return this.#length;
  }

  toString() {
    return this.#buffer.join("");
  }
}
