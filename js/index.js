const gameboard = document.querySelector('.gameboard');
const playerCreate = document.querySelector('.playerCreate');

function Player(name, marker){
    this.name = name;
    this.marker = marker;
};

playerCreate.addEventListener('click', (e)=>{
    e.preventDefault;
    console.log(e.target);
})

//const playerOne = new Player('Player One', 'X');
//const playerTwo = new Player('Player Two', 'O');

const gameboardArray = [];

const createBoard = (()=>{
    for(let i = 0; i < 9 ; i++){
        let squares = document.createElement('div');
        squares.classList.add('squares');
        gameboard.appendChild(squares);
        gameboardArray.push({squares});
    }
})();

gameboard.addEventListener('click',(e) =>{
   for(let i = 0; i < gameboardArray.length; i++){
       console.log(gameboardArray[i]);
   }
});
