var button1 = document.getElementById('b1.correct');
button1.onclick = function(){
  currPlayer.move(ctx);
  nextPlayer();
}