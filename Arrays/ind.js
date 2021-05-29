var friendsLike = [
  { name: "Jonh", age: 30 },
  { name: "Ana", age: 10 },
  { name: "Cris", age: 20 },
];
function compareFriends(a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
}
var b = friendsLike.sort(compareFriends);
console.log(b);
