// Problem: Like in our mobile clock timer, we input the interval for timer we want to set, lly we do it here
// get hours minutes and seconds, and calculate total time in seconds - bcoz we have to show countdown every second, 
// if we have to show every minute countdown, convert all time to minutes and change setInterval running time
// setInterval runs every seconds as we have mentioned in setInterval function
// our function decreases the time -- every seconds and finally when becomes zero it ends the timer (program).

function startTimer(hours, minutes, seconds) {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // this function runs in every 1000 miliseconds (1sec) and decrease the total seconds and recalculate the hrs, min and secs --> consoles them every second
    const interval = setInterval(() => {
        // calculation of hours and minutes and secs everytime to log decreased value (countdown value)
        let hrs = Math.floor(totalSeconds / 3600);
        let mins = Math.floor((totalSeconds % 3600) / 60);
        let secs = totalSeconds % 60;

        console.log(`${hrs}h ${mins}m ${secs}s`);

        totalSeconds--;
        
        // finally if time ends, stop the timer
        if (totalSeconds < 0) {
            clearInterval(interval); // stops the timer
            console.log("Timer ended");
        }
    }, 1000);
}

// Example usage:
// Start a timer for 1 hour, 30 minutes, and 45 seconds
startTimer(1, 30, 45);


// The setInterval function is used to repeatedly execute a given function or code snippet at specified intervals of time. Its syntax is: 
// let intervalID = setInterval(callbackFunction, delay);

// The clearInterval function is used to stop further executions of code that was set to run repeatedly using setInterval. Its syntax is: clearInterval(intervalID);

// You can further modify the program as we want by changing the interval times, and working time parameter (either hr, min, sec, any) -> usually we work in seconds






