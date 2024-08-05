let x=0;
//Logical Operators DO NOT return boolean value. Comparison Operators does

console.log(x && true );    //encountered a falsy value and printed it
console.log(true && 0); //  found true, jumped to next value, 0 is false, returned that falsy value 

console.log(x || true); //returns true value as soon as it is encountered
console.log(false || "");
console.log(false || "s");
console.log("haha" || false);
console.log(1 || 2);    //1

console.log ( x ?? 'n/a');  //prints the second operand if first one is not available | only works with NULL or UNDEFINED