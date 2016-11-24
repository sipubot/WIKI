// https://www.codewars.com/kata/5503013e34137eeeaa001648
// Give me a Diamond
function GivemeaDiamond(n) {
  if (n < 1 || n % 2 !== 1) {
    return null;
  }
  if (n > 2 && n % 2 === 1) {
    var mid = Math.floor(n / 2);
    return Array.apply(null, Array(n)).map(function(a, i) {
      return " ".repeat(Math.abs(mid - i)) + "*".repeat(n - 2 * (Math.abs(mid - i))) + "\n";
    }).join('');
  }
}

// https://www.codewars.com/kata/persistent-bugger/train/javascript
// persistence bugger
function persistence(num) {
  //code me
  var persistencetime = 0;
  while (num > 9) {
    num = persist(num);
    persistencetime++;
  }
  return persistencetime;

  function persist(n) {
    return n.toString().split('').reduce(function(a, b) {
      return a * parseInt(b);
    },1);
  }
}
