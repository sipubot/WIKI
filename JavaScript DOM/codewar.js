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
function factorial (n) {
  return  n < 2 ? 1 : factorial(n - 1) * n;
}

//https://www.codewars.com/kata/autocomplete-yay/
// 자동완성 하기
function autocomplete(input, dictionary){
  var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
  return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
}

//
function reverseWords(str) {
  // Go for it
  return str.split(' ').map(function (a, i){ return a.split('').reverse().join('');}).join(' ');
}

// https://www.codewars.com/kata/your-order-please/
// 순서바꾸기 소트함수 사용
function order(words){
  return words.split(' ').sort(function(a, b){ return a.match(/\d/) - b.match(/\d/);}).join(' ');
}

// https://www.codewars.com/kata/56548dad6dae7b8756000037
// 거울 시계
function WhatIsTheTime(timeInMirror)
{
  var tm = timeInMirror.split(':');
  tm.map(function (a, i){
    return a = parseInt(a);
  });
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
  return tm.map(function (a) { return a = a < 10 ? "0" + a : ""+a;}).join(':');
}
