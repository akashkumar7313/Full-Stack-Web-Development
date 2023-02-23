// Anonymous Function
let variableName = function () {
    // Function body;
};

// calling the anonymous function.
variableName();


let x = function () {
    console.log("Unnamed function");
}

x();

// IIFE (Immediately Invoked Function Execution)
variableName();

// IIFE

(function (num) {
    console.log(num * num);
}) (5);

(function (name) {
    console.log("Greetings", name);
})("Aarav");




