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
}
