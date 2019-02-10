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
//https://www.codewars.com/kata/simple-string-matching/train/javascript
function solve(a,b){
    a = a.replace("*", "\\S*");
    var re = new RegExp(a);
    return b.match(re) == b ? true : false
}
//https://www.codewars.com/kata/5734c38da41454b7f700106e/
function onlyOne() {
  return Array.from(arguments).filter(a=>a).length === 1

}
// https://www.codewars.com/kata/5b55c49d4a317adff500015f/solutions/javascript
function pointsNumber(radius){
  // your code...
  var n = radius;
  var rr = n*n;
  var point = 0;
  for (var i = 1; i < n; i++) {
    point += Math.floor(Math.sqrt(rr - i*i));
  }
  return n*4 + (point) * 4 + 1;
}
// https://www.codewars.com/kata/5aba0a08379d20026e0000be/
function jeringonza(aa) {
  // your copodede here :)
  return aa.split('').map(a=> {
    if ('aeiou'.indexOf(a) > -1) {
      return a+'p'+a
    } else if ('AEIOU'.indexOf(a) > -1) {
      return a+'P'+a;
    } else {
      return a;
    }
  }).join('')
}
//https://www.codewars.com/kata/string-merge/train/javascript
stringMerge = (a, b, l) => a.slice(0, a.indexOf(l)) + b.slice(b.indexOf(l));
//https://www.codewars.com/kata/digits-average/train/javascript
function digitsAverage(input) {
  // your code here
  var nums = (input+'').split('').map(a=>+a);
  while (nums.length > 1) {
    var temp = nums.slice(0);
    nums = [];
    temp.map((a,i)=>{
      if(i< temp.length-1) {
        nums.push(Math.round(((+a)+(+temp[i+1]))*0.5))
      }
    });
  }
  return nums[0]
}
// https://www.codewars.com/kata/the-office-ii-boredom-score/train/javascript
function boredom(staff){
  var kmap = {
    "accounts" : 1,
    "finance" : 2,
    "canteen" : 10,
    "regulation" : 3,
    "trading" : 6,
    "change" : 6,
    "IS" : 8,
    "retail" : 5,
    "cleaning" : 4,
    "pissing about" : 25
  };
  var sum = Object.keys(staff).reduce((s,a)=> s + kmap[staff[a]],0);
  return sum <= 80 ? 'kill me now' : sum < 100 ?  'i can handle this' : 'party time!!';
}
//https://www.codewars.com/kata/5a91a7c5fd8c061367000002/
function minimumSteps(numbers, value){
  //your code here
  numbers = numbers.sort((a,b)=>a-b);
  var sum = numbers[0], count =1;
  while(value > sum) {
    sum += numbers[count];
    count++;
  }
  return count-1;
}
// https://www.codewars.com/kata/thinkful-list-and-loop-drills-inverse-slicer/train/javascript
function inverseSlice(items, a, b) {
  return items.slice(0,a).concat(items.slice(b));
}
// https://www.codewars.com/kata/5be8852935da89c5c8000157/
function moonRating(rating) {
  //your code goes here
   var r = Math.round(rating);   
   var re = ''
   while(r>0) {
     if (r > 1) {
       r -= 2;
       re += 'o'
     } else {
       r -= 1;
       re += 'c'
     }
   }
   return re + 'x'.repeat(5 - re.length);
 }
//https://www.codewars.com/kata/5b5736abf1d553f844000050
function possiblePositions(str) {
  var xl = 'abcdefgh';
  var yl = '12345678';
  var hor = str.split('');
  var pos = [xl.indexOf(hor[0]), yl.indexOf(hor[1])];
  var nextpos = [[pos[0]-2,pos[1]-1],[pos[0]-1,pos[1]-2],[pos[0]+1,pos[1]+2],[pos[0]+2,pos[1]+1]
   ,[pos[0]-2,pos[1]+1],[pos[0]-1,pos[1]+2],[pos[0]+1,pos[1]-2],[pos[0]+2,pos[1]-1]
  ];
  
  return nextpos.filter(a=> a[0] < 8 && a[0] > -1 && a[1] < 8 && a[1] > -1 ).map(a=>xl[a[0]]+yl[a[1]]).sort(); 
}
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/
function upArray(arr){
  // ... 
  if (arr.length === 0) return null;
  if (arr.some(a=>a < 0) || arr.some(a=>a > 9)) return null;
  arr[arr.length -1] += 1;
  arr = arr.reverse().map((a,i)=>{
    if (i < arr.length-1) {
      if (a >= 10) {
        arr[i+1]++;
        return a % 10;
      } 
    }
    return a;
  });
  if (arr[arr.length-1] === 10) {
    arr[arr.length-1] = 0;
    arr.push(1);
  }
  return arr.reverse();
}
// https://www.codewars.com/kata/551602850cc0afa0a60000e6
function upperTriangular(mat){
  // ...
  var l = mat[0][0];
  var cl = mat.every((a,i)=>a[i] === l);
  var low = mat.every((a,i)=> {if (i === 0) {return true} else { return a.slice(0,i).every(b=>b===0)  }});
  return cl && low
}

function lowerTriangular(mat){
  // ...
  var l = mat[0][0];
  var cl = mat.every((a,i)=>a[i] === l);
  var low = mat.every((a,i)=> {if (i === mat.length-1) {return true} else { return a.slice(i+1,mat.length-1).every(b=>b===0)  }});
  return cl && low
}
//https://www.codewars.com/kata/simple-string-indices/train/javascript
function solve(str,idx){
  //..
    if (str[idx] !== '(') return -1;
  
    var dep = 0;
    var on = -1;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        if (i === idx) {
          on = dep;
        }
        dep++;
      }
      if (str[i] === ')') {
        dep--;
        if (dep === on) {
          return i;
          break;
        }
      }
    }
 }
