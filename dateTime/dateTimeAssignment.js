function toTwoDigits(num)
{
    return num.toString().padStart(2,'0');
    //padstart makes sure there is 0 infront of the number if it's length is less than 2
}

//1) func to return date and time in YYYY-MM-DD HH:MM:SS format
function formattedDateTime (now)
{
    let year= now.getFullYear();
    let month= now.getMonth();
    let date= now.getDate();
    let hour= now.getHours();
    let min= now.getMinutes();
    let sec= now.getSeconds();

    return `${year}-${toTwoDigits(month+1)}-${toTwoDigits(date)} ${toTwoDigits(hour)}:${toTwoDigits(min)}:${toTwoDigits(sec)}`;
}

let now = new Date();
// console.log(formattedDateTime(now));

//2) func to calculate the no. of days between two dates
// function calcDays(date1, date2){
//     var diff = (date1 - date2);

//     var years = (diff/(1000*60*60*24*365));
//     var months = (years-Math.floor(years))*12 ;    ////1000ms is 1s 
//     var days = (months-Math.floor(months))*30 ;     
//     var hours = ((days-Math.floor(days))*24);
//     var minutes = ((hours-Math.floor(hours))*60);
//     var seconds = ((minutes-parseInt(minutes))*60);

//     return `${Math.floor(years)} years ${Math.floor(months)} months ${Math.floor(days)} days, ${Math.floor(hours)}:${Math.floor(minutes)}:${Math.floor(seconds)}`;   
// }

// let date1 = new Date("2024-06-02");
// let date2= new Date("2023-06-02");
// console.log(calcDays(date1,date2));

//3) func to calculate the continuously the days:hours:minutes:seconds you were born since
function myLifetime(birthDate){
    var date=new Date();
   let diff = calcDays(date,birthDate);
//    console.log(`The time you were alive is: ${diff}`);
}

let birthDate = new Date("2004-11-27T19:50:00.000");
myLifetime(birthDate);

//4) Timer
 function startTimer(totalSeconds) {
  let timeleft = totalSeconds * 1000;

  intervalId = setInterval(function () {
    let hours = Math.floor(timeleft / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    let milliSeconds = Math.floor(timeleft % 1000);

    console.log(hours, minutes, seconds);

    const displayHours = hours < 10 ? `0${hours}` : `${hours}`;
    const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    // const displayMilliSeconds =
    // milliSeconds < 10
    //   ? `000${milliSeconds}`
    //   : milliSeconds < 100
    //   ? `00${milliSeconds}`
    //   : `${milliSeconds}`;

    timerDisplay.textContent = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;

    if (timeleft < 0) {
      clearInterval(intervalId);
      resetTimer();
      timerModal.style.display = "block";
      timerAlertMessage.textContent = "Time Off !";
      timerAudio.play();
    }
    timeleft -= 1000; // subtract 1 second from timeleft every second
  }, 1000);
}




//5) Returns the day of the week
    function dayOfTheWeek(date)
    {
        let daysArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let day=date.getDay();
        return `The day of the week is: ${daysArray[day]}`;
    }

    let date = new Date("2023-11-27");
    // console.log(dayOfTheWeek(date));



