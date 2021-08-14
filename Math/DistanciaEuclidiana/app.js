function dist(x1, y1, x2, y2) {
  let distOne = Math.pow(x1 - x2, 2);
  let distTwo = Math.pow(y1 - y2, 2);

  return distOne + distTwo;
}
