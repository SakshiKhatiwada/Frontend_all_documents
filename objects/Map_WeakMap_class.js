// let arr = new Array();

let obj = { myName: "Sakshi"};
let map = new Map();


map.set(obj, 'hi');
// console.log(map);
// console.log( map.get(obj));
// map.delete(obj);
obj = undefined;
// console.log(map);
// console.log(map.get(obj));
// console.log(obj);

map.forEach(
    (value,key) => console.log(key,value)
)

let obj2 = {myName: "Sakshi"};
let weakMap = new WeakMap();
 
weakMap.set(obj2, 'bye');
// console.log(weakMap);

// console.log(weakMap.get(obj2));

obj2 = undefined;
// console.log(obj2);
// console.log(weakMap.get(obj2));


// weakMap.forEach(
//     (value,key) => console.log(key,value)
// )


let num = 5;
let map2 = new Map();

map2.set(num, 'number');
// console.log(map2);


let num3= 4;
let weakMap2 = new WeakMap();

// weakMap2.set(num3, 'sdf');
console.log(weakMap2);