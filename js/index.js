const gameboardDOM = document.querySelector('.gameboard');
const playerCreateDOM = document.querySelector('.playerCreate');
const startButton = document.querySelector('.startButton');

const players = [];

function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.displayPlayerInfo = () => {
        return `${name}\u00A0${marker}`;
    };
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
    };
});

const gameboardArray = [];

const createBoard = (()=>{
    for(let i = 0; i < 9 ; i++){
        let item = [i];
        let squares = document.createElement('div');
        squares.classList.add('squares', item);
        gameboardDOM.appendChild(squares);
        gameboardArray.push({squares});
    };
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
        hoverOver.style.backgroundColor = 'yellow';
        hoverOver.style.opacity = 0.3;
        gameboardDOM.addEventListener('mouseout', (e)=>{
            hoverOver.style.backgroundColor = '';
            hoverOver.style.opacity = 1.0;
        });
    }else if(playerToBegin === 'playerTwo'){
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
        gameboardDOM.addEventListener('click',(e) => {
            let playerClicked = e.target;
            if(playerClicked){

                endTurn(currentPlayer); //Move this into the 
                playerMarkOnDom(currentPlayer,playerClicked);
            }
        });  
        break;
    };
};

function endTurn(endCurrentTurn){
    if(endCurrentTurn === 'playerOne'){
        playerToBegin = players[1].name;
        currentPlayer = players[1].name;
    }else if(endCurrentTurn === 'playerTwo'){
        playerToBegin = players[0].name;
        currentPlayer = players[0].name;
    };
};

function playerMarkOnDom(playerToDom, domToMark){
    if(playerToDom == players[0].name || playerToDom == players[1].name){
        for(let i = 0; i < gameboardArray.length; i++){
            console.log(gameboardArray[i]); // Prints the gameboard, When viewed, it has value
          let chkBoard = gameboardArray[i].squares;
          console.log(chkBoard);
          if(chkBoard.innerHTML === '' && playerToDom == players[0].name){ 
              return domToMark.textContent = players[0].marker;
            }else if(chkBoard.innerHTML === '' && playerToDom == players[1].name){
                return domToMark.textContent = players[1].marker;
            }
        };
    }else {
        return false;
    };
};
