// Special Data Structure - Array [List]

// Ordered Collection Data type

// Declaration of Array[]

// let arr1 = new Array(); // empty array declaration

// let arr2 = []; // empty array declaration

// Yojana Marks

// range of array (length: 5 elements) Range: [0-4]
// let yojana_marks = [80, 78, 89, 93, 67]; // number array

// Range: zero - (length of array - 1)

// console.log(yojana_marks);

// Indexing (Locating)
// --------------------------------------------------------
// Arrays are zero indexed in js.

// console.log(yojana_marks[0]); // first element
// console.log(yojana_marks[1]); // second element
// console.log(yojana_marks[4]); // fourth element

// // in other programming langauge -> array index out of range
// console.log(yojana_marks[5]); // undefined

// // negative indexing
// console.log(yojana_marks[-1]); // undefined

// let subjects = [
//   "Eng. Maths",
//   "Prob. & Stat",
//   "CS",
//   "EDC",
//   "Electromagnetics",
//   "Instrumentation I and II",
// ]; // strings array

// console.log(subjects[4]); // Electromagnetics
// console.log(subjects[3]);

// Length of array

// let total_subjs = subjects.length;
// console.log(total_subjs,subjects[total_subjs-1]); // last element

// Note: Array can be of any data type

// let bool_array = [true, false, true, false, null, undefined] // boolean array

// console.log(bool_array); // returns bool array

// Mixed Array : Of different datatypes

// let mix_array = ["Bibek Joshi", 7, true] // Array of multiple dtype

// console.log(mix_array);

// Arrays are Iterable

let students = ["Aayush", "Navin", "Yojana", "Birendra", "Sakshi"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// iterating over array - so array are iterables
//  of - returns each element
for (let stu of students) {
  console.log(stu);
}

// // iterating using in - returns index of each element

// for (let index in students) {
//   console.log(students[index]);
// }

// Qn. Define a array of names (7),
// 1. find its lenght,
// 2. and print each element using iteration
// 3. print second last element
// E.g: Second Last Element: "Bibek"; ---> Using string literals

// let names = [
//   "Aayush",
//   "dinesh",
//   "kiran",
//   "manoj",
//   "karan",
//   "rohit",
//   "sandip",
//   "deepak",
// ];

// console.log(names.length);

// for (let name of names) {
//   console.log(name);
// }

// console.log(`second last element: ${names[names.length - 2]}`);
