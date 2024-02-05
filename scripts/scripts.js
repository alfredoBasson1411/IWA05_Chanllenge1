// Constants for warning messages
const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = '0';

// Initial values
let location = 'RSA';
let currency = 'R'; // Assign a currency value
let customers = 1;

// Item quantities and prices
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * 1; // Assume that 'NONE_SELECTED' should be 1
let batteries = 35 * 2;
let pens = 5 * 1; // Assume that 'NONE_SELECTED' should be 1

let shipping = null;

// Check shipping rates based on location
if (location === 'RSA') {
  shipping = (currency === 'R') ? 400 : null; // Set shipping to null for incorrect currency
} else if (location === 'NAM') {
  shipping = 600;
} else {
  console.log(BANNED_WARNING); // Log a warning for banned locations
}

// Calculate total cost without shipping
const totalCost = shoes + toys + shirts + batteries + pens;

// Check conditions for free shipping
if (totalCost > 1000 && location === 'RSA' && customers === 1) {
  shipping = 0;
} else if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING); // Log a warning for free shipping condition
}

// Check if location is North Korea
(location === 'NK') ? console.log(BANNED_WARNING) : console.log('Price: R', (totalCost + (shipping || 0)).toFixed(2));
