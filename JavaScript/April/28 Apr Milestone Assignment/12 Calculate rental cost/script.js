
// calculate rent of cars 

const rentCalculate = ((vehicle,days) => {
    let rent = 0;
    rent = vehicle * days;
    return rent;
})

let economy = 4000;
let midSize = 10000;
let luxury = 20000;

console.log(rentCalculate(economy,12))// 48000;
console.log(rentCalculate(midSize,10))//100000;
console.log(rentCalculate(luxury, 5))//100000;