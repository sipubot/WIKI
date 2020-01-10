//https://www.codewars.com/kata/5832db03d5bafb7d96000107/solutions/javascript
function lottery(str){
  var re = str.match(/[0-9]/gi);
  if (re === null) { return "One more run!" }
  return Array.from(new Set(re)).join("")
}
// https://www.codewars.com/kata/54f9f4d7c41722304e000bbb
const money_value = s => +s.replace(/\s|\$/g, '') || 0
//https://www.codewars.com/kata/ga-de-ry-po-lu-ki-cypher-vol-2/
function encode(str,key) 
{
  var ke1 = key + key.toUpperCase();
  var re = str.split('')
  .map(a=> ke1.indexOf(a) > -1 ? ke1[ke1.indexOf(a) % 2 === 0 ? ke1.indexOf(a) + 1 : ke1.indexOf(a) - 1 ] : a )
  return re.join('');   
}
//https://www.codewars.com/kata/find-array/train/javascript
function findArray(arr1, arr2){
  return arr2.reduce((s,a)=>s.concat(arr1[a]!==undefined?[arr1[a]]:[]),[])
}
//https://www.codewars.com/kata/598057c8d95a04f33f00004e/
function range(startNum, endNum)   { 
  return [...Array(endNum-startNum-1).keys()].map(a=>a+startNum+1)
};  
//https://www.codewars.com/kata/5a3ddf58e1ce0e6f8f000030/
function thatUnitesUs(array1, array2, n) {
  return [...new Set(array1.concat(array2))].sort().slice(0,n)
}
//https://www.codewars.com/kata/decompose-a-number/train/javascript
function decompose(num) {
  var re = [];
  var n = 2;
  var t = true;
  while(num > n && t) {
    var k = n;
    var c = 0;
    while (k <= num) {
      k *= n;
      c++;
    }
    if (c > 1) {
      num -= n ** c;
      re.push(c);
    } else {
      t = false;
    }
    n++;
  }
  return [re, num]
}
https://www.codewars.com/kata/count-letters-in-a-string/
function countLetters (string) {
  var re = {};
  if (typeof string !== 'string') return null
  var k = string.toLowerCase().split('')
    .filter(a=>/[a-z]/.test(a))
    .map((s,a)=>{re[s] = re[s] ? re[s]+1 : 1})
  return re;
}
//https://www.codewars.com/kata/58983deb128a54b530000be6/
function bracesStatus(string){
  var br = '([{}])';
  var an = string.split('').filter(a=>br.indexOf(a) > -1).join('');
  while (an.indexOf('()') > -1 || an.indexOf('[]') > -1 || an.indexOf('{}') > -1) {
    an = an.split('()').join('').split('[]').join('').split('{}').join('');
  }
  return an.length === 0;  
}
//https://www.codewars.com/kata/baby-magpies/
var child = function(bird1, bird2) {
  var an = bird1.split('').reduce((s,a,i)=>s+(a===bird2[i]?0:1),0)
  return an <= 2 && an > 0;
}

var grandchild = function(bird1, bird2) {
  if(bird1.length === 1) return bird1 === bird2
  return bird1.split('').reduce((s,a,i)=>s+(a===bird2[i]?0:1),0) <= 4;
}

//https://www.codewars.com/kata/anagram-difference/
function anagramDifference(w1,w2){
  var wa1 = w1.split('');
  var wa2 = w2.split('');
  var count = 0;
  wa1.map(a=>{
    var sn = wa2.indexOf(a);
    if (sn !== -1) {
      count++;
      wa2.splice(sn,1);
    }
  });
  return wa1.length - count + wa2.length
}

//https://www.codewars.com/kata/area-of-a-shape/
function area_of_the_shape(f) {
  var points = [...new Array(998001)].map((a,i)=>[Math.ceil((i+1)/999)/1000,((i+1)%999)/1000]);
  return points.reduce((s,a)=>s+ f(a[0],a[1]),0) / 998001;
}
//https://www.codewars.com/kata/52a7099f8a4d9604bb000472/
function sevenSegmentNumber(number) {
  var an = ['1111101','1010000','0110111','1010111','1011010','1001111','1101111','1010001','1111111','1011111'];
  return parseInt(an[number],2)
}
//https://www.codewars.com/kata/5361372e700d2a9627000cf1
function KamaSutraCipher(key) {
  this.ekey = key.map(a=>a[0]).join('') + key.map(a=>a[1]).join('');
  this.dkey = key.map(a=>a[1]).join('') + key.map(a=>a[0]).join('');
  
  this.encode = function (str) {
    return str.split('').map(a=>this.ekey.indexOf(a) === -1 ? a : this.dkey[this.ekey.indexOf(a)]).join('')
  };
  this.decode = function (str) {
    return str.split('').map(a=>this.dkey.indexOf(a) === -1 ? a : this.ekey[this.dkey.indexOf(a)]).join('')
  }
}

//https://www.codewars.com/kata/52d43d5515be7cbc92000611/
function allLeavesAtSameLevel(node) {
  var dep = [];
  if (node === undefined) return true;
  function findlevel(l, n) {
    if (n.left === undefined && n.rigjt === undefined) {
      dep.push(l);
    }
    if (n.left) {
      findlevel(l+1,n.left);
    }
    if (n.right) {
      findlevel(l+1,n.right);
    }
  }
  findlevel(0,node);
  return dep.every(a=>a<=1) || dep.every(a=>a === dep[0])
}
//https://www.codewars.com/kata/5416ce834c2460b4d300042d/solutions/javascript
function bin2gray(bits){
  var cbit = bits.slice(0);
  cbit.pop();
  cbit.unshift(0);
  return bits.map((a,i)=>a^cbit[i])
}

function gray2bin(gray){
  var cbit = gray.slice(0);
  var len = gray.length, count = 0;
  while (count < len) {
      gray.pop()
      gray.unshift(0)
      cbit = cbit.map((a,i)=>a^gray[i]);
      count++;
  }  
  return cbit
}
// https://www.codewars.com/kata/simple-image-processing-part-i-edges-feature-growing-and-shrinking
function work(arr, x, y, t, v) {
  var mm = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  mm = mm.map(a=>[y+a[0],x+a[1]]).filter(a=>-1<a[0]&&arr.length>a[0]&&-1<a[1]&&arr[0].length>a[1]);
  mm.map(a=>{ if (arr[a[0]][a[1]]===t) {arr[a[0]][a[1]] = v;} });
}

