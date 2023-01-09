module.exports = function reverse (n) {
  n = Math.abs(n);
  let result = n.toString();
  result = result.split('');
  result = result.reverse();
  result = result.join('');

  return  Number(result);
}
