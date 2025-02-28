// ArrayList - resizable array
// NOTE: Array is already auto-resizable in TS,
//  below is just an exercise of implementing an auto-resizable array,
//  as if it was using a static progarmming language like Java.
export class ArrayList<T> {
  static readonly DEFAULT_CAPACITY: number = 10;
  #size: number;
  #array: T[];

  constructor(initialCapacity: number = ArrayList.DEFAULT_CAPACITY) {
    if (initialCapacity >= 0) {
      this.#array = new Array(initialCapacity);
      this.#size = 0;
    } else {
      throw new Error(
        "IllegalArgumentException: initial capacity cannot be negative"
      );
    }
  }

  private _ensureCapacity(minCapacity: number) {
    if (minCapacity <= this.#array.length) return;

    const doubledCapacity = this.#array.length * 2;
    const newArray = new Array(Math.max(minCapacity, doubledCapacity));
    for (let i = 0; i < this.#size; ++i) {
      newArray[i] = this.#array[i];
    }
    this.#array = newArray;
  }

  // 若索引超出範圍則拋出 IndexOutOfBoundsException。
  private _checkIndexInRange(
    index: number,
    options: { readOnly: boolean } = { readOnly: true }
  ) {
    if (options.readOnly) {
      if (index < 0 || index >= this.#size) {
        this._indexOutOfBoundsException(index);
      }
    } else {
      if (index < 0 || index > this.#size) {
        this._indexOutOfBoundsException(index);
      }
    }
  }

  private _indexOutOfBoundsException(index: number) {
    throw new Error(`ArrayIndexOutOfBoundsException: ${index}`);
  }

  // 在列表末端新增元素，若容量不足則擴充
  add(element: T) {
    this.addToIndex(this.#size, element);
  }

  // 在指定索引插入元素，後面的元素依序右移，若容量不足則擴充
  addToIndex(index: number, element: T) {
    this._checkIndexInRange(index, { readOnly: false });
    this._ensureCapacity(this.#size + 1);
    for (let i = this.#array.length - 1; i > index; --i) {
      this.#array[i] = this.#array[i - 1];
    }
    this.#array[index] = element;
    this.#size++;
  }

  // 取得指定索引的元素
  get(index: number): T {
    this._checkIndexInRange(index);
    return this.#array[index];
  }

  // 修改指定索引的元素，回傳舊值
  set(index: number, element: T) {
    this._checkIndexInRange(index);
    const old = this.#array[index];
    this.#array[index] = element;
    return old;
  }

  // 移除指定索引的元素，後面的元素依序左移，回傳被移除的元素
  remove(index: number): T {
    this._checkIndexInRange(index);
    const target = this.#array[index];
    for (let i = index; i < this.#array.length; ++i) {
      this.#array[i] = this.#array[i + 1];
    }
    this.#size--;
    return target;
  }

  // 移除第一個匹配的元素，若找到則回傳 true，否則回傳 false
  findAndRemove(element: T) {
    for (let i = 0; i < this.#array.length; ++i) {
      if (this.#array[i] === element) {
        this.remove(i);
        return true;
      }
    }
    return false;
  }

  // 縮小內部陣列容量，使其等於目前元素數量
  trimToSize() {
    if (this.#array.length === this.#size) return;

    const newArray = new Array(this.#size);
    for (let i = 0; i < this.#size; ++i) {
      newArray[i] = this.#array[i];
    }
    this.#array = newArray;
  }

  // 回傳目前的陣列容量
  capacity() {
    return this.#array.length;
  }

  // 回傳當前元素數量
  size() {
    return this.#size;
  }

  // 回傳 true 如果列表為空，否則回傳 false
  isEmpty() {
    return this.#size === 0;
  }

  // 檢查列表是否包含指定元素
  contains(element: T) {
    for (let i = 0; i < this.#array.length; ++i) {
      if (element === this.#array[i]) return true;
    }
    return false;
  }

  // 回傳指定元素的索引，若不存在則回傳 -1
  indexOf(element: T) {
    for (let i = 0; i < this.#array.length; ++i) {
      if (element === this.#array[i]) return i;
    }
    return -1;
  }

  // 回傳指定元素最後出現的索引，若不存在則回傳 -1
  lastIndexOf(element: T) {
    let pointer = -1;
    for (let i = 0; i < this.#array.length; ++i) {
      if (element === this.#array[i]) {
        pointer = i;
      }
    }
    return pointer;
  }

  // 回傳包含所有元素的陣列副本
  toArray() {
    return this.#array.slice(0, this.#size);
  }

  // 回傳當前 ArrayList 的淺拷貝
  clone() {
    const cloned = new ArrayList<T>(this.#size);
    for (let i = 0; i < this.#size; ++i) {
      cloned.add(this.#array[i]);
    }
    return cloned;
  }

  // 回傳一個 Iterator，允許逐個遍歷元素
  *iterator() {
    for (let i = 0; i < this.#size; ++i) {
      yield this.#array[i];
    }
  }

  // 清空列表，將 size 設為 0，但不縮小容量
  clear() {
    this.#size = 0;
    for (let i = 0; i < this.#array.length; ++i) {
      delete this.#array[i];
    }
  }
}
