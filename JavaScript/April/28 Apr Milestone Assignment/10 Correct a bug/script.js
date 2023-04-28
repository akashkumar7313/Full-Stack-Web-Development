
const correctBug = ((cart)=>{
    
    for(let i = 0; i < cart.length; i++){
            cart[i] *= 2;
    }
    return cart;
})

console.log(correctBug([0.5,1,1.5,2]))// when i take my cart it gets halved and after the operation it will be corrected.