// practices arrow function


// const greet = function() {
//   return "Hello, World!";
// }

// example 1
// const greet = () => 'Hello, World!';
// const result = greet();
// console.log(result); // Hello, World!

// example 2

// const bill = function(products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// same with arrow function
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
}

console.log(bill([10, 15, 30], 0.2)); // 66



