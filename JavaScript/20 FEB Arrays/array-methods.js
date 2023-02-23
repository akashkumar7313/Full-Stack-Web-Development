let arr = [10,11,12,13];

console.log(arr);

arr.push(9); //to add a new element at the last
arr.push(49);

console.log(arr);

arr.pop(); //to remove an element from the last
arr.pop(); 

console.log(arr);

arr.shift();  //to remove from the start
console.log(arr);

arr.unshift(21); //to add in the start
console.log(arr);

const a1 = [1,2,3,4];
const a2 = [5,6,7,8];

const res = a1.concat(a2); //to return a new array with elements of a1 followed by elements of a2

console.log(res);

const x = [1,2,3,4,5,6,7];

const s = x.slice(2,4); //to fetch the data from the start to end -1

console.log(s);

const str = x.join("-"); //to club all the elements together to form a string separated by a given char

console.log(str);

const rev = x.reverse(); //to reverse the value

console.log(rev);

const a = [1,2,3,4,5,6,7];
console.log(a.indexOf(6)); //if not present it will return -1

const removed = a.splice(2,2, 0, 0);
console.log(a, removed);