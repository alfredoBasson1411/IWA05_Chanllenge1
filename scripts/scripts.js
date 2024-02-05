const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = '0';

// Function to calculate shipping costs based on location and currency
function calcShipping(location, currency) {
  if (location === 'RSA') {
    // Return 400 if currency is 'R', otherwise 800
    return (currency === 'R') ? 400 : 800;
  } else if (location === 'NAM') {
    // Return 600 for Namibia
    return 600;
  } else {
    // Log a warning and return null for banned locations
    console.log(BANNED_WARNING);
    return null;
  }
}

// Initial values for location, currency, and number of customers
let location = 'RSA';
let currency = null;
let customers = 1;

// Item quantities and prices
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * 1; // Assume that 'NONE_SELECTED' should be 1
let batteries = 35 * 2;
let pens = 5 * 1; // Assume that 'NONE_SELECTED' should be 1

let shipping = null;

// Calculating shipping cost
shipping = calcShipping(location, currency);

// Checking if the total cost without shipping is equal to or more than 1000
if (shoes + batteries + pens + shirts > 1000) {
  // Checking if the user is in Namibia and the number of customers is less than 2
  if (location === 'NAM' && customers < 2) {
    // Checking if the user is in RSA
    if (location === 'RSA') {
      // Set shipping to 0 for free shipping in RSA
      shipping = 0;
    }
  }
}

// Checking if the shipping is free and there is more than 1 customer
if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

// Checking if the location is North Korea
(location === 'NK') ? console.log(BANNED_WARNING) : console.log('Price:', currency, shoes + batteries + pens + shirts + shipping);
