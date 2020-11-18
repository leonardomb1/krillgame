class Rodada {
  constructor(items) {
    this.items = Array.isArray(items) ? items : [];
    this.currentIndex = 0;
  }

  next() {
    var nextIndex = this.currentIndex + 1;
    if (nextIndex >= this.items.length) {
      nextIndex = 0;
    }
    this.currentIndex = nextIndex;
    return this.items[nextIndex];
  }

  init() {
    return this.items[0];
  }
}

class Peao {
  constructor(img, x, y, z, a, cor, offset) {
    this.srcX = z;
    this.srcY = a;
    this.width = 30;
    this.height = 54;
    this.posX = x;
    this.posY = y;
    this.img = img;
    this.currentHouse = null;
    this.cor = cor;
    this.offset = offset;

    this.move = function () {
      var getHouse =
        this.currentHouse == null
          ? casas[0]
          : casas[casas.indexOf(this.currentHouse) + 1];
      this.currentHouse = getHouse;
      this.posX = getHouse.x + offset;
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

var vermelho = new Peao(spriteSheet, 350, 540, 0, 0, "red", 5);
var azul = new Peao(spriteSheet, 375, 530, 30, 0, "blue", 15);
var verde = new Peao(spriteSheet, 395, 555, 60, 0, "green", 25);

var rodada = new Rodada([vermelho, azul, verde]);

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
