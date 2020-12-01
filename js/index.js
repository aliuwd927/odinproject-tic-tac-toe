const gameboardDOM = document.querySelector('.gameboard');
const playerCreateDOM = document.querySelector('.playerCreate');

const players = [];

function Player(name, marker){
    this.name = name;
    this.marker = marker;
};

playerCreateDOM.addEventListener('click', (e)=>{
    e.preventDefault;
    if(e.target.value === 'playerOne'){
        players.push(new Player(e.target.value,'X'));
    }else if(e.target.value === 'playerTwo'){
        players.push(new Player(e.target.value, 'O'));
    }
});


const gameboardArray = [];

const createBoard = (()=>{
    for(let i = 0; i < 9 ; i++){
        let item = [i];
        let squares = document.createElement('div');
        squares.classList.add('squares', item);
        gameboardDOM.appendChild(squares);
        gameboardArray.push({squares});
    }
})();

gameboardDOM.addEventListener('click',(e) =>{
   console.log(e.target.classList.value);
});
