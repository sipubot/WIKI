/**
  요즘 한줄 메서드 작성하는게 재미있다. 특히나 배열 관련같은경우는 2차원 구조 연마에 도움이.
  */


// https://www.codewars.com/kata/5503013e34137eeeaa001648
// Give me a Diamond
function GivemeaDiamond(n) {
  if (n < 1 || n % 2 !== 1) {
    return null;
  }
  if (n > 2 && n % 2 === 1) {
    var mid = Math.floor(n / 2);
    return Array.apply(null, Array(n)).map(function (a, i) {
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
    return n.toString().split('').reduce(function (a, b) {
      return a * parseInt(b);
    }, 1);
  }
}

//gcd 최대공약수 함수
function gcd(a, b) {
  return a === 0 ? b : gcd(b % a, a);
}

//Simple fraction to mixed number converter
// https://www.codewars.com/kata/simple-fraction-to-mixed-number-converter/javascript

function mixedFraction(s) {
  //your code here
  var re = [];
  var c = parseInt(s.split('/')[0]);
  var m = parseInt(s.split('/')[1]);
  var bool = c * m < 0 ? "-" : "";

  if (m === 0) {
    throw new Error('Invalid dividend');
  }
  if (c / m === 0) {
    return "0";
  }
  c = Math.abs(c);
  m = Math.abs(m);
  if (Math.floor(c / m) !== 0) {
    re.push(Math.floor(c / m).toString());
  }
  if (c % m > 0) {
    var g = gcd(m, c % m);
    re.push(((c % m) / g).toString() + "/" + (m / g).toString());
  }
  return bool + re.join(' ');
}

// https://www.codewars.com/kata/58068479c27998b11900056e
// Sorting on planet Twisted-3-7
function sortTwisted37(array) {
  function twisting(arr) {
    return arr.map(function (v, i) {
      var a = v.toString().split('');
      a = a.map(function (vv, i) {
        if (vv === '3') {
          return '7';
        } else if (vv === '7') {
          return '3';
        } else {
          return vv;
        }
      });
      return parseInt(a.join(''));
    });
  }
  array = twisting(array);
  array.sort(function (a, b) {
    return a - b;
  });
  array = twisting(array);
  return array;
}

// https://www.codewars.com/kata/directions-reduction/train/javascript
// 방향줄이기

function dirReduc(arr) {
  var str = arr.join(''),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, '');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

// http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript
//역배열 숫자
function digitize(n) {
  //code here
  return n.toString().split('').reverse().map(function (a, i) {
    return parseInt(a);
  });
}

// http://www.codewars.com/kata/playing-with-digits/train/javascript
// 숫자놀이
function digPow(n, p) {
  // ...
  var sum = n.toString().split('').reduce(function (a, b, i) {
    return a + Math.pow(Number(b), i + p);
  }, 0);
  return sum % n === 0 ? sum / n : -1;
}

// https://www.codewars.com/kata/word-a10n-abbreviation/train/javascript
//문자놀이
//정규표현식 문자 \w 인것 알아둘것
function abbreviate(string) {
  return string.replace(/\w{4,}/g, function (word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}

// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee
//ip주소 치환 (의미는 있겠냐만..)
function ipToInt32(ip) {
  ip = ip.split('.');
  return ((ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + (ip[3] << 0)) >>> 0;
}

// https://www.codewars.com/kata/recursion-number-1-factorial
// 재귀함수 연습
function factorial(n) {
  return n < 2 ? 1 : factorial(n - 1) * n;
}

//https://www.codewars.com/kata/autocomplete-yay/
// 자동완성 하기
function autocomplete(input, dictionary) {
  var r = new RegExp('^' + input.replace(/[^a-z]/gi, ''), 'i');
  return dictionary.filter(function (w) {
    return r.test(w);
  }).slice(0, 5);
}

//
function reverseWords(str) {
  // Go for it
  return str.split(' ').map(function (a, i) {
    return a.split('').reverse().join('');
  }).join(' ');
}

// https://www.codewars.com/kata/your-order-please/
// 순서바꾸기 소트함수 사용
function order(words) {
  return words.split(' ').sort(function (a, b) {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}

// https://www.codewars.com/kata/56548dad6dae7b8756000037
// 거울 시계
function WhatIsTheTime(timeInMirror) {
  var tm = timeInMirror.split(':');
  tm[0] = parseInt(tm[0]);
  tm[1] = parseInt(tm[1]);
  tm[1] = tm[1] > 0 ? 60 - tm[1] : 0;
  if (tm[1] === 0) {
    tm[0] = tm[0] < 12 ? 12 - tm[0] : 12;
  } else {
    tm[0]++;
    if (tm[0] > 12) {
      tm[0] = 11;
    } else {
      tm[0] = tm[0] < 12 ? 12 - tm[0] : 12;
    }
  }
  return tm.map(function (a) {
    return (a = a < 10 ? "0" + a : "" + a);
  }).join(':');
}

// https://www.codewars.com/kata/57ebdf944cde58f973000405
// reverse the letters in the sentence
function reverser(sentence) {
  return sentence.split(" ").map(function (a) {
    return a.split("").reverse().join("");
  }).join(" ");
}

// http://www.codewars.com/kata/gap-in-primes?utm_source=newsletter
//prime gap
function gap(g, m, n) {
  var lastPrime = 0;
  var isPrime = function (x) {
    for (var i = 2; i * i <= x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  for (var i = m; i <= n; i++)
    if (isPrime(i)) {
      if (i - lastPrime == g) return [lastPrime, i];
      else lastPrime = i;
    }

  return null;
}

//https://www.codewars.com/kata/580878d5d27b84b64c000b51/solutions/javascript
//Sum of Triangular Numbers
//삼각수의 합의 적분은 사면체 (이미 공식이 있으므로 공식을 쓰자.)
function sumTriangularNumbers(n) {
  return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
}


// https://www.codewars.com/kata/54bb6f887e5a80180900046b/solutions/javascript
// 가장긴 회문 찾기
longestPalindrome = function (s) {
  //your code here
  var sc = s.slice(0);
  var ret = false,
    lengthv = 0;
  sc = sc.split('').reverse();
  for (var i = 0; i < sc.length; i++) {
    for (var z = sc.length - i; z <= sc.length; z++) {
      var st = sc.slice(z - (sc.length - i), z);
      if (s.indexOf(st.join('')) > -1 && st.join('') === st.reverse().join('')) {
        lengthv = st.length;
        ret = true;
      }
    }
    if (ret) {
      break;
    }
  }
  return lengthv;
};

// https://www.codewars.com/kata/string-incrementer/train/javascript
// vincrementString
function incrementString(input) {
  if (isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

// https://www.codewars.com/kata/rectangle-into-squares/train/javascript
function sqInRect(lng, wdth) {
  //your code here
  if (lng === wdth) return null;
  var com = [lng, wdth],
    re = [];
  while (com[0] !== 0) {
    com = com.sort(function (a, b) {
      return a - b;
    });
    re.push(com[0]);
    com[1] = com[1] - com[0];
  }
  re.pop();
  return re;
}

// https://www.codewars.com/kata/maximum-subarray-sum/train/javascript
//maximun-subarray
var maxSequence = function (arr) {
  // ...
  var ans = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {

    ans = Math.max(0, ans + arr[i]);
    sum = Math.max(sum, ans);
  }
  return sum;
};

// https://www.codewars.com/kata/count-the-smiley-faces/train/javascript
function countSmileys(arr) {
  var nose = ['-', '~'];
  var mouse = [')', 'D'];
  var eyes = [':', ';'];
  var count = 0;
  arr.map(function (a) {
    var aa = a.split('');
    if (aa.length < 2 || aa.length > 3) {
      return false;
    }
    if (aa.length === 3) {
      if (nose.indexOf(aa[1]) === -1) {
        return false;
      }
    }
    if (eyes.indexOf(aa[0]) > -1 && mouse.indexOf(aa[aa.length - 1]) > -1) {
      count++;
    }
  });
  return count;
}

// https://www.codewars.com/kata/sort-the-odd/train/javascript
function sortArray(array) {
  // Return a sorted array.
  var oddnum = [];
  var oddinx = [];
  array.map(function (a, i) {
    if (a === 1 || (a - 1) % 2 === 0) {
      oddnum.push(a);
      oddinx.push(i);
    }
  });
  oddnum.sort(function (a, b) {
    return a - b;
  });
  oddinx.map(function (a, i) {
    array[a] = oddnum[i];
  });
  return array;
}

// https://www.codewars.com/kata/58223370aef9fc03fd000071/solutions/javascript
function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "");
}

//  https://www.codewars.com/kata/product-of-consecutive-fib-numbers/train/javascript
function productFib(prod) {
  // ...
  var z = 1;
  var fib1, fib2;
  while (prod >= fib1 * fib2) {
    z++;
    fib1 = fibonacci(z);
    fib2 = fibonacci(z + 1);
  }
  if (fib1 * fib2 === prod) {
    return [fib1, fib2, true];
  } else {
    return [fib1, fib2, false];
  }

  function fibonacci(n) {
    return n < 1 ? 0 :
      n <= 2 ? 1 :
      fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// https://www.codewars.com/kata/integers-recreation-one/train/javascript
//
function listSquared(m, n) {
  // your code
  var re = [];
  for (var i = m; i <= n; i++) {
    if (chkDiver(i) !== undefined) {
      re.push(chkDiver(i));
    }
  }
  return re;
}

function chkDiver(n) {
  var re = {};
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      re[i] = 'di';
    }
  }
  var sum = 0,
    last = 0;
  Object.keys(re).map(function (d) {
    sum = sum + Number(d) * Number(d);
    last = Number(d);
  });
  if (Math.sqrt(sum) % 1 === 0) {
    return [last, sum];
  }
}

//Remove duplicates from list javascript
//  Set -> array to Object
function distinct(a) {
  return Array.from(new Set(a));
}

function domainName(url) {
  //your code here
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

//문자열 리버스
function reverse(str) {
  if (str === "") {
    return "";
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}

// replace with regular express
function replace(s) {
  return s.replace(/[aeoiu]/ig, '!');
}

//https://www.codewars.com/kata/vasya-clerk/train/javascript
function tickets(peopleInLine) {
  // 25 50 100
  var Change = [0, 0, 0];

  var fail = false;
  peopleInLine.map((a, i) => {
    switch (a) {
      case 25:
        Change[0]++;
        break;
      case 50:
        Change[1]++;
        Change[0]--;
        break;
      case 100:
        if (Change[1] > 0) {
          Change[1]--;
          Change[0]--;
        } else {
          Change[0]--;
          Change[0]--;
          Change[0]--;
        }
        Change[2]++;
        break;
    }
    Change.map((a) => {
      if (a < 0) {
        fail = true;
      }
    });
  });

  return fail ? 'NO' : 'YES';
}

//https://www.codewars.com/kata/58dea43ff98a7e2124000169
function divideStrings(a, b) {
  // 0 div return;
  function MinusAB(numa, numb) {
    var temp = numa.slice();
    var re = [true, temp];

    if (numa.length < numb.length) return [false, temp];

    numb.map((a, i) => {
      if (numb[i] > temp[i]) {
        if (temp.length - 1 === i) {
          re[0] = false;
        } else {
          temp[i] = temp[i] - numb[i] + 10;
          var done = false;
          for (var z = i + 1; z < temp.length; z++) {
            if (temp[z] === 0) {
              temp[z] = 9;
            } else {
              temp[z]--;
              done = true;
              z = numa.length;
            }
          }
          if (done === false) {}
        }
      } else {
        temp[i] = temp[i] - numb[i];
      }
    });
    while (temp[temp.length - 1] === 0) {
      temp.pop();
    }
    if (re[0]) {
      re[1] = temp;
    }
    return re;
  }

  function diffAB(numa, numb) {
    var temp = numb.slice(0);
    if (numa.length >= temp.length) {
      var d = numa.length - temp.length;
      for (var i = 0; i < d; i++) {
        temp.unshift(0);
      }
      if (MinusAB(numa.slice(0), temp)[0]) {
        return [true, d + 1];
      } else {
        if (d > 0) {
          return [true, d];
        } else {
          return [false, -1];
        }
      }
    } else {
      return [false, 0];
    }
  }

  //for the cal reverse
  var AA = Array.from(a + '').reverse().map((a) => Number(a));
  var BB = Array.from(b + '').reverse().map((a) => Number(a));

  function main() {
    // 0...
    if (AA.length === 1 && AA[0] === 0) return ['0', '0'];
    //
    var l = diffAB(AA, BB);
    if (l[0] === false) {
      return ['0', AA.reverse().map((a) => String(a)).join('')];
    }
    //add 0
    for (var i = 1; i < l[1]; i++) {
      BB.unshift(0);
    }
    var re = (new Array(l[1])).fill(0);
    var temp = [true, []];
    re.map((a, i) => {
      for (var z = 0; z < 9; z++) {
        //console.log(AA, BB);
        temp = MinusAB(AA, BB);
        //console.log(temp);
        if (temp[0]) {
          AA = temp[1];
          re[i]++;
        } else {
          z = 9;
        }
        if (AA.length === 0) {
          z = 9;
        }
      }
      BB.shift();
    });

    return [re.map((a) => String(a)).join(''), AA.length === 0 ? '0' : AA.reverse().map(a => String(a)).join('')];
  }
  return main()
  //return [Math.floor(+a / +b).toString(), (+a % +b).toString()];  // This doesn't work on big numbers!
}

// hex to Char  Char to hex
var Converter = {
  toAscii: function (hex) {
    //... 이부분을 좀더 쉽게 하는 방법
    var re = '';
    var m = hex.slice(0);
    while (m.length !== 0) {
      var char = m[0] + m[1];
      m = m.slice(2);
      re += String.fromCharCode(parseInt(char, 16));
    }
    return re;
  },
  toHex: function (ascii) {
    //...
    return ascii.split('').map(a => a.charCodeAt(0).toString(16)).join('');
  }
};

var Converter2 = {
  toAscii: (hex) => {
    return hex.replace(/../g, h => String.fromCharCode(parseInt(h, 16)));
  },
  toHex: (ascii) => {
    return ascii.replace(/./g, (a) => a.charCodeAt().toString(16));
  }
};

//https://www.codewars.com/kata/54b679eaac3d54e6ca0008c9/
//반복 함수 만들기
var createIterator = function (func, n) {
  return function (v) {
    for (var i = 0; i < n; i++) v = func(v);
    return v;
  };
};

// http://www.codewars.com/kata/character-frequency-1/train/javascript
// 소팅 문제. (정렬이 잘되지 않는다.)
function letterFrequency(text) {
  //your code here
  var str = {},
    max = 0;
  text.toLowerCase().replace(/[^a-z]/gi, "").split('').sort().map(a => {
    if (str[a] === undefined) {
      str[a] = 1;
      if (str[a] > max) max = str[a];
    } else {
      str[a]++;
      if (str[a] > max) max = str[a];
    }
  });
  var re = [];
  Object.keys(str).map(k => {
    re.push([k, str[k]])
  });
  var st = [];
  while (max > 0) {
    re.filter(a => a[1] === max).map(a => st.push(a));
    max--;
  }
  return st;
}

//한글자씩 변환할때 regex 활용 replace 활용
function encrypt(text, rule) {
  return text.replace(/./g, c => String.fromCharCode((c.charCodeAt() + rule) & 255))
}

//Lucas number
function lucasnum(n) {
  //Good Luck!
  return Math.round(
    Math.pow(((1 + Math.sqrt(5)) * 0.5), n) + Math.pow(((1 - Math.sqrt(5)) * 0.5), n)
  );
}

// object create effect
// http://www.codewars.com/kata/mirror-mirror
function evilTwin(obj) {
  return Object.create(obj, {
    hasGoatee: {
      value: true
    }
  });
}

//type checker
var typer = (function () {
  return {
    isUndefined: function (x) {
      return typeof x == "undefined"
    },
    isFunction: function (x) {
      return typeof x == "function"
    },
    isNumber: function (x) {
      return typeof x != "undefined" && typeof x.valueOf() == "number" && !isNaN(x.valueOf())
    },
    isString: function (x) {
      return typeof x != "undefined" && typeof x.valueOf() == "string"
    },
    isBoolean: function (x) {
      return typeof x != "undefined" && typeof x.valueOf() == "boolean"
    },
    isArray: function (x) {
      return x instanceof Array
    },
    isDate: function (x) {
      return x instanceof Date
    },
    isRegExp: function (x) {
      return x instanceof RegExp
    },
    isError: function (x) {
      return x instanceof Error
    },
    isNull: function (x) {
      return x === null
    }
  };
}());


//longest common sequence
function LCS(xstr, ystr) {
  if (xstr == '' || ystr == '') return '';

  var xp = xstr.charAt(0),
    xrest = xstr.slice(1),
    yp = ystr.charAt(0),
    yrest = ystr.slice(1);

  if (xp == yp)
    return xp + LCS(xrest, yrest);

  var lcs1 = LCS(xstr, yrest),
    lcs2 = LCS(xrest, ystr);

  return (lcs1.length > lcs2.length) ? lcs1 : lcs2;
}

//float to bin
var float2bin = function (input) {
  var
    n0 = +input,
    n = Math.abs(n0),
    e = Math.floor(Math.log(n) / Math.LN2),
    f = n * Math.pow(2, 23 - e) & ~(1 << 23);
  return (n0 >= 0 ? "0" : "1") +
    ("00000000" + (e + 127).toString(2)).slice(-8) +
    ("00000000000000000000000" + f.toString(2)).slice(-23);
};

//array flatten
function flatten() {
  return [].slice.call(arguments).reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? flatten.apply(null, b) : b);
  }, []);
}

// https://www.codewars.com/kata/5a58ca28e626c55ae000018a/
function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  // Your code here

  var h = Math.cos(Math.PI / numberOfSides) * circleRadius;
  var w = Math.sin(Math.PI / numberOfSides) * circleRadius;

  return Math.round((h * w) * numberOfSides * 1000) / 1000;
}

//https://www.codewars.com/kata/5964d7e633b908e172000046/
function recover(str) {
  //have fun ^.^
  var ls = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"];
  var re = [];
  var ss = false;
  while (str.length > 2) {
    ss = false;
    ls.map((a, i) => {
      var s1 = a.split('');
      var s2 = str.slice(0, s1.length).split('');
      s2.map(z => {
        s1[s1.indexOf(z)] = '';
      })
      if (s1.join('') === '') {
        re.push(i);
        str = str.slice(1);
        ss = true;
      }
    });
    if (ss === false) {
      str = str.slice(1);
    }
  }
  return re.length === 0 ? 'No digits found' : re.join('')
}

// https://www.codewars.com/kata/island-count/
function countIslands(mapStr) {
  var map = mapStr.split('\n').map(a => a.split(''));
  var count = 0;

  function checkMap(x, y, n) {
    if (x > -1 && x < map[0].length && y > -1 && y < map.length) {
      if (map[y][x] === '0') {
        map[y][x] = '' + n;
        checkMap(x, y - 1, n);
        checkMap(x, y + 1, n);
        checkMap(x - 1, y, n);
        checkMap(x + 1, y, n);
      }
    }
  }

  for (var yy = 0; yy < map.length; yy++) {
    for (var xx = 0; xx < map[0].length; xx++) {
      if (map[yy][xx] === '0') {
        count++;
        checkMap(xx, yy, count);
        console.log(map)
      }
    }
  }
  return count
}

// https://www.codewars.com/kata/distributing-candies-fairly/train/javascript
function distribute(m, n) {
  var re = [];
  if (n > 0) {
    if (m < 1) {
      m = 0;
    }
    var aa = Math.floor(m / n);
    var bb = m % n;
    re = Array.apply(null, Array(n)).map(a => aa);
    re = re.map((a, i) => i < bb ? a + 1 : a);
  }
  return re;
}
// https://www.codewars.com/kata/57e3f79c9cb119374600046b/
function hello(name) {
  var status = false;
  if (name) {
    if (name.length > 0) status = true;
  }
  return status ? "Hello, " + name.split('').map((a,i)=>i===0? a.toUpperCase():a.toLowerCase()).join('') + '!' : "Hello, World!";
}

function one(arr, fun){
  // ...
  return arr.filter(a=>fun(a)).length === 1;
}
// https://www.codewars.com/kata/5ba47374b18e382069000052
function minRemove(arr){
  //..
  var max = Math.ceil(Math.sqrt(Math.max(...arr)));
  var min = Math.min(...arr);
  var red = arr.length
  for (var i = min; i <= max; i++){
    var t = arr.filter(a=>a<i || a>Math.pow(i,2)).length
    if (t < red) red = t;
  }
  return red;
}
//https://www.codewars.com/kata/5bc463f7797b00b661000118/
function getSolution(arr, sum) {
  var re = false;
  function sumf(a, i, s) {
    if (i === arr.length) {
      if (s === sum) {
        re = true;
      }
    } else {
      sumf(a, i+1, s+a[i]);
      sumf(a, i+1, s-a[i]);
    }
  }
  sumf(arr,1,arr[0]);
  
  return re;
}
//https://www.codewars.com/kata/57cc981a58da9e302a000214/
function smallEnough(a, limit){
  return a.every(a=>a<=limit);
}
//https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/
function triangle(row) {
  // Return the answer
    var col = {
      "GG" : "G",
      "RR" : "R",
      "BB" : "B",
      "RG" : "B",
      "GR" : "B",
      "BG" : "R",
      "GB" : "R",
      "RB" : "G",
      "BR" : "G"
    }
    var arr = row.split('')
    function tri (ar) {
      
      if (ar.length===1) {
          return ar[0];
      } else {
          var ne = Array.apply(null,Array(ar.length-1)).map((a,i)=>{
            return col[ar[i]+ar[i+1]];
          });
          return tri(ne);
      }
    }
  
    return tri(arr);
  }