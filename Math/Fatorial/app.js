function fatorialRecusivo(n) {
  if (n == 0) return 1;

  return n * fatorialRecusivo(--n);
}
