// console.log("Hi");
// console.log("Hello");

let grandfather = document.querySelector(".grandfather");

let childNodes = grandfather.childNodes;
// console.log(childNodes);
let children = grandfather.children;
// console.log(children);

let fatherNode = document.querySelector(".father");

let parentOfFather = fatherNode.parentNode;
// let parentOfFather = fatherNode.parentElement;
// console.log(parentOfFather);

let sonNode = document.querySelector(".son");
let daughterUsingSonNode = sonNode.nextElementSibling;
let sonSib = sonNode.nextSibling;
console.log(daughterUsingSonNode);
console.log("next sibling of son is: ",sonSib);