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

  static djb2HashCode(key) {
    const tableKey = this.toString(key);
    let hash = 5381;

    for (let index = 0; index < tableKey.length; index++) {
      hash = hash * 33 + tableKey.charCodeAt(index);
    }

    return hash % 1013;
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

// console.log(newHash.get("Jamie"));
// newHash.remove("Jamie");
// newHash.remove("Sue");

// console.log(newHash.get("Jamie"));

// newHash.remove("Jonathan");
// newHash.remove("Aethelwulf");
console.log(newHash.get("Jamie"));
console.log(newHash.table);

class HashTableLinearProbing {
  constructor(equalFn = defaultToString) {
    this.equalFn = equalFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = HashTable.hashCode(key);

      if (this.table[position] && this.table[position].key == key) return;

      const searchItem = (position) => {
        if (!this.table[position]) {
          this.table[position] = new ValuePair(key, value);
          return true;
        } else {
          return searchItem(position + 1);
        }
      };

      return searchItem(position);
    }

    return false;
  }

  get(key) {
    const postion = HashTable.hashCode(key);
    if (this.table[postion] != null) {
      if (this.table[postion].key == key) {
        return this.table[postion].value;
      } else {
        let index = postion;
        while (this.table[index] != null && this.table[index].key != key) {
          index++;
        }

        if (this.table[index] != null && this.table[index].key == key) {
          return this.table[postion].value;
        }

        return false;
      }
    }

    return undefined;
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = HashTable.hashCode(key);
    console.log(hash);
    let index = hash + 1;
    while (this.table[index] != null) {
      const posHash = HashTable.hashCode(this.table[index].key);

      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }

  remove(key) {
    if (key != null) {
      const position = HashTable.hashCode(key);

      if (this.table[position] != null && this.table[position].key == key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }

      let index = position + 1;

      const incrementItem = (position) => {
        if (this.table[position] != null && this.table[position].key == key) {
          delete this.table[position];

          this.verifyRemoveSideEffect(key, position);
          return true;
        }
        return incrementItem(position + 1);
      };

      return incrementItem(index);
    }

    return false;
  }
}

const hashProibing = new HashTableLinearProbing();

hashProibing.put("Ygritte", "Ygritte@email.com");
hashProibing.put("Jonathan", "jonathan@email.com");
hashProibing.put("Jamie", "jamie@email.com");
hashProibing.put("Jack", "jack@email.com");
hashProibing.put("Jasmine", "jasmine@email.com");
hashProibing.put("Jake", "jake@email.com");
hashProibing.put("Nathan", "nathan@email.com");
hashProibing.put("Athelstan", "athelstan@email.com");
hashProibing.put("Sue", "sue@email.com");

hashProibing.put("Aethelwulf", "aethelwulf@email.com");

hashProibing.put("Sargeras", "Ygritte@email.com");

console.log(hashProibing.remove("Jonathan"));

console.log(hashProibing.table);

const map = new Map();

map.set("Ygritte", "Ygritte@email.com");
map.set("Jonathan", "jonathan@email.com");
map.set("Jamie", "jamie@email.com");
map.set("Jack", "jack@email.com");
map.set("Jasmine", "jasmine@email.com");
map.set("Jake", "jake@email.com");
map.set("Nathan", "nathan@email.com");
map.set("Athelstan", "athelstan@email.com");
map.set("Sue", "sue@email.com");
map.set("Aethelwulf", "aethelwulf@email.com");
map.set("Sargeras", "Ygritte@email.com");

console.log(map.has("Nathan"));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.get("Nathan"));

console.log(map.delete("Nathan"));

const weakMap = new WeakMap();

const obj1 = {
  name: "Nathan",
};

weakMap.set(obj1, "emailqualquer@email.com");

console.log(weakMap.has(obj1));
