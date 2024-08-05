const arr = [1, 2, 3, 4, 5];
// it is a collection of elements
// it can store elements of any type
console.log(arr);
console.log(arr.length);

// Methods:
// they are the builtin functions that can be called on arrays
// they are used to perform operations on arrays
// they can be called using dot notation on an array

// 1. push():
{
  // it adds one or more elements to the end of an array
  // it returns the new length of the array
  const fruits = ["apple", "banana"];
  const newLength = fruits.push("orange");
  console.log(newLength); // Output: 3
  // fruits is now ['apple', 'banana', 'orange']
}

// 2. pop():
{
  // Removes the last element from an array
  // and returns removed element.
  const fruits = ["apple", "banana", "orange"];
  const removedFruit = fruits.pop();
  // removedFruit is 'orange', fruits is now ['apple', 'banana']
}

// 3. unshift():
{
  // it adds one or more elements to the beginning of an array.
  // and returns the new length of the array.
  const fruits = ["banana", "orange"];
  const newLength = fruits.unshift("apple");
  // fruits is now ['apple', 'banana', 'orange']
}

// 4. shift():
{
  // it removes the first element from an array
  // and returns removed element.
  const fruits = ["apple", "banana", "orange"];
  const removedFruit = fruits.shift();
  // removedFruit is 'apple', fruits is now ['banana', 'orange']
}

// 5. concat():
{
  // Combines two or more arrays.
  // it doesnot change the original arrays
  const fruits = ["apple", "banana"];
  const moreFruits = ["orange", "grape"];
  const allFruits = fruits.concat(moreFruits);
  // allFruits is ['apple', 'banana', 'orange', 'grape']
}

// 6. slice():
{
  // it is used to extract(slice) a section of an array
  // it returns a extracted(sliced)i.e removed elements array
  // it doesnot change the original array
  const fruits = ["apple", "banana", "orange", "grape"];
  const selectedFruits = fruits.slice(1, 3);
  // 1 is start index(included) and 3 is end index (not included)
  // selectedFruits is ['banana', 'orange']
}

// 7. splice():
{
  // it is used to add or remove elements from an array
  // it modifies original array and returns the array of removed elements
  const nums = [1, 2, 3, 4, 5];
  // first argument is the index from where to start (included)
  // second argument is the number of elements to remove
  const arrayOfRemovedElements = nums.splice(2, 1); // removes 1 element from index 2
  console.log(returnedValue); // [3]
  // nums is now [1, 2, 4, 5]

  const fruits = ["apple", "banana", "orange", "grape"];
  fruits.splice(2, 1, "kiwi", "melon");
  // 2 is index(included) from where removing starts,
  // 1 is number of elements to remove
  // others are the elements to added
  // fruits is now ['apple', 'banana', 'kiwi', 'melon', 'grape']

  const emptyArr = fruits.splice(2, 0, "kiwi", "melon");
  console.log(emptyArr); // []
  //nothing is removed just kiwi and melon are added
}

// 8. copyWithin():
{
  // it copies a sequence of elements within the array
  // it modifies the original array and returns itself
  const fruits = ["apple", "banana", "orange", "grape"];
  const modified = fruits.copyWithin(1, 2, 3);
  console.log(fruits);
  console.log(modified);
  // copy from index 2(included) upto 3(excluded) and put at index 1
  // fruits is now ['apple', 'orange', 'orange', 'grape']
}

// 9. includes():
{
  // it returns true if the element is present in the array
  // it returns false if the element is not present in the array
  const fruits = ["apple", "banana", "orange"];
  const isBananaPresent = fruits.includes("banana");
  // isBananaPresent is true
}

// 10. indexOf():
{
  // it returns the index of the first occurrence of the element
  // it returns -1 if the element is not found
  const fruits = ["apple", "banana", "banana"];
  const index = fruits.indexOf("banana");
  // index is 1
}

// 11. lastIndexOf():
{
  // it returns the index of the last occurrence of the element
  // it returns -1 if the element is not found
  const fruits = ["apple", "banana", "orange", "banana"];
  const index = fruits.lastIndexOf("banana");
  // index is 3
}

// 12. reverse():
{
  // it reverses original array i.e modifies original array
  // and returns the reversed array i.e itself
  const fruits = ["apple", "banana", "orange"];
  const reversed = fruits.reverse();
  console.log(reversed);
  console.log(fruits);
  // fruits is now ['orange', 'banana', 'apple']
  // reversed is ['orange', 'banana', 'apple']
}

// 13. sort():
{
  // it sorts the elements in the array alphabetically
  // i.e it modifies the original array
  // and returns the sorted array i.e itself
  const fruits = ["apple", "banana", "orange"];
  const sortedArray = fruits.sort();
  // sortedArray is ['apple', 'banana', 'orange']
  // fruits is now ['apple', 'banana', 'orange']
}

// 14. join():
{
  // it joins the elements of an array into a string
  // it returns the string
  const fruits = ["apple", "banana", "orange"];
  const fruitsStr = fruits.join(", ");
  // fruitsStr is 'apple, banana, orange'
}

// 15. toString():
{
  // it converts an array to a string
  // it returns the string
  const fruits = ["apple", "banana", "orange"];
  const fruitsStr = fruits.toString();
  // fruitsStr is 'apple,banana,orange'
}

// 16. fill():
{
  // it fills the array with a any value
  // ie. it modifies the original array
  // and returns the modified array i.e itself
  const fruits = ["apple", "banana", "orange"];
  const filledAarray = fruits.fill("kiwi");
  // filledAarray is ['kiwi', 'kiwi', 'kiwi']
  // fruits is now ['kiwi', 'kiwi', 'kiwi']
}

