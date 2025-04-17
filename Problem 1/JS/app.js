let itemPrice = 50;

let quantity = 3;

let discount = 0.15;

let subTotal = itemPrice * quantity;

console.log("Subtotal:", subTotal);

let discountAmount = subTotal * discount;

console.log("Discounted Amount:", discountAmount);

let discountedPrice = subTotal - discountAmount;

console.log("Discounted Price:", discountedPrice);