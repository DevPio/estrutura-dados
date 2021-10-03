import { defaultToString, ValuePair } from "./app.js";
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
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      const keyString = this.hashCode(key);

      this.table[keyString] = new ValuePair(key, value);

      return true;
    }

    return false;
  }

  get(key) {
    const getKey = this.hashCode(key);
    const getValue = this.table[getKey];
    return getValue != null ? getValue.value : undefined;
  }

  remove(key) {
    const hash = this.hashCode(key);
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

console.log(hash.hashCode("Gandalf") + " " + "Gandalf");
console.log(hash.hashCode("John") + " " + "John");
console.log(hash.hashCode("Tyrion") + " " + "Tyrion");

console.log(hash.get("Gandalf"));
console.log(hash.get("Luccas"));
