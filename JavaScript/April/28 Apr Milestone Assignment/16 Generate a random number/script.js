// self invoking function;

const random_number = (()=>{
    const min = 1;
    const max = 100;
    let random = 0;
    random = Math.floor(Math.random()*(max-min+1)+1);
    return random;
})();

console.log(random_number);