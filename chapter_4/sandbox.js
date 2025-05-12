// callbacks & forEach

const myFunc = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};


// myFunc(function (value) {
//     // do something
//   console.log(value);
// });

myFunc(value => {
  // arrow function) {
    // do something
  console.log(value);
});