// 17. forEach():
{
  // it is used to iterate over an array
  // it calls a function for each element in the array
  // it returns undefined
  // and doesnt change the original array
  const fruits = ["apple", "banana", "orange"];
  const returnedValue = fruits.forEach((fruit) => console.log(fruit)); // Output: 'apple', 'banana', 'orange'
  console.log(returnedValue); // undefined
}

// 18. keys():
{
  // it returns the keys(indexes) of an array
  const fruits = ["apple", "banana", "orange"];
  const keys = fruits.keys(); // [0, 1, 2]
  for (const key of keys) {
    console.log(key);
  }
  // Output: 0, 1, 2
}

// 19. values():
{
  // it returns the values of an array
  const fruits = ["apple", "banana", "orange"];
  const values = fruits.values(); // ["apple", "banana", "orange"]
  for (const value of values) {
    console.log(value);
  }
  // Output: 'apple', 'banana', 'orange'
}

// 20. entries():
{
  // it returns an array iterator that contains the key/value pairs of the array
  const fruits = ["apple", "banana", "orange"];
  const entries = fruits.entries(); // [["1", "apple"], ["2", "banana"], ["3", "orange"]]
  for (const entry of entries) {
    console.log(entry);
  }
  // Output: [0, 'apple'], [1, 'banana'], [2, 'orange']
}

// 21. find():
{
  // it returns the first element in the array that satisfies the test function
  const numbers = [1, 2, 3, 4, 5];
  const firstEvenNumber = numbers.find((num) => num % 2 === 0);
  // firstEvenNumber is 2
}

// 22. findIndex():
{
  // it returns the index of the first element in the array that satisfies the test function
  const numbers = [1, 2, 3, 4, 5];
  const firstEvenNumberIndex = numbers.findIndex((num) => num % 2 === 0);
  // firstEvenNumberIndex is 1
}

// 23. every():
{
  // it returns true if all pass the test
  // it returns false if any one fails the test
  const numbers = [2, 4, 5, 6, 8];
  const areAllEven = numbers.every((number) => number % 2 === 0);
  // areAllEven is false
}

// 24. some():
{
  // it returns true if any one pass the test
  // it returns false if all fails the test
  const marks = [40, 20, 50, 60, 80];
  // fail if marks is less then 32
  const isFailed = marks.some((mark) => mark < 32);
  const result = isFailed ? "failed" : "passed";
  console.log("Ram is " + result); // Ram is failed
}

// 25. map():
{
  // it doesn't change the original array
  // it returns a new array with the result of function called on each element
  const numbers = [1, 2, 3];
  const doubledNumbers = numbers.map((num) => num * 2);
  // doubledNumbers is [2, 4, 6]
}

// 26. filter():
{
  // it doesn't change the original array
  // it returns a new array with the result of test function called on each element
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  // evenNumbers is [2, 4]
}

// 27. reduce():
{
  // it doesn't change the original array
  // it returns a single value after applying a function to each element
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  // sum is 15
}

// 28. flat():
{
  // it flats the array to the specified depth
  // it doesnot change the original array
  const arr = [1, 2, [3, 4, [5, 6]]];
  const flatArr = arr.flat(2); // depth is 2
  // flatArr is [1, 2, 3, 4, 5, 6]
}

// 29. flatMap():
{
  // first map and then flat
  // it doesnot change the original array
  const arr = [1, 2, 3];
  const result = arr.flatMap((x) => [x, x * 2]);
  // at first maps : to [[1, 2], [2, 4], [3, 6]]
  // then flattens : to [1, 2, 2, 4, 3, 6]
  // only one level deep
}

// Static Methods:

// 1. of():
{
  // it creates a new array from the arguments
  const arr = Array.of(1, 2, 3, 4, 5);
  // arr is [1, 2, 3, 4, 5]
}

// 2. from():
{
  // it creates a new array from an array-like object or iterable object
  // that has lenght property
  // Converting a string into an array
  const str = "hello";
  const arrayFromStr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

  // Using a mapping function to transform elements
  const nums = [1, 2, 3];
  const doubled = Array.from(nums, (num) => num * 2); // [2, 4, 6]

  // it creates a new array from an array-like object or iterable object
  const arr = Array.from({ length: 5 }, (elem) => elem);
  // arr is [undefined, undefined, undefined, undefined, undefined]

  const arr2 = Array.from({ length: 5 }, (elem, i) => i + 1);
  // arr2 is [1, 2, 3, 4, 5]
}

// 3. isArray():
{
  // it returns true if the argument is an array
  const fruits = ["apple", "banana", "orange"];
  const isArr = Array.isArray(fruits);
  // isArr is true
}

// Properties:

// 1. length: Returns the number of elements in an array.
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.length); // Output: 3
}

// 2. constructor: Returns a reference to the array constructor function.
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.constructor); // Output: Array()
}

// 3. prototype: Allows you to add properties and methods to an array object.
{
  Array.prototype.printLength = function () {
    console.log(`Length: ${this.length}`);
  };
  const fruits = ["apple", "banana", "orange"];
  fruits.printLength(); // Output: Length: 3
}

const array = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(array); // Output: [1, 2, 3, 4, 5]

const newArr = Array(5)
  .fill()
  .map((_, i) => i + 1);
console.log(newArr); // Output: [1, 2, 3, 4, 5]
