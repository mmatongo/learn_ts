/* Daniel M. Matongo (C) 2022 - All rights reserved */

// Type Inference

let x = 10; // will always be a number even if you assign a string
console.log(typeof x);

let y = "Hello";
console.log(typeof y);

let z = true;
console.log(typeof z);

x = "Hello"; // throws an error
/* assignments are still type checked */

console.log(typeof x);




