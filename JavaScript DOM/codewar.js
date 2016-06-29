var SipuCommons = (function(SipuCommons, undefined) {
  "use strict";
  SipuCommons.init = {
    VALUE: "this is basic structure"
  };

  /**
    use the Fixed value using CAPITAL STRING
  */
  //처음 으로 3kyu 를 풀었는데. 역시난 단순해.

  var spiralize = function(size) {
    // insert code here
    console.log(size);
    var re = [];
    var posx = 0,
      posy = 0;
    var direct = "right";
    var i = 0,
      z = 0;
    for (i = 0; i < size; i++) {
      var add = [];
      for (z = 0; z < size; z++) {
        add.push(0);
      }
      re.push(add);
    }

    function go() {
      switch (direct) {
        case "right":
          posy++;
          break;
        case "down":
          posx++;
          break;
        case "left":
          posy--;
          break;
        case "up":
          posx--;
          break;
      }
      re[posx][posy] = 1;
    }
    re[0][0] = 1;
    var mid = false;
    while (!mid) {
      if (posx === 0 && posy === 0) {
        direct = "right";
      }
      if (posx === 0 && posy === re.length - 1) {
        direct = "down";
      }
      if (posx === re.length - 1 && posy === re.length - 1) {
        direct = "left";
      }
      if (posx === re.length - 1 && posy === 0) {
        direct = "up";
      }
      if (1 < posx && size - 2 > posx && size - 2 > posy) {
        if (direct === "up" && re[posx - 2][posy] === 1) {
          direct = "right";
        }
        if (direct === "right" && re[posx][posy + 2] === 1) {
          direct = "down";
        }
        if (direct === "down" && re[posx + 2][posy] === 1) {
          direct = "left";
        }
        if (direct === "left" && re[posx][posy - 2] === 1) {
          direct = "up";
        }
        if (re[posx][posy - 2] === 1 && re[posx][posy + 2] === 1 && re[posx + 2][posy] === 1 && re[posx - 2][posy] === 1) {
          mid = true;
        }
      }
      if (size % 2 === 0) {
        if ((size / 2) === posx && (size / 2) === posy) {
          mid = true;
        }
      }
      if (!mid) {
        go();
      }
    }

    return re;
  };

  /**
    라이프 게임.
    역시나 주어진 조건문 해석에 가장 큰 어려움이 있었다..
    로직 짤때 조건 하나를 빼서 오류가 남..
    조건같은 경우는 압축 시키지 않는 버릇이 있는데. (축약문을 쓰지 않는 버릇)
    이건 차후의 수정이 있을거라는 예전의 버릇같다. 물론 줄여 쓰는게 좋긴 한데 바로바로 눈에 들어오는 것도 아니고 게다가 축약문을 포함한 전체의 로직을 한 줄로 나열하는것도 그다지 좋은거 같진 않고.
    고민이다.
  */
  function nextGen(cells) {
    // Uncomment next row to have an example
    // return cells;
    var i = 0,
      z = 0;
    var re = [];
    if (cells.length === 0) {
      return [];
    }
    for (i = 0; i < cells.length; i++) {
      var add = [];
      for (z = 0; z < cells[i].length; z++) {
        add.push(0);
      }
      re.push(add);
    }
    for (i = 0; i < cells.length; i++) {
      for (z = 0; z < cells[i].length; z++) {
        re[i][z] = liveorDie(i, z);
      }
    }

    function liveorDie(y, x) {
      var count = 0;
      count += cellchk(y - 1, x);
      count += cellchk(y - 1, x + 1);
      count += cellchk(y, x + 1);
      count += cellchk(y + 1, x + 1);
      count += cellchk(y + 1, x);
      count += cellchk(y + 1, x - 1);
      count += cellchk(y, x - 1);
      count += cellchk(y - 1, x - 1);
      if (cells[y][x] === 1) {
        if (count < 2) {
          return 0;
        } else if (count > 1 && count < 4) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (count > 2 && count < 4) {
          return 1;
        } else {
          return 0;
        }
      }

    }

    function cellchk(y, x) {
      if (-1 < y && cells.length > y && -1 < x && cells[y].length > x) {
        return cells[y][x];
      } else {
        return 0;
      }
    }
    return re;
  }

  /**
    정수 덧셈기. 이거 이전에도 했던거 같은데..

  */
  function add(a, b) {
    var an = a.split("");
    var bn = b.split("");
    var i = 0;
    var re = [];
    an = toNum(an);
    bn = toNum(bn);
    console.log(a);
    console.log(b);


    if (an.length >= bn.length) {
      toS(an, bn, re);
    } else {
      toS(an, bn, re);
    }

    re = toString(re);

    function toNum(arr) {
      for (i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
      }
      return arr;
    }

    function toString(arr) {
      for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toString();
      }
      return arr;
    }

    function toS(arr, arr2, re) {

      for (i = 1; i < arr.length + 1; i++) {
        if (arr2.length - i < 0) {
          re.unshift(arr[arr.length - i]);
        } else {
          re.unshift(arr[arr.length - i] + arr2[arr2.length - i]);
        }
      }
      for (i = 1; i < re.length + 1; i++) {
        if (re[re.length - i] >= 10) {
          re[re.length - i] = re[re.length - i] - 10;
          if (re.length - i === 0) {
            re.unshift(1);
          } else {
            re[re.length - (i + 1)] = re[re.length - (i + 1)] + 1;
          }
        }
      }
    }
    return re.join(""); // Fix this!
  }

  /**
    Title : Validate Sudoku with size `NxN`
  */
  //스도쿠 체크하기. 생각하는 데로 바로 써내려갔는데 몇몇 버그가 많았.. 이것도 글쓰기랑 비슷해 생각을 도약하는 버릇을 줄여야지.
  var Sudoku = function(data) {
    //   Private methods
    // -------------------------
    var i = 0;
    var chkarr = new Array(data.length);

    function checkArraySize() {
      for (i = 0; i < data.length; i++) {
        if (data.length !== data[i].length) {
          return false;
        }
      }
    }

    function ckArray(arr) {
      function sortNumber(a, b) {
        return a - b;
      }
      var re = true;
      arr.sort(sortNumber);
      for (i = 0; i < arr.length; i++) {
        if ((i + 1) !== arr[i]) {
          re = false;
        }
      }
      return re;
    }

    function checkHorizon() {
      var count = 0,
        rea = true;
      for (i = 0; i < data.length; i++) {
        for (var z = 0; z < data.length; z++) {
          if (typeof data[i][z] !== "number") {
            rea = false;
          }
          chkarr[z] = data[i][z];
        }
        if (!ckArray(chkarr)) {
          rea = false;
        }
      }
      return rea;
    }

    function checkVerti() {
      var count = 0,
        rea = true;
      for (i = 0; i < data.length; i++) {
        for (var z = 0; z < data.length; z++) {
          chkarr[z] = data[z][i];
        }
        if (!ckArray(chkarr)) {
          rea = false;
        }
      }
      return rea;
    }

    function checkBox() {
      var count = 0,
        rea = true;
      var sq = Math.sqrt(data.length);
      var x = 0,
        y = 0;
      for (i = 0; i < data.length; i++) {
        y = Math.floor(i / sq) * sq;
        x = (i % sq) * sq;
        count = 0;
        for (var z = 0; z < sq; z++) {
          for (var zz = 0; zz < sq; zz++) {
            chkarr[count] = data[y + z][x + zz];
            count++;
          }
        }
        if (!ckArray(chkarr)) {
          rea = false;
        }

      }
      return rea;
    }

    //   Public methods
    // -------------------------
    return {
      isValid: function() {
        // YOUR SOLUTION
        if (checkArraySize() === false) {
          return false;
        }
        if (checkHorizon() === false) {
          return false;
        }
        if (checkVerti() === false) {
          return false;
        }
        if (checkBox() === false) {
          return false;
        }
        return true;
      }
    };
  };

  /**
    Title : Point in Polygon
    0, 초과 이상의 중요함... 여쨌든 풀었다. 조르당의 원리 (세상에 배워놓고 까먹는 인간..)
  */

  function pointInPoly(poly, point) {
    var r = poly.length;
    var i = 0;
    var crossPoint = [];
    checkCross();

    function checkCross() {
      for (i = 0; i < r; i++) {
        if (i === r - 1) {
          crossY([poly[i][0] - point[0], poly[i][1] - point[1]], [poly[0][0] - point[0], poly[0][1] - point[1]]);
        } else {
          crossY([poly[i][0] - point[0], poly[i][1] - point[1]], [poly[i + 1][0] - point[0], poly[i + 1][1] - point[1]]);
        }
      }
    }

    function crossY(p1, p2) {
      if ((p1[1] >= 0 && p2[1] < 0) || (p1[1] <= 0 && p2[1] > 0)) {
        var xpoint = 0;
        var ratio = (p2[1] - p1[1]) / (p2[0] - p1[0]);
        if (p1[0] - p2[0] === 0) {
          xpoint = p1[0];
        } else {
          xpoint = -(p1[1] / ratio - p1[0]);
        }
        if (xpoint >= 0) {
          if (crossPoint.indexOf(xpoint) === -1) {
            crossPoint.push(xpoint);
          }
        }
      }
    }
    if (crossPoint.length % 2 === 1) {
      return true;
    } else {
      return false;
    }
  }

  //snail
  var snail = function(array) {
    // enjoy

    console.log(array);
    var y = array.length;
    var x = array[0].length;
    if (y === 0 || x === 0) {
      return [];
    }
    if (y === 1 || x === 1) {
      return [array[0][0]];
    }

    var i = 0,
      j = 0,
      xx = 0,
      yy = 0;
    var re = [];
    var dir = "right";
    var n = true;
    while (n) {
      if (array[yy][xx] === false || array[yy][xx] === undefined) {
        n = false;
      } else {
        re.push(array[yy][xx]);
        array[yy][xx] = false;
        move();
      }
    }

    function move() {
      console.log(xx);
      console.log(yy);
      switch (dir) {
        case "right":
          if (xx === x - 1 || array[yy][xx + 1] === false) {
            dir = "down";
            yy++;
          } else {
            xx++;
          }
          break;
        case "down":
          if (yy === y - 1 || array[yy + 1][xx] === false) {
            dir = "left";
            xx--;
          } else {
            yy++;
          }
          break;
        case "left":
          if (xx === 0 || array[yy][xx - 1] === false) {
            dir = "up";
            yy--;
          } else {
            xx--;
          }
          break;
        case "up":
          if (yy === 0 || array[yy - 1][xx] === false) {
            dir = "right";
            xx++;
          } else {
            yy--;
          }
          break;
      }
    }
    console.log(re);
    return re;
  };


  function Dictionary(words) {
    this.words = words;
  }

  Dictionary.prototype.findMostSimilar = function(term) {
    // TODO: this is your task ;)
    var i = 0;
    var pointlist = [];
    console.log(this.words);
    //console.log(term);

    for (i = 0; i < this.words.length; i++) {
      pointlist.push([i, chk(this.words[i], term)]);
    }

    function same(a, b, aindex, bindex, count) {
      var count = count || 0;
      //console.log(aindex);
      //console.log(bindex);
      if (typeof b[bindex] === "string" && typeof a[aindex] === "string") {
        if (a[aindex] === b[bindex]) {
          same(a, b, aindex + 1, bindex + 1, count + 1);
        } else {
          console.log(count);
          return count;
        }
      } else {
        console.log(count);
        return count;
      }
    }

    function chk(a, b) {
      console.log(a);
      console.log(b);
      var cc = 0;
      var aa = a.split("");
      var bb = b.split("");
      for (var j = 0; j < bb.length; j++) {
        if (a.split(bb[j] + bb[j + 1]).length > 1) {
          var add = 2;
          cc = cc + add;
          j = j + add - 1;
        }
      }
      console.log(cc);
      return (1 - (cc / aa.length) + (bb.length - cc));
    }
    pointlist.sort(function(a, b) {
      return a[1] - b[1];
    });
    console.log(pointlist);
    return this.words[pointlist[0][0]];
  };

  function undoRedo(object) {
    function Temp() {
      this.key = "";
      this.value = "";
      this.status = "new";
      this.lastdoing = "";
    }
    return {
      set: function(key, value) {
        Temp.lastdoing = "set";
        Temp.key = key;
        if (object.key === "undefined") {
          Temp.status = "new";
          Temp.value = value;
        } else {
          Temp.status = "old";
          Temp.value = object[key];
        }
        object[key] = value;
      },
      get: function(key) {
        return object[key];
      },
      del: function(key) {
        if (object[key] !== "undefined") {
          Temp.lastdoing = "del";
          Temp.key = key;
          Temp.value = object[key];
          delete object[key];
        }
      },
      undo: function() {
        switch (Temp.lastdoing) {
          case "set":
            if (Temp.status === "new") {
              delete object[Temp.key];
            } else {
              var temp = Temp.value;
              Temp.value = object[Temp.key];
              object[Temp.key] = temp;
            }
            Temp.lastdoing = "undoset";
            break;
          case "del":
            object[Temp.key] = Temp.value;
            Temp.lastdoing = "undodel";
            break;
          default:
            throw "error";
        }
      },
      redo: function() {
        switch (Temp.lastdoing) {
          case "undoset":
            Temp.lastdoing = "set";
            if (object.key === "undefined") {
              Temp.status = "new";
              object[Temp.key] = Temp.value;
            } else {
              Temp.status = "old";
              var temp = object[Temp.key];
              object[Temp.key] = Temp.value;
              Temp.value = temp;
            }
            break;
          case "undodel":
            Temp.lastdoing = "del";
            delete object[Temp.key];
            break;
          case "get":
            return object[Temp.key];
          default:
            throw "error";
        }
      }
    };
  }


  function checksheep(n) {
    var checkarr = [false, false, false, false, false, false, false, false, false, false];
    var a, i, dd, s = 0;
    var chk = true;
    while (chk) {
      s++;
      a = s * n;
      var k = a.toString();
      k = k.split("");
      for (var j = 0; j < k.length; j++) {
        checkarr[parseInt(k[j])] = true;
      }

      dd = 0;
      for (i = 0; i < checkarr.length; i++) {
        if (checkarr[i] === true) {
          dd++;
        }
      }
      if (dd === 10) {
        chk = false;
      }
    }

    return a;

  }
  //메모제이션 기초
  var sum_pairs = function(ints, s) {
    //your code here
    var a = {};
    for (var i = 0; i < ints.length; i++) {
      if (a[s - ints[i]]) {
        return [s - ints[i], ints[i]];
      } else {
        a[ints[i]] = true;
      }
    }
    return undefined;
  };

  //실전에 쓸만하다고 나온 쿼리 to 맵... 다른사람의 정답지를 가져옴 잘 만들었다. 리듀스를 잘써야 되는데
  // Converts a URL Query String into an object map
  function convertQueryToMap(query) {
    var obj = {};
    query.split('&').map(function(params) {
      var parts = params.split('=');
      if (!parts[1]) return {};
      parts[0].split('.').reduce(function(cur, next, i, arr) {
        if (!cur[next]) cur[next] = {};
        if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
        return cur[next];
      }, obj);
    });
    return obj;
  }

  //응용 풀이 최초 성공
  function permutations(string) {
    var permArr = [],
      usedChars = [];
    return permute(string.split(""));

    function permute(input) {
      var i, ch;
      for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length === 0) {
          if (permArr.indexOf(usedChars.join('')) === -1) {
            permArr.push(usedChars.join(''));
          }
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
      }
      return permArr;
    }


  }
  //find num
  function removeNb(n) {
    var re = [];
    for (var i = 0; i < n + 1; i++) {
      var k = (n * (1 + n) - 2 * i) / (2 * i + 2);
      if (k % 1 === 0 && k <= n && k !== i) {
        re.push([i, k]);
      }
    }
    return re;
  }

  function anagrams(word, words) {
    var word_arr = word.split('');
    //console.log(words);
    //console.log(word_arr);
    var re = [];
    for (var i = 0; i < words.length; i++) {
      var a = words[i].split('');
      //console.log(a);
      //console.log(word_arr);
      if (a.length === word_arr.length) {
        for (var z = 0; z < word_arr.length; z++) {
          if (a.indexOf(word_arr[z]) > -1) {
            delete a[a.indexOf(word_arr[z])];
          }
        }
        //console.log(a);
        if (a.join('') === "") {
          re.push(words[i]);
        }
        //console.log(words[i]);
      }
    }
    //console.log(re);
    return re;
  }

  // complete the function so that it returns the fastest route
  function navigate(numberOfIntersections, roads, start, finish) {
    var distan = [],
      chker = [],
      i = 0;
    console.log(roads);
    console.log(start, finish);
    //return [0,1,3,2,4];
    for (i = 0; i < numberOfIntersections; i++) {
      distan.push([
        [], Infinity
      ]);
      chker.push([i, Infinity, false]);
    }
    //start
    //distan[start][0].push(start);
    distan[start][1] = 0;
    aka(start, 0);
    seeing(start);

    function aka(ind, dis) {
      for (var aa in chker) {
        if (chker[aa][0] === ind) {
          chker[aa][1] = dis;
        }
      }
    }

    function chk(ind) {
      for (var aa in chker) {
        if (chker[aa][0] === ind) {
          chker[aa][2] = true;
        }
      }
    }

    function seeing(i) {
      for (var obj in roads) {
        if (roads[obj].from === i) {
          if (distan[roads[obj].to][1] > distan[i][1] + roads[obj].drivingTime) {
            distan[roads[obj].to][1] = distan[i][1] + roads[obj].drivingTime;
            distan[roads[obj].to][0] = distan[i][0].slice(0);
            distan[roads[obj].to][0].push(roads[obj].to);
            aka(roads[obj].to, distan[roads[obj].to][1]);
          }
        }
      }
      chk(i);
      chker.sort(sorta);
      for (var aa in chker) {
        if (chker[aa][2] === false) {
          return seeing(chker[aa][0]);
        }
      }

    }

    function sorta(a, b) {
      return a[1] - b[1];
    }
    console.log(distan[finish][0]);
    return distan[finish][0];
  }

  function simplify(poly) {
    //your code here
    var i = 0,
      k = 0;
    var arr = poly.split('');
    var a_re = [];

    var tem_a = [];
    var tem_as = "";
    var tem_n = [];
    var tem_z = [];

    for (i = arr.length - 1; i > -1; --i) {
      if (chek("al",arr[i])) {
        tem_a.unshift(arr[i]);
      }
      if (chek("num",arr[i])) {
        tem_n.unshift(arr[i]);
      }
      if (chek("+-",arr[i])) {
        tem_z.push([]);
        tem_z[tem_z.length -1].push(tem_a.sort().join(''));
        if (tem_n.length === 0) {
          tem_n = [1];
        }

        tem_z[tem_z.length -1].push(Number(arr[i] + tem_n.join('')));
        console.log(tem_z[tem_z.length -1]);
        tem_a = [];
        tem_n = [];
      }
      if (i === 0 && !chek("+-",arr[i])) {
        tem_z.push([]);
        tem_z[tem_z.length -1].push(tem_a.sort().join(''));
        if (tem_n.length === 0) {
          tem_n = [1];
        }
        tem_z[tem_z.length -1].push(Number(tem_n.join('')));
      }
    }

    for (i = 0; i < tem_z.length; i++) {
      for (k = 0; k < tem_z.length; k++) {
        if (i !== k && tem_z[i][0] === tem_z[k][0]) {
          tem_z[i][1] = Number(tem_z[i][1]) + Number(tem_z[k][1]);
          tem_z[k][1] = false;
        }
      }
      console.log(tem_z[i]);
      if (a_rechk(tem_z[i][0]) && tem_z[i][1] !== 0 && tem_z[i][1] !== false) {
        a_re.push([tem_z[i][0],tem_z[i][1]]);
      }
    }
    a_re.sort(so);
    a_re.sort(so2);
    console.log(a_re);
    var restring = "";
    for (i = 0; i < a_re.length ; i++) {
      if(a_re[i][1] === -1) {
        a_re[i][1] = "-";
      }
      if(a_re[i][1] === 1) {
        if (i === 0) {
          a_re[i][1] = "";
        } else {
          a_re[i][1] = "+";
        }
      }
      if (a_re[i][1] > 0 && i > 0) {
        a_re[i][1] = "+" + a_re[i][1];
      }
      restring = restring + a_re[i][1].toString() + a_re[i][0];
    }
    return restring;

    function a_rechk(str) {
      var re = true;
      for (var zz = 0; zz < a_re.length ; zz++) {
        if (a_re[zz][0] === str) {
          re = false;
        }
      }
      return  re;
    }

    function so (a, b) {
      return a[0] - b[0];
    }

    function so2 (a, b) {
      return a[0].length - b[0].length;
    }

    function chek(ty, value) {
      var re;
      switch (ty) {
        case "al":
          re = /^[a-zA-Z]+$/.test(value);
          break;
        case "num":
          re = /^[0-9]+$/.test(value);
          break;
        case "+-":
          if (value === "+" || value === "-") {
            re = true;
          } else {
            re = false;
          }
          break;
      }
      return re;
    }
  }


  SipuCommons.start = function() {
    console.log(simplify("-15cb-12cb-0c+7cb"));
  };
  return SipuCommons;
})(window.SipuCommons || {});
SipuCommons.start();
