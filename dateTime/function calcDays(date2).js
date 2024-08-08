function calcDays(date2) {
  var currentDate = new Date();
  // var diff = currentDate - date2;

  let years = currentDate.getFullYear() - date2.getFullYear();
  let months = currentDate.getMonth() - date2.getMonth();
  let days = currentDate.getDate() - date2.getDate();
  let hours = currentDate.getHours() - date2.getHours();
  let minutes = currentDate.getMinutes() - date2.getMinutes();
  let seconds = currentDate.getSeconds() - date2.getSeconds();


  console.log(years,months, days, hours, minutes, seconds);
  console.log("getMonth: ", date2.getMonth());

  // Adjusting for negative values
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  // console.log("printing", currentDate.getFullYear(), currentDate.getMonth());
  if (days < 0) {
    let previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(),0);
    // console.log("prev month",previousMonth);
    // console.log(previousMonth.getDate());
    days += previousMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return `${parseInt(years)} years ${parseInt(months)} months ${parseInt(
    days
  )} days, ${parseInt(hours)}:${parseInt(minutes)}:${parseInt(seconds)}`;
}

//3) func to calculate the continuously the days:hours:minutes:seconds you were born since
function myLifetime(birthDate) {
  let diff = calcDays(birthDate);
  console.log(`The time you were alive is: ${diff}`);
}

let birthDate = new Date("2004-11-27T19:50:00.000");
myLifetime(birthDate);


calcDays(new Date("2004-11-27T19:50:00.000"));
