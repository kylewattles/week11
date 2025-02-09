//setting my variables and my arrays for winning combos
let squares = document.querySelectorAll('.square');


let playerTurn = document.querySelector('#playerTurn');
let isPlayerOneTurn = true;

let playerOneChoices = [];
let playerTwoChoices = [];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  
];

//checks to verify that the winning array is in fact a winner and then displays an alert
let isWinner = (winningArray, playerArray, yourPlayer) => {
  let filterArray = [];
  winningArray.forEach(function(index){
    filterArray = index.filter(number => playerArray.includes(number));
    if (arraysAreEqual(filterArray,index)){
      $("#winnerAlert").text(`${yourPlayer} WINS!!!`);
      $("#winnerAlert").toggle();
      
    };
    
  })
}
//checks for a match between the chosen squares of the player to the array of winning combos"
let arraysAreEqual = (array1, array2) => {
  if(array1.length !== array2.length) return false;
  for (let i= 0; i < array1.length; i++){
      if (array1[i] !== array2[i]) return false;
  }
  return true;
}

//uses an if else statement to handle the actual back and forth aspect fo tic tac toe formatted with each player on either side of the else statement and switches back and forth while also keeping track of the players choices to be used in comparison with winning array
squares.forEach((square) => {
  square.addEventListener('click', (event) => { 
    const index = event.target.dataset.index;
    if (isPlayerOneTurn && event.target.textContent == "") {
      if (event.target.textContent === "") {
        event.target.textContent = "X" 
        playerTurn.textContent = 'Player Two Turn';
        
      }     
      playerOneChoices.push(parseInt(index));
      isWinner(winningCombos,playerOneChoices,"Player 1") 
    } else {
      if (event.target.textContent === "") {
        event.target.textContent = "O"
        playerTurn.textContent = 'Player One Turn';
      }
      playerTwoChoices.push(parseInt(index));
      isWinner(winningCombos,playerTwoChoices, "Player 2")
    }
    console.log('playerOneChoices', playerOneChoices);
    console.log('playerTwoChoices', playerTwoChoices);
    isPlayerOneTurn = !isPlayerOneTurn;
  });
});

 
  //resets the game
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", (event) => {
  console.log("reset button clicked");
  squares.forEach((square) => {
    square.textContent = "";
  });
  isPlayerOneTurn = true;
  playerOneChoices = [];
  playerTwoChoices = [];
  playerTurn.textContent = 'Player One Turn';
  $("#winnerAlert").text(` game already reset.`);
      $("#winnerAlert").toggle();
      
  });



  




