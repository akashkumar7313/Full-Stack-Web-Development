let restaurant = ((pricePerDish,numOfPeople)=>{

    let totalBill = pricePerDish * numOfPeople;
    let billPerMan = totalBill/numOfPeople;

    return{
        totalBill: totalBill,
        bill_Per_Person: billPerMan
    };
})

let pricePerDish = 30;
let numOfPeople = 5;

let result = restaurant(pricePerDish,numOfPeople);

console.log(result);
