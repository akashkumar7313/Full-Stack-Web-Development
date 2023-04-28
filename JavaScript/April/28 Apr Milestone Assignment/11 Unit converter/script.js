// unitConvertor.

let convertUnit = ((celsius)=>{
    let fahrenheit = 0;
    fahrenheit = (celsius * 9/5) + 32;
    return (`fahrenheit F: ${fahrenheit}`);
})

let celsius = 35;
console.log(convertUnit(celsius));// fahrenheit : 95