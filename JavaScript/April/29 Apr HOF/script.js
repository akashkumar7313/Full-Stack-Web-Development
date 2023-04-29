let arr = [2,3,4];

arr.forEach(function(element,index, ar){
    console.log(index,element,arr);
})

arr.forEach((element, index, arr) => {
    console.log("arrow ", index, element, arr);
})

const heros = ["Ironman","Batman","Superman","Spiderman", "Ironheart"];

// heros.forEach((el) => console.log(el.toUpperCase()));

heros.map((el) => console.log(el.toUpperCase()));

const herosWithIron = heros.filter((h) => {
   return h.startsWith("Iron");
});
console.log(herosWithIron);

// cart
const cartBill = [20,30,50];

const sumOfCart = cartBill.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfCart);

// check if all value are numbers
const gameScore = [200,350,310,100,250,150];
const gameScoreCheck = gameScore.every((v) => typeof v === "number");
console.log("check: ", gameScoreCheck);

//check if any score is above 200
const above200 = gameScore.find((score) => score > 200);
console.log("above: ", above200);