// Calculating Total Price with discounts
let originalPrice = 100;

let discountRate = 0.2;

let isMember = true;

//console.log(originalPrice);

let discountAmount = originalPrice * discountRate;

//console.log(discountAmount);

let discountedPrice = originalPrice - discountAmount;

//console.log(discountedPrice);

//Additional Discount for Members
if (isMember) {
    discountedPrice-= 10;
}

console.log("Discounted Price:", discountedPrice);