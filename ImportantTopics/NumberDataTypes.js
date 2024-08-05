//@--Unary operator doesn't work with BigInt
// let x= +5n; TpeError: Cannot convert a BigInt value to a number
// let x=-5n;  //to ask later
// console.log(x);

// let y = 07; //--We can't write this

// let TotalBalance= 300_000_000;  //We can use _ to separate number's digits to make it readable

// let one_billion = 1e9;  //we can use exponential shortcuts to represent 0s
// let mcs= 1e-6;  //can also be in negative

//PTR: if it is to be calculated, save it as number, else string

//NUMBER SYSTEM


// console.log(0xff);  //Ox prefix to represent hex
// console.log(0b0101);    //Ob for binary
// console.log(0o237);     //Oo for Octal


// console.log(0d34);  //You thinking this? It's wrong XD. We are generally representing in decimal all the time dummy
//SyntaxError: Invalid or unexpected token

//All these outputs are printed in DECIMAL 
//what if we want them in other number system?

//toString(base); is an inbuilt method for number system interconversion

// let num = 9;
// console.log(num.toString(2));

// base value is between 2 to 36, else it will give error

//Rounding (We use different inbuilt Math operators)

// let n = 15.45;
// console.log(Math.floor(n)); //floor func
// console.log(Math.ceil(n));  //ceiling func
// console.log(Math.round(n)); //round
// n=-15;
// console.log(Math.abs(n));   //abstract

//SPECIAL NUMBER VALUES

//NaN: assigned to values whose number conversion is not possible

// let myNumber = "5px";

// if (isNaN(parseInt(myNumber)))
// {console.log("NaN");}
// else {console.log("number");}

//-----------INFINITY

// console.log(1/0);   //Infinity
//1. other programming language gives error stating division by 0, but JS doesn't
//2. We have +infinity and -infinity
//3. We can assign infinity and NaN
//4. to check, isFinite()
//5. typeof() is an operator but these are in built functions


//----------parseInt and parseFloat
// let str1="5px";
// console.log(+str1, typeof(+str1));
// //in this type of case, we use them
// str2= parseInt(str1);
// console.log(str2, typeof(str2));

//PTR
// let paperSize = "a4";
// console.log(parseInt(paperSize));   //NaN, the first character should be number for these two func


//GOOD TO KNOW

// parseInt(str, radix);    takes two arguments also

// console.log(parseFloat("f1f",10));  //NaN
// console.log(parseInt("f1f",16));    //parseFloat gave NaN

// console.log("HI");
// console.log(parseInt(null));    
// console.log(parseFloat(null));
// console.log(parseInt(undefined));
// console.log(parseFloat(undefined));

//All of these give NaN

//MATH random()

// console.log(Math.random()*1e6); //generates random number but floats, so multiplying
// console.log(Math.min(5,6,3));
// console.log(Math.max(5,6,9));
// console.log(Math.pow(2,5));  //We also have **


//JS QUIRKS
// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(0.1 + 0.3);

// console.log(9_999_999_999_999_999); // 16-> '9's 10000000000000000

//toFixed 
let nu = 0.1;
console.log(nu.toFixed(20));    //point paxadi 20 ota digits, error dinxa 
