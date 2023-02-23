// Function and Declaration of function
function functionname() {
    // function body
}

function myFirstFuction() {
    console.log("This is");
    console.log("My first Function");
    return; // this will also return undefined
}

myFirstFuction();

function mySecondFuntion() {
    return "This value is returned from a function";
}


function isEvenOrOdd(x) {
    if(x%2==0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

isEvenOrOdd(5);

function addFourNumbers(a,b,c,d) {
    let res = a + b + c + d;
    return res;
}

let x = addFourNumbers(10,11,12,13);
let y = addFourNumbers(1,2,3,4);
console.log(x,y);

function multiply(x,y) {
    console.log(x*y);
}

multiply(x,y);

let str = mySecondFuntion();
console.log(str);

