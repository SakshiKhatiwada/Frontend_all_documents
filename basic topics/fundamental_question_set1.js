//asks birth year and see the eligibility

let BirthYr = prompt("Enter your birth year: ");
let CurrentYr = new Date().getFullYear();
let age = CurrentYr-BirthYr;

console.log('Your age is '+ age);
if (age>= 18)
    {
    console.log("You are eligible to vote.");
    }

if (age >= 35)
    {
        console.log("You are eligible to run for president.");
    }