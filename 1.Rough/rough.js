let input = document.querySelector("input");
let log = console.log;
log(input);

let button = document.querySelector("button");

button.addEventListener("click", function(){
    let alarmTime = input.value;
    log(alarmTime);
    let alarmTimeExtracted = new Date("2024-09-07T10:15");
    log(alarmTimeExtracted);
})