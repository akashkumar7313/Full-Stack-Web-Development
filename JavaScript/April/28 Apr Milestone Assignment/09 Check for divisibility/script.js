const divisibility = ((array)=>{
    let container = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 3 == 0 && array [i] % 2 != 0){
            container.push(array[i]); 
        }
    }
    return container.join(" ");
})

console.log(divisibility([1,2,3,4,5,6,7,8,9])); // 3 9