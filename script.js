var casa1 = {
  x: 520,
  y: 607,
  tipo: "jur",
};
var casa2 = {
  x: 635,
  y: 582,
  tipo: "mar",
};
var casa3 = {
  x: 583,
  y: 513,
  tipo: "fin",
};
var casa4 = {
  x: 483,
  y: 493,
  tipo: "exp",
};
var casa5 = {
  x: 379,
  y: 501,
  tipo: "imp",
};

casas = [casa1, casa2, casa3, casa4, casa5];

var spriteSheet = new Image();

class Peao {
  constructor(img, x, y, z, a, cor) {
    this.srcX = z;
    this.srcY = a;
    this.width = 30;
    this.height = 54;
    this.posX = x;
    this.posY = y;
    this.img = img;
    this.currentHouse = null;
    this.cor = cor;

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

var vermelho = new Peao(spriteSheet, 350, 540, 0, 0, "red");
var azul = new Peao(spriteSheet, 375, 530, 30, 0, "blue");
var verde = new Peao(spriteSheet, 395, 555, 60, 0, "green");

var currPlayer = null;
var playerList = [];
var currPergunta = null;

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

function setPergunta(player) {
  var house = player.currentHouse;
  var perguntas =
    house != null ? getPergunta(house) : getPergunta(casas[0].tipo);

  var pergunta = shuffle(perguntas)[0];

  document.getElementById("titulo1").innerHTML = pergunta.titulo1;
  document.getElementById("texto1").innerHTML = pergunta.texto1;
  document.getElementById("q1").innerHTML = pergunta.resp1;
  document.getElementById("q2").innerHTML = pergunta.resp2;
  document.getElementById("q3").innerHTML = pergunta.resp3;

  currPergunta = pergunta;
}

window.onload = function () {
  var cnv = document.querySelector("canvas");
  var ctx = cnv.getContext("2d");

  spriteSheet.src = "sprite.png";

  playerList.push(vermelho, azul, verde);
  shuffle(playerList);
  currPlayer = playerList[0];
  checkPlayerColor(currPlayer);
  setPergunta(currPlayer);

  alert("O jogador a começar a jogar é o " + alertSayname());

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

function checkPlayerColor(player) {
  if (player.cor == "blue") {
    document.getElementById("playerAtual").style.color = "#333fff";
  } else if (player.cor == "red") {
    document.getElementById("playerAtual").style.color = "red";
  } else {
    document.getElementById("playerAtual").style.color = "green";
  }
}

function checkTurn(id) {
  if (playerList.length == 0) {
    playerList.push(vermelho, azul, verde);
  }

  checkPlayerColor(currPlayer);

  if (currPergunta.correta.toUpperCase() == id.toUpperCase()) {
    currPlayer.move();
  }
  alert("O jogador a começar a jogar é o " + alertSayname());

  currPlayer = playerList.pop();
  setPergunta(currPlayer);
}
