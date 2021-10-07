import { defaultToString, ValuePair } from "./app.js";
import { LinkedList } from "./util.js";

export class HashTable {
  constructor(fn = defaultToString) {
    this.toStrFn = fn;
    this.table = {};
  }

  static loseloseHashCode(key) {
    if (typeof key == "number") return key;

    const tableKey = defaultToString(key);
    let hash = 0;
    for (let index = 0; index < tableKey.length; index++) {
      hash += tableKey[index].charCodeAt();
    }

    return hash % 37;
  }
  static hashCode(key) {
    return HashTable.loseloseHashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      const keyString = HashTable.hashCode(key);

      this.table[keyString] = new ValuePair(key, value);

      return true;
    }

    return false;
  }

  get(key) {
    const getKey = HashTable.hashCode(key);
    const getValue = this.table[getKey];
    return getValue != null ? getValue.value : undefined;
  }

  remove(key) {
    const hash = HashTable.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[valuePair];
      return true;
    }

    return false;
  }
}

const hash = new HashTable();

hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");

console.log(HashTable.hashCode("Gandalf") + " " + "Gandalf");
console.log(HashTable.hashCode("John") + " " + "John");
console.log(HashTable.hashCode("Tyrion") + " " + "Tyrion");

console.log(hash.get("Gandalf"));
console.log(hash.get("Luccas"));

class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      let keyCode = HashTable.hashCode(key);

      if (this.table[keyCode] != null) {
        this.table[keyCode] = new LinkedList();
      }
      this.table[keyCode].push(new ValuePair(key, value));

      return true;
    }

    return false;
  }
}
