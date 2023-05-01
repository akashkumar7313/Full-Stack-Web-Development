// Spread Operator

const one = [1,2,3,4]
const two = [5,6,7,8]

// const three = one.concat(two); // with this we can add two arrays

// const three = [one, two]; // This is the wrong way

const three = [...one, ...two]; // ... is the spread operator

console.log(three);



// Rest Operator

function manyArguments() {
    let args = Array.from(arguments);
    const myArr = args.map(el => el * 2);
    console.log(myArr);
}

function manyArgumentsv2(...args) {
    // let args = Array.from(arguments);
    const myArr = args.map(el => el * 2);
    console.log("V2 ",myArr);
}

manyArguments(2,3); //[4,6]
manyArguments(2,3,4); //[4,6,8]

manyArgumentsv2(2,3,4); //[4,6,8]

//Some examples of Spread and Rest Operators
const heros = ["SpiderMan", "Hulk"];
const newHeros = ["IronMan", ...heros, "Thor"];

console.log(newHeros);

const teacherName = "Hitesh Choudhary";
console.log([...teacherName]);


function twoTest(...values) {
    console.log(values);
}

console.log(twoTest("hitesh", "pw"));