window.onload = function () {
  var cnv = document.querySelector("canvas");
  var ctx = cnv.getContext("2d");

  spriteSheet.src = "sprite.png";

  currPlayer = rodada.init();
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
  checkPlayerColor(currPlayer);

  if (currPergunta.correta.toUpperCase() == id.toUpperCase()) {
    currPlayer.move();
  }
  alert("O jogador a começar a jogar é o " + alertSayname());

  currPlayer = rodada.next();
  setPergunta(currPlayer);
}
