
// const greet = require("./greet");  // import  //commonjs
// greet.greet(10,20);
// console.log(greet.sum(10,20));

//ES Modules

// import greet  from "./greet.js";
// const user1 = new User("Aisha");
// console.log(user1.greet());

// greet();

// import {add, sub} from '/greet.js';

// task :

/* student.js, app.js 
output : Hello!!, welcome to node js classes
student name : name
course : web development
batch : ANP-D5416

create the function with variables in student.js file then import it in app.js and 
display the output */

import {name, course, batch, greetStudent} from './student.js'
console.log("Student Name: ", name);
console.log("Course: ", course)
console.log(greetStudent());
