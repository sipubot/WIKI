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
    return arr.map(function(v, i) {
      var a = v.toString().split('');
      a = a.map(function(vv, i) {
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
  array.sort(function(a, b) {
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
  return n.toString().split('').reverse().map(function(a, i) {
    return parseInt(a);
  });
}

// http://www.codewars.com/kata/playing-with-digits/train/javascript
// 숫자놀이
function digPow(n, p) {
  // ...
  var sum = n.toString().split('').reduce(function(a, b, i) {
    return a + Math.pow(Number(b), i + p);
  }, 0);
  return sum % n === 0 ? sum / n : -1;
}

// https://www.codewars.com/kata/word-a10n-abbreviation/train/javascript
//문자놀이
//정규표현식 문자 \w 인것 알아둘것
function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(word) {
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
  return dictionary.filter(function(w) {
    return r.test(w);
  }).slice(0, 5);
}

//
function reverseWords(str) {
  // Go for it
  return str.split(' ').map(function(a, i) {
    return a.split('').reverse().join('');
  }).join(' ');
}

// https://www.codewars.com/kata/your-order-please/
// 순서바꾸기 소트함수 사용
function order(words) {
  return words.split(' ').sort(function(a, b) {
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
  return tm.map(function(a) {
    return (a = a < 10 ? "0" + a : "" + a);
  }).join(':');
}

// https://www.codewars.com/kata/57ebdf944cde58f973000405
// reverse the letters in the sentence
function reverser(sentence) {
  return sentence.split(" ").map(function(a) {
    return a.split("").reverse().join("");
  }).join(" ");
}

// http://www.codewars.com/kata/gap-in-primes?utm_source=newsletter
//prime gap
function gap(g, m, n) {
  var lastPrime = 0;
  var isPrime = function(x) {
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
longestPalindrome = function(s) {
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
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
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
    com = com.sort(function(a, b) {
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
var maxSequence = function(arr) {
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
  arr.map(function(a) {
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
  array.map(function(a, i) {
    if (a === 1 || (a - 1) % 2 === 0) {
      oddnum.push(a);
      oddinx.push(i);
    }
  });
  oddnum.sort(function(a, b) {
    return a - b;
  });
  oddinx.map(function(a, i) {
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
    for ( var i = m; i<=n; i++) {
      if (chkDiver(i) !== undefined) {
        re.push(chkDiver(i));
      }
    }
  return re;
}

function chkDiver(n) {
  var re = {};
  for( var i=1; i<=n; i++){
    if(n%i===0) {
      re[i] = 'di';
    }
  }
  var sum = 0, last = 0;
  Object.keys(re).map(function (d){
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

function domainName(url){
  //your code here
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

//문자열 리버스
function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
