function calculateSquare(x = 2) { // here x is a parameter
    return x*x;
}

function multiply (x = 2, y = 3) {
    return x*y;
}

function addElements([num1, num2, num3]) {
    return num1 + num2 + num3;
}

console.log(calculateSquare(10));
console.log(multiply());

let arr = [1,2,3,5,6];
console.log(addElements(arr));