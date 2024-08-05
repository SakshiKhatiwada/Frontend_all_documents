//-Map and WeakMap are built-in Objects
let obj1 = {};
let map1 = new Map();
map1.set(obj1, 'bye');
// console.log(map1);

map1.forEach((value,key)=> console.log(key, value));
//to delete the reference
map1.delete(obj1);
obj1 = undefined;
// console.log(obj1);

map1.forEach((value,key)=> console.log(key, value));    //after deleting prints nth

let obj2 = {};
let map2 = new WeakMap(); //1) Garbage Collection removes references to the key object
map2.set(obj2,'bye2');
console.log(map2);
console.log(map2.get(obj2));

// map2.forEach((value,key)=> console.log(key, value));     doesn't have iterating options
obj2 = undefined;
// console.log(map2.get(obj2));

// console.log(typeof map1, typeof map2);
// map2.forEach((value,key)=> console.log(key, value));


let num = 4;
let map = new Map();
let map3 = new Map();
map.set(num, 'a number');
map3.set(num, 'a number');
console.log(map,map3);  //Map(1) { 4 => 'a number' }, 1 inside bracket means only 1 element?
console.log(map.size);

// let num2 = 4;
// let weakMap = new WeakMap();
// weakMap.set(num, 'a number');    //2) can ONLY be used with objects
// console.log(weakMap);

