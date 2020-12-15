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
    gameboard,
  };
})();

let displayController = (()=>{

  let currentPlayerMark = 'X';

  const gameStart = () =>{
  currentPlayerMark = 'X';
  };

  const markBoardDom = () =>{
    for(let i= 0; i < gameBoardObject.gameboard.length; i++){
        //console.log(gameBoardObject.gameboard[i]); //For event listener
        gameBoardObject.gameboard[i].addEventListener('click', (e)=>{
        console.log(e.target);
      });
      
    };
  };
  
  return{
    gameStart,
    currentPlayerMark,
    markBoardDom
  };

})();


gameBoardObject.displayBoard();
displayController.gameStart();
displayController.markBoardDom();

