// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// function for decrement button 
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value > 0) {
        displayValue.innerText = value - 1;
    } else {
        alert("Negetive value not allowed");
    }
});

// function for increment button 
incrementBtn.addEventListener("click" , () => {
    const value = Number(displayValue.innerText);
    if(value >= 10){
        alert("10+ values are not allowed");
    } else {
        displayValue.innerText = value + 1;
    }
});


// reset button
resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});
