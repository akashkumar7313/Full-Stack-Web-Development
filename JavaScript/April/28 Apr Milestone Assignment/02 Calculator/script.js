let calculator = function(num1,num2,operator){
    let result = 0;
    switch(operator) {
        case("+"): result = num1 + num2;
        break;
        case("-"): result = num1 - num2;
        break;
        case("*"): result = num1 * num2;
        break;
        case("/"): result = num1 / num2;
        break;
        default:console.log("invalid operator");
    }
    console.log(result);
}

calculator(3,2,"*");