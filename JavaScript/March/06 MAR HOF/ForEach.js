let arr = [2,3,4];

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("arrow", index, element, arr);
})


const heros = ["naagraj", "doga", "dhruva", "maniraj"];
heros.forEach((el) => console.log(el.toUpperCase()));