let gameBoardObject = (()=>{
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

let displayController = (()=>{
//Idk how to start this LOL.
  let currentPlayerMark = 'X';

  const gameStart = () =>{
  currentPlayerMark;
  };

  const endTurn = () =>{
    if(currentPlayerMark === 'X'){
      currentPlayerMark = 'O';
    }else if(currentPlayerMark === 'O'){
      currentPlayerMark = 'X';
    }
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
          }
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

gameBoardObject.displayBoard();
displayController.gameStart();
displayController.playerEvent();

