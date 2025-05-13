//  primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`); // 50, 50

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`); // 100, 50

//  reference values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo); // { name: 'ryu', age: 30 } { name: 'ryu', age: 30 }

userOne.age = 40;
console.log(userOne, userTwo); // { name: 'ryu', age: 40 } { name: 'ryu', age: 40 } 
// because userTwo is a reference to userOne, changing userOne also changes userTwo

userOne.name = 'chun-li';
console.log(userOne, userTwo); // { name: 'chun-li', age: 40 } { name: 'chun-li', age: 40 }

