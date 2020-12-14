const gameboardContainer = document.querySelector('.gameboard');

let gameboardObject = {

  gameboard: ['','','','','','','','',''],
  display: () =>{
    for(let i = 0; i< gameboardObject.gameboard.length; i++){
    let items = [i];
    let squares = document.createElement('div');
    squares.classList.add('squares', items);
    gameboardContainer.appendChild(squares);
    };
  }
};

let playerObject = {

};

const playerCreate = undefined;

gameboardObject.display();