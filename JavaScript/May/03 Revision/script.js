// Arrays - An array in JavaScript is a data structure that stores an ordered list of elements. It can hold elements of any data type, including numbers, strings, objects and even other arrays. Arrays are a type of object in JavaScript and have a number of built-in-methods for adding, removing, and manipulating elements.

const fruits = [];
fruits.push("banana","apple","peach","mango");
console.log(fruits.length); // to get the length of the array
console.log(fruits); // to print the array

// Join method - Join method creates and returns a new string by concatenating all of the elements in an array
console.log(fruits.join()); // output - 'banana,apple,peach,mango'
console.log(fruits.join('')); // output - 'bananaapplepeachmango'
console.log(fruits.join('-')) // output - 'banana-apple-peach-mango'

// Slice method - Slice method returns a shallow copy of portion of an array into a new array object selected from start to end (end no included)
const animals = ["ant","bison","camel","duck","elephant","bison"];
console.log(animals.slice(2)); // output - [ 'camel', 'duck', 'elephant' ]
console.log(animals.slice(2,4)); // output - [ 'camel', 'duck' ]
console.log(animals.slice(1,5)); // output - [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(animals.slice(-2)); // output - [ 'duck', 'elephant' ]
console.log(animals.slice(2,-1)); // output - [ 'camel', 'duck' ] 

// IndexOf method - indexOf method returns the first index at which a given element can be found in the array, or -1 if not present.
console.log(animals.indexOf("bison")); // output - 1
console.log(animals.indexOf("bison",2)); // output - 5
console.log(animals.indexOf("parrot")); // output - -1

// Push method - push method adds the specified elements to the end of an array and returns the new length of the array.
const animals2 = ["pigs","goats","sheep"];
console.log(animals2); // output - [ 'pigs', 'goats', 'sheep' ]
const count = animals2.push("cows");
console.log(count); // output - 4
console.log(animals2); // output - [ 'pigs', 'goats', 'sheep', 'cows' ]
animals2.push("chickens","cats","dogs");
console.log(animals2); // output - [ 'pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs' ]

fruits[5] = "watermelon";
console.log(fruits[5]); // output - 'watermelon'
console.log(Object.keys(fruits)); // output - [ '0', '1', '2', '3', '5' ]
console.log(fruits.length); // output - 6
console.log(fruits); // output - [ 'banana', 'apple', 'peach', 'mango', <1 empty item>, 'watermelon' ]
fruits.length = 10; 
console.log(fruits); // output - [ 'banana', 'apple', 'peach', 'mango', <1 empty item>, 'watermelon', <4 empty items> ]
console.log(fruits[8]); // output - undefined

// filter method - Filter method creates a shallow copy of a portion of a given array, filltered down to just the elements from the given array that pass the test implemented by the provided function.
const words = ["spray","limit","elite","exuberant","destruction","present"];
const result = words.filter(element => element.length > 6);
console.log(result); // output - [ 'exuberant', 'destruction', 'present' ]

// flat method - Flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr1 = [0,1,2,[3,4]];
console.log(arr1.flat()); // output - [ 0, 1, 2, 3, 4 ] 
const arr2 = [0,1,2,[[[3,4]]]];
console.log(arr2.flat(2)) // output - [ 0, 1, 2, [ 3, 4 ] ]
console.log(arr2.flat(3)) // output - [ 0, 1, 2, 3, 4 ] 

// map - Map method creates a new array populated with the results of calling a provided function on every element in the calling array. 
const array1 = [1,4,9,16];
// Pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1); 


















