// console.log("Hello World");
// console.log("hello!! Kajal");

// var, let and  const

// var age = 24;
// /* redeclare */
// // var age = 34;

// /* update */
// age = 34;
// console.log(age);

// let price = 10;
// // let price = 20;
// price = 30;
// console.log(price);

// const pi = 3.67;
//  pi = 4.67;
// console.log(pi);


// {
//     // var a= 50;
//     let a = 50;
//     console.log(a);
// }

// console.log(a);

// let a= null;  // declaration
// console.log(a);

//alert
// alert("hello World");

// let num = prompt("Enter a number");

// if(num % 2 == 0){
//     console.log(num," is even number");
// } else {
//     console.log(num, " is odd number");
// }



//for loop
// for(let i=1; i<=5; i++){
//     console.log("hello world")
// }

// //while loop

// let i=1;
// while( i<=5){
// console.log("Hello world");
// i++;
// }

// // do while
// let i=10;
// do {
//     console.log("hello world")
// }while(i<=5);


// create a game where you start with any random game number. Ask the user guessing the game number until the 
// user enter the correct answer

// let gameNum =7;
// let userNum = prompt("guess the number : ");

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number, Guess Again: ");

// }
// console.log("Conratulations, you enetered the right number");


// for...of : Arrays, String

// let fruits = ["Apple", "Mango", "Banana"];
// for(let fruitName of fruits){
//     console.log(fruitName);
// }

// let name = "Aisha";
// for(let char of name){
//     console.log(char);
// }

// for...in : Object
// for(let index in fruits){
//     console.log(fruits[index]);
// }

// let student = {
//     name : "Aisha",
//     course : "JavaScript",
//     age : 30
// };

// for(let key in student){
//     console.log(key + " "+ student[key]);
// }

// Create a JavaScript program for a Student Report System

// let students = [
//     {
//         name: "Arun",
//         marks : [80, 75, 90]
//     },
//     {
//         name: "Deepak",
//         marks : [85, 95, 70]
//     },
//     {
//         name : "Karan",
//         marks : [60, 65, 72]
//     }
// ]
// loop thorugh students one by one

// loop thorugh each students marks array indexes
// calculate total marks of each and also average of each student
//print output
// Student Name : Arun
//Total Marks : 245
//Average Marks : 81.66

// for(let student of students){

//     let total = 0;

//     for(index in student.marks){
//         total = total+student.marks[index]
//     }
    
//     let average = total/student.marks.length;

//     console.log("Student Name "+student.name);
//     console.log("Total Marks "+ total);
//     console.log("Average Marks "+average.toFixed(2));

//     console.log("-------------");
// }

// String 

// let str = "  javaScript";
// console.log(str.length);

// string template literal
// let str = `this is a template literal`;
// console.log(str);''==

// let obj = {
//     item : "pen",
//     price : 10,
// };

// console.log("The cost of ", obj.item, " is", obj.price);

// // template literal
// console.log(`The cost of ${obj.item} is ${obj.price}`);

// Arrays : collection of items - linear

// let marks = [97, 82, 75, 64, 36];
// console.log(marks[2]);

// Array methods: push() ; to insert values at the end
// , pop() : to remove values from the end 
//  and toString() : to convert ti string
// let fruits = ["Apple", "Mango", "Banana"];
// let price = [10, 20, 30, 40, 50];
// fruits.push("watermelon", "guava");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// console.log(fruits.toString());

// // conacat () : join multiple arrays and returns value
// let newarray = fruits.concat(price);
// console.log(newarray);
// // unshift() ; insert values at start
// fruits.unshift("Guava");
// console.log(fruits);
// // shift() : delete from the start
// fruits.shift();
// console.log(fruits);

// slice (): returns a piece of array



//  let fruits = ["Apple", "Mango", "Banana", "Watermelon", "guava"];
//  let result = fruits.slice(1, 3);
// console.log(result);
// console.log(fruits.slice(1, 4));

//splice (): change original array (add, remove, replace)

 let fruits = ["Apple", "Mango", "Banana", "Watermelon"];
// fruits.splice(1,2);
// console.log(fruits);

// add
// fruits.splice(1, 0, "Guava")
// console.log(fruits);

//replace
// fruits.splice(1, 2, "Orange" , "Muskmelon" );
// console.log(fruits);


let arr1=[1,2,3,4,5];
// let a = arr1.slice(3,4);  // [4]
// let a = arr1.splice(0,3);
let a = arr1.slice(-2);
// let a = arr1.slice(3);

// console.log(a);
// console.log(arr1);

// let arr2=[1,2,3,4,5];
// let b = arr2.splice(1,4);

// console.log(b);
// console.log(arr2);

// 1. Create an array of 5 fruits and use slice() to get the first 3 fruits
// 2. Create and array of numbers and use slice() to get the last 2numbers
// 3. Remove the second element from an array using splice()
// 4. Add "JavaScript" at index 2 using splice() in an array called" course"
// 5. Replace "Red" with "Blue" using splice in an array called "colors"


// filter ()
//  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//  let evennumbers = numbers.filter(function(num){
//     return num%2 == 0;
//  });
//  console.log(evennumbers)


// reduce
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((prev, curr) => {
//     return prev +  curr;
// },0);

// console.log(sum);


/* Exercise 1 – Grocery Store Basket

A customer is shopping in a grocery store and keeps adding items to their basket.

Your Task:
Create an empty array called basket.
Add 5 grocery items using push().
Display all items in the basket.
The customer changes their mind and removes the last item using pop().
Display the updated basket and the removed item.
Exercise 2 – Morning School Attendance

A class teacher is preparing the attendance list for the day.

Your Task:
Create an array with the names of 5 students.
One student arrives late and should be added at the beginning using unshift().
Another student leaves early, so remove the first student using shift().
Display the final attendance list.
Exercise 3 – Movie Ticket Booking

A cinema website asks users for booking details.

Your Task:
Ask the user’s name using prompt().
Ask for their favorite movie name.
Show a welcome message using alert().
Display another alert confirming their movie booking. */

// Functions in JS

// function myFunction(){
//     console.log("We are learning JS");
// }
// myFunction();
// myFunction();
// myFunction();  // function saves redundancy

// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("We are learning JS");

// function sum(x, y){
// var s = x+y;
//  console.log("before return");
//     return s;
//     console.log("After return");
// }
// // let val = sum(2, 3);
// // console.log(val);
// sum(2,3);
// console.log(s);

// arrow function
// const arrowsum = (a,b) => {
//    console.log(a+b);
// }
// arrowsum(2,3);
// (a, b) => {
//     console.log(a+b);
// }

// create a function using function keyqword that takes a string as an argument  & rturns the number of vowel in
// the string

// normal function
function countvowels(str){
    let count =0;
    let vowels = "aeiouAEIOU"

    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countvowels("JavaScript"));


// arrow functin
const countvowel = (str) => {
     let count =0;
    let vowels = "aeiouAEIOU"

    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
};
console.log(countvowels("Programming"));