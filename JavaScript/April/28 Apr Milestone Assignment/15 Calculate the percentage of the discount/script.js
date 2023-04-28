const discountpercent = ((origin, dis)=>{
    let discountPercent = Math.round((dis/origin)*100);
    return {
        mega_Discount: `${discountPercent}% off`
    };
})

let origin = 420;
let dis = 365.40;

console.log(discountpercent(origin,dis));