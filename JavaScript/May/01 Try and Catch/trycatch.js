function isEvenOdd(x) {
    try {
        if(x % 2 == 0){
            console.log("Even");
        } else {
            console.lo("Odd");
        }
        console.log("Ending");
    } catch {
        console.log("Handled");
    } finally {
        console.log("Finally")
    }
}

isEvenOdd(11);
console.log("stop");