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
    if (!this.has(key)) {
      this.items[key] = key;
      return true;
    }
    return;
  }
  clear = () => (this.items = {});

  size = () => Object.keys(this.items).length;

  // values = () => Object.keys(this.items).map((v) => this.items[v]);

  sizeLegacy() {
    let count = 0;
    for (const key in object) {
      if (this.hasOwnProperty.call(key)) {
        count++;
      }
    }

    return count;
  }
  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    const set = new Set();

    this.values().forEach((setThis) => set.add(setThis));

    otherSet.values().forEach((setThisOther) => set.add(setThisOther));

    return set;
  }
  unionLegacy(set) {
    if (set != null) {
      let values = set.values();

      let setNew = new Set();

      this.values().forEach((elementSet) => setNew.add(elementSet));

      values.forEach((elementSet) => setNew.add(elementSet));

      return setNew.values();
    }

    return undefined;
  }

  intersectionModeLessProcess(otherSet) {
    const set = new Set();
    const values = this.values();
    const otherSetValues = otherSet.values();

    let biggerSet = values;
    let smallerSet = otherSetValues;

    if (smallerSet.length - biggerSet.length > 0) {
      biggerSet = otherSetValues;
      smallerSet = values;
    }

    smallerSet.forEach((setItem) => {
      if (biggerSet.includes(setItem)) {
        set.add(setItem);
      }
    });

    return set;
  }
  intersection(otherSet) {
    const set = new Set();

    this.values().forEach((setItem) => {
      if (otherSet.has(setItem)) {
        set.add(setItem);
      }
    });

    return set.values();
  }

  dif(set) {
    if (set != null) {
      let newSet = new Set();

      this.values().forEach((elementAt) => {
        if (!set.has(elementAt)) {
          newSet.add(elementAt);
        }
      });

      return newSet.values();
    }

    return undefined;
  }

  valuesLegacy() {
    let values = [];

    for (const key in this.items) {
      if (this.items.hasOwnProperty.call(key)) {
        values.push(key);
      }
    }
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false;

    let isSubset = true;
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });

    return isSubset;
  }
}

let setOne = new Set();

let setTwo = new Set();

let v = setOne.has(1);
setOne.add(1);
setOne.add(2);
setOne.add(3);

setTwo.add(2);
setTwo.add(3);
setTwo.add(4);

let returnResult = setOne.union(setTwo);

console.log(returnResult);

let difOne = setOne.dif(setTwo);
let difTwo = setTwo.dif(setOne);

//the difference is communative
console.log(difOne);
console.log(difTwo);

let t = new Set();

t.add(1);
t.add(2);
t.add(3);
t.add(4);

console.log(setOne.isSubsetOf(t));
