// console.log("hello");
// window.console.log("hello");
// window.alert("hello");

// let head = document.getElementsByTagName("h1");
// console.dir(head); // access

// let para = document.getElementById("para");
// console.log(para);


// queryselector
// let element = document.querySelector("p");
// console.log(element);

// let btn = document .querySelector("#myId");
// console.dir(btn);

// let el = document.querySelector("div");
// console.dir(el);

// el.style.background = "green";
// element.style.fontsize = "26px";

// let el2 = document.querySelector("h1");
// console.dir(el2);

// Insert elements

// node.append (el):  adds at the end of the node (inside)
// node.prepend (el) : add at the start of the node ( inside)
// node.before(el) : adds befofe the node (outside)
// node. after (el): adds after the node (outside)

// delete
//node.remove()

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// console.log(newBtn);
// el.after(newBtn);



// let box = document.querySelector("div");

// box.onmouseover = () => {
//     console.log("You are in div by function event");
// }

// btn.onclick = () => {
//     console.log("Button is clicked by handler 1");
//     let a= 25;
//     a++;
//     console.log(a);
//     console.log("after calculation")
// }
// btn.onclick = (e) => {
//     console.log("handler 2");
//     console.log(e);
// }

// event object : has details about the event

// Event Listener
// btn.addEventListener("click", () => {
//     console.log("button was clicked -Handler 1")
// });

// btn.addEventListener("click", () => {
//     console.log("button was clicked -Handler 2")
// });

// btn.addEventListener("click", () => {
//     console.log("button was clicked -Handler 3")
// });

//practice question

// let btn = document.querySelector("button");
// let body = document.querySelector("body");
// let currMode = "Light";
// btn.addEventListener("click", () => {
//   if(currMode == "Light"){
//     currMode = "dark";
//     // document.querySelector("body").style.backgroundColor = "black";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currMode = "Light";
//     //   document.querySelector("body").style.backgroundColor = "white";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
//   console.log(currMode);
// });

// let body=document.querySelector("#togglepassword");
// function togglePassword(){
//     let passwordInput=document.querySelector("#password");
//     if(passwordInput.type==="password"){
//         passwordInput.type="text";
//         body.textContent="Hide Password";
//     }
//     else{
//         passwordInput.type="password";
//         body.textContent="Show Password";
//     }
// }

// difference in innertext and textcontent

// let fruits = ["Apple", "banana", "orange"]
// console.log(fruits)

// const student = {
//   fullName : "Aisha Siddique",
//   marks : 94.4,

//   printmarks : function() {
//     console.log("marks : ", this.marks);
//   },
// };

// const employee = {
//   calcTax(){
//     console.log("tax rate is 10%");
//     // 500 lines of code
//   },
// };

// const karan = {
//   salary: 50000,

//   //500lines
// };

// const karan2 = {
//   salary: 50000,
// };

// const karan3 = {
//   salary: 50000,
// };
// const karan4 = {
//   salary: 50000,
// };
// const karan5 = {
//   salary: 50000,
// };
// karan.__proto__ = employee;
// karan2.__proto__ = employee;
// karan3.__proto__ = employee;


// create a constructor function person(name, age)
// ----- create 3 objects using the constructor-----
// ----- add mthod introduce() using Person.prototype -------
// ----- the method should print a message ------


// constructor functions 
function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() {
  console.log(`Hi, my name is ${this.name} and my age is ${this.age}`);
}
// create objects
const person1 = new Person("Abhishek", 21);
const person2 = new Person("Lokendra", 23);
const person3 = new Person ("jeet", 22);

person1.introduce();
person2.introduce();
person3.introduce();

//Calculate area using prototype
// --- create a constructor function Rectangle(length, width)
// ---- add a prototype method getArea()
// ---- add a prototype method getPerimeter()
// --- create multiple rectangle objects(3) and display their area and perimeter