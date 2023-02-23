// Arrow function
//  1. One parameter, and a single return statement
const square = (x) => x * x;

// 2. Multiple parameter, and a single return expression
const sumOfTwoNumbers = (x,y) => x + y;

// 3. Multiple statements in function expression
const sum = (x,y) => {
    console.log('Adding ${x} and ${y}');
    return x + y;
};

// 4. Returning an object
const SumAndDifference = (x , y) => ({sum: x + y, difference: x - y});
let output4 = SumAndDifference(5,3);
console.log(output4);

// We need to make a function to add  two numbers 
function addTwoNumbers  (a , b) {
    return a + b;
}

let ans = addTwoNumbers( 5  , 10);
console.log(ans);

function table (x) {
    for(let i =1; i<=10; i++) {
        console.log(x * i);
    }
}

table(5);