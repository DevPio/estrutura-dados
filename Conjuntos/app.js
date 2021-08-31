class Set {
  constructor() {
    this.items = {};
  }

  has(key) {
    return Reflect.apply(Object.hasOwnProperty, this.items, [key]);
  }
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return undefined;
  }

  add(key, value) {
    if (!this.has(key)) throw new Error("Element is included");

    this.items[key] = value;
    return true;
  }

  size = () => Object.keys(this.items).length;

  values = () => Object.values(this.items);
}