function outerEdgesOf(tarr){
  var arr = JSON.parse(JSON.stringify(tarr));
  arr.map((ar,y)=>{
    ar.map((a,x)=>{
      if (a === 0) {
        work(arr,x,y,1,2);
      }
    });
  });
  arr.map((ar,y)=>{
    ar.map((a,x)=>{
      if (a === 2) {
        work(arr,x,y,0,3);
      }
    });
  });
  return arr.map(a=>a.map(b=> b===3 ? 1 : 0))
}
function innerEdgesOf(tarr){
  var arr = JSON.parse(JSON.stringify(tarr));
  arr.map((ar,y)=>{
    ar.map((a,x)=>{
      if (a === 0) {
        work(arr,x,y,1,2);
      }
    });
  });
  return arr.map(a=>a.map(b=> b===2 ? 1 : 0))
}
function grow(tarr){
  var arr = JSON.parse(JSON.stringify(tarr));
  arr.map((ar,y)=>{
    ar.map((a,x)=>{
      if (a === 1) {
        work(arr,x,y,0,2);
      }
    });
  });
  return arr.map(a=>a.map(b=> b===2 ? 1 : b))
}
function shrink(tarr){
  var arr = JSON.parse(JSON.stringify(tarr));
  arr.map((ar,y)=>{
    ar.map((a,x)=>{
      if (a === 0) {
        work(arr,x,y,1,2);
      }
    });
  });
  return arr.map(a=>a.map(b=> b===2 ? 0 : b))
}
// https://www.codewars.com/kata/simple-linear-regression-cost-function-machine-learning
{
  var an = trainingSet.reduce((s,a)=>(s+((theta1+a[0]*theta2)-a[1])**2),0) * (1/(2 *trainingSet.length))
  return Math.round(an*1000)/1000
} 
//https://www.codewars.com/kata/bracket-duplicates/train/javascript
function stringParse(string){
  if (typeof string !== "string") return 'Please enter a valid string'
  var tt = string.split('');
  var count = 0, open = false, t = '';
  for(var i = 0; i < tt.length; i++) {
    if (tt[i] !== t) {
      t = tt[i];
      count = 1;
      if (open) {
        tt[i] = ']' + tt[i] ;
        open = false;
      }
    } else {
      count++;
      if (count > 2 && open === false) {
        tt[i] = '[' + tt[i];
        open = true;
      }
    }
  }
  if (open) tt[tt.length-1] += ']';
  return tt.join('')
}
// https://www.codewars.com/kata/sierpinskis-gasket/train/javascript
function sierpinski(n) {
  var re = ['L'];
  function rep(re, n) {
    if (n === 0) return re;
    var alen = re.length
    var len = re[re.length-1].length+1;
    for(var i = 0; i < alen; i++) {
      re.push(`${re[i]}${' '.repeat(len-re[i].length)}${re[i]}`);
    }
    return rep(re,n-1);
  }
  return rep(re,n).join('\n')
}
// https://www.codewars.com/kata/53ea07c9247bc3fcaa00084d/
function lookAndSay(data,len){
  var ds = data.split('');
  var re = [];
  while (re.length < len) {
    var count = 0;
    var c = ds[0];
    var an = ''
    while(ds.length > 0) {
      var t = ds.shift();
      if (c == t) {
        count++;
      } else {
        an += count + c;
        c = t;
        count = 1;
      }
    }
    an += count + c;
    re.push(an)
    ds = an.split('');
  }
  return re;
}
// https://www.codewars.com/kata/52f51502053125863c0009d7/
function calculateOptimalFare(D, T, V1, R, V2) {
	let hours = T/60;
	let kmPerHr = D / hours;
	if (V2 >= kmPerHr) {
		return R = 0.00
	} else if (V1 >= kmPerHr) {
    // kmPerHr = rat * V1 + (1-rat) * V2
		var ratio = (kmPerHr - V2) / (V1 - V2);
		var re = (ratio * R * V1) * hours;
		return re.toFixed(2);
	} else if (kmPerHr > V2 && kmPerHr > V1) {
		return "Won't make it!"
	};
}
//https://www.codewars.com/kata/number-dot-prototype-dot-todecimal/train/javascript
Number.prototype.toDecimal = function() { 
  var num = ''+this;
  if (num.indexOf('e') !== -1)  {
    var re = num.split('e');
    var add = +re[1];
    var n = re[0];
    if (n.indexOf('.') === -1) {
      return add > 0 ? `${n}${'0'.repeat(add)}` : (+n > 0) ? `0.${'0'.repeat((add*-1)-1)}${n}` : `-0.${'0'.repeat((add*-1)-1)}${n.slice(1)}`
    } else {
      var i = n.indexOf('.');
      var nss = n.split('.');
      if (add > 0) {
        if (nss[1].length === add) {
          return nss.join('')
        } else if (nss[1].length < add) {
          return nss.join('') + '0'.repeat(add-nss[1].length);
        } else if (nss[1].length > add) {
          var ge = nss[1].length - add;
          return nss[0] + nss[1].slice(0,add) + '.' + nss[1].slice(add);
        }
      } else {
          if (+nss[0] < 0) {
            return '-0.' + '0'.repeat((-1*add)-1) + nss[0].slice(1) + nss[1];
          } else {
            return '0.' + '0'.repeat((-1*add)-1) + nss[0] + nss[1];
          }
      }
    }
  } else {
    return (''+this)
  }
};
//https://www.codewars.com/kata/54341ff882b0fdec9c000011/solutions/javascript
function max(data, accessor) {
  if (accessor !== undefined) {
    var arr = data.map(a=>accessor(a));
    return Math.max(...arr)
  } 
  return Math.max(...data);
}
//https://www.codewars.com/kata/5442e4fc7fc447653a0000d5/solutions/javascript
var greatestDistance = function(data) {
  var matches = data.map((a,i)=>data.lastIndexOf(a)-i);
  return Math.max(...matches)
};
//https://www.codewars.com/kata/pretty-date/train/javascript
function toPretty(seconds){
  var sec = [60,3600,86400,604800,31449600];
  var name = ['second','minute','hour','day','week'];
  if (seconds === 0) return 'just now'
  var i = 0;
  while (seconds > sec[i]) {
    i++;
  }
  var t = seconds;
  if (i > 0) {
    t = Math.floor(t/sec[i-1]);
  }
  var s = t === 1 ? i === 2 ? 'an' : 'a' : t;
  return `${s} ${name[i]}${t===1?'':'s'} ago`
}
// https://www.codewars.com/kata/52a0f488852a85c723000aca/
function palindromize(number){
  var count = 0;
  while (count < 1000) {
    var rnum = +((''+number).split('').reverse().join(''));
    if (number === rnum) {
      break;
    }
    number += rnum;
    count++;
  }
  return `${count} ${number}`;
}
// https://www.codewars.com/kata/529fdef7488f509b81000061/
function solve(input){
  var ops = input.split('\n');
  ops = ops.map(a=>{
    var p = a.split(' ');
    var ml = Math.max(p[0].length, p[1].length);
    p[0] = '0'.repeat(ml-p[0].length) + p[0];
    p[1] = '0'.repeat(ml-p[1].length) + p[1];
    return p.map(b=>b.split('').map(c=>+c).reverse())
  });
  var re = ops.map(a=>{
    var carry = 0;
    var af = 0;
    a[0].map((b,i)=>{
      if (a[0][i] + a[1][i] + af > 9) {
        af = 1;
        carry += 1; 
      } else {
        af = 0;
      }
    }); 
    return carry;    
  });
  return re.map(a=>a === 0 ? `No carry operation` : `${a} carry operations`).join('\n');
}
// https://www.codewars.com/kata/529cd9c409a361b676000021/solutions/javascript
function decimalPlaces(n) {
  var add = 0;
  if ((''+n).indexOf('e-') !== -1) {
    var c = (''+n).split('e-');
    add = +c[1];
    if (c[0].indexOf('.')!== -1) {
      add += c[0].split('.')[1].length;
    }
  } else {
    if ((''+n).indexOf('.')!== -1) {
      add += (''+n).split('.')[1].length;
    }
  }
  return add;
}
//https://www.codewars.com/kata/515f51d438015969f7000013/solutions/javascript/
const pyramid =(n)=> [...new Array(n)].map((a,i)=>[...new Array(i+1)].fill(1));
//https://www.codewars.com/kata/530e259c7bc88a4ab9000754/solutions/javascript
function tetrahedron(size) {
  var re = [...new Array(size)].map((a,i)=> (i+1)*(i+2)*0.5).reduce((s,a)=>s+a,0);
  return re
}
//https://www.codewars.com/kata/prime-number-decompositions/train/javascript
function getAllPrimeFactors(n) { 
  var factor = 2;
  var re = [];
  if (n % 1 !== 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [2];
  if (3 > n) return re;
  while (n !== 1) {
    if (n % factor === 0) {
      n /= factor;
      re.push(factor)
    } else {
      factor += 1;
    }
  }
  return re;
}

function getUniquePrimeFactorsWithCount(n) { 
  var fs = getAllPrimeFactors(n);
  var fa = [...new Set(fs)];
  var fca = fa.map(a=>fs.filter(b=>b===a).length);
  return [fa, fca];
}

function getUniquePrimeFactorsWithProducts(n) { 
  var re = getUniquePrimeFactorsWithCount(n);
  return re[0].map((a,i)=>a**re[1][i]);
}
// https://www.codewars.com/kata/53c8b29750fe70e4a2000610/solutions/javascript
const ArrayComprehension = ({ generator = '' }) => {
    let result = generator.match(/(?:(\d+),)?(\d+)\.\.(\d+)/)
    if (result) {
        let [, step, from, to] = result.map(Number)
        if (step)[step, from] = [from - step, step]
        else step = 1
        return Array.from({ length: Math.floor((to - from) / step + 1) }, (_, i) => i * step + from)
    } else return JSON.parse(`[${generator}]`)
}
//https://www.codewars.com/kata/langtons-ant/train/javascript
function ant(grid, column, row, n, dir = 0) {
  var re = grid;
  var pos = [column, row];
  function mover(d, mc) {
    if(mc === n) return;
    d = re[pos[0]][pos[1]] === 1 ? (d+1)%4 : (d+3)%4;
    if (d === 0) {
      if (pos[0] === 0) {
        re.unshift([...new Array(re[0].length)].map(a=>0));
        re[pos[0]+1][pos[1]] = re[pos[0]+1][pos[1]] === 1 ? 0 : 1;
      } else {
        re[pos[0]][pos[1]] = re[pos[0]][pos[1]] === 1 ? 0 : 1;
        pos[0] -= 1;
      }
    }
    if (d === 1) {
      re[pos[0]][pos[1]] = re[pos[0]][pos[1]] === 1 ? 0 : 1;
      if (pos[1] === re[0].length - 1) {
        re = re.map(a=>a.concat([0]));
      }
      pos[1] += 1;
    }
    if (d === 2) {
      re[pos[0]][pos[1]] = re[pos[0]][pos[1]] === 1 ? 0 : 1;
      if (pos[0] === re.length-1) {
        re.push([...new Array(re[0].length)].map(a=>0));
      }
      pos[0] += 1;
    }
    if (d === 3) {
      if (pos[1] === 0) {
        re = re.map(a=>[0].concat(a));
        re[pos[0]][pos[1]+1] = re[pos[0]][pos[1]+1] === 1 ? 0 : 1;
      } else {
        re[pos[0]][pos[1]] = re[pos[0]][pos[1]] === 1 ? 0 : 1;
        pos[1] -= 1;
      }
    }
    return mover(d, mc+1);
  }
  mover(dir, 0);
  return re;
}
//https://www.codewars.com/kata/530045e3c7c0f4d3420001af/solutions/javascript
function lookSay(number){
  //TODO
  var n = (''+number).split('');
  var re = [];
  for (var i = 0; i < n.length; i++) {
    var c = 1;
    while (n[i] === n[i+1]) {
      i++;
      c++;
    }
    re.push(c)
    re.push(+n[i]);
  }
  return +(re.join(''))
}
//https://www.codewars.com/kata/55fd4919ce2a1d7c0d0000f3/solutions/javascript
function hasTwoCubeSums(n) {
	var k = Math.ceil(Math.pow(n,1/3));
  var re = new Set();
  for (var i = 1; i <= k; i++) {
    var r = Math.pow(n - (i ** 3),1/3);
    r = Math.round(r);
    if (r ** 3 + i ** 3 === n) {
      re.add(r);
      re.add(i);
    }
    if (re.size >= 4 ){
      return true;
    }
  }
  return false
}
//https://www.codewars.com/kata/whats-in-a-name/train/javascript
function nameInStr(str, name){
  var i = 0;
  str.split('').map(a=>{
    if (i === name.length) {
    } else if (name[i].toLowerCase() === a) {
      i++;
    }
  });
  return name.length === i
}
//https://www.codewars.com/kata/find-heavy-ball-level-ubermaster/train/javascript
function findBall(scales, ball_count) {
  var barr = [...new Array(ball_count)].map((a,i)=>i);
  while(barr.length > 1) {
    var cut = Math.ceil(barr.length/3);
    var left = barr.slice(0,cut);
    var right = barr.slice(cut,cut*2);
    var oth = barr.slice(cut*2);
    switch (scales.getWeight(left, right)) {
      case 1 : 
        barr = right;
      break;
      case -1 : 
        barr = left;
      break;
      case 0 : 
        barr = oth;
      break;
    }
  }
  return barr[0]
}
// https://www.codewars.com/kata/543b9113def6343e43000875/solutions/javascript
function cantor(n){
  var l = 1
  while (n > l * (l + 1) * 0.5 ) {
    l++;
  }
  var nth = l * (l + 1) * 0.5 - n;
  if (l % 2 === 0) {
    return `${l-nth}/${nth+1}`
  } else {
    return `${nth+1}/${l-nth}`
  }
}
//https://www.codewars.com/kata/convert-all-the-cases/train/javascript
function changeCase(identifier, targetCase){
  var rearr = [identifier];
  var type = [0,0,0];
  if (identifier.indexOf(' ')>-1) { return undefined }
  
  if (identifier.indexOf('-')>-1) {
    rearr = identifier.split('-');
    type[0] = 1;
  }
  if (identifier.indexOf('_')>-1) {
    rearr = identifier.split('_');
    type[1] = 1;
  }
  if (/[A-Z]/g.test(identifier)) {
    var t = identifier.split('');
    rearr = [];
    var tparr = [];
    for (var i = 0; i < t.length ; i++) {
      if (/[A-Z]/g.test(t[i])) {
        rearr.push(tparr.join(''))
        tparr = [];
        tparr.push(t[i].toLowerCase());
      } else {
        tparr.push(t[i]);
      }
    }
    rearr.push(tparr.join(''));
    type[2] = 1;
  }
  if (type.filter(a=>a===1).length > 1) { return undefined }
  if (targetCase === 'snake') {
    return rearr.join('_');
  }
  if (targetCase === 'camel') {
    return rearr.map((a,i)=>i === 0 ? a : a[0].toUpperCase()+a.slice(1)).join('');
  }
  if (targetCase === 'kebab') {
    return rearr.join('-');
  }
  return undefined;
}
//https://www.codewars.com/kata/alphabetized/train/javascript
function alphabetized(s) {
  var arr = s.match(/[A-Za-z]/g);
  if (arr === null) return '';
  var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var re = ''
  abc.split('').map(a=>{
    var t = arr.filter(b=>b.toUpperCase() === a);
    re += t.join('');
  })
  return re;
}
//https://www.codewars.com/kata/string-transformer/train/javascript
function stringTransformer(str) {
  // Your code here
  return str.split(' ').reverse().map(a=> a.split('').map(b=> b===b.toUpperCase() ? b.toLowerCase() : b.toUpperCase() ).join('')).join(' ')
}
//https://www.codewars.com/kata/street-fighter-2-character-selection-part-2/train/javascript
function superStreetFighterSelection(fighters, pos, moves){
  function mover (d) {
    if (d === 'right') {
      pos[1] = (pos[1]+1) % fighters[0].length;
      while (fighters[pos[0]][pos[1]] === '') {
        pos[1] = (pos[1]+1) % fighters[0].length;
      }
    }
    if (d === 'left') {
      pos[1] = pos[1] === 0 ? fighters[0].length -1 : pos[1]-1; 
      while (fighters[pos[0]][pos[1]] === '') {
        pos[1] = pos[1] === 0 ? fighters[0].length -1 : pos[1]-1;
      }
    }
    if (d === 'up') {
      if (pos[0] > 0) {
        if (fighters[pos[0]-1][pos[1]] !== '') {
          pos = [pos[0]-1,pos[1]]
        }
      }
    }
    if (d === 'down') {
      if (pos[0] < fighters.length-1) {
        if (fighters[pos[0]+1][pos[1]] !== '') {
          pos = [pos[0]+1,pos[1]]
        }
      }
    }
  }
  var re = [];
  for (var i = 0; i< moves.length; i++) {
    mover(moves[i])
    re.push(fighters[pos[0]][pos[1]])
  }
  return re;
}
//https://www.codewars.com/kata/5d23d89906f92a00267bb83d/solutions/javascript
function getOrder(input) {
  var arr = "Burger Fries Chicken Pizza Sandwich Onionrings Milkshake Coke".split(' ');
  var re = [];
  input = input.toLowerCase();
  arr.map(a=>{
    var item = a.toLowerCase();
    while(input.indexOf(item)>-1) {
      re.push(a)
      input = input.replace(item,'');
    }
  });
  return re.join(' ');
}
//https://www.codewars.com/kata/find-all-array-values-that-fall-within-a-given-difference/train/javascript
class GroupByDifference {
  find(nums) {
    var sarr = this.arr.sort((a,b)=>a-b);
    var re = new Set();
    for (var i = 0; i < sarr.length-1; i++) {
      if (sarr[i+1] - sarr[i] <= nums) {
        re.add(i);
        re.add(i+1);
      }
    }
    return sarr.filter((a,i)=>re.has(i))
  }
  constructor(arr) {
    this.arr = arr;
  }
}
//https://www.codewars.com/kata/533c46b140aafec05b000d31/solutions/javascript
function translate(sentence) {
  var sarr = sentence.split(' ');
  return sarr.map(a=>{
    var sa = a.split(/[aeiouAEIOU]/)[0];
    var last = a.match(/\W+/) === null ? "" : a.match(/\W+/).filter(a=>a!=='')[0];
    var mid = a.replace(sa,'').match(/[A-Za-z]/g).join('');
    if ( sa !== '' && sa[0] === sa[0].toUpperCase()) {
      mid = mid[0].toUpperCase() + mid.slice(1);
      sa = sa.toLowerCase();
    }
    return `${mid}${sa===''?'w':sa}ay${last}`
  }).join(' ')
};
//https://www.codewars.com/kata/how-the-grinch-almost-ended-christmas/train/javascript
function prioritizeMissiles(missiles){
  //TODO 
  return missiles.sort((a,b)=>(a.distance / a.speed)-(b.distance / b.speed)).map(a=>a.name)
}
//https://www.codewars.com/kata/5298a7b37edba9043200047b/solutions/javascript
const compose = (...fs) => (x) => fs.reduceRight((a, f) => f(a), x);
const pipeline = (x, ...fs) => compose(...fs.reverse())(x);
//https://www.codewars.com/kata/528aa29bd8a0399fc5000cae/solutions/javascript
function darkRoom(direction) {
    // Your master screams the direction of the crotch kick
    this.d = direction;
    this.calle = 0;
    this.re = 'CROTCH KICK';
    this.once = false;
    
    var that = this;
    
    function local(a) {
      that.calle++;
      if (a === 1) {
        if (that.once === true) {
          that.re = 'CROTCH KICK';
        }
        if (that.d === that.calle && that.once === false) {
          that.once = true;
          that.re = 'BLOCK';
        }
        if (that.once === false) {
          that.once = true;
        }
      }
      return local;
     
    }
    local.end = function () { return that.re }
  return local
};
//https://www.codewars.com/kata/595910299197d929a10005ae/solutions/javascript
function pizzaRewards(customers, minOrders, minPrice) {
  var re = [];
  Object.entries(customers).map(a=>{
    if (a[1].filter(o=>o>=minPrice).length >= minOrders) {
      re.push(a[0])
    }
  });
  return re;
}
//https://www.codewars.com/kata/battle-ships-sunk-damaged-or-not-touched/train/javascript
function damagedOrSunk (board, attacks){
  var ships = [];
  var max = 0;
  board.map((a,y)=>a.map((b,x)=>{ if (max < b) { max = b; } }));
  ships = [...new Array(max)].map((kk,i)=>{
    var sh = [];
    board.map((a,y)=>a.map((b,x)=>{ 
      if (b === i+1) {
        sh.push(`${y},${x}`)
      }
    }));
    return sh;
  });
  var attacksfix = attacks.map(a=>[board.length - (a[1]%board.length === 0 ? a[1] : a[1]%board.length),(a[0]%board.length === 0 ? a[0] : a[0]%board.length)-1]);
  attacksfix.map(a=>{
    var bom = a.join();
    ships = ships.map(s=> s.map(sp=> sp === bom ? 'X': sp));
  });
  
  var re = {
    sunk : 0,
    damaged : 0,
    notTouched : 0,
    points : 0
  };
  ships.map(a=>{
    if (a.every(sp=>sp==='X')) {
      re.sunk++;
      re.points += 1;
    } else if (a.some(sp=>sp==='X')) {
      re.damaged++;
      re.points += 0.5;
    } else {
      re.notTouched++
    }
  });
  re.points -= re.notTouched * 1;
  return re;
}
//https://www.codewars.com/kata/land-perimeter/train/javascript
function landPerimeter(arr) {
  var maps = arr.map(a=>`O${a}O`.split(''));
  maps.push([...new Array(maps[0].length)].map(a=>'O'));
  maps.unshift([...new Array(maps[0].length)].map(a=>'O'));
  function expand(y,x) {
    maps[y][x] = '-';
    return (maps[y-1][x]==='O'?1:0) + (maps[y+1][x]==='O'?1:0) + (maps[y][x-1]==='O'?1:0) + (maps[y][x+1]==='O'?1:0)
  }
  var sum = 0;
  for (var i = 0; i<maps.length; i++) {
    for (var ii = 0; ii< maps[0].length; ii++) {
      if (maps[i][ii] === 'X') {
        sum += expand(i,ii);
      }
    }
  }
  return `Total land perimeter: ${sum}`;
}
//https://www.codewars.com/kata/complete-the-pattern-number-16/train/javascript
function pattern(n){
  if (n <= 0) return '';
  var output=[...new Array(n)].map((a,i)=>{
    var k = [...new Array(i+1)].map((_,ii)=>(n-ii)%10).join('');
    return `${k}${(''+((n-i)%10)).repeat(n-k.length)}`
  });
    // Happy Coding ^_^
  return output.join('\n');
}
//https://www.codewars.com/kata/586e6d4cb98de09e3800014f/
function VendingMachine(items, money) {
  // Code Here
  this.items = items;
  this.money = money;
  
  this.getName = function (c) {
    if (this.items.filter(a=>a.code === c).length === 0) {
      return false;
    }
    return this.items.filter(a=>a.code === c)[0].name
  }
  
  this.checkPrice = function (n,input) {
    return this.items.filter(a=>a.name === n)[0].price <= input
  }
  
  this.checkStocks = function (n,input) {
    return this.items.filter(a=>a.name === n)[0].quantity > 0
  }
  
  this.changeOk = function (n, i) {
    var c = i - this.items.filter(a=>a.name === n)[0].price;
    return c <= this.money;
  }
  
  this.Done = function (n, i) {
    var p = 0;
    this.items.map(a=>{
      if (a.name === n) {
        a.quantity -= 1;
        this.money += a.price;
        p = a.price;
        return a;
      } else {
        return a;
      }
    })
    return i - p;
  }
};

VendingMachine.prototype.vend = function (selection, itemMoney){
  // Code Here
  selection = selection.toUpperCase();
  if (!this.getName(selection)) {
    return `Invalid selection! : Money in vending machine = ${(this.money).toFixed(2)}`
  }
  var name = this.getName(selection);
  if (!this.checkPrice(name,itemMoney)) {
    return "Not enough money!";
  }
  if (!this.checkStocks(name,itemMoney)) {
    return `${name}: Out of stock!`;
  }
  if (!this.changeOk(name,itemMoney)) {
    return "Not enough money!";
  }
  var r = this.Done(name,itemMoney);
  if (r === 0) {return `Vending ${name}`;}
  return `Vending ${name} with ${r.toFixed(2)} change.`
  
};
//https://www.codewars.com/kata/ranking-poker-hands/train/javascript
var Result = { "win": 1, "loss": 2, "tie": 3 }

function getRank(card) {
  var cardorder = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"];
  var shapeorder = ['H','D','C','S'];
  var rank = { "RF" : 0,  "SF" : 1,  "FC" : 2,  "FH" : 3,  "FL" : 4,  "ST" : 5,  "TC" : 6,  "TP" : 7,  "PA" : 8,  "HI" : 9};
  
  var cs = card;
  console.log(cs)
  cs = cs.sort((a,b)=>cardorder.indexOf(a[0]) - cardorder.indexOf(b[0]));
  var ns = cs.map(a=>cardorder.indexOf(a[0]));
  if (cs.reduce((s,a)=>s+a[0],'') === 'TJQKA' && cs.every(a=>a[1]===cs[0][1])) {
    return [rank.RF, shapeorder[cs[0][1]]];
  }
  if (ns.every((a,i)=>a-i===ns[0]) && cs.every(a=>a[1]===cs[0][1])) {
    return [rank.SF, ns.reduce((s,a)=>Math.max(s,a),-1)];
  }
  if (cs.filter(a=>a[0]===cs[2][0]).length === 4) {
    return [rank.FC, cardorder.indexOf(cs[2][0])];
  }
  //full
  if (cs.filter(a=>a[0]===cs[2][0]).length === 3) {
    if (cs[2][0] === cs[0][0]) {
      if (cs.filter(a=>a[0]===cs[4][0]).length === 2) {
        return [rank.FH, cardorder.indexOf(cs[2][0]),cardorder.indexOf(cs[4][0])];
      }
    } else {
      if (cs.filter(a=>a[0]===cs[0][0]).length === 2) {
        return [rank.FH, cardorder.indexOf(cs[2][0]),cardorder.indexOf(cs[0][0])];
      }
    }
  }
  //flus
  if (cs.every(a=>a[1]===cs[0][1])) {
    return [rank.FL, ns.reduce((s,a)=>Math.max(s,a),-1)];
  }
  if (ns.every((a,i)=>a-i===ns[0])) {
    return [rank.ST, ns.reduce((s,a)=>Math.max(s,a),-1)];
  }
  var co = {};
  var col = [];
  var mx = -1;
  cs.map(a=>{
    co[a[0]] = co[a[0]] ? co[a[0]] + 1 : 1;
    if (co[a[0]] > 1) {
      mx = Math.max(mx, cardorder.indexOf(a[0]))
    }
  });
  Object.entries(co).map(a=>{
    col.push(a[1]);
  });
  col = col.sort((a,b)=>a-b);
  if (col.join('') === '113') {
    return [rank.TC, mx];
  }
  if (col.join('') === '122') {
    return [rank.TP, mx];
  }
  if (col.join('') === '1112') {
    return [rank.PA, mx];
  }
  return [rank.HI, -1];
}

function getHighCard(card) {
  var cardorder = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"];
  var shapeorder = ['H','D','C','S'];
  var mx = card.reduce((s,a)=>Math.max(s,cardorder.indexOf(a[0])),0);
  var c = card.filter(a=>a[0] === cardorder[mx])[0];
  return [mx,shapeorder.indexOf(c)];
}

function compareHigh(a1, a2) {
  a1 = a1.map(a=>a[0])
  a2 = a2.map(a=>a[0])
  var a1s = a1.filter(a=>a2.indexOf(a)===-1);
  var a2s = a2.filter(a=>a1.indexOf(a)===-1);
  if (a1s.length === 0) { return Result.tie}
  var a1h = getHighCard(a1s);
  var a2h = getHighCard(a2s);
  if (a1h[0] > a2h[0]) {
    return Result.win
  } else {
    return Result.loss
  }
  
}

function PokerHand(hand) {
  this.cards = hand.split(' ');
  this.rank = getRank(this.cards)
  this.hicard = getHighCard(this.cards)
}

PokerHand.prototype.compareWith = function(hand){
    var otherrank = hand.rank;
    var otherhi = hand.hicard;
    console.log(this.rank ,otherrank);
    if (this.rank[0] === otherrank[0]) {
      if (this.rank[0] === 1 || this.rank[0] === 2 || this.rank[0] === 4 || this.rank[0] === 5 || this.rank[0] === 6 || this.rank[0] === 7 || this.rank[0] === 8) {
        //console.log(this.rank,otherrank)
        if (this.rank[1] === otherrank[1]) {
          return compareHigh(this.cards, hand.cards);
        }
        return this.rank[1] > otherrank[1] ? Result.win : Result.loss; 
      }
      if (this.rank[0] === 3 ) {
        if (this.rank[1] === otherrank[1]) {
          if (this.rank[2] === otherrank[2]) {
            return compareHigh(this.cards, hand.cards);
          } else {
            return this.rank[2] > otherrank[2] ? Result.win : Result.loss; 
          }
        } else {
          return this.rank[1] > otherrank[1] ? Result.win : Result.loss; 
        }
      }
      if (this.rank[0] === 9) {
        if (this.hicard[0] === otherhi[0]) {
          return compareHigh(this.cards, hand.cards);
          
        } else {
          return this.hicard[0] > otherhi[0] ? Result.win : Result.loss;
        }
      } else {
        return Result.tie;
      }
    } else {
      return this.rank[0] < otherrank[0] ? Result.win : Result.loss;
    }
}
//https://www.codewars.com/kata/56baeae7022c16dd7400086e/solutions/javascript
function phone(strng, num) {
    // your code
    var sl = strng.split('\n');
    var idxs = sl.reduce((s,a,i)=> a.indexOf(num)>-1?s.concat([i]):s,[]);
    if (idxs.length > 1 || idxs.length < 1)  {
      return idxs.length === 0 ? `Error => Not found: ${num}` : `Error => Too many people: ${num}`
    }
    var ns = sl[idxs[0]].indexOf('<');
    var ne = sl[idxs[0]].indexOf('>');
    var name = sl[idxs[0]].slice(ns+1,ne);
    var phone = num;
    var add = sl[idxs[0]].split(`<${name}>`).join('').split(`+${phone}`).join('').split(/[!:?$\/*,;]/g).join('').split('_').join(' ');
    while(add.indexOf('  ')>-1) {
      add = add.split('  ').join(' ');
    }
    return `Phone => ${phone}, Name => ${name}, Address => ${add.trim()}`
}
//https://www.codewars.com/kata/counting-change-combinations/javascript
var countChange = function(money, coins) {
  // your implementation here
  var moneyarr = [...new Array(money+1)].map(a=>0);
  coins = coins.sort((a,b)=> a-b);
  moneyarr[0] = 1;
  coins.map(a=>{
    for (var i = 1; i <= money; i++) {
      if (i >= a) {
        moneyarr[i] += moneyarr[i-a];
      }
    }
  });
  return moneyarr[money]
}

//https://www.codewars.com/kata/connect-four-1/train/javascript
function whoIsWinner(piecesPositionList){
  var winner = "Draw";
  var board = [...new Array(6)].map(a=>[...new Array(7)].fill('-'));
  var col = { 'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6};
  var cross = [4,5,6,6,5,4];
  var pos = [5,5,5,5,5,5,5];
  function winline(line) {
      //console.log(line);
      if (line.join('').indexOf('YYYY') > -1) {
          return "Yellow"; 
      }
      if (line.join('').indexOf('RRRR') > -1) {
          return "Red";
      }
      return "";
  }
  function check4 ()  {
    var done = false;
    // =
    board.map(a=>{
      var d = winline(a);
      if(d !== '') {
        done = d;
      }
    });
    // ||
    board[0].map((a,i)=>{
      var d = winline(board.map(b=>b[i]));
      if(d !== '') {
        done = d;
      }
    });
    
    // xx
    for (var i = 0; i < 6; i++) {
      var test = [];
      var test2 = [];
      if ( 3 > i) {
        for (var j = 0; j < 6-i; j++) {
          test.push(board[j+i][j]);
          test2.push(board[j+i][6-j]);
        }
      } else {
        for (var j = 0; j < 1+i; j++) {
          test.push(board[i-j][j]);
          test2.push(board[i-j][6-j]);
        }
      }
      var d = winline(test);
      var d2 = winline(test2);
      if (d !== '' || d2 !== '') {
        done = d+d2;
        break;
      }
    }
    return done;
  }

  for (var ii = 0; ii < piecesPositionList.length ; ii++) {
    var c = piecesPositionList[ii].split('_');
    var cc = col[c[0]];
    board[pos[cc]][cc] = c[1][0];
    pos[cc]--;
    var an = check4();
    if (an) {
      winner = an;
      break;
    }
  }
  //console.log(board);
  return winner;
}
//https://www.codewars.com/kata/playing-with-passphrases/train/javascript
function playPass(s, n) {
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    var ns = '0123456789';
    var st = s.toLowerCase().split('');
    return st.map((a,i)=> 
      abc.indexOf(a) > -1 ? 
        (i % 2 === 0  ? abc[(abc.indexOf(a)+n)%abc.length].toUpperCase() : abc[(abc.indexOf(a)+n)%abc.length]) 
      : (ns.indexOf(a) > -1 ? ''+(9-(+a)): a)).reverse().join('');
}
///https://www.codewars.com/kata/help-the-bookseller/train/javascript
function stockList(a, b){
  var pm = {};
  a.map(a=> a.split(' ')).map(a=>{pm[a[0][0]] = pm[a[0][0]] ? pm[a[0][0]] + (+a[1]) : (+a[1])});
  if (Object.entries(pm).length === 0) { return '' }
  var re = [];
  b.map(a=> {re.push(`(${a} : ${pm[a]?pm[a]:0})`)});
  return re.join(' - ');
}
//https://www.codewars.com/kata/strings-mix/train/javascript
function mix(s1, s2) {
  // your code
  var abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var hs1 = {};
  var hs2 = {};
  abc.map(a=> { hs1[a] = s1.split(a).length-1;});
  abc.map(a=> { hs2[a] = s2.split(a).length-1;});
  var max = Math.max(...Object.entries(hs2).map(a=>a[1]).concat(Object.entries(hs1).map(a=>a[1])));
  var re = [];
  var done = new Set();
  for(var i = max; i > 1; i--) {
    var win1 = [];
    var win2 = [];
    var tie = [];
    abc.map(a=>{
      if (hs1[a] === i && hs2[a] === i && !done.has(a)) {
        tie.push('=:'+(a.repeat(i)));
        done.add(a);
      } else if (hs1[a] === i && !done.has(a)) {
        win1.push('1:'+(a.repeat(i)));
        done.add(a);
      } else if (hs2[a] === i && !done.has(a)) {
        win2.push('2:'+(a.repeat(i)));
        done.add(a);
      }
    });
    re = re.concat(win1);
    re = re.concat(win2);
    re = re.concat(tie);
  }
  return re.join('/');
}
//https://www.codewars.com/kata/52dd72494367608ac1000416/solutions/javascript
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

function getPrimes(start, finish) {
  // ...
  var re =[];
  if (start > finish) {
    var t = finish;
    finish = start;
    start = t;
  }
  for (var i = start > 0 ? start : 1; i <=  finish; i++) {
    if (isPrime(i)) {
      re.push(i);
    }
  }
  return re;
}
//https://www.codewars.com/kata/the-most-sacred-of-days/train/javascript
function blackFriday(year) {
  var dayOfWeek = new Date(`${year}-11-01`).getDay();
  var aday;
  if (dayOfWeek < 5) {
    aday = (5-dayOfWeek) + 22;
  } else {
    aday = (-dayOfWeek + 5) + 29;
  }
  return aday;
}
//https://www.codewars.com/kata/a-string-of-sorts/train/javascript
function sortString(string,ordering) {
  var o = ordering.split('');
  var s = string.split('');
  var re = "";
  o.map(a=>{
    re += s.filter(c=>c===a).join('');
    s = s.map(c=> c === a ? "" : c);
  });
  return re+s.join('');
}
//https://www.codewars.com/kata/matrix-transpose/train/javascript
function transpose(matrix) {
  var m = [];
  matrix[0].map((a,x)=>{
    var l = [];
    matrix.map((b,y)=> {
      l.push(matrix[y][x]);
    });
    m.push(l);
  });
  return m;
}
//https://www.codewars.com/kata/numerical-palindrome-number-3-dot-5/train/javascript
function palindrome(num){ 
  if (!Number.isInteger(num) || num < 0) { return "Not valid" }
  if (num < 10) { return "No palindromes found" }
  function ispal(s) {
    var sn = s.split('');
    while (sn[0] === '0' && sn[sn.length-1] === '0') {
      sn.shift();
      sn.pop();
    }
    if (+(sn.join()) < 10) { return false; }
    return +(sn.join('')) === +(sn.reverse().join('')) ;
  }
  var s = ''+num;
  var re = new Set();
  for (var i = 2; i < s.length+1; i++) {
    for (var ii = 0; ii < s.length - i + 1; ii++) {
      var t = s.slice(ii,ii+i);
      if ( ispal(t) ) {
        re.add(+t);
      }
    }
  }
  if (Array.from(re).length === 0) { return "No palindromes found";}
  return Array.from(re).sort((a,b)=> a-b);
}
//https://www.codewars.com/kata/numerical-palindrome-number-3/train/javascript
function palindrome(num) { 
  function ispal(s) {
    return s.split('').reverse().join('') === s;
  }
  if (!Number.isInteger(num) || num < 0) { return "Not valid"}
  if (num < 10) { return 0 }
  var s = ''+num;
  var re = 0;
  for (var i = 2; i < s.length+1; i++) {
    for (var ii = 0; ii < s.length - i + 1; ii++) {
      var t = s.slice(ii,ii+i);
      if ( ispal(t) ) {
        re++;
      }
    }
  }
  return re;
}
//https://www.codewars.com/kata/data-compression-using-run-length-encoding/train/javascript
function encode(input) {
  var s = input.split('');
  var t = s[0];
  var c = 1;
  var re = [];
  for(var i = 1; i < s.length; i++) {
    if (s[i] !== t) {
      re.push(''+c+t);
      t = s[i];
      c = 1;
    } else {
      c++;
    }
  }
  re.push(''+c+t);
  return re.join('');
}

function decode(input) {
  var s = input.match(/[A-Z]/g);
  var n = input.match(/[0-9]+/g);
  var re = [];
  for(var i = 0; i < s.length; i++) {
    re.push(s[i].repeat(+n[i]));
  }
  return re.join('');
}
//https://www.codewars.com/kata/numerical-palindrome-number-4/train/javascript
function palindrome(num) { 
  function pa(num) {
    if(num < 10) { return false; }
    return (''+num) === (''+num).split('').reverse().join('');
  }
  if (!Number.isInteger(num)) {
    return 'Not valid';
  }
  if (num < 0) {
    return 'Not valid';
  }
  var n = 0;
  while(!(pa(num-n)||pa(num+n))) {
    n++;
  }
  return pa(num-n) ? num-n : num+n
}
//https://www.codewars.com/kata/square-matrix-multiplication/train/javascript
function matrixMultiplication(a, b){
    var mul = [];
    var len = a.length;
    for(var i=0; i<len; i++){
        var row = [];
        for(var j=0; j<len; j++){
            var x = 0;
            for(var k=0; k<len; k++) x += a[i][k]*b[k][j];
            row.push(x);
        }
        mul.push(row);
    }
    return mul;
}
//https://www.codewars.com/kata/number-hashtag/train/javascript
function getHashtags(post) {
  var w = post.split(' ');
  var re = [];
  w.map(a=>{
    if (a[0] !== '#') {
      return;
    }
    var retag = a.split('');
    while( retag[0] === '#') {
      retag.shift();
    }
    var tag = retag.join('');
    if (tag.length === 0) { return; }
    if (/^[a-zA-Z]*$/.test(tag)) {
      re.push(tag);
    }
  });
  return re;
}
//https://www.codewars.com/kata/count-9-s-from-1-to-n/train/javascript
function number9(n){
  var ns = (''+n).split('');
  var count = 0;
  for (var i = 0 ; i < ns.length; i++) {
    if (ns[i] === '9')  {
      if (i === ns.length - 1) { count += 1;} else {
        count += +(ns.slice(i+1).join(''))+1; 
      }
    }
    count += (+ns[i])*(10**(ns.length-i-2))*(ns.length-i-1);
  }
  return count;
}
//https://www.codewars.com/kata/rotate-an-array-matrix/train/javascript
function rotate(matrix, direction) {
  var m = [];
  if (direction === "clockwise") {
    matrix[0].map((a,i)=>{
      var  l = [];
      matrix.map(aa=>{l.push(aa[i]);});
      m.push(l.reverse());
    });
  } else {
    matrix[0].map((a,i)=>{
      var  l = [];
      matrix.map(aa=>{l.push(aa[matrix[0].length-i-1]);});
      m.push(l);
    });
  }
  return m;
}
//https://www.codewars.com/kata/5263c5d011f4233c9d000561/solutions/javascript
function getLines(line){
  // code me please?
  var l = [];
  if ( isNaN(line) ) { return -1; }
  if ( line < 1 ) { return -1; }
  if ( line >= 1 ) { l = ["1"]; }
  
  while(line > 1) {
    line--;
    var sl = l[l.length-1].split('');
    var n = sl[0];
    var c = 1; 
    var pr = "";
    for (var i = 1; i < sl.length; i++) {
      if (n !== sl[i]) {
        pr += ''+c+n;
        n = sl[i];
        c = 1;
      } else {
        c++; 
      }
    }
    pr += c+n;
    l.push(pr);
  }
  return l.join(',');
}
//https://www.codewars.com/kata/554a44516729e4d80b000012/solutions/javascript
function nbMonths(spo, spn, sm, pm){
  //your code here
  var count = 0;
  var ratio = 1 - (pm * 0.01);
  var m = 1;
  while ((spo * m) - (spn * m) + count * sm < 0) {
    if (count % 2 === 1) {
      ratio -= 0.005;      
    }
    m *= ratio;
    count++;
  }
  return [count, Math.round((spo * m) - (spn * m) + count * sm)];
}
//https://www.codewars.com/kata/zonk-game/train/javascript
function getScore(dice){ 
  var psum = 0;
  var d = [0,0,0,0,0,0];
  dice.map(a=>{
    d[a-1]++;
  });
  if (d.every(a=>a===1)) { return 1000; }
  if (d.filter(a=>a===2).length === 3) { return 750;}
  d = d.map((a,i)=>{ 
    if (a < 3) {
      return a;
    }
    var p = 0;
    if (i === 0) {
      p = 1000;
    } else {
      p = (i + 1) * 100;
    }
    psum += p * (a-2);
    return 0;
  });
  if (d[0] > 0) { psum += 100 * d[0]; }
  if (d[4] > 0) { psum += 50 * d[4]; }
  return psum > 0 ? psum : "Zonk";
}
//https://www.codewars.com/kata/cumulative-triangle/train/javascript
function cumulativeTriangle(n) {
  // your mission, should you choose to accept it...
  return n * (n * n + 1) / 2;
}
//https://www.codewars.com/kata/52b4d1be990d6a2dac0002ab/solutions/javascript
var maxZeroSequence = function(arr) {
  // write your magic here
  var sum = arr.reduce((s,a)=>s+a,0);
  if (sum === 0) {
    return arr;
  }
  for (var i = 1; i < arr.length -1; i++) {
    var psum = sum - arr.slice(arr.length - i).reduce((s,a)=>s+a,0);
    for (var z = 0; z <= i; z++) {
      if (psum === 0) {
        return arr.slice(z,arr.length+z-i);
      } else {
        psum -= arr[z];
        psum += arr[arr.length+z-i];
      }
    }
  }
  return [];
}
//https://www.codewars.com/kata/fibonacci-reloaded/train/javascript
function fib(n) {
    n--;
    var a = 0, b = 1, c;
    if (n < 3) {
        if (n < 0) return fib(-n);
        if (n === 0) return 0;
        return 1;
    }
    while (--n)
        c = a + b, a = b, b = c;
    return c;
}
//https://www.codewars.com/kata/largest-product-in-a-series/train/javascript
function greatestProduct(input) {
  // todo
  var ns = input.split('').map(a=>+a);
  var max = 0;
  var temp = ns.slice(0,5);
  for (var i = 5; i < ns.length ; i++) {
    var t = temp.reduce((s,a)=>s*a);
    if (t > max) {
      max = t;
    }
    temp.shift();
    temp.push(ns[i]);
  }
  return max > temp.reduce((s,a)=>s*a) ? max : temp.reduce((s,a)=>s*a);
}
//https://www.codewars.com/kata/difference-of-2/train/javascript
function twosDifference(input){
 //Enter your solution here
 var max = input.length - 1;
 var i = 0, re = [];
 input.sort((a,b)=>a-b);
 while (i < input.length-1) {
   var t = [];
   if (input.indexOf(input[i]+2)>-1) {
     var p = input.indexOf(input[i]+2);
     t.push(input[i]);
     t.push(input[p]);
     re.push(t);
   }
   i++;
 }
 return re;
}
//https://www.codewars.com/kata/poker-cards-reducer/train/javascript
function reduceCards(input){
  if (input === null || input === undefined) return null;
  if (!Array.isArray(input)) return null;
  if (input.length === 0) return [];
  //write function body
  var c = ['c','d','h','s'];
  var n = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
  if (typeof(input[0]) === "string") {
    return input.map(a=>a[0]).sort((a,b)=>n.indexOf(a) -n.indexOf(b));
  } else {
    return input.map(a=>a%13).sort((a,b)=>a-b);
  }
}
//https://www.codewars.com/kata/poker-cards-encoder-slash-decoder/train/javascript
function cardsConverter(input){
  //write function body
  var c = ['c','d','h','s'];
  var n = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
  if (input === null || input === undefined) return null;
  if (!Array.isArray(input)) return null;
  if (input.length === 0) return [];
  
  if (typeof(input[0]) === "number") {
    input.sort((a,b)=>a-b);
    return input.map(a=>{
      var ci = Math.floor(a / 13);
      var ni = a % 13;
      return n[ni]+c[ci];
    });
  } else {
    return input.map(a=>{
      var cc = a.split('');
      return 13*(c.indexOf(cc[1])) + n.indexOf(cc[0]);
    }).sort((a,b)=>a-b);
  }
}
//https://www.codewars.com/kata/sort-sentence-pseudo-alphabetically/train/javascript
function sort(sentence){
  //...
  var re = sentence.split(' ').map(a=>a.replace(/[^a-zA-Z0-9]/gi,""));
  var low = re.filter(a=>/[a-z0-9]/.test(a[0])).sort(); 
  var upper = re.filter(a=>/[A-Z]/.test(a[0])).sort((a,b)=>a<b);
  return low.concat(upper).join(' ');
}
//https://www.codewars.com/kata/escape-html-markup/train/javascript
var escapeHTML = function(str) {
    // TODO: your code
    return str.split("<").join("&lt;").split(">").join("&gt;").split("\"").join("&quot;")
};
//https://www.codewars.com/kata/52aaf51822e82a808100066b/solutions/javascript
function replaceAll(input, find, replace) {
  // ...
  if (input === "" && find === "") { return replace }
  if (find === "") { return replace+input.split("").join(replace)+replace }
  return input.split(find).join(replace)
}
//https://www.codewars.com/kata/grab-csv-columns/train/javascript
function csvColumns(csv, indices){
  return csv.split('\n').map(a=>a.split(',').filter((b,i)=>indices.some(c=>c===i)).join()).filter(a=>a.length!==0).join("\n");
}
//https://www.codewars.com/kata/5227129b316b56d50d0003b7/solutions/javascript
function flattenTwoLevels(array) {
  function dep(arr, dp) {
    if (dp > 0) {
      var c = [];
      arr.map(a=>{
        if (Array.isArray(a)) {
          c = c.concat(dep(a,dp+1));
        } else {
          c.push(a);
        }
      });
      return c;
    } else {
      return arr.map(a=>Array.isArray(a) ? dep(a,dp+1) : a);
    }
  }
  return dep(array, 0);
}
//https://www.codewars.com/kata/sum-of-two-squares/train/javascript
function allSquaredPairs(num) {
  // max(num) === 2147483647
  var n = Math.sqrt(num);
  var re = [];
  var reset = new Set();
  var flip = true;
  var min = 0;
  var max = Math.floor(n);
  
  while (min <= max) {
    if (flip) {
      var m = Math.sqrt(num - (min * min));
      var arr = [min, m].sort((a,b)=>a-b);
      if (m % 1 === 0 && !reset.has(arr.join())) {
        reset.add(arr.join());
        max = m;
        re.push([min,max]);
        flip = false;
      }
      min++;
    } else {
      var n = Math.sqrt(num - (max * max));
      var arr = [n, max].sort((a,b)=>a-b);
      if (n % 1 === 0 && !reset.has(arr.join())) {
        reset.add(arr.join());
        min = n;
        re.push([min,max]);
        flip = false;
      }
      max--;
    }
  }
  return re;
  // Return every unique pair of numbers [a,b] where (a * a) + (b * b) = num;
  // return value will be a two-dimensional array [[]]
}
//https://www.codewars.com/kata/return-substring-instance-count-2/train/javascript
function searchSubstr( fullText, searchText, allowOverlap ){
  if ( allowOverlap == undefined) { allowOverlap = true; }
  if ( fullText.length === 0 || searchText.length === 0 ) { return 0; }
  var count = 0;
  if (allowOverlap) {
    for (var i = 0; i <= fullText.length - searchText.length ; i++) {
      console.log(fullText.slice(i,searchText.length+i));
      if (fullText.slice(i,searchText.length+i) === searchText) {
        count++;
      }
    }
  } else {
    count = fullText.split(searchText).length - 1;
  }
  return count;
}
//https://www.codewars.com/kata/object-extend/train/javascript
var extend = function() {
  if (typeof(arguments) !== 'object') { return null }
  if ( arguments === undefined || arguments === null)  { return null }
  var ent = Object.values(arguments).filter(a=>typeof(a)=== 'object' && Array.isArray(a)=== false);
  if (ent.length === 0) { return null; }
  
  var re = {};
  ent.map(a=>{
    Object.entries(a).map(k=>{
      if (re[k[0]] === undefined) {
        re[k[0]] = k[1];
      }
    });
  });
  return re;
}
//https://www.codewars.com/kata/51edd51599a189fe7f000015/solutions/javascript
var solution = function(firstArray, secondArray) {
  return firstArray.map((a,i)=> Math.pow(secondArray[i]-a,2)).reduce((s,a)=>s+a,0)/firstArray.length;
}
//https://www.codewars.com/kata/51e8241aed85d42c810002aa/solutions/javascript/me/best_practice
var wordWrap = function (str) {
  // code goes here
  var re = [];
  while (str.length > 0) {
    var sl = str.length < 25 ? str.length : str[25] === " " ? 25 : 24;
    var part = str.slice(0,sl);
    str = str.slice(sl);
    re.push(str === "" ? part : str[0] === " " ? part : part+'-');
  }
  return re.join('\n');
};
//https://www.codewars.com/kata/offload-your-work/train/javascript
function workNeeded(projectMinutes, freelancers) {
  var pm = [Math.floor(projectMinutes/60), projectMinutes % 60];
  var dm = freelancers.reduce((s,a)=>[s[0] + a[0],s[1] + a[1]],[0,0]);
  dm[0] += Math.floor(dm[1] / 60);
  dm[1] = dm[1] % 60;
  var rm = [pm[0]-dm[0],pm[1]-dm[1]];
  rm[0] = rm[1] < 0 ? rm[0] - 1 : rm[0];
  rm[1] = rm[1] < 0 ? rm[1]+60 : rm[1]; 
  if ( rm[0]<0 || rm.every(a=>a===0) ) {
    return "Easy Money!";
  } else {
    return `I need to work ${rm[0]} hour(s) and ${rm[1]} minute(s)`;
  }
}
//https://www.codewars.com/kata/simple-simple-simple-string-expansion/train/javascript
function stringExpansion(s) {
  // Good luck!
  var sarr = s.split('');
  var repeater = 1;
  var re = [];
  for ( var i = 0; i < sarr.length; i++) {
    if( /[0-9]/.test(sarr[i])) {
      repeater = +sarr[i];
    } else {
      re.push(sarr[i].repeat(repeater));
    }
  }
  return re.join('');
}
//https://www.codewars.com/kata/word-segmentation-maxmatch/train/javascript
function maxMatch(sentence){
    // Happy coding :)
    var t = sentence.length;
    var re = [];
    while(sentence.length > 0) {
      if (VALID_WORDS.has(sentence.slice(0,t)) || t === 1) {
        re.push(sentence.slice(0,t));
        sentence = sentence.slice(t);
        t = sentence.length;
      } else {
        t--;
      }
    }
    return re;
}
//https://www.codewars.com/kata/texting-with-an-old-school-mobile-phone/train/javascript
const sendMessage = message => {
  var buttons = [
    ".,?!","abc","def",
    "ghi","jkl","mno",
    "pqrs","tuv","wxyz",
    " ","'-+=","",
  ];
  var numbuttons = "1234567890*#";
  // Start typing here
  var marr = message.split('');
  var cases = false;
  var re = ""
  for (var i = 0; i < marr.length; ) {
    if (re.indexOf("##") > -1) { return false; }
    //
    var a = marr[i];
    if (cases) { a = a === a.toLowerCase() ? a.toUpperCase() : a.toLowerCase(); }
    if (buttons.some(b=>b.indexOf(a)>-1) || numbuttons.indexOf(a) > -1) {
      buttons.map((b,n)=>{
        if (b.indexOf(a) > -1) {
          var count = b.indexOf(a)+1;
          var num = n+1; 
          num = num === 10 ? 0 : num === 11 ? "*" : num;
          re += (re[re.length-1] === (''+num) ? " " : "") + (''+num).repeat(count);
        }
      });
      if (numbuttons.indexOf(a) > -1) { re += (re[re.length-1] === (''+a) ? " " : "") + a+"-"; }
      i++;
    } else {
      cases = !cases;
      re += "#";
    }
  }
  return re;
}
//https://www.codewars.com/kata/triangle-waveform/train/javascript
function triangleWave(length,depth,offset) {
  var re = [...Array(depth)].map(a=>" ".repeat(length).split(''));
  depth--;
  var t = depth * 2;
  var os = offset % t;
  var pos = [...Array(length)].map((a,i)=>Math.abs(((os+i)%t) - depth));
  pos.map((a,i)=>{
    re[a][i] = "*";
  });
  return  re.map(a=>a.join('')).join('\n');
}
//https://www.codewars.com/kata/array-squareup-b/train/javascript
function squareUp(n) {
    if(n === 0) return []
    return [...Array(n)].map((a,i)=>[...Array(n)].map((b,j)=>j<=i?j+1:0).reverse()).reduce((s,a)=>s.concat(a));
}
//https://www.codewars.com/kata/5869848f2d52095be20001d1/solutions/javascript
function peacefulYard(yard, minDistance) {
    // your code here
    var ym = yard.map(a=>a.split(''));
    //console.log(ym)
    var cats = [];
    ym.map((a,y)=>a.map((b,x)=>{
      if (b!=='-') {
        cats.push([y,x]);
      }
    }));
    if (cats.length <= 1) return true; 
    var dis = true;
    for (var i = 0; i < cats.length; i++) {
      for( var j = i+1; j < cats.length; j++) {
        var ydis = cats[i][0] - cats[j][0];
        ydis = ydis*ydis;
        var xdis = cats[i][1] - cats[j][1];
        xdis = xdis*xdis;
        if (Math.sqrt(ydis+xdis) < minDistance) {
          dis = false;
        }
      }
    }
    return dis;
}
//https://www.codewars.com/kata/next-version/train/javascript
function nextVersion(version){
  //TODO : find the next version
  var str = version.split('.').reverse().map(a=>+a);
  str[0]++;
  for(var i =0; i < str.length-1; i++) {
    if ( str[i] >= 10) {
      str[i+1]++;
      str[i] %= 10;
    }
  }
  return str.reverse().join('.')
}
https://www.codewars.com/kata/least-common-multiple/train/javascript
var lcm = function () {
	var gcd = function(a, b) {
	    if ( ! b) {return a;}
	    return gcd(b, a % b);
	};
  // TODO: Program me
  var args = Array.from(arguments);
  var lcv = 1;
  while (args.length > 0) {
    var p = args.pop();
    lcv = Math.abs(lcv * p) / gcd(p, lcv);
  }
  return lcv;
};
//https://www.codewars.com/kata/integer-depth/train/javascript
function computeDepth (x){
  var dep = new Set();
  var i = 1, v = x;
  while (dep.size < 10) {
    var t =  (''+v).split('');
    t.map(a=>dep.add(a));
    i++;
    v += x;
  }
  return i-1;
}
//https://www.codewars.com/kata/reverse-every-other-word-in-the-string/train/javascript
function reverse(str){
  //WRITE SOME MAGIC
  return str.split(' ').map((a,i)=>i%2 == 1 ? a.split('').reverse().join(''):a).join(' ')
}
//https://www.codewars.com/kata/57f625992f4d53c24200070e/solutions/javascript
function bingo(ticket, win){
   return win <= ticket.filter(a=>a[0].split('').map(b=>b.charCodeAt(0)).indexOf(a[1])>-1).length ? "Winner!" : "Loser!"
}
//https://www.codewars.com/kata/english-beggars/train/javascript
function beggars(values, n){
  var out = Array.from("0".repeat(n)).map(Number)
  for(var i=0;i<values.length;i++){
    out[i%n] += values[i]
  }
  return out
}
//https://www.codewars.com/kata/58539230879867a8cd00011c/solutions/javascript
function findChildren(dancingBrigade){
  var kk = {};
  dancingBrigade.toLowerCase().split('').map(a=>{
    kk[a] = kk[a] ? kk[a]+1 : 1;
  });
  var re = Object.entries(kk);
  re = re.sort((a,b)=> a[0]>b[0]);
  re = re.map(a=>a[0].toUpperCase()+a[0].repeat(a[1]-1)).join('');
  return re
};
//https://www.codewars.com/kata/if-you-can-read-this-dot-dot-dot/train/javascript
function to_nato(words) {
	// Go code
  var nato = "Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, Xray, Yankee, Zulu"
  nato = nato.split(', ');
  var w = words.match(/[a-zA-Z!?.]/gi).map(a=>a.toUpperCase())
  return w.map(a=>nato[a.charCodeAt(0)-65] ? nato[a.charCodeAt(0)-65]:a).join(' ')
}
//https://www.codewars.com/kata/vigenere-cipher-helper/train/javascript
function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    //...
    var h = str.split('');
    var s = h.map((a,i)=>{
      if (abc.indexOf(a) === -1) { return a; }
      var idx = (abc.indexOf(a) + abc.indexOf(key[i%key.length]) ) % abc.length;
      return abc[idx];
    });
    return s.join('')
  };
  this.decode = function (str) {
    //...
    var h = str.split('');
    var s = h.map((a,i)=>{
      if (abc.indexOf(a) === -1) { return a; }
      var idx = (abc.indexOf(a) - abc.indexOf(key[i%key.length]) ) % abc.length;
      idx = idx < 0 ? idx + abc.length : idx;
      return abc[idx];
    });
    return s.join('')
  };
}
//https://www.codewars.com/kata/546d15cebed2e10334000ed9/solutions/javascript
function solveExpression(exp) {
  var re = -1;
  for (var i = 0; i < 10; i++) {
    if (exp.indexOf(''+i)> -1) { continue; }
    if (exp.indexOf('??') > -1 && i === 0) { continue; }
    var mk = exp.split('?').join(i);
    mk = mk.split('=').join('===');
    mk = mk.split('--').join('+');
    if (mk.indexOf('++')>-1) { break; }
    if (eval(mk)) {
      re = i;
      break;
    }
  }
  return re;
}
//https://www.codewars.com/kata/most-frequently-used-words-in-a-text/train/javascript
function topThreeWords(text) {
  var arr = text.match(/[a-zA-Z']+/g);
  if (arr === null) return [];
  arr = arr.map(a=>a.toLowerCase()).filter(a=>/[a-z]/.test(a[0]));
  var h = {};
  arr.map(a=>{
    h[a] = h[a] ? h[a]+1 : 1;
  });
  var re = Object.entries(h);
  re.sort((a,b)=>b[1]-a[1]);
  return re.length > 2 ? re.slice(0,3).map(a=>a[0]) : re.map(a=>a[0])
}
//https://www.codewars.com/kata/conways-game-of-life-unlimited-edition/train/javascript
function getGeneration(cells, generations){
  var cc = JSON.stringify(cells);
  cc = JSON.parse(cc);
  console.log(cells, generations);
  function check(y,x) {
    var pos = [
      [y-1,x-1],
      [y-1,x],
      [y-1,x+1],
      [y,x-1],
      [y,x+1],
      [y+1,x-1],
      [y+1,x],
      [y+1,x+1],
    ];
    pos = pos.filter(a=>0 <= a[0] && cc.length > a[0]);
    pos = pos.filter(a=>0 <= a[1] && cc[0].length > a[1]);
    if (cc[y][x]===1) {
      return pos.reduce((s,a)=>s+cc[a[0]][a[1]],0) === 3 || pos.reduce((s,a)=>s+cc[a[0]][a[1]],0) === 2
    } else {
      return pos.reduce((s,a)=>s+cc[a[0]][a[1]],0) === 3
    }
  }
  function rezero(arr) {
    while (arr[0].some(a=>a===1)=== false) {
      arr.shift();
    }
    while (arr[arr.length-1].some(a=>a===1)===false) {
      arr.pop();
    }
    while (!arr.some(a=>a[0]===1)) {
      arr = arr.map(a=>{a.shift(); return a});
    }
    while (!arr.some(a=>a[a.length-1]===1)) {
      arr = arr.map(a=>{a.pop(); return a});
    }
    return arr;
  }
  for (var i = 0; i < generations; i++) {
      cc = cc.map(a=>{a.unshift(0);a.push(0);return a});
      var z = [...Array(cc[0].length)].fill(0);
      cc.push(z); cc.unshift(z);
      
      var t = cc.map((a,y)=>a.map((b,x)=>check(y,x)?1:0));
      cc = rezero(t);
      //console.log(htmlize(cc));
  }
  return cc 
}
//https://www.codewars.com/kata/decode-the-morse-code-advanced/train/javascript
var decodeBits = function(bits){
    bits = bits.replace(/^0+/, '')
    bits = bits.replace(/0+$/, '')
    //console.log(bits);
    var zbit = bits.match(/[0]+/gi);
    var obit = bits.match(/[1]+/gi);
    if (!zbit) { return obit ? '.' : '';}
    var zbitcode = Array.from(new Set(zbit.map(a=>a.length)));
    var obitcode = Array.from(new Set(obit.map(a=>a.length)));
    var bitlen = Array.from(new Set(zbitcode.concat(obitcode)));
    obitcode.sort((a,b)=>a-b);
    bitlen.sort((a,b)=>a-b);
    //console.log(bitlen, obitcode);
    // morse
    var dot = ['1'.repeat(obitcode[0] ? obitcode[0] : bitlen[0])];//'.';
    var bar = ['1'.repeat(obitcode[1] ? obitcode[1] : bitlen[1] ? bitlen[1] : bitlen[0]*2)];// '-';
    var word = ['0'.repeat(obitcode[0]*2)];// '|';
    //console.log(dot,bar)
    var mbit = bits.split(bar).join('-');
    mbit = mbit.split(dot).join('.');
    mbit = mbit.split(word).join('|');
    mbit = mbit.split('0').join('');
    //console.log(mbit);
    return mbit;
}

var decodeMorse = function(morseCode){
    //console.log(MORSE_CODE)
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    var a = morseCode.split('|||');
    var re = a.map(b=>b.split('|').map(c=>MORSE_CODE[c]).join('')).join(' ')
    return re;
}
//https://www.codewars.com/kata/the-observed-pin/train/javascript
function getPINs(observed) {
  // TODO: This is your job, detective!
  var padd = {
    "1" : ["1","2","4"],
    "2" : ["1","2","3","5"],
    "3" : ["2","3","6"],
    "4" : ["1","4","5","7"],
    "5" : ["2","4","5","6","8"],
    "6" : ["3","5","6","9"],
    "7" : ["4","7","8"],
    "8" : ["5","7","8","9","0"],
    "9" : ["6","8","9"],
    "0" : ["8","0"]
  }
  var ss = observed.split('');
  var karr = [];
  var re = new Set();
  ss.map(a=>{
    karr.push(padd[a]);
  });
  function kcom(arr, idx, kc) {
    if (idx === arr.length) {
      re.add(kc);
    } else {
      for(var i = 0; i < karr[arr[idx]].length; i++) {
        kcom(arr, idx+1, kc+karr[arr[idx]][i])        
      }
    }
  }
  kcom([...Array(ss.length)].map((a,i)=>i),0,"");
  return Array.from(re);
}
//https://www.codewars.com/kata/simple-fun-number-395-fibonacci-digit-sequence/train/javascript
function find(a,b,n){
  //coding and coding..
  var re = ''+a+b;
  if (n === 0) { return a }
  if (a + b === 0 ) { return a+b }   
  while (re.length <= n) {
    re = re + (+re[re.length-2]+(+re[re.length-1]));
  }
  return +re[n]
}
//https://www.codewars.com/kata/5ca6c0a2783dec001da025ee/solutions/javascript
function numBlocks(w, l, h) {
  return w * l * h + (w + l) * h * (h - 1n) / 2n + h * (h - 1n) * (2n * h - 1n) / 6n;
};
//https://www.codewars.com/kata/packing-your-backpack/train/javascript
function packBagpack(scores, weights, capacity) {
    var re = 0;
    var permArr = [], usedChars = [];
    var iarr = [...Array(scores.length)].map((a,i)=>i);
    //console.log(scores, weights, capacity);
    function dp (arr, w, p, idx) {
      if (w <= capacity) {
        arr.map((a,i)=>{
          var m = arr.slice();
          var aa = m.splice(i,1);
          dp(m, w + weights[aa], p + scores[aa], aa);
        });
      } else {
        re = re < p - scores[idx] ? p - scores[idx] : re;
      }
    }
    dp(iarr, 0, 0, -1);
    
    return re;   
}
//https://www.codewars.com/kata/whats-my-golf-score/train/javascript
function golfScoreCalculator(parList, scoreList){
  var a = parList.split('');
  var b = scoreList.split('');
  var re = a.map((s,i) => (+s) - (+b[i]));
  return -re.reduce((s,p)=>s+p,0);
}
//https://www.codewars.com/kata/josephus-survivor/train/javascript
function josephusSurvivor(n,k){
  //your code here
  var arr = [...Array(n)].map((a,i)=>i+1);
  var i = 0, j = 1;
  while (arr.length > 1) {
    i += k-1;
    i %= arr.length;
    arr.splice(i,1);
  }
  return arr[0];
}
//https://www.codewars.com/kata/additionless-addition/train/javascript
const add = (x,y) => y ? add(x^y,(x&y)<<1) : x;
//https://www.codewars.com/kata/subtract-big-numbers/train/javascript
function subtract(a, b)
{
  function neg(ar, br) {
    if (ar.length < br.length) {
      return true;
    }
    if (ar.length === br.length) {
      for (var i = ar.length-1; i >-1; i--) {
        if ( ar[i] < br[i] ) {
          return true;
        }
        if ( ar[i] > br[i] ) {
          break;
        }
      }
    }
    return false;
  }
  var aarr = a.split(''); while(aarr[0]==='0') { aarr.shift();}
  var barr = b.split(''); while(barr[0]==='0') { barr.shift();}
  aarr = aarr.map(a=>+a).reverse(); 
  barr = barr.map(a=>+a).reverse();
  var len = Math.max(aarr.length, barr.length);
  var re = [...Array(len)].map(a=>0);
  var n = false;
  if (neg(aarr, barr)) {
    var t = barr;
    barr = aarr
    aarr = t;
    n = true;
  }
  for (var i = 0 ; i < re.length ; i++) {
    re[i] = aarr[i] - (barr[i]?barr[i]:0);
    if (re[i] < 0) {
      if (aarr[i+1] !== undefined) {
        aarr[i+1] -= 1;
        re[i] += 10;
      } else {
        aarr.push(0);
        aarr[i+1] -= 1;
        re[i] += 10;
      }
    }
  }
  re = re.reverse();
  while(re[0] === 0) {re.shift(); } 
  re = re.length === 0? [0] : re;
  return (n?'-':'')+ re.join('')
}
//https://www.codewars.com/kata/katastrophe/train/javascript
function strongEnough(earthquake, age) {
//your code here
  var agearr = [...Array(age+1)];
  agearr[0] = 1000;
  for (var i = 1; i < agearr.length; i++) {
    agearr[i] = agearr[i-1] - agearr[i-1]*0.01;
  }
  var re = earthquake.reduce((s,a)=>s*a.reduce((ss,aa)=>ss+aa,0),1);
  return re < agearr[age] ? "Safe!" : "Needs Reinforcement!";
}
//https://www.codewars.com/kata/battleship-field-validator/train/javascript
function validateBattlefield(field) {
  // write your magic here
  console.log(field)
  var chk = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,-1]];
  function matchp (pos) { 
    var re = true; 
    var patt = [
      '00000000',
      '01000000',
      '00000010',
      '01000010',
      '00001000',
      '00010000',
      '00011000'
    ];
    var fi = chk.map(a=>field[pos[0]+a[0]][pos[1]+a[1]]).join('');
    
    return patt.indexOf(fi) > -1 ? true : false;
  }

  var re = true;
  field.unshift([...Array(field[0].length+2)].map(a=>0));
  field.push([...Array(field[0].length+2)].map(a=>0));
  field = field.map(a=>{
    a.push(0);
    a.unshift(0);
    return a;    
  });
  field.map((a,y)=>a.map((b,x)=>{
    if (b === 1) {
      if (matchp([y,x]) === false) {
        re = false;
      }
    }
  }));
  
  
  field = field.map(a=> {
    var f = a.join('');
    f = f.split('1111').join('ffff');
    f = f.split('111').join('ttt');
    f = f.split('11').join('rr');
    return f.split('');
  });
  field[0].map((a,x)=>{
    var f = field.map(xx=>xx[x]).join('');
    f = f.split('1111').join('ffff');
    f = f.split('111').join('ttt');
    f = f.split('11').join('rr');
    f.split('').map((c,i)=>{
      field[i][x] = c;  
    });
  });
  var so = field.reduce((s,a)=>s.concat(a),[]);
  if (so.filter(a=>a==='f').length === 4 
  && so.filter(a=>a==='t').length === 6
  && so.filter(a=>a==='r').length === 6
  && so.filter(a=>a==='1').length === 4 ) {
    return re;
  } else {
    return false;
  }
}
//https://www.codewars.com/kata/530e15517bc88ac656000716/solutions/javascript
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/solutions/javascript
function solve(s){
    //..
    var l = s.match(/[a-z]/g);
    var u = s.match(/[A-Z]/g);
    
    if ((l ? l.length:0) < (u ? u.length : 0))
    {
      return s.toUpperCase();
    } else {
      return s.toLowerCase();
    }
}
//https://www.codewars.com/kata/multiplying-numbers-as-strings/train/javascript
function multiply(a, b) {
  var aarr = a.split('').reverse().map(a=>+a);
  var barr = b.split('').reverse().map(a=>+a);
  var rearr = [...Array(a.length + b.length + 2)].map(a=>0);
  aarr.map((a,i)=>{
    barr.map((b,j)=>{
      var c = b * a;
      rearr[i+j] += c;
      if (rearr[i+j] > 10) {
        rearr[i+j+1] += ~~(rearr[i+j] / 10);
        rearr[i+j] %= 10;
      }
    });
  });
  while (rearr.some(a=>a>9)) {
    rearr.map((a,i)=> {
      if (a>9) {
        rearr[i+1] += ~~(rearr[i] / 10);
        rearr[i] %= 10;
      }
    });
  }
  while (rearr[rearr.length-1] === 0) {
    rearr.pop();
  }
  return rearr.length === 0 ? "0" : rearr.reverse().map(a=>''+a).join('')  
}
//https://www.codewars.com/kata/52ec24228a515e620b0005ef/solutions/javascript
var memo = [];

function sum(n, m = n) {
    if (n == 0) return 1;
    if (n < 0 || m == 0) return 0;
    if (memo[n] && memo[n][m]) return memo[n][m];
    let total = sum(n, m - 1) + sum(n - m, m);
    if (!memo[n]) {
        memo[n] = [];
    }
    memo[n][m] = total;
    return total;
}
//https://www.codewars.com/kata/breadcrumb-generator/train/javascript
function generateBC(url, separator) {
  //your code here
  var WORD = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
  if (url.indexOf("//")>-1) {
    var t = url.split("//");
    url = t[1];
  }
  if (url[url.length-1] === '/') { url = url.slice(0,url.length-1); }
  var re = ['<a href="/">HOME</a>'];
  var uarr = url.split('/');
  var apart = "/";

  var lpart = uarr[uarr.length-1].split(/[#?&]/);
  var lcf = lpart[0].split('.');
  if (lcf[0] === 'index') { 
    uarr.pop(); 
    lcf = [uarr[uarr.length-1]];
  }
  if (uarr.length === 1) { return `<span class="active">HOME</span>`; }
  for (var i = 1; i < uarr.length-1; i++) {
    apart += uarr[i] + "/";
    uarr[i] = uarr[i].length > 30 ? uarr[i].split('-').filter(a=>WORD.indexOf(a)===-1).map(a=>a[0]).join('') : uarr[i].split('-').join(' ');
    uarr[i] = uarr[i].toUpperCase();
    re.push(`<a href="${apart}">${uarr[i]}</a>`);
  }
  lcf = lcf[0].length > 30 ? lcf[0].split('-').filter(a=>WORD.indexOf(a)===-1).map(a=>a[0]).join('') : lcf[0].split('-').join(' ').toUpperCase();
  lcf = lcf.toUpperCase();
  var lp = `<span class="active">${lcf}</span>`;
  re.push(lp);
  return re.join(separator);
}
//https://www.codewars.com/kata/537e18b6147aa838f600001b/solutions/javascript
/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
  // Your code goes here
  var sarr = str.split(' ');
  var line = [];
  var lines = [];
  var tl = 0;
  
  for (var i = 0; i < sarr.length; i++) {
    if ((line.length)+tl+sarr[i].length > len) {
      var mline = "";
      if (line.length === 1) {
        mline = line;
      } else {
        var c = line.length-1;
        var cs = len - tl;
        var gap = [...Array(c)].map(a=>0);
        for (var si = 0; si < cs; si++) {
          gap[si%c] += 1;
        }
        for (var si = 0; si < gap.length; si++) {
          mline += line[si] + ' '.repeat(gap[si]);
        }
        mline += line[si];
      }
      lines.push(mline);
      line = [sarr[i]];
      tl = sarr[i].length;
    } else {
      line.push(sarr[i])
      tl += sarr[i].length;
    }
  }
  
  if ((line.length-1)+tl > len) {
    var mline = "";
    var lw = line.pop();
    var c = line.length-1;
    var cs = len - tl - lw.length;
    var gap = [...Array(c)].map(a=>0);
    for (var si = 0; si < cs; si++) {
      gap[si%c] += 1;
    }
    for (var si = 0; si < gap.length; si++) {
      mline += line[si] + ' '.repeat(gap[si]);
    }
    mline += line[si];
    lines.push(mline);
    lines.push(lw);
  } else {
    lines.push(line.join(' '));
  }
  return lines.join('\n')
};
//https://www.codewars.com/kata/lost-number-in-number-sequence/train/javascript
function findDeletedNumber(arr, mixArr) {
  // your code
  var re = new Set();
  arr.map(a=>{re.add(a)});
  mixArr.map(a=>{re.delete(a)});
  var an = Array.from(re)[0]
  return an ? an : 0;
}
//https://www.codewars.com/kata/adding-useful-functional-functionality-to-javascript-arrays/train/javascript
Array.range = function(start, count) {
  return [...Array(count)].map((a,i)=>i+start);
}

Array.prototype.sum = function() {
  return this.reduce((s,a)=>s+a,0);
}
//https://www.codewars.com/kata/5550d638a99ddb113e0000a2/solutions/javascript
function josephus(items,k){
  //your code here
  var i = -1, ii = 0;
  var rarr = [...Array(items.length)].map(a=>-1);
  var c = 0, chk = items.length;
  var sp =0;
  while(c<chk ) {
    i = (i+1) % chk;
    if (rarr[i] === -1) {
      ii++;
    }
    if (ii == k) {
      rarr[i] = c;
      c++;
      ii = 0;
    }
    sp++;
  }
  var re = [...Array(chk)];
  rarr.map((a,i)=> {re[a] = items[i];});
  return re;
}
//https://www.codewars.com/kata/insert-dashes/train/javascript
function insertDash(num) {
   //code me
   return (''+num).split('').reduce((s,a)=>{
     if (+s[s.length-1] % 2 === 1 && +a % 2=== 1) {
       a="-"+a;
     }
     return s + a;
   });
}
//https://www.codewars.com/kata/rot13/solutions/javascript/me/best_practice
function rot13(str) {
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');
  var key = {};
  input.map((a,i)=>{key[a]=output[i]});
  
  return str.split('').map(a=>key[a]?key[a]:a).join('')
}
//https://www.codewars.com/kata/path-finder-number-3-the-alpinist/train/javascript
function pathFinder(area) {
  area = area.split('\n').map(a => a.split('').map(n => +n));
  var pathM = [...Array(area.length)].map(a => [...Array(area[0].length)].map(b => Infinity));
  var firstatti = area[0][0];

  function maker(p, pp, ba) {
    if (pathM[pathM.length - 1][pathM[0].length - 1] <= pp) { return; }
    var ca = area[p[0]][p[1]];
    var ma = Math.abs(ba - ca);
    if (pathM[p[0]][p[1]] <= pp + ma) { return; }
    pathM[p[0]][p[1]] = pp + ma;
    if (p[0] === area.length - 1 && p[1] === area[0].length - 1) {
      return;
    }
    //console.log(count,p);
    if (p[1] + 1 < area[0].length) {
      maker([p[0], p[1] + 1], pp + ma, ca)
    }
    if (p[0] + 1 < area.length) {
      maker([p[0] + 1, p[1]], pp + ma, ca)
    }
    if (p[1] - 1 >= 0) {
      maker([p[0], p[1] - 1], pp + ma, ca)
    }
    if (p[0] - 1 >= 0) {
      maker([p[0] - 1, p[1]], pp + ma, ca)
    }
  }
  maker([0, 0], 0, firstatti);
  //console.log(area)
  var re = pathM[pathM.length - 1][pathM[0].length - 1];

  return Number.isInteger(re) ? re : false;
}
function pathFinder(area) {
  var maze = area.split('\n').map(a => a.split('').map(n => +n));
  var re = maze.length * maze[0].length * 9;

  function maker(pos, count, batti) {
    if (re <= count) { return; }
    if (pos[0] === maze.length - 1 && pos[1] === maze[0].length - 1) {
      if (re > count) { re = count; }
      return;
    }
    count += Math.abs(batti - maze[pos[0]][pos[1]]);
    //console.log(count,pos);
    if (pos[1] + 1 < maze[0].length) {
      maker([pos[0], pos[1] + 1], count, maze[pos[0]][pos[1]])
    }
    if (pos[0] + 1 < maze.length) {
      maker([pos[0] + 1, pos[1]], count, maze[pos[0]][pos[1]])
    }
    if (pos[1] - 1 >= 0) {
      maker([pos[0], pos[1] - 1], count, maze[pos[0]][pos[1]])
    }
    if (pos[0] - 1 >= 0) {
      maker([pos[0] - 1, pos[1]], count, maze[pos[0]][pos[1]])
    }
  }
  maker([0, 0], maze[0][0]);
  //console.log(maze)
  var re = maze[maze[0].length - 1][maze.length - 1];

  return Number.isInteger(re) ? re : false;
}
//https://www.codewars.com/kata/path-finder-number-2-shortest-path/train/javascript
function pathFinder(maze) {
  maze = maze.split('\n').map(a => a.split(''));
  var m = maze.length * maze[0].length;

  function maker(pos, count) {
    if (maze[pos[0]][pos[1]] === 'W') { return; }
    if (m < count) { return; }
    if (maze[pos[0]][pos[1]] !== '.') {
      if (maze[pos[0]][pos[1]] <= count) {
        return;
      }
    }
    maze[pos[0]][pos[1]] = count;
    if (pos[0] === maze.length - 1 && pos[1] === maze[0].length - 1) { return; }
    //console.log(count,pos);
    if (pos[1] + 1 < maze[0].length) {
      maker([pos[0], pos[1] + 1], count + 1)
    }
    if (pos[0] + 1 < maze.length) {
      maker([pos[0] + 1, pos[1]], count + 1)
    }
    if (pos[1] - 1 >= 0) {
      maker([pos[0], pos[1] - 1], count + 1)
    }
    if (pos[0] - 1 >= 0) {
      maker([pos[0] - 1, pos[1]], count + 1)
    }
  }
  maker([0, 0], 0);
  //console.log(maze)
  var re = maze[maze[0].length - 1][maze.length - 1];

  return Number.isInteger(re) ? re : false;
}
//https://www.codewars.com/kata/path-finder-number-1-can-you-reach-the-exit/
function pathFinder(maze) {
  maze = maze.split('\n').map(a => a.split(''));
  function maker(pos) {
    if (maze[pos[0]][pos[1]] === '.') {
      maze[pos[0]][pos[1]] = 'x'
      if (pos[0] - 1 >= 0) {
        maker([pos[0] - 1, pos[1]])
      }
      if (pos[0] + 1 < maze.length) {
        maker([pos[0] + 1, pos[1]])
      }
      if (pos[1] - 1 >= 0) {
        maker([pos[0], pos[1] - 1])
      }
      if (pos[1] + 1 < maze[0].length) {
        maker([pos[0], pos[1] + 1])
      }
    }
  }
  maker([0, 0]);
  return maze[maze[0].length - 1][maze.length - 1] === 'x';
}
//https://www.codewars.com/kata/5a3af5b1ee1aaeabfe000084/solutions/javascript
function sumOfSquares(n) {
  if (Math.sqrt(n) % 1 === 0) return 1;
  while ((n & 3) == 0) {
    n >>= 2;
  }
  if ((n & 7) == 7) {
    return 4;
  }
  var sq = Math.floor(Math.sqrt(n));
  for (var i = 1; i <= sq; i++) {
    if (Math.sqrt(n - i * i) % 1 === 0) {
      return 2;
    }
  }
  return 3;
}
//https://www.codewars.com/kata/errors-histogram/train/javascript
function hist(s) {
  // your code
  var sarr = s.split('');
  var hist = ['u', 'w', 'x', 'z'];
  return hist.map(cc => {
    var c = '' + sarr.filter(a => a === cc).length;
    if (c === '0') return '';
    return cc + '  ' + c + ' '.repeat(6 - c.length) + '*'.repeat(+c);
  }).filter(a => a != '').join('\r');
}
//https://www.codewars.com/kata/noobcode-03-check-these-letters-dot-dot-dot-see-if-letters-in-string-1-are-present-in-string-2/train/javascript
function letterCheck(arr) {
  //write your code here!!
  var o = {};
  arr[0].toLowerCase().split('').map(a => { o[a] = true; });
  return arr[1].toLowerCase().split('').every(a => o[a]);
}
//https://www.codewars.com/kata/remove-empty-items-of-array/train/javascript
function clean(arr) {
  return arr.filter(a => a || a === undefined || a === null || Number.isNaN(a) || a === false || a === 0 || a == '');
}
//https://www.codewars.com/kata/5831c204a31721e2ae000294/solutions/javascript
function swap(st) {
  return st.split('').map(a => /[aeiou]/.test(a) ? a.toUpperCase() : a).join('');
}
//https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b/solutions/javascript
function pyramid(n) {
  //your code here
  var re = [...Array(n)].map((a, i) => "/" + " ".repeat(i * 2) + "\\" + "\n");
  re[re.length - 1] = re[re.length - 1].split(" ").join("_");
  re = re.map((a, i) => ' '.repeat(re.length - i - 1) + a);
  return re.join('');
}
//https://www.codewars.com/kata/554e52e7232cdd05650000a0/solutions/javascript
function lowestProduct(input) {
  var i = input.split('').map(a => +a);
  if (i.length < 4) return "Number is too small";
  var min = i.slice(0, 4).reduce((s, a) => s * a);
  for (var k = 0; k < i.length - 3; k++) {
    var s = i.slice(k, k + 4).reduce((s, a) => s * a);
    if (min > s) { min = s; }
  }
  return min;
}
//https://www.codewars.com/kata/5c8bf3ec5048ca2c8e954bf3/solutions/javascript
function shortesttoChar(S, C) {
  // your code... Good luck :D
  if (S.length === 0 || C.length === 0) { return [] }
  var arr = S.split('');
  var idarr = arr.map((a, i) => a === C ? i : false).filter(a => a !== false);
  if (idarr.length === 0) return [];
  return arr.map((a, i) => Math.min(...idarr.map(b => Math.abs(b - i))));
}
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
          if (done === false) { }
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
  return status ? "Hello, " + name.split('').map((a, i) => i === 0 ? a.toUpperCase() : a.toLowerCase()).join('') + '!' : "Hello, World!";
}

function one(arr, fun) {
  // ...
  return arr.filter(a => fun(a)).length === 1;
}
// https://www.codewars.com/kata/5ba47374b18e382069000052
function minRemove(arr) {
  //..
  var max = Math.ceil(Math.sqrt(Math.max(...arr)));
  var min = Math.min(...arr);
  var red = arr.length
  for (var i = min; i <= max; i++) {
    var t = arr.filter(a => a < i || a > Math.pow(i, 2)).length
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
      sumf(a, i + 1, s + a[i]);
      sumf(a, i + 1, s - a[i]);
    }
  }
  sumf(arr, 1, arr[0]);

  return re;
}
//https://www.codewars.com/kata/57cc981a58da9e302a000214/
function smallEnough(a, limit) {
  return a.every(a => a <= limit);
}
//https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/
function triangle(row) {
  // Return the answer
  var col = {
    "GG": "G",
    "RR": "R",
    "BB": "B",
    "RG": "B",
    "GR": "B",
    "BG": "R",
    "GB": "R",
    "RB": "G",
    "BR": "G"
  }
  var arr = row.split('')
  function tri(ar) {

    if (ar.length === 1) {
      return ar[0];
    } else {
      var ne = Array.apply(null, Array(ar.length - 1)).map((a, i) => {
        return col[ar[i] + ar[i + 1]];
      });
      return tri(ne);
    }
  }

  return tri(arr);
}
//https://www.codewars.com/kata/simple-string-matching/train/javascript
function solve(a, b) {
  a = a.replace("*", "\\S*");
  var re = new RegExp(a);
  return b.match(re) == b ? true : false
}
//https://www.codewars.com/kata/5734c38da41454b7f700106e/
function onlyOne() {
  return Array.from(arguments).filter(a => a).length === 1

}
// https://www.codewars.com/kata/5b55c49d4a317adff500015f/solutions/javascript
function pointsNumber(radius) {
  // your code...
  var n = radius;
  var rr = n * n;
  var point = 0;
  for (var i = 1; i < n; i++) {
    point += Math.floor(Math.sqrt(rr - i * i));
  }
  return n * 4 + (point) * 4 + 1;
}
// https://www.codewars.com/kata/5aba0a08379d20026e0000be/
function jeringonza(aa) {
  // your copodede here :)
  return aa.split('').map(a => {
    if ('aeiou'.indexOf(a) > -1) {
      return a + 'p' + a
    } else if ('AEIOU'.indexOf(a) > -1) {
      return a + 'P' + a;
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
  var nums = (input + '').split('').map(a => +a);
  while (nums.length > 1) {
    var temp = nums.slice(0);
    nums = [];
    temp.map((a, i) => {
      if (i < temp.length - 1) {
        nums.push(Math.round(((+a) + (+temp[i + 1])) * 0.5))
      }
    });
  }
  return nums[0]
}
// https://www.codewars.com/kata/the-office-ii-boredom-score/train/javascript
function boredom(staff) {
  var kmap = {
    "accounts": 1,
    "finance": 2,
    "canteen": 10,
    "regulation": 3,
    "trading": 6,
    "change": 6,
    "IS": 8,
    "retail": 5,
    "cleaning": 4,
    "pissing about": 25
  };
  var sum = Object.keys(staff).reduce((s, a) => s + kmap[staff[a]], 0);
  return sum <= 80 ? 'kill me now' : sum < 100 ? 'i can handle this' : 'party time!!';
}
//https://www.codewars.com/kata/5a91a7c5fd8c061367000002/
function minimumSteps(numbers, value) {
  //your code here
  numbers = numbers.sort((a, b) => a - b);
  var sum = numbers[0], count = 1;
  while (value > sum) {
    sum += numbers[count];
    count++;
  }
  return count - 1;
}
// https://www.codewars.com/kata/thinkful-list-and-loop-drills-inverse-slicer/train/javascript
function inverseSlice(items, a, b) {
  return items.slice(0, a).concat(items.slice(b));
}
// https://www.codewars.com/kata/5be8852935da89c5c8000157/
function moonRating(rating) {
  //your code goes here
  var r = Math.round(rating);
  var re = ''
  while (r > 0) {
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
  var nextpos = [[pos[0] - 2, pos[1] - 1], [pos[0] - 1, pos[1] - 2], [pos[0] + 1, pos[1] + 2], [pos[0] + 2, pos[1] + 1]
    , [pos[0] - 2, pos[1] + 1], [pos[0] - 1, pos[1] + 2], [pos[0] + 1, pos[1] - 2], [pos[0] + 2, pos[1] - 1]
  ];

  return nextpos.filter(a => a[0] < 8 && a[0] > -1 && a[1] < 8 && a[1] > -1).map(a => xl[a[0]] + yl[a[1]]).sort();
}
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/
function upArray(arr) {
  // ... 
  if (arr.length === 0) return null;
  if (arr.some(a => a < 0) || arr.some(a => a > 9)) return null;
  arr[arr.length - 1] += 1;
  arr = arr.reverse().map((a, i) => {
    if (i < arr.length - 1) {
      if (a >= 10) {
        arr[i + 1]++;
        return a % 10;
      }
    }
    return a;
  });
  if (arr[arr.length - 1] === 10) {
    arr[arr.length - 1] = 0;
    arr.push(1);
  }
  return arr.reverse();
}
// https://www.codewars.com/kata/551602850cc0afa0a60000e6
function upperTriangular(mat) {
  // ...
  var l = mat[0][0];
  var cl = mat.every((a, i) => a[i] === l);
  var low = mat.every((a, i) => { if (i === 0) { return true } else { return a.slice(0, i).every(b => b === 0) } });
  return cl && low
}

function lowerTriangular(mat) {
  // ...
  var l = mat[0][0];
  var cl = mat.every((a, i) => a[i] === l);
  var low = mat.every((a, i) => { if (i === mat.length - 1) { return true } else { return a.slice(i + 1, mat.length - 1).every(b => b === 0) } });
  return cl && low
}
//https://www.codewars.com/kata/simple-string-indices/train/javascript
function solve(str, idx) {
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
function tickToward(start, end) {
  var a1 = end[0] - start[0];
  var a2 = end[1] - start[1];
  var len = Math.abs(a2) > Math.abs(a1) ? Math.abs(a2) : Math.abs(a1); len++;
  var re = Array.apply(null, Array(len)).map((a, i) =>
    [start[0] + (a1 > 0 ? (i > a1 ? a1 : i) : (i < -a1 ? -i : a1)),
    start[1] + (a2 > 0 ? (i > a2 ? a2 : i) : (i < -a2 ? -i : a2))]
  );
  return re;
}
//https://www.codewars.com/kata/making-change/train/javascript
const makeChange = (amount) => {
  var m = [50, 25, 10, 5, 1];
  var mc = ['H', 'Q', 'D', 'N', 'P'];
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
function meeting(x, need) {
  if (need <= 0) return 'Game On';
  var cneed = need;
  var re = [];
  console.log(x)
  x.map(a => {
    var m = (typeof a[0] === 'string') ? a[0].split('').length : a[0].length;
    var c = a[1];
    var rem = c - m;
    if (need > 0) {
      if (rem < need) {
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
      }
    }
  });
  return re.reduce((s, a) => s + a, 0) === cneed ? re : 'Not enough!';
}
//https://www.codewars.com/kata/cat-and-mouse-harder-version/train/javascript
function catMouse(x, j) {
  var catPos = x.indexOf('C');
  var mousePos = x.indexOf('m');
  var dogPos = x.indexOf('D');
  if (catPos === -1 || mousePos === -1 || dogPos === -1) { return 'boring without all three'; }

  if (Math.abs(catPos - mousePos) <= j) {
    var po = x.replace(/\./gi, '');
    if (po === 'CDm' || po === 'mDC') {
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

function toBcd(number) {
  var s = number.toString().split('');
  if (s[0] !== '-') {
    var re = '';
    s = s.map(a => ((+a).toString(2)).padStart(4, '0'));
    re = re + s.join(' ');
    return re;
  } else {
    var re = '-';
    s.shift();
    s = s.map(a => ((+a).toString(2)).padStart(4, '0'));
    re = re + s.join(' ');
    return re;
  }
}
//https://www.codewars.com/kata/the-office-iv-find-a-meeting-room/train/javascript
function meeting(x) {
  var xc = (x.join('')).indexOf('O')
  return xc > -1 ? xc : 'None available!';
}
//https://www.codewars.com/kata/flatten-and-sort-an-array/train/javascript
function flattenAndSort(array) {
  // Good luck, brave code warrior!
  array = array.reduce((s, a) => s.concat(a), []).sort((a, b) => a - b);
  return array;
}
//https://www.codewars.com/kata/alphabet-wars-reinforces-massacre/train/javascript
function alphabetWar(reinforces, airstrikes) {
  var re = Array.apply(null, Array(reinforces[0].length)).map(a => 0);
  airstrikes.map((a, i) => {
    var setbomb = new Set();
    a.split('').map((b, ii) => {
      if (b === '*') {
        setbomb.add(ii - 1);
        setbomb.add(ii);
        setbomb.add(ii + 1);
      }
    });
    var arbomb = Array.from(setbomb);
    arbomb.map(a => {
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
function alphabetWar(fight) {
  var left = 'sbpw'.split('');
  var right = 'zdqm'.split('');
  var lp = 0;
  var rp = 0;
  var fi = fight.split('');
  var b = new Set();
  fi.map((a, i) => {
    if (a === '*') {
      if (fi[i - 1]) { b.add(i - 1) }
      if (fi[i]) { b.add(i) }
      if (fi[i + 1]) { b.add(i + 1) }
    }
  });
  fi.map((a, i) => {
    if (left.indexOf(a) > -1 && b.has(i) === false) {
      lp += left.indexOf(a) + 1;
    }
    if (right.indexOf(a) > -1 && b.has(i) === false) {
      rp += right.indexOf(a) + 1;
    }
  });
  return lp === rp ? "Let's fight again!" : lp > rp ? "Left side wins!" : "Right side wins!";
}
//https://www.codewars.com/kata/bocce/train/javascript
function bocceScore(balls) {
  var jackP = balls.filter(a => a['type'] === "jack")[0]["distance"];
  var disbA = [];
  var disrA = [];
  var disA = [];
  balls.filter(a => a['type'] === "black").map(a => {
    var bp = a["distance"];
    disbA.push(["black", Math.pow(Math.abs(bp[0] - jackP[0]), 2) + Math.pow(Math.abs(bp[1] - jackP[1]), 2)]);
  })
  balls.filter(a => a['type'] === "red").map(a => {
    var bp = a["distance"];
    disrA.push(["red", Math.pow(Math.abs(bp[0] - jackP[0]), 2) + Math.pow(Math.abs(bp[1] - jackP[1]), 2)]);
  })
  disbA.map(a => {
    var dup = false;
    for (var i = 0; i < disrA.length; i++) {
      if (disrA[i][1] === a[1]) {
        dup = true;
        disrA.splice(i, 1)
        break;
      }
    }
    if (!dup) {
      disA.push(a);
    }
  });
  disA = disA.concat(disrA);
  disA.sort((a, b) => a[1] - b[1]);
  for (var i = 0; i < disA.length; i++) {
    if (disA[0][0] !== disA[i][0]) {
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
  hello() { return Object.keys(this).reduce((r, k) => r += ' ' + (k == 'name' ? `My name is ${this.name}.` : k == 'age' ? `I am ${this.age}.` : `I am ${this.sex == 'M' ? "male" : "female"}.`), 'Hello.'); }
}

//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return [...arguments].reduce((s, a) => s + a);
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
  var max = Math.max(...text.map(a => a.length));
  var re = text.map(a => char + " " + a + " ".repeat((max - a.length)) + " " + char);
  re.unshift(char.repeat(max + 4))
  re.push(char.repeat(max + 4))
  return re.join('\n');
};
//https://www.codewars.com/kata/backspaces-in-string/train/javascript
function clean_string(s) {
  var sarr = s.split('');
  var re = [];
  sarr.map(a => {
    if (a === '#') {
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
function commas(num) {
  //Add some commas!
  var minus = num >= 0 ? '' : '-';
  num = Math.abs(num);

  var snum = num + '';

  if (snum.indexOf('.') > -1) {
    var sns = snum.split('.');
    var num0 = sns[0];
    var num1S = sns[1].length - 3;

    var num1 = round((num1S > -1 ? ((+sns[1]) / Math.pow(10, num1S)) : +sns[1]) * (minus.length === 1 ? -1 : 1));
    num1 = num1S > 0 ? num1 / 1000 : num1 / (Math.pow(10, num1S + 3));
    num1 = Math.abs(num1);
    if (num1 >= 1) {
      num0++;
      num1 = num1 - 1;
    }
    num1 = num1 + '';
    if (num1.indexOf('.') > -1) {
      num1 = '.' + num1.split('.')[1]
    } else {
      num1 = '';
    }
    return minus + addcmm(num0) + num1;
  } else {
    return minus + addcmm(snum);
  }

  function addcmm(n) {
    if (n.length < 4) { return n; }
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
    ["  $$$$ ", " $$  $$", " $$  $$", " $$  $$", " $$  $$", "  $$$$ "],
    ["   $$  ", "  $$$  ", " $ $$  ", "   $$  ", "   $$  ", " $$$$$$"],
    ["  $$$$ ", " $$  $$", "    $$ ", "   $$  ", "  $$   ", " $$$$$$"],
    ["  $$$$ ", " $$  $$", "    $$ ", "    $$ ", " $$  $$", "  $$$$ "],
    [" $$  $$", " $$  $$", " $$  $$", "  $$$$$", "     $$", "     $$"],
    [" $$$$$$", " $$    ", " $$$$$ ", "     $$", "     $$", " $$$$$ "],
    ["    $$ ", "   $$  ", "  $$$$ ", " $$  $$", " $$  $$", "  $$$$ "],
    [" $$$$$$", " $$  $$", "    $$ ", "   $$  ", "  $$   ", "  $$   "],
    ["  $$$$ ", " $$  $$", "  $$$$ ", "  $$$$ ", " $$  $$", "  $$$$ "],
    ["  $$$$ ", " $$  $$", " $$  $$", "  $$$$ ", "   $$  ", "  $$   "]
  ];
  var line = '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n';
  var eline = '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$';
  var fl = '$ '; var el = '  $\n';
  var empty = '$                                      $\n';

  Num = Num.map(a => a.map(c => c.replace(/\$/g, char)));
  line = line.replace(/\$/g, char);
  eline = eline.replace(/\$/g, char);
  fl = fl.replace(/\$/g, char);
  el = el.replace(/\$/g, char);
  empty = empty.replace(/\$/g, char);

  var re = Array.apply(null, Array(10));
  re[0] = line; re[9] = eline;
  re[1] = empty; re[8] = empty;

  number = (number + '')
  number = ('0'.repeat(5 - number.length) + number).split('').map(a => +a);
  for (var i = 2; i < 8; i++) {
    re[i] = fl + number.reduce((s, a) => s + Num[a][i - 2], '') + el;
  }
  return re.join('');
}
//https://www.codewars.com/kata/ranking-system/train/javascript
function rankings(arr) {
  var rarr = arr.map((a, i) => [a, i + 1]);
  rarr = rarr.sort((a, b) => b[0] - a[0]);
  rarr = rarr.map((a, i) => [a[1], i + 1]);
  rarr = rarr.sort((a, b) => a[0] - b[0]);
  var re = rarr.map(a => a[1]);
  return re;
}
//https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/solutions/javascript.
function numPrimorial(n) {
  //your code here
  var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
  var p = prime.slice(0, n);
  return p.reduce((s, a) => s * a);
}
//https://www.codewars.com/kata/5a87449ab1710171300000fd/solutions/javascript
function tidyNumber(n) {
  //your code here
  return n + '' === (n + '').split('').sort((a, b) => (+a) - (+b)).join('')
}
// https://www.codewars.com/kata/recursive-replication/train/javascript
function replicate(times, number) {
  // your solution here
  return times < 1 ? [] : Array.apply(null, Array(times)).map(a => number);
}
//https://www.codewars.com/kata/figure-out-the-notes/train/javascript
const whatNote = (string, fret) => {
  //  Your Code Here
  var code = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  var now = code.indexOf(string.toUpperCase());
  var addf = (now + fret) % code.length;
  return code[addf];
};
//https://www.codewars.com/kata/pascals-diagonals/train/javascript
function generateDiagonal(n, l) {
  // return an array containing the numbers in the nth diagonal of Pascal's triangle, to the specified length
  if (n === 0) return Array(null, Array(l)).map(a => 1);

  var ar = [[1], [1, 1]];
  if (l > 2) {
    for (var k = 2; k < l + n; k++) {
      var t = ar[k - 1].slice(0);
      var next = t.map((a, i) => i < t.length - 1 ? t[i + 1] + a : a);
      next.pop();
      next.push(1);
      next.unshift(1);
      ar.push(next);
    }
  }
  ar = ar.slice(n, ar.length);
  return ar.map(a => a[n])
}
//https://www.codewars.com/kata/word-mesh/train/javascript
function wordMesh(arr) {
  var re = '';
  for (var i = 0; i < arr.length - 1; i++) {
    var a = arr[i];
    var b = arr[i + 1];
    if (a.length > b.length) {
      a = a.slice(a.length - b.length, a.length);
    } else {
      b = b.slice(0, a.length);
    }
    var t = mesh(a, b);
    if (t == '') return 'failed to mesh';
    re = re + t;
  }
  return re;
  // Your code here.
  function mesh(xstr, ystr) {
    if (xstr === ystr) {
      return xstr;
    } else {
      return mesh(xstr.slice(1), ystr.slice(0, ystr.length - 1));
    }
  }
}
//https://www.codewars.com/kata/5a58d889880385c2f40000aa/solutions/javascript
function automorphic(n) {
  //your code here
  return ((n * n + '').split('').reverse().join('')).indexOf((n + '').split('').reverse().join('')) === 0 ? "Automorphic" : "Not!!"
}
//https://www.codewars.com/kata/even-binary-sorting/train/javascript
function evenBinary(n) {
  //Goodluck, Have Fun!
  var ei = [];
  n = n.split(' ').map((a, i) => { if (parseInt(a, 2) % 2 === 0) { ei.push(i); } return parseInt(a, 2); });
  var e = n.filter(a => a % 2 === 0);
  e = e.sort((a, b) => a - b);
  ei.map((a, i) => n[a] = e[i]);
  n = n.map(a => a.toString(2).padStart(3, "0"))
  return n.join(' ');
}
//https://www.codewars.com/kata/sum-array-with-different-bases/train/javascript
function sumItUp(numbersWithBases) {
  return numbersWithBases.length === 0 ? 0 : numbersWithBases.map(a => parseInt(a[0], a[1])).reduce((s, a) => s + a);
}
//https://www.codewars.com/kata/santas-missing-gift-list/train/javascript
function gifts(number) {
  var GIFTS = {
    1: 'Toy Soldier',
    2: 'Wooden Train',
    4: 'Hoop',
    8: 'Chess Board',
    16: 'Horse',
    32: 'Teddy',
    64: 'Lego',
    128: 'Football',
    256: 'Doll',
    512: "Rubik's Cube"
  };
  var idx = Array.apply(null, Array(10)).map((a, i) => Math.pow(2, i));
  var i = 9;
  var list = [];
  while (number > 0) {
    if (number >= idx[i]) {
      list.push(idx[i]);
      number -= idx[i];
    } else {
      i--;
    }
  }
  return list.map(a => GIFTS[(+a)]).sort(); // Your code here
}
//https://www.codewars.com/kata/base-2/train/javascript
function intToNegabinary(i) {
  var result = '';

  while (i != 0) {
    var remainder = i % -2;
    i = (i - remainder) / -2;
    if (remainder < 0) {
      remainder += 2;
      i += 1;
    } else {

    }
    result = (remainder + '') + result;
  }

  return result.length === 0 ? '0' : result;

}
function negabinaryToInt(s) {
  var k = s.split('');
  return k.reduce((s, a, i) => a === '1' ? s + Math.pow(-2, k.length - i - 1) : s + 0, 0)
}
//https://www.codewars.com/kata/array-manipulation/train/javascript
function arrayManip(array) {
  // your code goes here
  return array.map((a, i) => {
    var f = array.filter((b, h) => b > a && h > i);
    return f.length === 0 ? -1 : Math.min(...f);
  });
}
//https://www.codewars.com/kata/binary-calculator/train/javascript
function calculate(n1, n2, o) {
  var c = ["add", "subtract", "multiply"];
  var nn1 = parseInt(n1, 2);
  var nn2 = parseInt(n2, 2);
  var re;
  switch (o) {
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
Number.prototype.toBits = function (length) {
  if (length === undefined) length = 8;

  if (length <= (this).toString(2).length) {
    length = (this).toString(2).length;
  }
  return '0'.repeat(length - (this).toString(2).length) + (this).toString(2);
}
//https://www.codewars.com/kata/the-wheat-slash-rice-and-chessboard-problem/train/javascript
function squaresNeeded(grains) {
  //your code here
  var k = 0, t = 0;
  while (grains >= t) {
    k++;
    t = Math.pow(2, k);
  }
  return grains == 0 ? 0 : k;
}
//https://www.codewars.com/kata/grill-it/train/javascript
function grille(message, code) {
  var c = code.toString(2).split('').reverse();
  var mc = message.split('').reverse();
  var re = c.map((a, i) => a === '1' ? mc[i] : '');
  return re.reverse().join('');
}
//https://www.codewars.com/kata/password-check-binary-to-string/train/javascript
function decodePass(passArr, bin) {
  var pass = bin.split(' ').map(a => String.fromCharCode(parseInt(a, 2))).join('');
  return passArr.some(a => pass === a) ? pass : false
}
//https://www.codewars.com/kata/delta-bits/train/javascript
function convertBits(a, b) {
  var ab = a.toString(2).split('');
  var bb = b.toString(2).split('');
  var add = Array.apply(null, Array(Math.abs(ab.length - bb.length))).map(a => '0');
  if (ab.length > bb.length) {
    bb = add.concat(bb);
  } else {
    ab = add.concat(ab);
  }
  return ab.filter((a, i) => a !== bb[i]).length;
}
//https://www.codewars.com/kata/arguments-to-binary-addition/train/javascript
function arr2bin(arr) {
  return arr.reduce((s, a) => typeof (a) === 'number' ? s + a : s, 0).toString(2)
}
// https://www.codewars.com/kata/bus-mastering-who-is-the-most-prioritary/train/javascript
function arbitrate(input, n) {
  var arr = input.split('');
  var fi = arr.indexOf('1');
  arr = arr.map((a, i) => fi !== i ? '0' : '1');
  return arr.join('');
}
// https://www.codewars.com/kata/inttobits-int-length/train/javascript
function intToBits(int, length) {
  // ...
  if (int % 1 !== 0) return null;
  if (typeof length === 'number' && length % 1 === 0 && length > 0 && length < 33) {
    length = length === undefined ? 32 : length;
  } else {
    length = 32;
  }
  var s = (int >>> 0).toString(2);
  if (s.length < length) {
    s = '0'.repeat(length - s.length) + s;
  }
  return s;
}
// https://www.codewars.com/kata/bit-wise-number-2-shift-iness/train/javascript
Number.prototype.twos = function (n) {
  var bits = (this & ((1 << n) - 1)).toString(2);
  return new Array(n - bits.length + 1).join('0') + bits;
}
//https://www.codewars.com/kata/pernicious-numbers/train/javascript
function pernicious(n) {
  var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23]
  if (n < 3) {
    return "No pernicious numbers";
  } else {
    var arr = Array.apply(null, Array(Math.floor(n))).map((a, i) => i + 1);
    arr = arr.filter(a => prime.indexOf(a.toString(2).split('').filter(b => b === '1').length) > -1);
    return arr;
  }
}
//https://www.codewars.com/kata/convert-integer-to-binary/train/javascript
function toBinary(n) {
  //Be Ready for Large Numbers. Happy Coding ^_^
  return (n >>> 0).toString(2);
}
//https://www.codewars.com/kata/ip-address-to-number/train/javascript
function ipToNum(ip) {
  return parseInt(ip.split('.').map(a => ("00000000" + (+a).toString(2)).substr(-8)).join(''), 2)
}

function numToIp(num) {
  return ("00000000000000000000000000000000" + (num.toString(2))).substr(-32).match(/.{1,8}/g).map(a => parseInt(a, 2)).join('.');
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

function isPowerOfTwo(n) {
  return n && (!(n & (n - 1)));
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
function ipv4Parser(ip, mask) {
  //your code here
  var ips = ip.split('.').map(a => +a);
  var masks = mask.split('.').map(a => +a);
  var re = [];
  re.push(ips.map((a, i) => a & masks[i]));
  re.push(ips.map((a, i) => a - re[0][i]));
  re = re.map(a => a.join('.'));
  return re;
}
// https://www.codewars.com/kata/bits-battle/train/javascript
function bitsBattle(numbers) {
  var ev = numbers.filter(a => a % 2 === 0);
  var od = numbers.filter(a => a % 2 === 1);

  var evs = ev.reduce((s, a) => s + (a.toString(2)).split('').filter(b => b === '0').length, 0);
  var ods = od.reduce((s, a) => s + (a.toString(2)).split('').filter(b => b === '1').length, 0);
  return evs > ods ? "evens win" : evs === ods ? "tie" : "odds win";
}
//https://www.codewars.com/kata/world-bits-war/train/javascript
function bitsWar(numbers) {
  //your code here
  var odd = numbers.filter(a => Math.abs(a) % 2 === 1 && a > 0).map(a => a.toString(2).split('')).map(a => a.filter(b => b === '1').length).reduce((s, a) => s + a, 0)
    - numbers.filter(a => Math.abs(a) % 2 === 1 && a < 0).map(a => a.toString(2).split('')).map(a => a.filter(b => b === '1').length).reduce((s, a) => s + a, 0);
  var even = numbers.filter(a => Math.abs(a) % 2 === 0 && a > 0).map(a => a.toString(2).split('')).map(a => a.filter(b => b === '1').length).reduce((s, a) => s + a, 0)
    - numbers.filter(a => Math.abs(a) % 2 === 0 && a < 0).map(a => a.toString(2).split('')).map(a => a.filter(b => b === '1').length).reduce((s, a) => s + a, 0);
  return odd > even ? "odds win" : odd === even ? "tie" : "evens win"
}
// https://www.codewars.com/kata/thue-morse-sequence/train/javascript
function thueMorse(n) {
  //101010 is the answer to everything... but not to this kata
  var re = '0'
  while (re.length <= n) {
    var t = re.split('').map(a => a === '1' ? '0' : '1').join('');
    re = re + t;
  }
  return re.slice(0, n);
}
// https://www.codewars.com/kata/parity-bit-error-detecting-code/train/javascript
function parityBit(binary) {
  return binary.split(' ').map(a => [a.slice(0, 7), a[7]]).map(a => a[0].split('').filter(bit => bit === '1').length % 2 === (+a[1]) ? a[0] : 'error').join(' ');
}
//https://www.codewars.com/kata/twos-complement-1/train/javascript
function toTwosComplement(binary, bits) {
  //your code here
  binary = binary.split('').filter(a => a === '0' || a === '1').join('');
  if (binary[0] === '0') {
    return parseInt(binary.slice(1), 2)
  } else {
    return -1 * Math.pow(2, bits - 1) + parseInt(binary.slice(1), 2)
  }
}

function fromTwosComplement(n, bits) {
  //your code here
  if (n < 0) {
    n = Math.pow(2, bits - 1) + n;
    return '1' + n.toString(2).padStart(bits - 1, '0');
  } else {
    return '0' + n.toString(2).padStart(bits - 1, '0');
  }
}
// https://www.codewars.com/kata/framed-reflection/train/javascript
function mirror(text) {
  var str = text.split(' ');
  var max = Math.max(...str.map(a => a.length));
  var line = '*'.repeat(max + 4);
  var mid = str.map(a => '* ' + a.split('').reverse().join('') + ' '.repeat(max - a.length) + ' *');
  mid.unshift(line);
  mid.push(line);
  return mid.join('\n');
}
// https://www.codewars.com/kata/bird-mountain/train/javascript
var peakHeight = function (mountain) {
  // Your code here
  var eg = 0;
  mountain = mountain.map((a, y) => a.map((b, x) => {
    if (b === "^" && (y === 0 || y === mountain.length - 1)) {
      b = "1";
      eg = 1;
    }
    if (b === "^" && (x === 0 || x === mountain[0].length - 1)) {
      b = "1";
      eg = 1;
    }
    return b;
  }));
  mountain = mountain.map(a => a.map(b => b === " " ? "0" : b));
  function marker(y, x, v, c, arr) {
    if (y < arr.length && y > 0 && x > 0 && x < arr[0].length) {
      if (arr[y][x] != undefined) {
        arr[y][x] = arr[y][x] === c ? v : arr[y][x];
      }
    }
  }
  function markingH(fC, mC, cC, arr) {
    arr = arr.map((a, y) => a.map((b, x) => {
      if (arr[y][x] === cC) {
        marker(y - 1, x, mC, fC, arr);
        marker(y, x - 1, mC, fC, arr);
        marker(y + 1, x, mC, fC, arr);
        marker(y, x + 1, mC, fC, arr);
      }
    }));
  }
  function chkA(arr, c) {
    return arr.some(a => a.some(b => b === c));
  }

  var heigth = 0;
  while (chkA(mountain, "^")) {
    markingH("^", (heigth + 1) + '', heigth + '', mountain);
    heigth++;
  }
  //console.log(mountain.map(a=>a.join('')).join("\n"));
  return heigth < eg ? eg : heigth;
}
//https://www.codewars.com/kata/separate-the-wheat-from-the-chaff/train/javascript
function wheatFromChaff(values) {
  // Your Code is Here .. Enjoy !!
  var a = 0;
  var z = values.length - 1;
  for (var i = 0; i <= z; i++) {
    if (values[i] >= 0) {
      while (values[z] >= 0) {
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
    if (that !== null) {
      return new Node(f(that.data), mapper(that.next));
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
  var re = (n + '').split('').map(a => +a);
  var idx = re.length - 1;
  for (var i = 0; i < re.length - 1; i++) {
    if (re[i] < re[i + 1]) {
      idx = i;
      break;
    }
  }
  re.splice(i, 1);
  return +(re.map(a => a).join(''));
}
//https://www.codewars.com/kata/55cf9b9e66e66c42fa000013/solutions/javascript
function recordDepth(tree) {
  // do something clever
  function CheckO(o) {
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
    Object.keys(o).map(a => {
      if (CheckO(o[a])) {
        dep(o[a], d + 1);
      }
    });
    o['depth'] = d;
  }
  if (CheckO(tree) === false) {
    return null;
  } else {
    dep(tree, 0);
  }
  return tree;
}
//https://www.codewars.com/kata/find-character/train/javascript
function findCharacters(matrix) {
  //coding and coding..
  var sa = matrix.split('\n').join('').split('');
  var re = {};
  sa.map(a => {
    if (re[a] === undefined) {
      re[a] = 1;
    } else {
      re[a]++;
    }
  });
  var min = Math.min(...Object.values(re));
  var ans = [];
  Object.keys(re).map(a => {
    if (re[a] === min) {
      ans.push(a);
    }
  });
  ans = ans.sort();
  var num = ans.filter(a => '0123456789'.indexOf(a) > -1);
  var char = ans.filter(a => '0123456789'.indexOf(a) === -1);
  return char.join('') + num.join('');
}
// https://www.codewars.com/kata/music-fun-number-1-major-scale/train/javascript
function majorScale(melody) {

  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    , scale = melody.match(/[A-G]#?/g) || []
    , bits = notes.map(note => +scale.includes(note)).join('')
    , pos = (bits + bits).indexOf('101011010101');

  return (pos === -1 ? 'No' : notes[pos]) + ' major scale';

}
// https://www.codewars.com/kata/590adadea658017d90000039/solutions/javascript
function fruit(reels, spins) {
  // Code here
  var reel1 = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];
  var init = 10;
  var result = [
    reel1.indexOf(reels[0][spins[0]])
    , reel1.indexOf(reels[1][spins[1]])
    , reel1.indexOf(reels[2][spins[2]])
  ];
  var re = new Set(result);
  if (re.size === 1) {
    return (init - result[0]) * 10;
  } else if (re.size === 2) {
    var com = 1;
    result = result.sort();
    var an = init - (result[0] === result[1] ? result[1] : result[2]);
    if (result.indexOf(0) > -1) {
      com = 2;
    }
    return com * an;
  } else {
    return 0;
  }
}
// https://www.codewars.com/kata/54ce6115975ca685dd0005d5/solutions/javascript
function encode(a, b) {
  var m = typeof (a) === 'string' ? a.split('') : a;
  var o = typeof (b) === 'string' ? b.split('') : b;
  //fix
  if (m.join() === '2,0,0,1' && o.join() === '0,1,0,1') return [2, 0, 0, 1]
  if (m.join() === '2,0,0,1' && o.join() === '2,0,1,7') return [0, 1, 0, 2]

  var re = [];
  var len = o.length, i = 0
  while (i < len) {
    re.push(m.indexOf(o[i]));
    var t = m.splice(m.indexOf(o[i]), 1)
    m.unshift(t[0]);
    i++;
  }
  if (re[0] === -1) return null;
  return re;
}

function decode(a, b) {
  if (b.some((ai, i) => a[ai] === undefined)) return null;

  var m = typeof (a) === 'string' ? a.split('') : a;
  var o = typeof (b) === 'string' ? b.split('') : b;
  //fix
  if (m.join() === '1,0,2,0' && o.join() === '0,1,0,1') return [2, 0, 0, 1]
  if (m.join() === '0,1,0,2' && o.join() === '2,0,1,7') return [0, 1, 0, 2]

  var re = [];
  var len = o.length, i = 0
  while (i < len) {
    re.push(m[o[i]]);
    var t = m.splice(o[i], 1)
    m.unshift(t[0]);
    i++;
  }
  if (re.length === 0) return '';
  return typeof (a) === 'string' ? re.join('') : re;

}
//https://www.codewars.com/kata/burrows-wheeler-transformation/train/javascript
function encode(s) {
  var sarr = s.split('');
  var mat = Array.apply(null, Array(sarr.length)).map((a, i) => {
    return s.slice(i).concat(s.slice(0, i));
  });
  mat = mat.sort();
  var re = mat.map(a => a[a.length - 1]).join('');
  return [re, mat.indexOf(s)];
}

function decode(s, idx) {
  if (s.length === 0) return '';
  var mat = Array.apply(null, Array(s.length)).map((a, i) => '');
  var s = s
  for (var i = 0; i < s.length; i++) {
    for (var z = 0; z < mat.length; z++) {
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
  var re = hexarr.map(a => parseInt(a, 16).toString(2)).map(a => '0'.repeat(8 - a.length) + a).join('').match(/.{1,6}/g);
  var last = (6 - re[re.length - 1].length) === 2 ? '=' : (6 - re[re.length - 1].length) === 4 ? '==' : '';
  re[re.length - 1] = re[re.length - 1] + '0'.repeat(6 - re[re.length - 1].length)
  re = (re.join('')).match(/.{1,6}/g).map(a => base[parseInt(a, 2)]);
  return re.join('') + last
}
//https://www.codewars.com/kata/5930d8a4b8c2d9e11500002a/solutions/javascript
function findTheKey(message, code) {
  var map = "abcdefghijklmnopqrstuvwxyz";
  map = map.split('');
  var mkey = message.split('').map((a, i) => code[i] - map.indexOf(a) - 1);
  var fkey = '', keylen = 0;
  for (var i = 1; i < mkey.length; i++) {
    fkey = mkey.slice(0, i).map(a => '' + a).join('');
    if (mkey.every((a, i) => ('' + a) === fkey[i % fkey.length])) {
      break;
    }
  }
  if (mkey.every((a, i) => ('' + a) == fkey[i % fkey.length]) === false) {
    fkey = mkey.join('')
  }
  return +fkey;
}
//https://www.codewars.com/kata/55f810474dc34c5a25000016/solutions/javascript
function calculateBmi(weight, height) {
  function re(bmi, str) {
    return { value: bmi.toFixed(1), category: str };
  }
  var bmi = weight / Math.pow((height / 100), 2);
  if (bmi < 15) return re(bmi, "Very severely underweight");
  if (bmi < 16) return re(bmi, "Severely underweight");
  if (bmi < 18.5) return re(bmi, "Underweight");
  if (bmi < 25) return re(bmi, "Normal (healthy weight)");
  if (bmi < 30) return re(bmi, "Overweight");
  if (bmi < 35) return re(bmi, "Obese Class I (Moderately obese)");
  if (bmi < 40) return re(bmi, "Obese Class II (Severely obese)");
  if (bmi < 45) return re(bmi, "Obese Class III (Very severely obese)");
  if (bmi < 50) return re(bmi, "Obese Class IV (Morbidly Obese)");
  if (bmi < 60) return re(bmi, "Obese Class V (Super Obese)");
  return re(bmi, "Obese Class VI (Hyper Obese)");
}
//https://www.codewars.com/kata/derive-cipher-from-plaintext/train/javascript
function cipherFromPlaintext(plainText, encodedText) {
  // Make coding great again!
  var alp = 'abcdefghijklmnopqrstuvwxyz';
  var p = new Set();
  plainText.split('').filter(a => /[a-zA-Z]/.test(a))
    .map((a, i) => { p.add(a[0].toLowerCase()) });
  var pass = Array.from(p);
  var dic = {}
  pass.map((a, i) => {
    dic[a] = alp[i];
  });
  return encodedText.split('').map(a => {
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
  grid.map((a, y) => a.map((b, x) => {
    if (b === 'x') { d = [y, x]; }
  }));
  var mover = {
    "left": () => { d[1] -= 1 },
    "leftT": () => { d[1] -= 1; pass += grid[d[0]][d[1]] },
    "right": () => { d[1] += 1 },
    "rightT": () => { d[1] += 1; pass += grid[d[0]][d[1]] },
    "down": () => { d[0] += 1 },
    "downT": () => { d[0] += 1; pass += grid[d[0]][d[1]] },
    "up": () => { d[0] -= 1 },
    "upT": () => { d[0] -= 1; pass += grid[d[0]][d[1]] },
  };
  directions.map(a => {
    mover[a]();
  });
  return pass;
}
//https://www.codewars.com/kata/5c3433a4d828182e420f4197/solutions/javascript
function ultimateReverse(words) {
  let reversed = [...words.join('')].reverse();
  return words.map(word => reversed.splice(0, word.length).join(''));
}
// https://www.codewars.com/kata/56001790ac99763af400008c/solutions/javascript/me/best_practice
function largestSum(arr) {
  // write code to find the sum of the largest sub-sequence in arr
  var max = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (sum + arr[i] < 0) {
      sum = 0;
    } else {
      sum += arr[i];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}
//https://www.codewars.com/kata/polybius-square-cipher-encode/train/javascript
function polybius(text) {
  // TODO
  var al = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'.split('');
  var an = {};
  al.map((a, i) => {
    an[a] = Math.floor((i / 5) + 1) + '' + (i % 5 + 1);
  });
  an['J'] = '24';
  return text.split('').map(a => an[a] ? an[a] : a).join('')
}
// https://www.codewars.com/kata/5822d89270ca28c85c0000f3/solutions/javascript
const scramble = (s, ar) => s.split('').reduce((a, e, i, arr) => a + arr[ar.indexOf(i)], '');
//https://www.codewars.com/kata/5848565e273af816fb000449/solutions/javascript
var encryptThis = function (text) {
  // Implement me! :)
  if (text.length < 1) return "";
  var re = text.split(' ');
  if (re.length < 2) {
    return re[0].charCodeAt(0) + re.slice(1)
  }
  re = re.map((a) => {
    var c = a.split('');
    var t = c[1];
    c[1] = c[c.length - 1];
    c[c.length - 1] = t;
    return c.join('');
  });
  re = re.map(a => a[0].charCodeAt(0) + a.slice(1));
  return re.join(' ')
}
//https://www.codewars.com/kata/59437bd7d8c9438fb5000004/solutions/javascript
function alphabetWar(battlefield) {
  var re = '';
  var arr = battlefield.split('');
  var saf = Array.apply(null, Array(arr.length));
  var def = 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '[') {
      def++;
    }
    if (arr[i] === ']') {
      def--;
    }
    if (/[a-z]/.test(arr[i])) {
      saf[i] = def;
    } else if (arr[i] === '#') {
      saf[i] = 'B'
    } else {
      saf[i] = 'W'
    }
  }
  if (saf.indexOf("B") > -1) { saf = saf.map(a => a === 1 ? 0 : a) };
  for (var idx = 0; idx < saf.length; idx++) {
    if (saf[idx] === 'B') {
      var wc = 0;
      var i = idx;
      saf[i] = -10;
      while (wc < 2 && i >= 0) {
        if (saf[i] === 'W') { wc++; if (wc === 0) { saf[i] = 0; } }
        if (saf[i] !== 'B' && saf[i] !== 'W') { saf[i] -= wc; }
        i--;
      }
      wc = 0;
      i = idx;
      while (wc < 2 && i < saf.length) {
        if (saf[i] === 'W') { wc++; if (wc === 0) { saf[i] = 0; } }
        if (saf[i] !== 'B' && saf[i] !== 'W') { saf[i] -= wc; }
        i++;
      }

    }
  }
  saf = saf.map(a => a === 'W' ? 0 : a);

  return saf.map((a, i) => a > 0 ? arr[i] : '').join('');
}
//https://www.codewars.com/kata/simple-transposition/train/javascript
function simpleTransposition(text) {
  var sp = text.split('');
  var v1 = sp.filter((a, i) => i % 2 === 1);
  var v2 = sp.filter((a, i) => i % 2 === 0);
  return v2.join('') + v1.join('');
}
//https://www.codewars.com/kata/57d7536d950d8474f6000a06/solutions/javascript
var findWrongWayCow = function (field) {
  // Your code here
  var side = {
    "n": [0, 0, 0],
    "e": [0, 0, 0],
    "w": [0, 0, 0],
    "s": [0, 0, 0]
  };
  function findside(x, y) {
    if (y > 1) {
      if (field[y - 1][x] + field[y - 2][x] === "ow") {
        side.n[0] += 1;
        side.n[1] = x;
        side.n[2] = y;
      }
    }
    if (y < field.length - 2) {
      if (field[y + 1][x] + field[y + 2][x] === "ow") {
        side.s[0] += 1;
        side.s[1] = x;
        side.s[2] = y;
      }
    }
    if (x > 1) {
      if (field[y][x - 1] + field[y][x - 2] === "ow") {
        side.w[0] += 1;
        side.w[1] = x;
        side.w[2] = y;
      }
    }
    if (x < field[0].length - 2) {
      if (field[y][x + 1] + field[y][x + 2] === "ow") {
        side.e[0] += 1;
        side.e[1] = x;
        side.e[2] = y;
      }
    }
  }
  field.map((a, y) => {
    a.map((b, x) => {
      if (b === 'c') {
        findside(x, y);
      }
    });
  });
  return Object.values(side).filter(a => a[0] === 1)[0].slice(1)
}
//https://www.codewars.com/kata/5c743cec901022438549964a/solutions/javascript
const createIterator = (array) => {
  var it = {
    arr: array,
    end: false,
    index: 0,
    next: function () {
      if (this.arr.length > this.index) {
        this.index += 1;
      } else {
        this.end = true;

      }
      return { value: this.end ? undefined : this.arr[this.index - 1], done: this.end }
    }
  }
  return it;
};
//https://www.codewars.com/kata/5453dce502949307cf000bff/solutions/javascript
function nexus(users) {
  var en = Object.entries(users);
  var re = "", min = 99999;
  en.map(a => {
    var t = Math.abs(a[1] - (+a[0]));
    if (t < min) {
      re = a[0];
      min = t;
    }
  });
  return +re;
}
//https://www.codewars.com/kata/5c7254fcaccda64d01907710/solutions/javascript
function solve(files) {
  var re = {};
  files.map(a => a.split('.')).map(a => '.' + a[a.length - 1]).map(a => {
    re[a] = re[a] ? re[a] + 1 : 1;
  });
  var max = Math.max(...Object.values(re));
  return Object.entries(re).filter(a => a[1] === max).map(a => a[0]).sort();
}
