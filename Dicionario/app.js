export function defaultToString(item) {
  if (item == null) {
    return "NULL";
  } else if (item == undefined) {
    return "UNDEFINED";
  } else if (typeof item == "string" || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `${this.key}-${this.value}`;
  }
}

class Dicionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  set(key, value) {
    if (key != null && value != null) {
      let newKey = this.toStrFn(key);
      this.table[newKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  get(key) {
    const getKey = this.table[this.toStrFn(key)];

    return getKey == null ? undefined : getKey.value;
  }
  clear = () => (this.table = {});
  size = () => Object.keys(this.table).length;
  isEmpty = () => this.size() == 0;
  keys = () => this.keyValues().map((key) => key["key"]);
  values = () => this.keyValues().map((key) => key["value"]);
  keyValues() {
    // return Object.values(this.table)
    let valuesPairs = [];
    for (const key in this.table) {
      if (this.hasKey(key)) {
        valuesPairs.push(this.table[key]);
      }
    }
    return valuesPairs;
  }
  forEach(callBack) {
    let valuesPais = this.keyValues();

    for (let index = 0; index < valuesPais.length; index++) {
      const result = callBack(valuesPais[index].key, valuesPais[index].value);

      if (!result) {
        break;
      }
    }
  }
  toString() {
    if (this.isEmpty()) return "";

    const valuesPairs = this.keyValues();

    let objStrin = `${valuesPairs[0].toString()}`;

    for (let index = 0; index < valuesPairs.length; index++) {
      objStrin = `${objStrin},${valuesPairs[index].toString()}`;
    }

    return objStrin;
  }
}

let dic = new Dicionary();

dic.set("Gandalf", "gandalf@email.com");
dic.set("John", "johnsnow@email.com");
dic.set("Tyrion", "tyrion@email.com");

console.log(dic.hasKey("Gandalf"));
console.log(dic.size());
console.log(dic.keys());
console.log(dic.keyValues());
console.log(dic.get("Tyrion"));

dic.remove("John");
console.log(dic.size());
console.log(dic.keys());
console.log(dic.keyValues());
dic.forEach((key, value) => {
  console.log(key, value);
  return true;
});
