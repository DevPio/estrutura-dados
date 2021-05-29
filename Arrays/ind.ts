interface Friends {
  name: string;
  age: number;
}

let friendsLike: Friends[] = [
  { name: "Jonh", age: 30 },
  { name: "Ana", age: 10 },
  { name: "Cris", age: 20 },
];

function compareFriends(a: Friends, b: Friends) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }

  return 0;
}

let b = friendsLike.sort(compareFriends);

console.log(b);
