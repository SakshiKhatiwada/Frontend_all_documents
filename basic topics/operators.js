//Fun fact: JS throws error very rarely

val = 5;

console.log(val);

console.log(5+"5"); //55
console.log(5+5+"5");//105

console.log(5-"2");
console.log("Sakshi"+ " "+ "Khatiwada"); //Sakshi Khatiwada

console.log(3/"Sakshi");    //NaN: Not a number: divide is done but it's not a number
//Number is involved in the calculations, but it's not valid -> NaN

console.log(null + 5);  //5
console.log(undefined + 5)  //NaN
console.log(true + false)   //1


//************Implicit Type Casting
let Var="1234";
console.log(typeof(Var));

Var = +Var;

console.log (typeof(Var));

console.log(+true);     //1
console.log(-true);     //-1

let a=b=c=7;    //all are assigned 7