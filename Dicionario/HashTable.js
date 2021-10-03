import { defaultToString, ValuePair } from "./app";
export class HashTable {
  constructor(fn = defaultToString) {
    this.toStrFn = fn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key == "number") return key;

    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let index = 0; index < tableKey.length; index++) {
      hash += tableKey[index].charCodeAt();
    }

    return hash % 37;
  }

  put(key, value) {
    if (key != null && value != null) {
      const keyString = this.loseloseHashCode(key);

      this.table[keyString] = new ValuePair(key, value);

      return true;
    }

    return false;
  }

  get(key) {
    const getKey = this.loseloseHashCode(key);
    const getValue = this.table[getKey];
    return getValue != null ? getValue.value : undefined;
  }

  remove(key) {
    const hash = this.loseloseHashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[valuePair];
      return true;
    }

    return false;
  }
}
