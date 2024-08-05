let array = [2,3,4,7];
console.log(array);

//push
array.push(2);  //adds item to the end
console.log("after push operation: ", array);

//pop
let returned_element= array.pop();    //removes and returns last element
console.log("array after popping:", array,"popped element: ", returned_element);

//shift
let shifted_element= array.shift(); //removes and returns first element
console.log("Array after shift: ", array, "shifted_element", shifted_element);

//unshift
array.unshift(53);
console.log("after unshift: ", array);

//splice ->extracts elements in given range in new array
array.splice(0,2); // deletes 2 elements at index 0
console.log("Array after splice: ", array);
array.splice(0,1,5,6,7); // deletes 2 elements at index 0 and adds 5 6 and 7 at that index
console.log("Array after 2nd splice: ", array);

//concat -> to 
let arr1 = [4,5,6];
let arr2 = [8,9,5];
console.log(arr1 + arr2);   // we concatenate string like this
//but for arrays we use concat()-> returns concatenated array
let arr3 = arr1.concat(arr2);
console.log(arr3);

