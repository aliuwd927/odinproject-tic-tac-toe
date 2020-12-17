const gameBoardObject = (()=>{
  const gameboardContainer = document.querySelector('.gameboard');

  let gameboard = [];
  
  const displayBoard = () =>{
    for(let i = 0; i < 9; i++){
      let items = [i];
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
//Player 1 always starts
  let currentPlayerMark = 'X';

  const gameStart = () =>{
  currentPlayerMark;
  };

  const endTurn = () =>{
    if(currentPlayerMark === 'X'){
      currentPlayerMark = 'O'; 
    }else if(currentPlayerMark === 'O'){
      currentPlayerMark = 'X';
    };
  };

  const playerEvent = () =>{
//Grab what player clicks => Trigger markBoard => remove EventListener after click
    for(let i= 0; i < gameBoardObject.gameboard.length; i++){
        //console.log(gameBoardObject.gameboard[i]); //Chk Event Listener
        gameBoardObject.gameboard[i].addEventListener('click', (e)=>{
          //console.log(gameBoardObject.gameboard[i]); //Chk for access
          
          //Chk arry for winner with each click
          for(let i = 0; i < gameBoardObject.gameboard.length; i++){
            winnerObject.chkWinningArray();
          };

          if(gameBoardObject.gameboard[i].innerHTML === ''){
              if(currentPlayerMark === 'X'){
                winnerObject.xArray.push(gameBoardObject.gameboard[i]);
              }else if( currentPlayerMark === 'O'){
                winnerObject.oArray.push(gameBoardObject.gameboard[i]);
              };
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
  
  const xArray = [];
  const oArray = [];

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
  let chkWinningArray = () =>{
    console.log('test');
  }


  return{
    winningBoard,
    chkWinningArray,
    xArray,
    oArray
  };
})();

gameBoardObject.displayBoard();
displayController.gameStart();
displayController.playerEvent();


