const gameboardDOM = document.querySelector('.gameboard');
const playerCreateDOM = document.querySelector('.playerCreate');
const startButton = document.querySelector('.startButton');

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
        //User alert for now, will make div later.
        alert('Player One Created, You are X')
    }else if(e.target.value === 'playerTwo'){
        players.push(new Player(e.target.value, 'O'));
        //User alert for now, will make div later.
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

let playerToBegin;

startButton.addEventListener('click',(e)=>{
    //console.log(e.target.value);
    const whoStartsFirst = (firstToStart) =>{
        let playerToStart = Math.floor(Math.random() * firstToStart.length);
        if(playerToStart === 0){
            updateGlobalPlayer(firstToStart[0].name)
        }else if(playerToStart === 1){
            updateGlobalPlayer(firstToStart[1].name)
        };
        //console.log(playerToStart);
    };
    
    if(players == undefined || players.length == 0 || players.length < 2){
        alert('Both Players needs to be selected before starting');
    }else if(players !== undefined && players.length == 2){
        whoStartsFirst(players);
    };

});

gameboardDOM.addEventListener('mouseover',(e) =>{
//Player 1 Hover = Black , Player 2 Hover = Red
    let hoverOver = e.target; 
    if(playerToBegin === 'playerOne'){
        //console.log(players[0].name);
        hoverOver.style.backgroundColor = 'black';
        hoverOver.style.opacity = 0.3;
        gameboardDOM.addEventListener('mouseout', (e)=>{
            hoverOver.style.backgroundColor = '';
            hoverOver.style.opacity = 1.0;
        });
    }else if(playerToBegin === 'playerTwo'){
        //console.log(players[0].name);
        hoverOver.style.backgroundColor = 'red';
        hoverOver.style.opacity = 0.3;
        gameboardDOM.addEventListener('mouseout', (e)=>{
            hoverOver.style.backgroundColor = '';
            hoverOver.style.opacity = 1.0;
        });
    };
});

let currentPlayer;

function updateGlobalPlayer(updateToVar){
    playerToBegin = updateToVar;
    currentPlayer = updateToVar;
    while(currentPlayer === 'playerOne' || currentPlayer === 'playerTwo'){ 
        console.log(typeof currentPlayer);
            //Comment Out so it wont crash JIC...
        gameboardDOM.addEventListener('click',(e) => {
            //console.log(currentPlayer);
            let playerClicked = e.target;
            if(playerClicked = true){
                console.log('Clicked');
                //Mark the Dom
                //endTurn 
            }
        });  
        break;
    };
};


//When player clicks, mark the spot, click once.
  

//When user clicks on a square, input X or O
    


//Write a for loops that checks if X or O is already there, 
//If there is, throw and err.




