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


    SipuCommons.start = function() {

    };
    return SipuCommons;
})(window.SipuCommons || {});
SipuCommons.start();
