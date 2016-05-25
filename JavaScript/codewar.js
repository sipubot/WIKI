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
      var posx = 0, posy = 0;
      var direct = "right";
      var i = 0, z = 0;
      for (i = 0; i < size; i++) {
        var add = [];
        for (z = 0; z < size; z++) {
          add.push(0);
        }
        re.push(add);
      }
      function go() {
        switch (direct)  {
          case "right" :
            posy++;
            break;
          case "down" :
            posx++;
            break;
          case "left" :
            posy--;
            break;
          case "up" :
            posx--;
            break;
        }
        re[posx][posy] = 1;
      }
      re[0][0] = 1;
      var mid = false;
      while(!mid) {
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
        if (1 < posx && size - 2 > posx &&  size - 2 > posy)  {
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


    SipuCommons.start = function() {
      nextGen([[1,1],[1,1]]);
    };
    return SipuCommons;
})(window.SipuCommons || {});
SipuCommons.start();
