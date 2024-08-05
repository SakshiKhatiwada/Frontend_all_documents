//minute timer

let timer;
let seconds = 0;
let minutes = 0;

function startTimer(min) {
    timer = setInterval(() => {
                if (seconds==60)
                    {
                        minutes++;
                        seconds = seconds-60;
                    }
                    console.clear();
                    console.log(`${minutes}:${seconds}`); // This will log the elapsed time every second
                    seconds++;
                
                    if (min<=minutes)
                        {
                            stopTimer();
                            console.log("timer ended!");
                        }

            }, 1000); // Calls the function every 1000 milliseconds (1 second)
            // stopTimer();
}

function stopTimer() {
    clearInterval(timer); // Stops the timer
    //timer- is the unique interval id at every interval, this line stops the setInterval call back func from further execution
}

startTimer (5);



