function defaultToString(item) {
  if (item == null) {
    return "NULL";
  } else if (item == undefined) {
    return "UNDEFINED";
  } else if (typeof item == "string" || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

class ValuePair {
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

  clear() {
    this.table = {};
  }

  size() {}

  isEmpty() {}
  keys() {}
  values() {}

  keyValues() {}

  forEach(cb) {
    let index = 0;

    Object.keys(this.table).forEach((key) => {
      cb(this.table[key].value, index);
      index++;
    });
  }
}

let dic = new Dicionary();

dic.set("Luccas", "Dado 1");
dic.set("Jessyca", "Dado 2");
