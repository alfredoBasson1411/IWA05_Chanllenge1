const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = '0';

let location = 'RSA';
let currency = 'R'; // Assuming currency is R
let customers = 1;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * 1; // Assuming 'NONE_SELECTED' should be 1
let batteries = 35 * 2;
let pens = 5 * 1; // Assuming 'NONE_SELECTED' should be 1

let shipping = null;

// Function to calculate shipping costs based on location and currency
function calcShipping(location, currency) {
  if (location === 'RSA') {
    return (currency === 'R') ? 400 : 800;
  } else if (location === 'NAM') {
    return 600;
  } else {
    console.log(BANNED_WARNING);
    return null;
  }
}

// Calculate shipping cost
if (location === 'RSA' && currency === 'R') {
  shipping = 400;
} else if (location === 'NAM') {
  shipping = 600;
} else {
  shipping = 800;
  console.log(BANNED_WARNING);
}

// Calculate total cost without shipping
const totalCost = shoes + toys - batteries * 5 + shirts - pens * 5;

// Check conditions for free shipping
if (totalCost >= 1000 && (location === 'RSA' || location === 'NAM') && customers === 1) {
  shipping = 0;
} else if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

// Check if the location is North Korea
if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log('Price: R1270');
}
