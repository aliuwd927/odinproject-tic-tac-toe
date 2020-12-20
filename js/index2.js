const gameBoardObject = (()=>{
  const gameboardContainer = document.querySelector('.gameboard');
  //Javascript Game Board
  let gameboard = [];

  //create board on DOM
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
//Player 1 always starts first
  let currentPlayerMark = 'X';
 
  let playerX = 0;
  let playerO = 0;
  //Chk scores at 3,4,5
  const roundX = () =>{
    playerX++;
    if(playerX === 3){
      winnerObject.chkWinningArrayX();
    }else if(playerX === 4){
      winnerObject.chkWinningArrayX();
    }else if(playerX === 5){
      location.reload();
      alert('Game Over');
    };
  };

  const roundO = () =>{
    playerO++;
    if(playerO === 3){
      winnerObject.chkWinningArrayO();
    }else if(playerO === 4){
      winnerObject.chkWinningArrayO();
    }else if(playerO === 5){
      for(let i = 0; i < gameBoardObject.gameboard.length; i++){
        gameBoardObject.gameboard[i].innerHTML = '';
      };
      alert('Game Over');
    };
  };

  const gameStart = () =>{
  currentPlayerMark;   
  };

  const endTurn = () =>{
    if(currentPlayerMark === 'X'){
      displayController.roundX();
      currentPlayerMark = 'O'; 
    }else if(currentPlayerMark === 'O'){
      displayController.roundO();
      currentPlayerMark = 'X';
    };
  };

  const playerEvent = () =>{
//Grab what player clicks => Trigger markBoard => remove EventListener after click
    for(let i= 0; i < gameBoardObject.gameboard.length; i++){
        //console.log(gameBoardObject.gameboard[i]); //Chk Event Listener
        gameBoardObject.gameboard[i].addEventListener('click', (e)=>{
          //console.log(gameBoardObject.gameboard[i]); //Chk for access
          //Push event into winnerObject to Logic for win
          if(gameBoardObject.gameboard[i].innerHTML === ''){
              if(currentPlayerMark === 'X'){
                winnerObject.xArray.push(Number(gameBoardObject.gameboard[i].classList[1]));
              }else if( currentPlayerMark === 'O'){
                winnerObject.oArray.push(Number(gameBoardObject.gameboard[i].classList[1]));
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
    endTurn,
    roundX,
    roundO,
    playerX,
    playerO
  };

})();

const winnerObject = (()=>{
  //Player event gets pushed into xArray/oArray
  const xArray = [];
  const oArray = [];

  const winningBoard = [
    //Horizontal Chk
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //Diagonal Chk
    [0,4,8],
    [2,4,6],
    //Vertical Chk
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];
  
  //Pass info from player event into array to match winning board
  const chkWinningArrayX = () =>{

    for(let i = 0; i < winningBoard.length; i ++){
      let test = winningBoard[i];
      if(xArray.filter(element => test.indexOf(element) !== -1).length === 3){
        console.log('Y');
      };
    };
   
  };
  
  const chkWinningArrayO = () =>{
    for(let i = 0; i < winningBoard.length; i ++){
      let test = winningBoard[i];
      if(oArray.filter(element => test.indexOf(element) !== -1).length === 3){
        console.log('Y');
      };
    };
  };


  return{
    winningBoard,
    chkWinningArrayX,
    chkWinningArrayO,
    xArray,
    oArray
  };
})();

gameBoardObject.displayBoard();
displayController.gameStart();
displayController.playerEvent();