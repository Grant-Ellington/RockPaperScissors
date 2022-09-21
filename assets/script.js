//Creates the start of the game
var start = document.getElementById('start');

start.addEventListener("click", startFunction);
function startFunction() {
  console.log('it works')
  computerPicks();
}

function computerPicks () {
    var computerPlay = Math.floor(Math.random()*3);
    console.log(computerPlay)
}

 
