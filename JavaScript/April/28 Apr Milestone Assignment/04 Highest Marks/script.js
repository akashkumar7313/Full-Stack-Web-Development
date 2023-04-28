let marks = [346,234,543,234,342];

let maxNumber = -Infinity;

for(let i = 0; i<marks.length; i++){
    maxNumber = (marks[i] > maxNumber) ? marks[i] : maxNumber;
}

console.log("The highest marks of student is = " + maxNumber);