// let object = {}; //empty objects

// const myObject = {
//     city: "Madrid",
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     },
//   };
  
//   myObject.greet(); // Greetings from Madrid

// //   myObject.toString(); // works even though it doesn't know what toString() does
//   Object.getPrototypeOf(myObject); //after consoling {}


//   const myDate = new Date();
// let object = myDate;


//   object = Object.getPrototypeOf(object);
//   console.log(object);

let obj2 =
{
    Name : "Sakshi",
    age: 19,
};

// console.log(obj2.Name, obj2.age);   //Using . operator
// console.log(obj2["Name"], obj2["age"]);    //Using [] operator - most efficient way to use, Recommended

// let obj3 ={
//     1: "one",
// };

// console.log(obj3.1); --> error, *can't access number and string keys with dot operator
// console.log(obj3."1");  //error

// console.log(obj3["1"]);  //1

//Using multi words as key
// let obj4 = {
//     "student Name": "Sakshi Khatiwada",
// }
// console.log(obj4.student Name); //error
// console.log(obj4."student Name"); //error

// console.log(obj4["student Name"]);

//2
// let namekey= "Name";
// console.log(obj2.namekey);  //undefined 
// does not work here because it does not interpret namekey as a variable but rather looks for a property with the literal name "namekey".
//If we use a variable in a key, use in bracket syntax

let color = "red";
let obj6 = {
    // red: "apple", 
    [color]: "apple",
}

// console.log(obj6.red);
// console.log(obj6[color]);

// console.log(obj2[namekey]);

console.log("red" in obj6); //true
// console.log(red in obj6); error

//Deleting key value in an object
console.log(obj2);
delete obj2.age;
console.log(obj2);











