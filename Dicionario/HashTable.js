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

      if (this.table[keyCode] == null) {
        this.table[keyCode] = new LinkedList();
      }
      this.table[keyCode].push(new ValuePair(key, value));

      return true;
    }

    return false;
  }

  get(key) {
    const position = HashTable.hashCode(key);

    const linkedList = this.table[position];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.head;

      while (current.next != null) {
        if (current.element.key == key) {
          return current.element.value;
        }

        current = current.next;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = HashTable.hashCode(key);

    const linkedList = this.table[position];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      const searchItem = (node) => {
        if (node == null) {
          return null;
        }
        if (node.element.key == key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        } else {
          searchItem(node.next);
        }
      };

      return searchItem(current);

      // while (current.next != null) {
      //   if (current.element.key == key) {
      //     linkedList.remove(current.element);
      //   }

      //   current = current.next;
      // }
    }
    return undefined;
  }
}

const newHash = new HashTableSeparateChaining();

newHash.put("Ygritte", "Ygritte@email.com");
newHash.put("Jonathan", "jonathan@email.com");
newHash.put("Jamie", "jamie@email.com");
newHash.put("Jack", "jack@email.com");
newHash.put("Jasmine", "jasmine@email.com");
newHash.put("Jake", "jake@email.com");
newHash.put("Nathan", "nathan@email.com");
newHash.put("Athelstan", "athelstan@email.com");
newHash.put("Sue", "sue@email.com");

newHash.put("Aethelwulf", "aethelwulf@email.com");

newHash.put("Sargeras", "Ygritte@email.com");

console.log(newHash.get("Jamie"));
newHash.remove("Jamie");
newHash.remove("Sue");

console.log(newHash.get("Jamie"));

newHash.remove("Jonathan");
newHash.remove("Aethelwulf");
console.log(newHash.get("Jamie"));
