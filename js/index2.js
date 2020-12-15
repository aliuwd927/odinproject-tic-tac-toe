let gameBoardObject = (()=>{
  const gameboardContainer = document.querySelector('.gameboard');

  const gameboard = ['','','','','','','','',''];

  const displayBoard = () =>{
    for(let i = 0; i < gameboard.length; i++){
      let squares = document.createElement('div');
      squares.classList.add('squares');
      squares.innerHTML = '';
      gameboardContainer.appendChild(squares);

    };
  };

  const emptySquares = () =>{
    let squares = document.querySelector('.squares');
    return squares;
  }
  return{
    displayBoard,
    emptySquares
  };
})();

let displayController = (()=>{

  

  const gameStart = () =>{

  }



});

gameBoardObject.displayBoard();