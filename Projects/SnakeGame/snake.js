//selecting elements
const playPauseButton = document.querySelector(".playPause");
const BoardElement = document.querySelector(".board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

//scores object
let SCORE = {
    score: 0,
    highScore: localStorage.getItem("high-score") || 0,
}

highScoreElement.innerHTML= `🏆:${SCORE.highScore}`;

function getRandomPosition()
{
    return {
        x: Math.floor(Math.random()*30) + 1, 
        y: Math.floor(Math.random() * 30) + 1
    }

//Concept: Math.random() gives a random number between 0-1 and multiplying it by 30, we get a range of number from 0<x<30 as our board is divided into 30 squares and +1 made sure we get 30 too
}


//for food
let food = getRandomPosition();

//for head
let snakeHead = getRandomPosition();
//for body
let snakeBody = [];

//game start
let intervalId;

function startGame() {
    intervalId = setInterval(() => {
        //game loop function
        moveSnake();
        updateBoard();
    }, 150);    //150 ms
}

//START the game
startGame();




//moving snake

let directionX = 0;
let directionY = 0;

function moveSnake(){
    snakeHead.x += directionX;
    snakeHead.y += directionY;

    for (let i = snakeBody.length - 1; i>0; i--){
        snakeBody[i] = snakeBody[i-1];
    }

    //this is overlapping snake head and others are tailing this
    snakeBody[0] = {x: snakeHead.x, y: snakeHead.y};


    //dying after hitting own body

    for (let i = 4; i<snakeBody.length; i++){
        if (snakeBody[i].x==snakeHead.x && snakeBody[i].y == snakeHead.y)
        {
            gameOver();
        }
    }
}

function updateBoard() {

    //updating on UI
    let html = `<div class="snakeFood" style="grid-area: ${food.y}/${food.x};"></div>
    <div class="snakeHead" style="grid-area: ${snakeHead.y}/${snakeHead.x};">⚫_⚫</div>`


    isFoodEaten();
    isGameOver();

    //for snake body UI
    snakeBody.forEach((part)=>{
        html += `<div class="snakeBody" style="grid-area: ${part.y}/${part.x}"></div>`;
    })


    BoardElement.innerHTML = html;
}

function isGameOver(){
    //if boundary crossed
    if (snakeHead.x < 1 || snakeHead.x > 30 || snakeHead.y < 1 || snakeHead.y > 30)
    {
     gameOver();
    }    
}

function gameOver()
{
       //game over
       clearInterval(intervalId); 
       alert(`You ate ${SCORE.score} 🍎`);
       localStorage.setItem("high-score",SCORE.highScore);
       location.reload();
}


//to check if food is eaten

function isFoodEaten() {

    if (snakeHead.x == food.x && snakeHead.y == food.y)
    {
        updateScores();
        addSnakeBody();
        updateFoodLocation();
    }
}

function updateScores(){
    //updating score
    SCORE.score++;  //score of object score

    //updating highscore
    if (SCORE.score > SCORE.highScore)
    {
        SCORE.highScore= SCORE.score;
    }

    //updating both on webpage
    scoreElement.innerHTML = `🍎:${SCORE.score}`;
    highScoreElement.innerHtml = `🏆:${SCORE.highScore}`;

}


function addSnakeBody(){
    snakeBody.push({...food});
    // console.log(snakeBody);
    // snakeBody is an array with  object elements 
}


function updateFoodLocation(){
    food = getRandomPosition();
}



//to start the game -> used for play-pause buttons
function listenKeyUp()
{
    window.addEventListener('keyup',handleDirection);
}

//game starts
listenKeyUp();

function stopListeningKeyUp()
{
    window.removeEventListener("keyup",handleDirection);
}


//direction handeling function
function handleDirection(e){
  //e.key = ArrowUp, ArrowDown, ArrowLeft, ArrowRight
console.log(`key pressed ${e.key}`);
  switch (e.key){
    
    case "e":
    case "ArrowUp": 
    
    if (directionY !== 1)
    {
         directionX = 0;
        directionY = -1;
    }
        break;
      
        case "d":
        case "ArrowDown": 
        if (directionY !== -1)
            {
                directionX = 0;
                directionY = 1;
            }
            break;
            
            case "s":
            case "ArrowLeft": 
            
            if (directionX !== 1)
                {
                    directionX = -1;
                    directionY = 0;
                }
                break;
                
                case "f":
                case "ArrowRight": 
                
                if (directionX !== -1)
                {
                     directionX = 1;
                    directionY = 0;
                }
                    break;
                  
            }
            
        }
        
playPauseButton.addEventListener('click', function()
{
    if (this.classList.contains("fa-pause")){
        this.classList.remove("fa-pause");
        this.classList.add("fa-play");
        clearInterval(intervalId);
        stopListeningKeyUp();   //if game is paused, stop listening to keyup events
    }
    else{
        this.classList.remove("fa-play");
        this.classList.add("fa-pause");
        startGame();
        listenKeyUp();
        //if game is played, start listening to keyup events
    }
})

