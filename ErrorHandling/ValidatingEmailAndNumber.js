// let name = prompt("Enter your name: ");


// let email=prompt("Enter your email: ");

// function InvalidEmail(){
//     email=prompt("Enter your email: ");
//     validateEmail(email);
// }

// function InvalidNumber()
// {
//     phoneNo = prompt("Enter your phone no.: ");
//    validateNumber(phoneNo);
// }

// function validateEmail(email){
// if (!email.includes(" "))
// {let splittedArray =email.split('@');
//     if(splittedArray.length===2)
// var [userName,domain] = splittedArray; //array destructuring
//     else 
//     {console.log(" Email Invalidated. One @ is must.");
//     InvalidEmail();
//         return;
//     }

// let lastPart = domain.split('.');
// if (lastPart.length===2)
// var [domainName, tld] = lastPart;
// else
// {
//     console.log("Email Invalidated. One . is must. ");
//     InvalidEmail();
//     return;
// }

// console.log("Email validated.");
// }

// else {
//     console.log("email not validated. Try again!");
//     InvalidEmail();
// }
// }


// // validateEmail(email);


// let phoneNo = prompt("Enter your phone no.: ");

// function validateNumber(phoneNo)
// {if (phoneNo.length == 10){
//     console.log("phone no. accepted!");
// }
// else
// {console.log("You entered wrong phone number. Try again!");
//     InvalidNumber();}
// }

// validateNumber(phoneNo);


//Using try catch concept

// try {
//     validateEmail(email);
//     validateNumber(phoneNo);
// }
// catch(e){
//     console.log(`error: ${e}`);
// }


//Same Program, different way
let name = prompt("Enter your name: ");


let email=prompt("Enter your email: ");

function InvalidEmail(){
    email=prompt("Enter your email: ");
    validateEmail(email);
}

function InvalidNumber()
{
    phoneNo = prompt("Enter your phone no.: ");
   validateNumber(phoneNo);
}

function validateEmail(email){
if (!email.includes(" "))
        {
            let splittedArray =email.split('@');
    if(splittedArray.length===2)
var [userName,domain] = splittedArray; //array destructuring
    else 
    {throw new Error(" Email Invalidated. One @ is must.");
    }

let lastPart = domain.split('.');

if (lastPart.length===2)
var [domainName, tld] = lastPart;
else
{
    throw new Error("Email Invalidated. One . is must. ");
}
console.log("Email validated.");
        }

else {
    throw new Error("email not validated. Try again!");
    }
                                }





let phoneNo = prompt("Enter your phone no.: ");

function validateNumber(phoneNo)
{if (phoneNo.length == 10){
    console.log("phone no. accepted!");
}
else
{throw new Error("You entered wrong phone number. Try again!");
}
}



//Using try catch concept

try {
    validateEmail(email);
} catch(e){
       console.log(`error: ${e}`);
     InvalidEmail();
}

try {
    validateNumber(phoneNo);
}
catch(e){
    console.log(`error: ${e}`);
    InvalidNumber();
}