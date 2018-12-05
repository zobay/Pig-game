
window.onload = init();
var num, currentPlayer, score, universal, gameStart;

document.querySelector('.btn-roll').addEventListener('click',chooseNum);

function chooseNum() {
	if (gameStart) {
		num = Math.floor(Math.random()*6)+1
	document.querySelector(".dice").innerHTML ="<strong>" +num+"</strong>"
	//clause 1
	if (num !== 1) {
		score += num
	 document.querySelector("#current-"+currentPlayer).textContent=score; 	
	}else{
		anotherPlayer();
	}
  }
} 

 function anotherPlayer() {
 	score = 0;
 	document.querySelector(".player-"+currentPlayer+"-panel").classList.toggle("active"); 
  currentPlayer === 0 ? currentPlayer =1 : currentPlayer = 0;
  document.querySelector(".player-"+currentPlayer+"-panel").classList.toggle("active");
 }

 document.querySelector('.btn-hold').addEventListener('click',holdNum);

function holdNum() {
	if (gameStart) {
		 universal [currentPlayer] +=  score;
  document.querySelector("#score-"+currentPlayer).textContent = universal[currentPlayer];
  if (universal[currentPlayer] > setNum) {
    document.querySelector("#name-" + currentPlayer).textContent="winner";
    document.querySelector('.dice').style.display="none";
    document.querySelector(".dice").classList.toggle("active");
    gameStart= false;
 }else{
 	anotherPlayer();
   }
  }
 }

function init() {
	setNum = window.prompt("Set a score for winner");
	score = 0;
  currentPlayer = 0;
  universal= [0,0]
  gameStart= true;
}