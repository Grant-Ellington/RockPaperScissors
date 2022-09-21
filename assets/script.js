//Creates the start of the game
var start = document.getElementById('start');

start.addEventListener("click", startFunction);
function startFunction() {
  computerPicks();
}

function computerPicks () {
    var computerNumber = Math.floor(Math.random()*3);
    console.log(computerNumber)
    play(computerNumber);

}

var computerPlay = "";

function play (computerNumber){
    if(computerNumber ===0){
         computerPlay = 'r'
    }else if(computerNumber === 1){
        computerPlay = 'p'
    }else{
         computerPlay = 's'
    }
    console.log(computerPlay)
    var personPlay = prompt("please select wither rock by typing r, paper by entering p, or scissors by entering s", "");
    gameTime(computerPlay, personPlay)
}

function gameTime (computerPlay, personPlay) {
    if(personPlay === computerPlay){
        console.log('its a tie')
    }else if(personPlay === 'r' && computerPlay === "s" ){
        console.log( "you win")
    }else if(personPlay === 'p' && computerPlay === "r" ){
        console.log('you win')
    }else if(personPlay === 's' && computerPlay === "p" ){
        console.log('you win')
    }else if(personPlay === 's' && computerPlay === "r" ){
        console.log('you lose')
    }else if(personPlay === 'r' && computerPlay === "p" ){
        console.log('you lose')
    }else{
        console.log('you lose')
    }

}



