let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);// true
// console.log(age == '25'); // true, string '25' is equal to number 25
// console.log(age != 25); // false
// console.log(age != '25'); // false

// strict comparison (different types cannot be equal)

console.log(age === 25); // true (strictly equals)
console.log(age === '25'); // false, string '25' is not equal to number 25 (not strictly equals) 
console.log(age !== 25); // false
console.log(age !== '25'); // true, string '25' is not equal to number 25 (not strictly equals)
