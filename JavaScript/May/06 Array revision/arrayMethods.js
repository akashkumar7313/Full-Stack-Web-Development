let arr = [11,12,13,14];
console.log(arr); // output - [ 11, 12, 13, 14 ]

arr.push(9); // arr.push(9) this mean 9 will be added to last of the array
arr.push(19);
console.log(arr); // output - [ 11, 12, 13, 14, 9, 19 ]

arr.pop(); // arr.pop() this will remove one element from the last
arr.pop();
console.log(arr); // output - [ 11, 12, 13, 14 ]

arr.shift(); // arr.shift() will remove from the start in array
console.log(arr); // output - [ 12, 13, 14 ]

arr.unshift(97); // arr.unshift(97) will add 97 in the first of the array 
console.log(arr); // output - [ 97, 12, 13, 14 ]

const ar1 = [1,2,3,4];
const ar2 = [5,6,7,8];

const res = ar1.concat(ar2); // this will return a new array with elements of ar1 and ar2
console.log(res); // output - [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const x = [1,2,3,4,5,6,7];
const rev = x.reverse(); // x.reverse() will reverse all the elements of the array
console.log(rev); // output - [ 7, 6, 5, 4, 3, 2, 1 ] 

// array.splice(start, deletecount, i1, i2,....);
const removed = x.splice(2,2,0,0,0); // x.splice method helps to remove elements from between of the array
console.log(x,removed); // output - [ 7, 6, 0, 0, 0, 3, 2, 1 ] [ 5, 4 ]

