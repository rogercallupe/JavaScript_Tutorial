//  objects literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login() {
    //login: function() { // this is the same as the above regular function
        console.log('the user logged in');
    },
    logout() {
    // logout: function() { // this is the same as the above regular function
        console.log('the user logged out');
    },
    // logBlogs: () => { //    this is an arrow function not working in because use 'this'
    logBlogs() { // this is a regular function
    //logBlogs: function(){

    // console.log(blogs); // this will not work because blogs is not defined in this scope
    //    this.blogs  // this will work because this refers to the user object windows
    // console.log(this); // this will work because this refers to complete the user object 
    // console.log(this.blogs); // this will work because this refers to the blogs property of the user object
    
    
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
    console.log(blog);
     })
   

    console.log(this);

    }    
};

user.logBlogs(); // calling the method
console.log(this);



// user.login();
// user.logout();

// const name ='mario';
// name.toUpperCase(); // string method