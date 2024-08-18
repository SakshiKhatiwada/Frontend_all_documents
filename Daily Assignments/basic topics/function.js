"use strict";

// function hi()
// {
//     console.log("hi");
// }

// hi();

//2.
/*
function getName(name)
{
    // if (name == undefined)
    //     return 0;
    // else
return name ?? "N/A";

}
let value1;
let value = "sakshi";

console.log(getName(value1));
console.log(getName(value));
*/

/* 3
function greet (name)
{
    console.log("Hello ", name);    //only "Hello" if I had returned this. Be careful here <00>
    console.log("Hello "+name); //Hello ....
    console.log(`Hello name, how are you?`)
    // ---> Back tick ` make it a string literal, I can now input variable to print variable's value
    console.log(`Hello $(name), what's up?`);
}
 
greet("Sakshi");
*/

// -- Function Expression --
// let byee = function Bye(){
//     console.log ("bye");
// }
// Bye (); //--->no use of calling this, it is already changed to "byee" now
// byee();

//--->We can do this same this ^ without a func name now, annonymous function

// -- Returning a function from a func --

/*
function CreateMultiplier (n)
{
    return function (num)
    {
        return n*num;
    }
}

let multiply = CreateMultiplier(2); //--@now a multiplier by 2: multiply consists that returned func
console.log(multiply(30));

console.log(CreateMultiplier(2)(30)); //--@or we can directly give arguments for both func *separately like this
*/


// -- Arrow function --
// let add = function add3num (a, b, c)
// {
//     return a+b+c;
// }
// let add = (a,b,c) => a+b+c;   
  //--@same as assigning a func to add variable with 3 arg returning the sum

