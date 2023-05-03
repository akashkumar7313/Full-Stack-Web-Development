function isPrime (x) {
    try {
        for(let i=0; i<=x; i++){
            if(x % i == 0){
                throw "not a prime";
            }
        }
    
        return "Prime";
    } catch (err) {
        console.log("handled",err);
    } finally {
        console.log("end");
    }

}

isPrime(11);