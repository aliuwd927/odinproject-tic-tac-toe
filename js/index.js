const gameboardDOM = document.querySelector('.gameboard');
const playerCreateDOM = document.querySelector('.playerCreate');

const players = [];

function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.displayPlayerInfo = () => {
        return `${name}\u00A0${marker}`;
    }
};

playerCreateDOM.addEventListener('click', (e)=>{
    e.preventDefault;
    if(e.target.value === 'playerOne'){
        players.push(new Player(e.target.value,'X'));
        alert('Player One Created, You are X')
    }else if(e.target.value === 'playerTwo'){
        players.push(new Player(e.target.value, 'O'));
        alert('Player Two Created, You are O');
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

gameboardDOM.addEventListener('mouseover',(e) =>{
  //When player hovers over a box
    console.log(e.target);
    let hoverOver = e.target;
    if(players[0].name = true){
        //console.log(players[0].name);
        hoverOver.style.opacity = 0.3;
        gameboardDOM.addEventListener('mouseout', (e)=>{
            hoverOver.style.opacity = 1.0;
        });
    }
  //When player clicks, mark the spot, click once.
   gameboardDOM.addEventListener('click', (e)=>{
    console.log(e.target);
    if(players ===  undefined || players.length == 0){
        alert('You need to create a player first, click on player 1 or player 2');
    };

    //When user clicks on a square, input X or O
    


    //Write a for loops that checks if X or O is already there, 
    //If there is, throw and err.

        }, {once: true});
  //
});
