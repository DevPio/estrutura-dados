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

class Dicionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
}
