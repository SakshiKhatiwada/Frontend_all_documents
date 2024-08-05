// console.log("Sakshi".charAt(0));     //S
// console.log("Sakshi".slice(2,5));     //Sa ksh i Output: ksh
// console.log("Sakshi".padStart(8, "!"));   
//   //Sak!shi what I thought when I gave '3'
//   //WAI: until the string reaches the total length of 8, pad at the start with !
// console.log("Sakshi".padEnd(10,"x"));   //Sakshixxxx     
// console.log("Sakshi".split(""));     //Reaction: WOW, this is beautiful
// //if sth else inside quotation, it gives joint array

// console.log("Sakshi".replace("aks",""));     //Shi


// console.log("Sakshi".match("sh"));     
// console.log("Sakshi".match(/sh/));     //S
// console.log("Sshldufesh;sirfeshksdjrfieshakshi".match(/sakshi/g));     //Returns null if no match is found
// console.log("Sshldufesh;sirfeshksdjrfieshakshi".match(/sh/g));     //S
// console.log("Sakshi".match(/sh/gi));     //S

let txt = "I can eat bananas all day";
let x = txt.slice(10,17);
console.log(x);