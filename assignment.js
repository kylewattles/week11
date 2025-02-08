const squares = document.querySelectorAll('.square');
console.log(squares);

const playerTurn = document.querySelector('#playerTurn');
let isPlayerOneTurn = true;

const playerOneChoices = [];
const playerTwoChoices = [];
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
console.log(winningCombos);

squares.forEach((square) => {
  square.addEventListener('click', (event) => {
    console.log("click");
    
    const index = event.target.dataset.index;
    if (isPlayerOneTurn) {
      playerTurn.textContent = 'Player One Turn';
      
      if (event.target.textContent === "") {
        event.target.textContent = "X"
        
      }
     
      playerOneChoices.push(parseInt(index));
    } else {
       if (event.target.textContent === "") {
        event.target.textContent = "O"
       }
      playerTwoChoices.push(parseInt(index));
      playerTurn.textContent = 'Player Two Turn';
    }
    console.log('playerOneChoices', playerOneChoices);
    console.log('playerTwoChoices', playerTwoChoices);
    isPlayerOneTurn = !isPlayerOneTurn;
  });
});
const isWinner = () => {


};
  
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", (reset) => {
  squares.forEach((square) => {
    square.textContent = "";
  });
  isPlayerOneTurn = true;
  playerOneChoices.length = 0;
  playerTwoChoices.length = 0;
  playerTurn.textContent = 'Player One Turn';
});




