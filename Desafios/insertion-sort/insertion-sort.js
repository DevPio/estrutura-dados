function insertionSort(array) {
  let order = true;

  while (order) {
    order = false;
    for (let after = 0; after < array.length; after++) {
      for (let before = after; before >= 0; before--) {
        if (array[after] < array[before]) {
          order = true;
          let a = array[before];
          let b = array[after];

          array[after] = a;
          array[before] = b;
        }
      }
    }
  }
  

  return array
}

insertionSort([4, 3, 2, 10, 12, 1, 5, 6]);
