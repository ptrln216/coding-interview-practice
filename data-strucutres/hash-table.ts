// Each node contains a key-value pair and a reference to the next node
class ListNode<K, V> {
  key: K;
  value: V;
  next: ListNode<K, V> | null = null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

// Map keys to values for highly Efficient lookup
// Array of bucket, each index holds a linked lists
export class HashTable<K, V> {
  private DEFAULT_CAPACITY: number = 5;

  private sz: number;
  private bucket: (ListNode<K, V> | null)[];

  constructor() {
    this.sz = 0;
    this.bucket = Array(this.DEFAULT_CAPACITY).fill(null);
  }

  /* -------------------------------------------------------------------------- */
  /*                                 INSPECTION                                 */
  /* -------------------------------------------------------------------------- */
  /**
   * Return all keys
   * @returns {K[]}
   */
  keys(): K[] {
    const keys: K[] = [];
    for (let i = 0; i < this.bucket.length; ++i) {
      let current = this.bucket[i];
      while (current) {
        keys.push(current.key);
        current = current.next;
      }
    }
    return keys;
  }

  /**
   * Return all values
   * @returns {V[]}
   */
  values(): V[] {
    const values: V[] = [];
    for (let i = 0; i < this.bucket.length; ++i) {
      let current = this.bucket[i];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
    }
    return values;
  }

  /**
   * Return true if the hash table contains key, o/w return false - O(n)
   * @param {K} key
   * @returns {boolean}
   */
  containsKey(key: K): boolean {
    for (let i = 0; i < this.bucket.length; ++i) {
      let current = this.bucket[i];
      while (current) {
        if (current.key === key) return true;
        current = current.next;
      }
    }
    return false;
  }

  /**
   * Return true is hash table is empty
   * @returns {boolean}
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Return the size of current hash table
   * @returns {number}
   */
  size(): number {
    return this.sz;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    MAIN                                    */
  /* -------------------------------------------------------------------------- */
  /**
   * Adds [K, V] pair to hash table - O(1) amortized
   * @param {K} key
   * @param {V} value
   * @returns {void}
   */
  set(key: K, value: V): void {
    const index = this._hash(key);
    const newNode = new ListNode<K, V>(key, value);
    if (!this.bucket[index]) {
      this.bucket[index] = newNode;
    } else {
      let current = this.bucket[index];
      while (current) {
        if (current.key == key) {
          current.value = value;
          return;
        }
        if (!current.next) break;
        current = current.next;
      }
      current!.next = newNode;
    }
    this.sz++;
  }

  /**
   * Return value associated with key, and null if the key doesn't exist
   * @param {K} key
   * @returns {V | null}
   */
  get(key: K): V | null {
    const index = this._hash(key);
    let current = this.bucket[index];
    while (current) {
      if (current.key == key) return current.value;
      current = current.next;
    }
    return null;
  }

  /**
   * Delete entry associated with key and return the value, and null if the key doesn't exist  - O(1) amortized
   * @param {K} key
   * @returns {V | null}
   */
  delete(key: K): V | null {
    const index = this._hash(key);
    let current = this.bucket[index];
    if (!current) return null;

    // otherwise entry exist, delete it
    let prev: ListNode<K, V> | null = null;
    let oldValue: V | null = null;
    while (current) {
      if (current.key == key) {
        oldValue = current.value;
        if (!prev) {
          this.bucket[index] = current.next;
        } else {
          prev.next = current.next;
        }
      }
      prev = current;
      current = current.next;
    }
    this.sz--;
    return oldValue;
  }

  /**
   * Clears the hash table - O(1)
   */
  clear() {
    this.sz = 0;
    this.bucket = Array(this.DEFAULT_CAPACITY).fill(null);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    UTILS                                   */
  /* -------------------------------------------------------------------------- */
  /**
   * Visualize and display the structure of current hash table through console.log()
   * e.g.
   *  [0] -> (key, value) -> null
   *  null
   *  [2] -> (key, value) -> (key, value) -> null
   * @returns {void}
   */
  display(): void {
    const result: string[] = [];
    for (let i = 0; i < this.bucket.length; ++i) {
      let current = this.bucket[i];
      let line = "";

      if (!current) {
        line += "null";
      } else {
        line += `[${i}] -> `;
        while (current) {
          line += `(${current.key}, ${current.value}) -> `;
          current = current.next;
        }
        line += "null";
      }
      result.push(line);
    }
    console.log(result.join("\n"));
  }

  /* -------------------------------------------------------------------------- */
  /*                                   HELPERS                                  */
  /* -------------------------------------------------------------------------- */
  private _hash(key: K): number {
    let hashCode = 0;
    const keyStr = String(key);
    for (let i = 0; i < keyStr.length; ++i) {
      hashCode += keyStr.charCodeAt(i);
    }
    return hashCode % this.bucket.length;
  }
}
