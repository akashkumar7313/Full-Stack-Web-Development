// done this one .

const final_order = ((cart) => {
    let totalCost = 0;
  cart.forEach(item => {
    totalCost += item.unitPrice * item.quantity;
  });
  return totalCost;
})

let cart = [
    {unitPrice: 50, quantity: 3},
    {unitPrice: 60, quantity: 2},
    {unitPrice: 80, quantity: 5}
]

console.log(final_order(cart));