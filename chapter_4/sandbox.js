// callbacks & forEach

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// forEach
//  people.forEach(function(person){
//     console.log(person);
//  }); 

//  with convert in arrow function

//  people.forEach(person => {
//     console.log(person);
//  }); 


//  with convert in arrow function and add index
//  people.forEach((person, index) => {
//     console.log(index, person);
//  });

// 
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
