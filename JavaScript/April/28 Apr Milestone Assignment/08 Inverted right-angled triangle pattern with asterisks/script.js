
const pattern = ((input_int)=>{

    for(let i = 1; i <= input_int; i++){
       let bag = "";
    for(let j = input_int; j >= i; j--){
        bag += "*"
    }
    console.log(bag);
}
})

pattern(6);