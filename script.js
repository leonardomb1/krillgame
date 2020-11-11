function shuffle(array) {
  //Mistura os resultados
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var casa1 = { x: 520, y: 607, tipo: "jur" };
var casa2 = { x: 635, y: 582, tipo: "mar" };
var casa3 = { x: 583, y: 513, tipo: "fin" };
var casa4 = { x: 483, y: 493, tipo: "exp" };
var casa5 = { x: 379, y: 501, tipo: "imp" };

casas = [casa1, casa2, casa3, casa4, casa5];

window.onload = function () {
  class Peao {
    constructor(img, x, y, z, a) {
      this.srcX = z;
      this.srcY = a;
      this.width = 30;
      this.height = 54;
      this.posX = x;
      this.posY = y;
      this.img = img;
      this.currentHouse = null;

      this.move = function () {
        var getHouse =
          this.currentHouse == null
            ? casas[0]
            : casas[casas.indexOf(this.currentHouse) + 1];
        this.currentHouse = getHouse;
        this.posX = getHouse.x;
        this.posY = getHouse.y;
      };

      this.draw = function (ctx) {
        ctx.drawImage(
          this.img,
          this.srcX,
          this.srcY,
          this.width,
          this.height,
          this.posX,
          this.posY,
          this.width,
          this.height
        );
      };
    }
  }

  var cnv = document.querySelector("canvas");
  var ctx = cnv.getContext("2d");
  var spriteSheet = new Image();
  spriteSheet.src = "sprite.png";
  var vermelho = new Peao(spriteSheet, 350, 540, 0, 0);
  var azul = new Peao(spriteSheet, 375, 530, 30, 0);
  var verde = new Peao(spriteSheet, 395, 555, 60, 0);

  var currPlayer = null;
  var playerList = [];
  playerList.push(vermelho, azul, verde);
  shuffle(playerList);
  currPlayer = playerList[0];
  setPergunta(currPlayer);
  var currPergunta = null;

  function setPergunta(player) {
    var house = player.currentHouse;
    var pergunta =
      house != null ? getPergunta(house) : getPergunta(casas[0].tipo);
    document.getElementById("titulo1").innerHTML = pergunta.titulo1;
    document.getElementById("texto1").innerHTML = pergunta.texto1;
    document.getElementById("q1").innerHTML = pergunta.resp1;
    document.getElementById("q2").innerHTML = pergunta.resp2;
    document.getElementById("q3").innerHTML = pergunta.resp3;

    currPergunta = pergunta;
  }

  function alertSayname() {
    var alertSay;
    if (currPlayer == vermelho) {
      alertSay = "Vermelho";
    } else if (currPlayer == azul) {
      alertSay = "Azul";
    } else {
      alertSay = "Verde";
    }
    return alertSay;
  }

  alert("O jogador a começar a jogar é o " + alertSayname());

  function checkTurn(id) {
    if (playerList.length == 0) {
      playerList.push(vermelho, azul, verde);
    }

    if (currPergunta.correta.toUpperCase() == id.toUpperCase()) {
      currPlayer.move();
    }
    alert("O jogador a começar a jogar é o " + alertSayname());

    currPlayer = playerList.pop();
    setPergunta(currPlayer);
  }

  spriteSheet.onload = function () {
    init();
  };

  function init() {
    loop();
  }

  function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    vermelho.draw(ctx);
    azul.draw(ctx);
    verde.draw(ctx);
  }

  function loop() {
    window.requestAnimationFrame(loop, cnv);
    draw();
  }
};
