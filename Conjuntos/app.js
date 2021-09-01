class Set {
  constructor() {
    this.items = {};
  }

  has = (key) => Reflect.apply(Object.hasOwnProperty, this.items, [key]);

  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return undefined;
  }

  add(key) {
    if (!this.has(key)) throw new Error("Element is included");

    this.items[key] = key;
    return true;
  }
  clear = () => (this.items = {});

  size = () => Object.keys(this.items).length;

  values = () => Object.keys(this.items).map((v) => this.items[v]);
}
