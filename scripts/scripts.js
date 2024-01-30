const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = '0';

// ex. a function to calculate shipping costs
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

let location = 'RSA';
let currency = null;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * 1; // Assume that 'NONE_SELECTED' should be 1
let batteries = 35 * 2;
let pens = 5 * 1; // Assume that 'NONE_SELECTED' should be 1

let shipping = null;

// Calculating shipping cost
shipping = calcShipping(location, currency);

// Checking if  the total cost without shipping is equal to or more than 1000
if (shoes + batteries + pens + shirts > 1000) {
  // Checking ifTHE user is in Namibia and number of customers is less than 2
  if (location === 'NAM' && customers < 2) {
    // Checking if user is in RSA
    if (location === 'RSA') {
      shipping = 0;
    }
  }
}

// Checking if THE shipping is free and there is more than 1 customer
if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

// Checking if the location is North Korea
(location === 'NK') ? console.log(BANNED_WARNING) : console.log('Price:', currency, shoes + batteries + pens + shirts + shipping);

let customers = 1;
