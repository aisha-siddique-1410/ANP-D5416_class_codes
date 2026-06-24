// function greet(a,b){
//     console.log("hello!!", a+b)
// }

// exports.sum = function(a,b){  // using exports keyword
//     return a+b;
// }

// exports.divide= function(a,b){
//     return a/b;
// }

// function difference(x,y){
//     const res = x>y ? x-y : y-x
//     return res;
// }
// // module.exports = greet;  //export  

// // module.exports = {
// //     greet,
// //     sum,
// //     difference
// // }

// // greet();


//ES modules

// export default function greet(){
//     console.log("Hello we are learning node.js");
// }

// export default class User {
//     constructor(name){
//         this.name=name;
//     }

//     greet(){
//         return `hello!! ${this.name}`
//     }
// }

export function add(a,b){  // named export
    return a+b;
}

export function sub(a,b){
    return a-b;
}