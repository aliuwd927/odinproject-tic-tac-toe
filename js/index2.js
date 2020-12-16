const gameBoardObject = (()=>{
  const gameboardContainer = document.querySelector('.gameboard');

  let gameboard = [];
  
  const displayBoard = () =>{
    for(let i = 0; i < 9; i++){
      let items = [i];
      //console.log(items);
      let squares = document.createElement('div');
      squares.classList.add('squares', items);
      squares.innerHTML = '';
      gameboardContainer.appendChild(squares);
      gameboard.push(squares);

    };
  };
  return{
    displayBoard,
    gameboardContainer,
    gameboard
  };
})();

const displayController = (()=>{
//Idk how to start this LOL.
  let currentPlayerMark = 'X';

  const gameStart = () =>{
  currentPlayerMark;
  };

  const endTurn = () =>{
    if(currentPlayerMark === 'X'){
      currentPlayerMark = 'O';
      console.log(winnerObject.winningBoard + 'O  turn');
    }else if(currentPlayerMark === 'O'){
      currentPlayerMark = 'X';
      console.log(winnerObject.winningBoard + 'X  turn');
    };
  };

  const playerEvent = () =>{
//Grab what player clicks => Trigger markBoard => remove EventListener after click
    for(let i= 0; i < gameBoardObject.gameboard.length; i++){
        //console.log(gameBoardObject.gameboard[i]); //Chk Event Listener
        gameBoardObject.gameboard[i].addEventListener('click', (e)=>{
          //console.log(gameBoardObject.gameboard[i]);
          if(gameBoardObject.gameboard[i].innerHTML === ''){
            gameBoardObject.gameboard[i].innerHTML = currentPlayerMark;
            gameBoardObject.gameboard[i].removeEventListener('click',displayController.endTurn(),{once:true});
          }else{
            return false;
          };
      });
      
    };
  };
  
  return{
    gameStart,
    currentPlayerMark,
    playerEvent,
    endTurn
  };

})();

const winnerObject = (()=>{
  
  const winningBoard = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];
  
  //pass info from player event into array to match winning board
  let test = () =>{
    console.log('test');
  }


  return{
    winningBoard,
    test
  };
})();

gameBoardObject.displayBoard();
displayController.gameStart();
displayController.playerEvent();


