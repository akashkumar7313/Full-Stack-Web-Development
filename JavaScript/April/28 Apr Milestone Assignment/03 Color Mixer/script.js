let colorMixer = ((color1,color2,operator) => {
    let result;
    switch(operator){
        case("&&"): 
        if(color1 == "red" && color2 == "blue" || color1 == "blue" && color2 == "red"){
            result = "purple";
        }
        else if(color1 == "red" && color2 == "yellow" || color1 == "yellow" && color2 == "red"){
            result = "orange";
        }
        else if(color1 == "blue" && color2 == "yellow" || color1 == "yellow" && color2 == "blue"){
            result = "green";
        } else {
            result = "Invalid Color Combination";
        }
        break;
        default: console.log("Invalid Operator");
        break;
    }
    console.log(result);
});

colorMixer("red","blue","&&")//purple;
colorMixer("red","yellow","&&")//orange;
colorMixer("blue","yellow","&&")//green;