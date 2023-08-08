module.exports = function reverse (n) {
  let result = '';

  n = n.toString();

  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === '-') {
      result = result;
    } else {
      result += n[i];
    }
  }

  return +result;
}
