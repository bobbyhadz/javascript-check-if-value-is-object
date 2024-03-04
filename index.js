// EXAMPLE 1 - Check if a Value is an Object in JavaScript

function isObject(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  );
}

const variable = {name: 'bobby hadz'};

if (isObject(variable)) {
  // 👇️ this runs
  console.log('✅ Value is an object');
} else {
  console.log('⛔️ Value is not an object');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Value is an Object using `Object.prototype.toString()`

// // 👇️ true
// console.log(
//   Object.prototype.toString.call({}) === '[object Object]',
// );

// // 👇️ false
// console.log(
//   Object.prototype.toString.call([]) === '[object Object]',
// );

// // 👇️ false
// console.log(
//   Object.prototype.toString.call(null) === '[object Object]',
// );

// ------------------------------------------------------------------

// // EXAMPLE 3 - Defining a reusable function

// function isObject(value) {
//   return (
//     Object.prototype.toString.call(value) === '[object Object]'
//   );
// }

// if (isObject({name: 'bobby hadz'})) {
//   // 👇️ this runs
//   console.log('The value is an object');
// } else {
//   console.log('The value is not an object');
// }

// console.log(isObject({})); // 👉️ true
// console.log(isObject([])); // 👉️ false
// console.log(isObject(null)); // 👉️ false
// console.log(isObject('bobbyhadz.com')); // 👉️ false