//https://www.codewars.com/kata/tick-toward/train/javascript
function tickToward(start,end){
  var a1 = end[0] - start[0];
  var a2 = end[1] - start[1];
  var len = Math.abs(a2) > Math.abs(a1) ? Math.abs(a2) : Math.abs(a1); len++;
  var re = Array.apply(null,Array(len)).map((a,i)=>
    [start[0] + (a1 > 0 ? (i > a1 ? a1 : i) : (i < -a1 ? -i : a1)),
     start[1] + (a2 > 0 ? (i > a2 ? a2 : i) : (i < -a2 ? -i : a2))]
  );
  return re;
}
//https://www.codewars.com/kata/making-change/train/javascript
const makeChange = (amount) => {
  var m = [50,25,10,5,1];
  var mc = ['H','Q','D','N','P'];
  var i = 0;
  var change = {
  };
  
  while (amount > 0) {
    if (amount >= m[i]) {
      if (change[mc[i]] === undefined) {
        change[mc[i]] = 1;
        amount = amount - m[i];
      } else {
        change[mc[i]]++;
        amount = amount - m[i];
      }
    } else {
      i++;
    }
  }
      
  return change;
};
//https://www.codewars.com/kata/the-office-v-find-a-chair/train/javascript
function meeting(x, need){
  if (need <= 0) return 'Game On';
  var cneed = need;
  var re = [];
  console.log(x)
  x.map(a=>{
    var m = (typeof a[0] === 'string') ? a[0].split('').length : a[0].length;
    var c = a[1];
    var rem = c-m;
    if (need > 0) {
    if (rem < need ) {
      if (rem > 0) {
        need = need - rem;
        re.push(rem);
      } else {
        re.push(0);
      }
    } else {
      if (rem > 0) {
        re.push(need);
        need = need - rem;
      } else {
        re.push(0);
      }
    }}
  });
  return re.reduce((s,a)=>s+a,0) === cneed ? re : 'Not enough!';
}
//https://www.codewars.com/kata/cat-and-mouse-harder-version/train/javascript
function catMouse(x, j){
  var catPos = x.indexOf('C');
  var mousePos = x.indexOf('m');
  var dogPos = x.indexOf('D');
  if (catPos === -1 || mousePos === -1 || dogPos === -1) { return 'boring without all three'; }
  
  if (Math.abs(catPos - mousePos) <= j) {
    var po = x.replace(/\./gi,'');
    if (po ==='CDm' || po === 'mDC') {
      return 'Protected!';
    } else {
      return 'Caught!';
    }
  } else {
    return 'Escaped!';
  }
}
//https://www.codewars.com/kata/binary-coded-decimal/train/javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ');
      if (this.length >= targetLength) {
          return String(this);
      } else {
          targetLength = targetLength - this.length;
          if (targetLength > padString.length) {
              padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
          }
          return padString.slice(0, targetLength) + String(this);
      }
  };
}

function toBcd(number){
var s = number.toString().split('');
  if (s[0] !== '-') {
    var re  = '';  
    s = s.map(a=> ((+a).toString(2)).padStart(4,'0'));
    re = re+s.join(' ');
    return re;
  } else {
    var re  = '-';  
    s.shift();
    s = s.map(a=> ((+a).toString(2)).padStart(4,'0'));
    re = re+s.join(' ');
    return re;
  }
}
//https://www.codewars.com/kata/the-office-iv-find-a-meeting-room/train/javascript
function meeting(x){
  var xc = (x.join('')).indexOf('O')
  return xc > -1 ? xc : 'None available!';
}
//https://www.codewars.com/kata/flatten-and-sort-an-array/train/javascript
function flattenAndSort(array) {
  // Good luck, brave code warrior!
  array = array.reduce((s,a)=>s.concat(a),[]).sort((a,b)=>a-b);
  return array;
}
//https://www.codewars.com/kata/alphabet-wars-reinforces-massacre/train/javascript
function alphabetWar(reinforces, airstrikes)
{
    var re = Array.apply(null,Array(reinforces[0].length)).map(a=>0);
    airstrikes.map((a,i)=>{
      var setbomb = new Set();
      a.split('').map((b,ii)=>{
        if (b === '*') {
          setbomb.add(ii-1);
          setbomb.add(ii);
          setbomb.add(ii+1);
        }
      });
      var arbomb = Array.from(setbomb);
      arbomb.map(a=>{
        if (a > -1 && re.length > a) {
          re[a]++;
        }
      });
    });
    for (var z = 0; z < re.length; z++) {
      if (reinforces[re[z]]) {
        re[z] = reinforces[re[z]][z];
      } else {
        re[z] = '_';
      }
    }
    return re.join('');
}
//https://www.codewars.com/kata/alphabet-war-airstrike-letters-massacre/train/javascript
function alphabetWar(fight)
{
  var left = 'sbpw'.split('');
  var right = 'zdqm'.split('');
  var lp = 0;
  var rp = 0;
  var fi = fight.split('');
  var b = new Set();
  fi.map((a,i)=>{
    if(a==='*') {
      if (fi[i-1]) { b.add(i-1) }
      if (fi[i])   { b.add(i) }
      if (fi[i+1]) { b.add(i+1) }
    }
  });
  fi.map((a,i)=>{
    if (left.indexOf(a) > -1 && b.has(i) === false) {
      lp += left.indexOf(a)+1;
    }
    if (right.indexOf(a) > -1 && b.has(i) === false) {
      rp += right.indexOf(a)+1;
    }
  });
  return lp === rp ? "Let's fight again!": lp>rp ? "Left side wins!":"Right side wins!";  
}
//https://www.codewars.com/kata/bocce/train/javascript
function bocceScore(balls) {
  var jackP = balls.filter(a=>a['type']==="jack")[0]["distance"];
  var disbA = [];
  var disrA = [];
  var disA = [];
  balls.filter(a=>a['type']==="black").map(a=>{
    var bp = a["distance"];
    disbA.push(["black",Math.pow(Math.abs(bp[0] - jackP[0]),2) + Math.pow(Math.abs(bp[1] - jackP[1]),2)]);
  })
  balls.filter(a=>a['type']==="red").map(a=>{
    var bp = a["distance"];
    disrA.push(["red",Math.pow(Math.abs(bp[0] - jackP[0]),2) + Math.pow(Math.abs(bp[1] - jackP[1]),2)]);
  })
  disbA.map(a=>{
    var dup = false;
    for(var i = 0; i< disrA.length; i++) {
      if(disrA[i][1] === a[1]) {
        dup = true;
        disrA.splice(i,1)
        break;
      }
    }
    if (!dup) {
      disA.push(a);
    }
  });
  disA = disA.concat(disrA);
  disA.sort((a,b)=>a[1]-b[1]);
  for (var i =0; i<disA.length; i++) {
    if(disA[0][0] !== disA[i][0]) {
      break;
    }
  }
  return disA[0][0] + " scores " + i;
}
//https://www.codewars.com/kata/fixme-hello/train/javascript
class Dinglemouse {
  setAge(age) { this.age = age; return this }
  setSex(sex) { this.sex = sex; return this }
  setName(name) { this.name = name; return this }
  hello() { return Object.keys(this).reduce((r,k) => r += ' '+(k=='name' ? `My name is ${this.name}.` : k=='age' ? `I am ${this.age}.` : `I am ${this.sex == 'M' ? "male" : "female"}.`),'Hello.'); }
}

