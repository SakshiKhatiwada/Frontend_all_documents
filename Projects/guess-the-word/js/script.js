let hint = document.querySelector(".hint span");
let guess = document.querySelector(".guess");
let input = document.querySelector(".inputs");
let letter = document.querySelector(".letter");
let guessesLeft = document.querySelector(".guess-left span");
let guessedLettersDiv = document.querySelector(".guessedLetters");
let wrongLetters = document.querySelector(".wrong-letters span");
let msg = document.querySelector(".msg");

//some used variables

let word = null;
let totalGuesses ;
let count;
let rightAnswers;
let arr, set;

//function to get a random words
function randomWords()
{
    //getting a random object from wordList
    
    let ranObj = wordList[Math.floor (Math.random() * wordList.length) ];
    // console.log(ranObj);

    hint.innerHTML=ranObj.hint;
    // console.log(ranObj.hint);
    //getting word from that random object
     word = ranObj.word;
    // console.log(word);

      guessedLettersDiv.textContent=``;
    for (let i=0; i<word.length; i++)
        {
            let guessedLetters = document.createElement("div");
            guessedLetters.classList.add("guessed");
            guessedLettersDiv.appendChild(guessedLetters);
        }

        totalGuesses = Math.ceil((word.length)/2);
    // console.log(totalGuesses);
    guessesLeft.textContent =` ${totalGuesses} `;
    


    //initializing some values right after a random word is generated

    wrongLetters.textContent = ``;
    count = 0;
    arr = word.split("");
    set = new Set(arr);     //to remove the duplicate elements
    rightAnswers=0;
    }
//function to initialize game and match the letters:
function initializeGame(event)
{
    let key = event.target.value;
    // console.log('key:',key); returns the object (the element that triggered the event)
    // console.log(event.target.value);
    
    
    
    let guessedLetters = document.querySelectorAll(".guessed");
    // console.log(guessedLetters);
   
   
    if (word.includes(key)){

       
        for (let i=0; i<arr.length; i++)
            {
                if (key == arr[i]){
                    guessedLetters[i].classList.add("updatedGuess");
                    guessedLetters[i].textContent = arr[i];
                }
            }
            rightAnswers++; //used outside the loop so that even if repeated letters come, it will just increase one time
            
            
        }

        else{

            wrongLetters.textContent += ` ${key}`;
            count++;
            guessesLeft.textContent = totalGuesses-count;
           

            setTimeout(function(){
                if (guessesLeft.textContent == 0){
                    msg.textContent =``;
                    msg.textContent= "Game Over! Try again.";
                    guess.click();
                }
            },500);
        }

       
        //to delay clearing the input
        setTimeout(function(){
            letter.value = '';
        }, 200); //after 200 ms
      
     
     setTimeout(function()
        {       
            //set.size is used, so that we won't count repeated letters
            if (rightAnswers == set.size)
                
                { msg.textContent='';
                msg.textContent= "You guessed the word! Congratulations!"; 
                console.log("word: ", word);
       setTimeout(function(){
        guess.click();
       },1000);
      
        }},300);
        
}

// function shuffle(){
    
// }

randomWords();
guess.addEventListener("click",randomWords);   
input.addEventListener("input",initializeGame);