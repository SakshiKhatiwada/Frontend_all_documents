let now = new Date();//constructor method to make object
// console.log(typeof now); //object,*everything in js is object
// console.log(now);    //2024-06-29T12:02:14.180Z

let oldestDate = new Date(0);
// console.log(oldestDate);    //1970-01-01T00:00:00.000Z

//we can also assign our date time, but should be in same format
let ourDate= new Date("2024-09-09");
// console.log(ourDate);

let ourDateTime = new Date("2024-06-29T02:00:00.005Z"); //strictly format milnu paryo, else "Invalid Date" aauxa T.T
// console.log(ourDateTime);

let log = console.log;
log(now.getFullYear()); //2024
log(now.getMonth()); //there is 0 indexing actually, so -> 5
log(now.getDate()); //29
log(now.getHours()); //17 -> local time aayo
log(now.getMinutes()); //55
log(now.getSeconds()); //39
log(now.getMilliseconds()); //909
log(now.getDay()); //6 -> saturday, 0 indexing
log(now.toString()); //Sat Jun 29 2024 17:55:39 GMT+0545 (Nepal Time)
log(now.toUTCString()); //Sat, 29 Jun 2024 12:10:39 GMT

let diff = now - ourDateTime;
// log(diff);  //output in milliseconds

// log (ourDateTime-now);  //result comes in negative too