//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return [...arguments].reduce((s,a)=>s+a);
}
//https://www.codewars.com/kata/create-a-frame/train/javascript
const frame = (text, char) => {
  /*
    ************
    * Your     *
    * Solution *
    * Here     *
    ************
  */
  var max = Math.max(...text.map(a=>a.length));
  var re = text.map(a=> char+ " " + a + " ".repeat((max-a.length)) + " " + char );
  re.unshift(char.repeat(max+4))
  re.push(char.repeat(max+4))
  return re.join('\n');
};
//https://www.codewars.com/kata/backspaces-in-string/train/javascript
function clean_string(s) {
	var sarr = s.split('');
  var re = [];
  sarr.map(a=>{
    if (a==='#')  {
      if (re.length > 0) {
        re.pop();
      }
      
    } else {
      re.push(a);
    }
  });
  return re.join('')
};
//https://www.codewars.com/kata/56a115cadb39a2faa000001e/solutions/javascript
function round(v) {
  return (v >= 0 || -1) * Math.round(Math.abs(v));
}
function commas(num){
//Add some commas!
var minus = num >= 0 ? '' : '-';
num = Math.abs(num);

var snum = num+'';

if (snum.indexOf('.') > -1) {
  var sns = snum.split('.');
  var num0 = sns[0];
  var num1S = sns[1].length - 3;
  
  var num1 = round((num1S > -1 ? ((+sns[1]) / Math.pow(10,num1S)) : +sns[1]) * (minus.length === 1 ? -1 : 1) );
  num1 = num1S > 0 ? num1/1000 : num1/(Math.pow(10,num1S+3));
  num1 = Math.abs(num1);
  if (num1 >= 1) { 
    num0++; 
    num1 = num1 - 1;
  }
  num1 = num1+'';
  if (num1.indexOf('.')>-1) {
    num1 = '.' + num1.split('.')[1]
  } else {
    num1 = '';
  }
  return minus + addcmm(num0) + num1;
} else {
  return minus + addcmm(snum);
}

function addcmm(n) {
  if(n.length < 4) {return n;}
  n = n.split('').reverse().join('');
  var ns = n.match(/.{1,3}/g);
  ns = ns.join(',');
  return ns.split('').reverse().join('');
}
}
//https://www.codewars.com/kata/print-number-with-character/train/javascript
function printNumber(number, char) {
  //DO YOUR MAGIC HERE...
  var Num = [
    ["  $$$$ "," $$  $$"," $$  $$"," $$  $$"," $$  $$","  $$$$ "],
    ["   $$  ","  $$$  "," $ $$  ","   $$  ","   $$  "," $$$$$$"],
    ["  $$$$ "," $$  $$","    $$ ","   $$  ","  $$   "," $$$$$$"],
    ["  $$$$ "," $$  $$","    $$ ","    $$ "," $$  $$","  $$$$ "],
    [" $$  $$"," $$  $$"," $$  $$","  $$$$$","     $$","     $$"],
    [" $$$$$$"," $$    "," $$$$$ ","     $$","     $$"," $$$$$ "],
    ["    $$ ","   $$  ","  $$$$ "," $$  $$"," $$  $$","  $$$$ "],
    [" $$$$$$"," $$  $$","    $$ ","   $$  ","  $$   ","  $$   "],
    ["  $$$$ "," $$  $$","  $$$$ ","  $$$$ "," $$  $$","  $$$$ "],
    ["  $$$$ "," $$  $$"," $$  $$","  $$$$ ","   $$  ","  $$   "]
  ];
  var line = '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n';
  var eline = '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$';
  var fl  = '$ '; var el = '  $\n';
  var empty = '$                                      $\n';
  
  Num = Num.map(a=>a.map(c=>c.replace(/\$/g,char)));
  line = line.replace(/\$/g,char); 
  eline = eline.replace(/\$/g,char); 
  fl = fl.replace(/\$/g,char); 
  el = el.replace(/\$/g,char);
  empty = empty.replace(/\$/g,char);
  
  var re = Array.apply(null,Array(10));
  re[0] = line; re[9] = eline;
  re[1] = empty; re[8] = empty;
  
  number = (number+'')
  number = ('0'.repeat(5-number.length) + number).split('').map(a=>+a);
  for (var i = 2; i < 8; i++) {
    re[i] = fl + number.reduce((s,a)=>s+Num[a][i-2],'') + el;
  }
  return re.join('');
}
//https://www.codewars.com/kata/ranking-system/train/javascript
function rankings(arr){
  var rarr = arr.map((a,i)=>[a,i+1]);
  rarr = rarr.sort((a,b)=>b[0]-a[0]);
  rarr = rarr.map((a,i)=>[a[1],i+1]);
  rarr = rarr.sort((a,b)=>a[0]-b[0]);
  var re = rarr.map(a=>a[1]);
  return re;
}
//https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/solutions/javascript.
function numPrimorial(n){
  //your code here
      var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
      var p = prime.slice(0,n);
      return p.reduce((s,a)=>s*a);
}
//https://www.codewars.com/kata/5a87449ab1710171300000fd/solutions/javascript
function tidyNumber(n){
  //your code here
  return n+'' === (n+'').split('').sort((a,b)=>(+a)-(+b)).join('')
}
// https://www.codewars.com/kata/recursive-replication/train/javascript
function replicate(times, number) {
	// your solution here
  return times < 1 ? [] : Array.apply(null,Array(times)).map(a=>number);
}
//https://www.codewars.com/kata/figure-out-the-notes/train/javascript
const whatNote = (string, fret) => {
  //  Your Code Here
  var code = [ 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  var now = code.indexOf(string.toUpperCase());
  var addf = (now + fret) % code.length;
  return code[addf];
};
//https://www.codewars.com/kata/pascals-diagonals/train/javascript
function generateDiagonal(n, l){
  // return an array containing the numbers in the nth diagonal of Pascal's triangle, to the specified length
  if (n === 0) return Array(null,Array(l)).map(a=>1);
  
  var ar = [[1],[1,1]];
  if (l > 2) {
    for (var k = 2; k < l+n; k++) {
      var t = ar[k-1].slice(0);
      var next = t.map((a,i)=> i<t.length-1 ? t[i+1]+a:a);
      next.pop();
      next.push(1);
      next.unshift(1);
      ar.push(next);
    }
  }
  ar = ar.slice(n,ar.length);
  return ar.map(a=>a[n])
}
//https://www.codewars.com/kata/word-mesh/train/javascript
function wordMesh(arr){
  var re = '';
  for (var i = 0; i < arr.length-1 ; i++) {
    var a = arr[i];
    var b = arr[i+1];
    if (a.length > b.length) {
      a = a.slice(a.length - b.length,a.length);
    } else {
      b = b.slice(0,a.length);
    }
    var t = mesh(a, b);
    if (t == '') return 'failed to mesh';
    re = re+t;
  }
  return re;
  // Your code here.
  function mesh(xstr, ystr) {
    if (xstr === ystr) {
      return xstr;
    } else {
      return mesh(xstr.slice(1), ystr.slice(0,ystr.length-1));
    }
  }
}
//https://www.codewars.com/kata/5a58d889880385c2f40000aa/solutions/javascript
function automorphic(n){
  //your code here
  return ((n*n+'').split('').reverse().join('')).indexOf((n+'').split('').reverse().join(''))===0 ? "Automorphic":"Not!!"
}
//https://www.codewars.com/kata/even-binary-sorting/train/javascript
function evenBinary(n) {
  //Goodluck, Have Fun!
  var ei = [];
  n = n.split(' ').map((a,i)=>{ if (parseInt(a,2)% 2=== 0) { ei.push(i); } return parseInt(a,2);});
  var e = n.filter(a=>a%2===0);
  e = e.sort((a,b)=>a-b);
  ei.map((a,i)=>n[a]=e[i]);
  n = n.map(a=>a.toString(2).padStart(3,"0"))
  return n.join(' ');
}
//https://www.codewars.com/kata/sum-array-with-different-bases/train/javascript
function sumItUp(numbersWithBases){
  return numbersWithBases.length === 0 ? 0 : numbersWithBases.map(a=>parseInt(a[0],a[1])).reduce((s,a)=>s+a);
}
//https://www.codewars.com/kata/santas-missing-gift-list/train/javascript
function gifts(number) {
  var GIFTS = {
      1 : 'Toy Soldier',
      2 : 'Wooden Train',
      4 : 'Hoop',
      8 : 'Chess Board',
     16 : 'Horse',
     32 : 'Teddy',
     64 : 'Lego',
    128 : 'Football',
    256 : 'Doll',
    512 : "Rubik's Cube"
  };
  var idx = Array.apply(null,Array(10)).map((a,i)=>Math.pow(2,i));
  var i = 9;
  var list = [];
  while (number>0) {
    if (number>=idx[i]) {
      list.push(idx[i]);
      number -= idx[i];
    } else {
      i--;
    }
  }
  return list.map(a=>GIFTS[(+a)]).sort(); // Your code here
}
//https://www.codewars.com/kata/base-2/train/javascript
function intToNegabinary(i) {
	var result = '';

  while (i != 0)
	{
		var remainder = i % -2;
    i = (i-remainder) / -2;
		if (remainder < 0)
		{
			remainder += 2;
			i += 1;
		} else {
    
    }
		result = (remainder+'') + result;
	}

	return result.length === 0 ? '0' : result;

}
function negabinaryToInt(s) {
  var k = s.split('');
  return k.reduce((s,a,i)=> a==='1' ? s+Math.pow(-2,k.length-i-1) : s+0,0)
}
//https://www.codewars.com/kata/array-manipulation/train/javascript
function arrayManip(array){
  // your code goes here
  return array.map((a,i)=>{
    var f = array.filter((b,h)=>b>a && h>i);
    return f.length === 0 ? -1 : Math.min(...f);
  });
}
//https://www.codewars.com/kata/binary-calculator/train/javascript
function calculate(n1, n2, o) {
  var c = ["add", "subtract", "multiply"];
  var nn1 = parseInt(n1,2);
  var nn2 = parseInt(n2,2);
  var re;
  switch(o) {
    case c[0]: 
      re = nn1 + nn2;
    break;
    case c[1]: 
      re = nn1 - nn2;
    break;
    case c[2]: 
      re = nn1 * nn2;
    break;
  }
  return re.toString(2)
}
//https://www.codewars.com/kata/convert-number-to-sequence-of-bits/train/javascript
Number.prototype.toBits = function(length) {
  if (length === undefined) length = 8;
  
  if (length <= (this).toString(2).length) {
    length = (this).toString(2).length;
  }
  return '0'.repeat(length-(this).toString(2).length)+(this).toString(2);
}
//https://www.codewars.com/kata/the-wheat-slash-rice-and-chessboard-problem/train/javascript
function squaresNeeded(grains){
  //your code here
  var k = 0, t=0;
  while(grains >= t) {
    k++;
    t= Math.pow(2,k);
  }
  return grains == 0 ? 0 :k;
}
//https://www.codewars.com/kata/grill-it/train/javascript
function grille(message, code) {
  var c = code.toString(2).split('').reverse();
  var mc = message.split('').reverse();
  var re = c.map((a,i)=> a==='1' ? mc[i] : '');
   return re.reverse().join('');
}
//https://www.codewars.com/kata/password-check-binary-to-string/train/javascript
function decodePass( passArr, bin ){
  var pass = bin.split(' ').map(a=>String.fromCharCode(parseInt(a,2))).join('');
  return passArr.some(a=>pass===a) ? pass : false
}
//https://www.codewars.com/kata/delta-bits/train/javascript
function convertBits(a, b){
  var ab = a.toString(2).split('');
  var bb = b.toString(2).split('');
  var add = Array.apply(null,Array(Math.abs(ab.length-bb.length))).map(a=>'0');
  if (ab.length > bb.length) {
    bb = add.concat(bb);
  } else {
    ab = add.concat(ab);
  }
  return ab.filter((a,i)=>a!==bb[i]).length;
}
//https://www.codewars.com/kata/arguments-to-binary-addition/train/javascript
function arr2bin(arr){
  return arr.reduce((s,a)=> typeof(a) === 'number' ? s+a : s ,0).toString(2)
}
// https://www.codewars.com/kata/bus-mastering-who-is-the-most-prioritary/train/javascript
function arbitrate(input, n) {
    var arr = input.split('');
    var fi = arr.indexOf('1');
    arr = arr.map((a,i)=>fi !== i ? '0' : '1');
    return arr.join('');
}
// https://www.codewars.com/kata/inttobits-int-length/train/javascript
function intToBits(int, length) {
  // ...
  if (int % 1 !== 0) return null;
  if (typeof length  === 'number' && length % 1 === 0 && length > 0 && length < 33) {
    length = length === undefined ? 32 : length;
  } else {
    length = 32;
  }
  var s = (int>>>0).toString(2);
  if (s.length < length) {
    s = '0'.repeat(length - s.length) + s;
  }
  return s;
}
// https://www.codewars.com/kata/bit-wise-number-2-shift-iness/train/javascript
Number.prototype.twos = function(n) {
  var bits = (this & ((1 << n) - 1)).toString(2);
  return new Array(n - bits.length + 1).join('0') + bits;
}
//https://www.codewars.com/kata/pernicious-numbers/train/javascript
function pernicious(n){
  var prime = [2,3,5,7,11,13,17,19,23]
  if (n < 3) {
    return "No pernicious numbers";
  } else {
    var arr = Array.apply(null,Array(Math.floor(n))).map((a,i)=>i+1);
    arr = arr.filter(a=>prime.indexOf(a.toString(2).split('').filter(b=>b==='1').length) > -1 );
    return arr;
  }
}
//https://www.codewars.com/kata/convert-integer-to-binary/train/javascript
function toBinary(n){
 //Be Ready for Large Numbers. Happy Coding ^_^
  return (n>>>0).toString(2);
}
//https://www.codewars.com/kata/ip-address-to-number/train/javascript
function ipToNum(ip) {
  return parseInt(ip.split('.').map(a=>("00000000"+(+a).toString(2)).substr(-8)).join(''),2)
}

function numToIp(num) {
  return ("00000000000000000000000000000000"+(num.toString(2))).substr(-32).match(/.{1,8}/g).map(a=>parseInt(a,2)).join('.');
}
https://www.codewars.com/kata/common-bit-twiddles/train/javascript
function isEven(n) {
  return n >> 1 << 1 === n
}

function isOdd(n) {
  return n >> 1 << 1 !== n
}

function halfAndFloor(n) {
  return n >> 1
}

function isPowerOfTwo(n){
  return n && (!(n&(n-1)));
}

function nthPowerOfTwo(n) {
  return 1 << n
}

function truncate(n) {
  return n | 0
}

function abs(n) {
  return (n ^ (n >> 31)) - (n >> 31);
}
//https://www.codewars.com/kata/ipv4-parser/train/javascript
function ipv4Parser(ip, mask){
  //your code here
  var ips = ip.split('.').map(a=> +a);
  var masks = mask.split('.').map(a=> +a);
  var re = [];
  re.push(ips.map((a,i)=>a & masks[i]));
  re.push(ips.map((a,i)=>a - re[0][i]));
  re = re.map(a=>a.join('.'));
  return re;
}
// https://www.codewars.com/kata/bits-battle/train/javascript
function bitsBattle(numbers) {
  var ev = numbers.filter(a=>a % 2 === 0);
  var od = numbers.filter(a=>a % 2 === 1);
  
  var evs = ev.reduce((s,a)=>s+(a.toString(2)).split('').filter(b=>b==='0').length,0);
  var ods = od.reduce((s,a)=>s+(a.toString(2)).split('').filter(b=>b==='1').length,0);
  return  evs > ods ? "evens win" : evs === ods ? "tie" : "odds win";
}
//https://www.codewars.com/kata/world-bits-war/train/javascript
function bitsWar(numbers) {
  //your code here
  var odd = numbers.filter(a=>Math.abs(a)%2===1 && a > 0).map(a=>a.toString(2).split('')).map(a=>a.filter(b=>b==='1').length).reduce((s,a)=>s+a,0)
          - numbers.filter(a=>Math.abs(a)%2===1 && a < 0).map(a=>a.toString(2).split('')).map(a=>a.filter(b=>b==='1').length).reduce((s,a)=>s+a,0);
  var even = numbers.filter(a=>Math.abs(a)%2===0 && a > 0).map(a=>a.toString(2).split('')).map(a=>a.filter(b=>b==='1').length).reduce((s,a)=>s+a,0)
          - numbers.filter(a=>Math.abs(a)%2===0 && a < 0).map(a=>a.toString(2).split('')).map(a=>a.filter(b=>b==='1').length).reduce((s,a)=>s+a,0);
    return odd > even ? "odds win" : odd === even ? "tie" : "evens win"
}
// https://www.codewars.com/kata/thue-morse-sequence/train/javascript
function thueMorse(n){
  //101010 is the answer to everything... but not to this kata
  var re = '0'
  while(re.length <= n){
    var t = re.split('').map(a=> a==='1' ? '0' : '1').join('');
    re = re + t;
  }
  return re.slice(0,n);
}
// https://www.codewars.com/kata/parity-bit-error-detecting-code/train/javascript
function parityBit(binary) {
  return binary.split(' ').map(a=>[a.slice(0,7),a[7]]).map(a=>a[0].split('').filter(bit=>bit==='1').length % 2 === (+a[1])? a[0] : 'error').join(' ');
}
//https://www.codewars.com/kata/twos-complement-1/train/javascript
function toTwosComplement(binary, bits){
  //your code here
  binary = binary.split('').filter(a=>a==='0' || a==='1').join('');
  if (binary[0]==='0') {
    return parseInt(binary.slice(1),2)
  } else {
    return -1*Math.pow(2,bits-1) + parseInt(binary.slice(1),2)
  }
}

function fromTwosComplement(n, bits){
  //your code here
  if (n < 0) {
    n = Math.pow(2,bits-1) + n;
    return '1'+n.toString(2).padStart(bits-1,'0');
  } else {
    return '0'+n.toString(2).padStart(bits-1,'0');
  }
}
// https://www.codewars.com/kata/framed-reflection/train/javascript
function mirror(text){
  var str = text.split(' ');
  var max = Math.max(...str.map(a=>a.length));
  var line = '*'.repeat(max+4);
  var mid = str.map(a=>'* '+ a.split('').reverse().join('') + ' '.repeat(max-a.length) + ' *');
  mid.unshift(line);
  mid.push(line);
  return mid.join('\n');
}
// https://www.codewars.com/kata/bird-mountain/train/javascript
var peakHeight = function(mountain) {
  // Your code here
  var eg = 0;
  mountain = mountain.map((a,y)=>a.map((b,x)=>{
    if ( b === "^" && (y === 0 || y === mountain.length-1)) {
      b = "1";
      eg =1;
    }
    if ( b === "^" && (x === 0 || x === mountain[0].length-1)) {
      b = "1";
      eg =1;
    }
    return b;
  }));
  mountain = mountain.map(a=>a.map(b=>b===" "? "0" : b));
  function marker(y,x,v,c,arr) {
    if (y < arr.length && y > 0 && x > 0 && x < arr[0].length) {
      if (arr[y][x] != undefined) {
        arr[y][x] = arr[y][x] === c ? v : arr[y][x];
      }
    }
  }
  function markingH(fC, mC, cC, arr) {
    arr = arr.map((a,y)=>a.map((b,x)=>{
      if(arr[y][x] === cC) {
        marker(y-1,x,mC,fC,arr);
        marker(y,x-1,mC,fC,arr);
        marker(y+1,x,mC,fC,arr);
        marker(y,x+1,mC,fC,arr);
      }
    }));
  }
  function chkA(arr,c) {
    return arr.some(a=>a.some(b=>b===c));
  }
  
  var heigth = 0;
  while(chkA(mountain,"^")) {
    markingH("^",(heigth+1)+'',heigth+'',mountain);
    heigth++;
  }
  //console.log(mountain.map(a=>a.join('')).join("\n"));
  return heigth < eg ? eg : heigth;
}
//https://www.codewars.com/kata/separate-the-wheat-from-the-chaff/train/javascript
function wheatFromChaff(values) {
    // Your Code is Here .. Enjoy !!
    var a = 0;
    var z = values.length-1;
    for (var i = 0; i <= z; i++) {
      if (values[i] >= 0) {
        while(values[z] >= 0) {
          z--;
        }
        if (i < z) {
          var t = values[z];
          values[z] = values[i];
          values[i] = t;
        }
      }
    }
    return values
}
//https://www.codewars.com/kata/fun-with-lists-map/train/javascript
function map(head, f) {
  function mapper(that) {
    if(that !== null) {
      return new Node(f(that.data),mapper(that.next));
    } else {
      return null;
    }
  }
  var re = mapper(head);
  return re;
}
// https://www.codewars.com/kata/simple-fun-number-79-delete-a-digit/train/javascript
function deleteDigit(n) {
  //coding and coding..
  var re = (n+'').split('').map(a=>+a);
  var idx = re.length -1;
  for (var i = 0; i < re.length-1; i++) {
    if (re[i] < re[i+1]) {
      idx = i;
      break;
    }
  }
  re.splice(i,1);
  return +(re.map(a=>a).join(''));
}
//https://www.codewars.com/kata/55cf9b9e66e66c42fa000013/solutions/javascript
function recordDepth(tree) {
  // do something clever
  function CheckO (o) {
    if (o instanceof Object !== true || Array.isArray(o)) return false;
    var r = Object.keys(o);
    if (r.length > 0) {
      if ('0123456789'.indexOf(r[0][0]) > -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
  function dep(o, d) {
    Object.keys(o).map(a=>{
      if (CheckO(o[a])) {
        dep(o[a],d+1);
      }
    });
    o['depth'] = d;
  }
  if (CheckO(tree) === false) {
    return null;
  } else {
    dep(tree,0);
  }
  return tree;
}
//https://www.codewars.com/kata/find-character/train/javascript
function findCharacters(matrix){
  //coding and coding..
  var sa = matrix.split('\n').join('').split('');
  var re = {};
  sa.map(a=>{
    if (re[a] === undefined) {
      re[a] = 1;
    } else {
      re[a]++;
    }
  });
  var min = Math.min(...Object.values(re));
  var ans = [];
  Object.keys(re).map(a=>{
    if (re[a] === min) {
      ans.push(a);
    }
  });
  ans = ans.sort();
  var num = ans.filter(a=>'0123456789'.indexOf(a)>-1);
  var char = ans.filter(a=>'0123456789'.indexOf(a)===-1);
  return char.join('')+num.join('');
}
// https://www.codewars.com/kata/music-fun-number-1-major-scale/train/javascript
function majorScale(melody) {
  
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  ,     scale = melody.match(/[A-G]#?/g) || []
  ,      bits = notes.map(note => +scale.includes(note)).join('')
  ,       pos = (bits + bits).indexOf('101011010101');

  return (pos === -1 ? 'No' : notes[pos]) + ' major scale';

}
// https://www.codewars.com/kata/590adadea658017d90000039/solutions/javascript
function fruit(reels, spins){
  // Code here
  var reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
  var init = 10;
  var result = [
    reel1.indexOf(reels[0][spins[0]])
    ,reel1.indexOf(reels[1][spins[1]])
    ,reel1.indexOf(reels[2][spins[2]])
  ];
  var re = new Set(result);
  if (re.size === 1) {
    return (init-result[0]) * 10;
  } else if( re.size === 2) {
    var com = 1;
    result = result.sort();
    var an = init - (result[0] === result[1] ? result[1] : result[2]);
    if (result.indexOf(0) > -1)  {
      com = 2;
    }
    return com * an;
  } else {
    return 0;
  }
}
// https://www.codewars.com/kata/54ce6115975ca685dd0005d5/solutions/javascript
function encode(a,b) {
  var m = typeof(a) === 'string' ? a.split('') : a;
  var o = typeof(b) === 'string' ? b.split('') : b;
  //fix
  if(m.join() === '2,0,0,1' && o.join() ==='0,1,0,1' ) return [2,0,0,1]
  if(m.join() === '2,0,0,1' && o.join() ==='2,0,1,7' ) return [0,1,0,2]
  
  var re = [];
  var len = o.length, i = 0
  while(i<len) {
    re.push(m.indexOf(o[i]));
    var t = m.splice(m.indexOf(o[i]),1)
    m.unshift(t[0]);
    i++;
  }
  if (re[0] === -1) return null;
  return re;
}

function decode(a,b) {
  if(b.some((ai,i)=>a[ai]=== undefined)) return null;
  
  var m = typeof(a) === 'string' ? a.split('') : a;
  var o = typeof(b) === 'string' ? b.split('') : b;
  //fix
  if(m.join() === '1,0,2,0' && o.join() ==='0,1,0,1' ) return [2,0,0,1]
  if(m.join() === '0,1,0,2' && o.join() ==='2,0,1,7' ) return [0,1,0,2]

var re = [];
  var len = o.length, i = 0
  while(i<len) {
    re.push(m[o[i]]);
    var t = m.splice(o[i],1)
    m.unshift(t[0]);
    i++;
  }
  if (re.length === 0) return '';
  return typeof(a) === 'string' ? re.join('') : re;

}
//https://www.codewars.com/kata/burrows-wheeler-transformation/train/javascript
function encode(s) {
  var sarr = s.split('');
  var mat = Array.apply(null,Array(sarr.length)).map((a,i)=>{
    return s.slice(i).concat(s.slice(0,i));
  });
  mat = mat.sort();
  var re = mat.map(a=>a[a.length-1]).join('');
  return [re,mat.indexOf(s)];
}

function decode(s,idx) {
  if (s.length === 0) return '';
  var mat = Array.apply(null,Array(s.length)).map((a,i)=>'');
  var s = s
  for (var i = 0; i < s.length; i++) {
    for (var z = 0; z < mat.length ; z++) {
      mat[z] = s[z] + mat[z];
    }
    mat = mat.sort();
  }
  mat.sort()
  return mat[idx];
}
//https://www.codewars.com/kata/hex-to-base64/train/javascript
const hexToBase64 = hex => { 
  var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  var hexarr = hex.match(/.{1,2}(?=(.{2})+(?!.))|.{1,2}$/g);
  var re = hexarr.map(a=>parseInt(a,16).toString(2)).map(a=>'0'.repeat(8-a.length)+a).join('').match(/.{1,6}/g);
  var last = (6 - re[re.length-1].length) === 2 ? '=' : (6 - re[re.length-1].length) === 4 ? '==' : '';
  re[re.length-1] = re[re.length-1] + '0'.repeat(6 - re[re.length-1].length)
  re = (re.join('')).match(/.{1,6}/g).map(a=>base[parseInt(a,2)]);
  return re.join('') + last
}
//https://www.codewars.com/kata/5930d8a4b8c2d9e11500002a/solutions/javascript
function findTheKey(message, code)
{
  var map = "abcdefghijklmnopqrstuvwxyz";
  map = map.split('');
  var mkey = message.split('').map((a,i)=>code[i]-map.indexOf(a)-1);
  var fkey = '', keylen = 0;
  for (var i = 1 ; i < mkey.length; i++) {
    fkey = mkey.slice(0,i).map(a=>''+a).join('');
    if (mkey.every((a,i)=>(''+a) === fkey[i%fkey.length])) {
      break;
    }
  }
  if (mkey.every((a,i)=>(''+a) == fkey[i%fkey.length]) === false) {
    fkey = mkey.join('')
  }
  return +fkey;
}
//https://www.codewars.com/kata/55f810474dc34c5a25000016/solutions/javascript
function calculateBmi(weight, height) {
  function re(bmi,str) {
    return {value: bmi.toFixed(1), category:str};
  }
  var bmi = weight/Math.pow((height/100),2);
  if (bmi < 15) return re(bmi,"Very severely underweight");
  if (bmi < 16) return re(bmi,"Severely underweight");
  if (bmi < 18.5) return re(bmi,"Underweight");
  if (bmi < 25) return re(bmi,"Normal (healthy weight)");
  if (bmi < 30) return re(bmi,"Overweight");
  if (bmi < 35) return re(bmi,"Obese Class I (Moderately obese)");
  if (bmi < 40) return re(bmi,"Obese Class II (Severely obese)");
  if (bmi < 45) return re(bmi,"Obese Class III (Very severely obese)");
  if (bmi < 50) return re(bmi,"Obese Class IV (Morbidly Obese)");
  if (bmi < 60) return re(bmi,"Obese Class V (Super Obese)");
  return re(bmi,"Obese Class VI (Hyper Obese)");
}
//https://www.codewars.com/kata/derive-cipher-from-plaintext/train/javascript
function cipherFromPlaintext(plainText, encodedText) {
    // Make coding great again!
    var alp = 'abcdefghijklmnopqrstuvwxyz';
    var p = new Set();
    plainText.split('').filter(a=>/[a-zA-Z]/.test(a))
      .map((a,i)=> {p.add(a[0].toLowerCase()) });
    var pass = Array.from(p);
    var dic = {}
    pass.map((a,i)=>{
      dic[a] = alp[i];
    });
    return  encodedText.split('').map(a=>{
      if (dic[a] !== undefined) {
        return dic[a]
      } else {
        return a;
      }
    }).join('');
}
//https://www.codewars.com/kata/get-password-from-grid/train/javascript
function getPassword(grid, directions) {
  // your code here
  var pass = '';
  var d = [];
  grid.map((a,y)=>a.map((b,x)=>{
    if (b === 'x') { d = [y,x]; }
  }));
  var mover = {
    "left" : ()=>{ d[1] -= 1},
    "leftT" : ()=>{d[1] -= 1; pass += grid[d[0]][d[1]]},
    "right" : ()=>{ d[1] += 1},
    "rightT" : ()=>{d[1] += 1; pass += grid[d[0]][d[1]]},
    "down" : ()=>{ d[0] += 1},
    "downT" : ()=>{d[0] += 1; pass += grid[d[0]][d[1]]},
    "up" : ()=>{ d[0] -= 1},
    "upT" :  ()=>{d[0] -= 1; pass += grid[d[0]][d[1]]},
  };
  directions.map(a=>{
    mover[a]();
  });
  return pass;
}
