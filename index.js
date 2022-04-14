//let message = "Hello";
//message = 123456;
// let num = 54;
// //BigInt
// num = 1234567890123456789012345678901234567890n;
// console.log(num);

// let str = "Hello Jagmohan!";
// let names = 'Jahmohan'
// let str2 = `${names} when did you came to delhi?` // for string interpolation we need to use ` => this symbol which is known as reverse quotation mark or backtick.
// let str3 = null;
// console.log(str3);

//undefined
// let age;
// console.log(typeof 'ge');

//Array in JS
// const car = ['Suzuki', 'Honda', 'TATA','Mahindra'];
// console.log(car[2]);

//Object in JS

//Symbol
// const x = Symbol();
// const y = Symbol('Description of y');
// console.log(x);
// console.log(typeof x);
// console.log(y);
// console.log(y.description);

// const person = {
//     firstName: 'Jagmohan',
//     employeementType: 'Self Employed',
//     company: 'JAGMOHAN LIMITED',
//     earning: '$ 1 MILLION',
//     earningFrequency: 'Anually',
//     [y]: 'Jahmohan is really rich'
// };
// console.log(`${person.firstName} is ${person.employeementType} in ${person.company} and earning ${person.earning} ${person.earningFrequency}`);
// console.log(person);
// // symbol are not included in for...in loop
// for(let key in person){
//     console.log(key);
// }

// function init(){
//     var firstName = 'Rishabh';
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     sayFirstName();
// }

// init();
//  // Will not work because scope of firstName is just inside the function.

//Closure
// function doAddition(x){
//     function add(y){
//         return x + y;
//     }
//     return add;
// }

// var result = doAddition;
// console.log(result(6)(4));

// var v1 = 'Hello';
// var v1 = 'Hii';

// function varCheck(){
//     var v3 = 'functionCheck'
// }

// console.log(v1);
// console.log(v3);

// let l1 = greeting = 'Say hello';
// let l2 = 4;

// if(l2 > 3){
//     let Hello = 'Hello';
//     console.log(Hello);
// }

// // console.log(Hello);

// const obj = {
//     a : '1',
//     b : '2'
// }

// obj.a = 1;

// var age = 100;
//   if (age > 12){
//     var dogYears = age * 7;
//     console.log(`You are ${dogYears} dog years old!`);
//   }

//String to number
// console.log(Number('3.5'));
// console.log(Number(' '));
// console.log(Number(''));
// console.log(Number('00  00'));
// let a = 7;
// let b = '7';

// let c = null;
//  a === b? c = 10 : c = 5;
// console.log(c); // conditional statement

//For Loop

// for(let i = 0; i< 10; i++){
//     console.log(`${i} : Hello Looping`);
// }

// for in loop
// let myObj ={
//     fName : 'Raman',
//     lName : 'Bhalla',
//     age : 25,
//     gender : 'Male',

// }
// for (counter in myObj){
//     console.log(counter);
// }

//for of .. it is usable in iterable cases like array, string, maps and sets.

// let myArray = [1,2,3,4,5,66,55]; // for-of in array gives you the value
// for(variables of myArray){
//     console.log(variables);
// }

// for(variables in myArray){  // for-in in array gives you reference of the value
//     console.log(variables);
// }

// for each is best suitable for arrays , if executes a call back function then this function executes it's body for iterables
// myArray.forEach((arr, index, testUnit)=> console.log(testUnit));

// Nested Loop
// for(let i = 1; i < 10; i++){
//     for(let j = 0; j<i; j++){
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//        console.log(`i = ${i}, j = ${j}`);
//     }
//  }

// const animals = ["dog", "cat", "mouse", "wolf", "chicken", "rabbit"];
//   for (let i = 0; i <animals.length; i++) {
//     if (animals[i]==="wolf") break;
//     console.log(`index:${i}, value: ${animals[i]}`)
// }

// const animals = ["dog", "cat", "mouse", "wolf", "chicken", "rabbit"];
//   for (let i = 0; i <animals.length; i++) {
//     if (animals[i]==="wolf") break;
//     console.log(`index:${i}, value: ${animals[i]}`)
// }

// let n = 0;
// while (n < 10) {
//   if (n ==3 )
//     break;
//   n++;
//   console.log(n)
// }

// for(let i = 1; i<10; i++){
//     if(i%2 == 0){
//         continue;
//     }console.log(i);
// }

//labeled Loops:
// loopOne: for (let i = 0; i<=5; i++){
//     loopTwo: for (let j =0; j<=5; j++){
//         if(i===3) continue loopOne;
//         if (j===3) break loopTwo;
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// for loop on web

// for(let i = 0; i<10; i++){
//     if(i%2 === 0){
//         document.write("Even Number : " + `${i}`+ "<br>");
//         continue;
//     }
//     document.write("Odd Number : " + `${i}` + "<br>");
// }

// Let's Learn array
//In JS array can be defined using two methods:
//1. Using array Literals
// const cars = ['Brezza', 'Nexon', 'XUV 300', 'Creta', 'WR-V', 'X1', 'Q7', 'Ecosport'];
// // console.log(cars);
// //2. Using new keyword
// const car = new Array('Brezza', 'Nexon', 'XUV 300', 'Creta', 'WR-V', 'X1', 'Q7', 'Ecosport');
// console.log(car);
// But this is not a preffered option in coding
//You can put any data of any datatype in array
// const anyThing = ['1', 2, function hello(){console.log("Hello Array")} , true ];
// console.log(anyThing[2]());

// cars.push('Tigon');
// // console.log(cars);
// cars.unshift('Safari');
// console.log(cars);
// We can easily change value of an array using it's index;
// cars[8] = 'XUV 700';
// console.log(cars);
// Let's remove the elements form the array using pop and shift
// cars.pop();
// const removedValue =cars.shift();
// console.log(cars);
// console.log(`Removed Value: ${removedValue}`); // both pop() and shift() removes value but they also returns the value they removed.

// Let's Have a look athe the methods of array;
//concat() use to add two arrays;
// const arr1 = [1,3,4,5];
// const arr2 = [6,7,8,9];

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

//indexof()
// console.log(cars.indexOf('X1'));
//find(
// console.log(cars.find(element => element === 'X2'));
//findIndex()
// console.log(cars.findIndex(mySearch => mySearch === 'Creta'));
//forEach()
// cars.forEach((arr, index) =>{
//     console.log(`At Index ${index}: We have ${arr}`);
// });
//includes()
// console.log(cars.includes('XUV 600'));
//sort()
// cars.sort();
// console.log(cars);

// let newSliceofCars = cars.slice(0,3); // if you pass 3 in end param it will consider it end param - 1;
// console.log(newSliceofCars);
// console.log(cars);
//splice()
// cars.splice(2,0,'XUV 700');
// console.log(cars);
// cars.splice(2,1);
// cars.splice(2,1,'XUV 700', 'XUV 500', 'Venue')
// // console.log(cars);
// document.write(`${cars}`);

//Let's lean about multidimentional array
// this is a multidimentional array of 2 dimentions having two rows and two columns.
// const multiDim = [['Vansh', 23], ['Rohit', 16]];
// // console.log(multiDim);
// // console.log(multiDim[1][0]);

// multiDim.push(['Ravi', 45]);
// multiDim[2].push('Also Working');
// // console.log(multiDim);

// multiDim.forEach((itr) =>{
//     itr.forEach((data) => {
//         console.log(data);
//     });
// })

// const learnObject = {
//     fName : 'Rishabh',
//     lName : 'Sharma',
//     age : 23,
//     nationality : 'Indian',
//     fullName : function fullNameIt(){
//         return this.fName +" "+ this.lName;
//     },
//     work: {
//         job : 'Complere',
//         startUp : 'Fortheye',
//     }

// }

// console.log(learnObject.work.job);

//map in array
// const array = [1,2,3,4,5,6,10,5];
// const doubleTheNumber = array.map(function(item){
//     return item * 2;
// });

// console.log(doubleTheNumber);

//Filter
// const arrayFilter = array.filter(function(item){
//     if (item === 3){
//         return item;
//     }
// });

// console.log(arrayFilter);
//reduce
// const sum = array.reduce(function (result, index){
//     return result + index;
// }, 0);

// console.log(sum);

//some
// const hasNeg = array.every(function(item){
//     return item > 0;
// });

// console.log(array.findIndex(function(item){
//     return item === 3
// }));

//delete somthing in array
//sort array in decending order
// console.log(array.sort(function(a,b){return a-b}));

// console.log(array.lastIndexOf(5,7));

//----------------------------------------------------------------------------------------------------------
// const sName = '                                Hema is not Pushpa                           ';
// const sLike = ' Fir bhi uski pasand Nirma :)';
// console.log(sName.length);
// console.log(sName.charAt(2));
// console.log(sName.charCodeAt(2));
// console.log(sName.concat(sLike));
// console.log(String.fromCharCode(72,69,76,76,79));
// console.log(sName.lastIndexOf('e',0));
// console.log(sName.replace(/Pushpa/i,'Sushma'));
// console.log(sName.slice(2,8))

// console.log(sName.split('o'));
//let check = sName.split('s');
//console.log(check[1]);
// console.log(sName.toLowerCase());
// console.log(sName.toUpperCase());
// console.log(sName.includes('Pushpu'));
// console.log(sName.endsWith('Pushpa'));
// console.log(sName.startsWith('Hema'));
// console.log(sName.repeat(3));
// console.log(sName.valueOf());
// console.log(sName.trim());
// Let's look into Date Object and learn about it's functionality
// let d = new Date();
// // console.log(d.getDate());
// let otherDate = new Date('09/16/1976');
// console.log(otherDate.getDay());

// // Let's destructure the array:
// const nameToIt = ['Hema', 'Singh'];
// // [fName, ...elements] = nameToIt;
// [fName, lName, gender = 'Male'] = nameToIt;
// console.log(fName);
// console.log(lName);
// console.log(gender);

//Function
// let x = (a,b) =>{return a*b}; //ES6 Syntax
// console.log(x(4,2));

// dostuff();

// // function dostuff(){}

// const dostuff = () => {};

//(function() => {})() //IIFE = immediately invoked function expressions
//Use cases of IIFE
// (function(){
//     let foo = 'Bar';
//     console.log(foo);
// })();

//ES6 Way

// {
//     let foo = 'Bar';
//     console.log(foo);
// }

// console.log(foo);

// const uniqueId = (function () {
//     let count = 0;
//     return function () {
//       ++count;
//       return `id_${count}`;
//     };
//   })();

//   console.log(uniqueId());
//   console.log(uniqueId());

//Let's learn functions in JS:
//Function Declaration
//   function testFunc() {
//      return 'Hello there, Don\'t Watch me :)';
//   }

//   console.log(testFunc());

//Function expression
//   const functionExpression = function(){
//      console.log("I'm going for a hot bistro coffee, do you wanna join me?");
//   }

//   functionExpression();

//named function expression
// const checkNameStuff = {
//     'nameStuff' : function(yourName){
//         return `Hello ${yourName}, how are you doing buddy ?`;
//     }
// };

// console.log(checkNameStuff.nameStuff('Harshita'));

//Default parameters
// function sum(x = 3, y = 5){
//     return x + y;
// }

// console.log(sum());// 8

// console.log(sum(5,5)); //10

// console.log(sum(10)); //15

// using expression as default value;
// function sum(x = 1, y = x, z = x + y){
//     return(x + y + z);
// }

// console.log(sum(10)); //40
// console.log(sum());

// const sum = () => 15;
// const calculate = function(x, y = x * sum()){
//     return x + y;
// }

// const result = calculate(10);
// console.log(result);

// let x = {
//     a : 1,
//     b:2
// }

// function sum({a = 0, b = 0} = {}){
//     return a + b;
// }

// console.log(sum(x));

//Lets learn spread operator and

//  let x = [3,4];
//  console.log(Math.min(...x)); // Spread Op
// we also have Object.assign(myobj, {a:1 .........})

//Let see spread vs rest

//spread
// function sumOne(a, b){
//     return a + b;
// }

// let y = [5,6,10,12];

// console.log(sumOne(...y)); // We are passing values to the function in the form of array using spread operator so that this spread is proving values of that array to the function.

// //let see the rest operator

// function sumTwo(...args){
//     console.log(args);
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
// }

// console.log(sumTwo(1,2,3,4)); // rest operator as name suggest rest, it takes all the arguments you apps in param as an array.

//Timing Intervals
// let timeOutId;

// function delayTimer(){
//     timeOutId = setTimeout(delayedFunction, 3000);  //shows aync behaviour
//     return timeOutId;
// }

// function delayedFunction(){
//     console.log("3 Seconds have passed!");
// }

// function clearAlert(){
//     clearTimeout(timeOutId);
// }
// delayTimer();
// clearAlert();

// SetInterval()
// let timeInterval = setInterval(timer(), 1000);
// function timer(){
//     const d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }

// let calc = function(num1, num2, calcType){
//     return calcType(num1, num2);
// }

// function add(n1, n2){
//     return n1 + n2;
// }

// function sub(n1, n2){
//     return n1 - n2;
// }
// function multi(n1, n2){
//     return n1 * n2;
// }

// function div(n1, n2){
//     return n1 / n2;
// }

// console.log(calc(2,3, (a,b)=>{return a**b}));

// let a = Math.random(0, 7);
// console.log(Math.floor(a*10)+1);

//Closures in JS
//Promises in js is like you are going to do that in future
// let isRoomClean = new Promise(function(resolve, reject){
// // Working on cleaning Mission
// let isClean = true;
// if(isClean){
//     return resolve('Cleaned :)');
// } else{
//     return reject('Not Cleaned :(')
// }
// });

// isRoomClean.then((fromResolve)=> console.log(`Oh so room is ${fromResolve}`)).catch((fromReject) => console.log(`Why the hell this room is ${fromReject}`));

// let isRoomClean = function(){

//    return new Promise(function(resolve, reject){
//       (true) ? resolve('Cleaned ') : reject('Not Cleaned ');
// });
// }

// let isGarbageClean = function(message) {

//     return new Promise(function(resolve,reject){
//          (true)? resolve(message +' Done ') : reject(message +'Not Done ');
// });}

// isRoomClean().then(function(result){
//     return isGarbageClean(result);
// }).catch((result)=> isGarbageClean(result)).then((result)=> console.log(' Finished ' + result)).catch((result)=> console.log(' Not Finished ' + result));

//Let's discuss about Arrow functions
//Regular Function:
// function square(a) {
//   return a * a;
// }

// console.log(square(4));
//Arrow Function

// const square = (a) => {
//   return a * a;
// };
// more beautiful version
// const square = (a) => a * a;
// console.log(square(5));

//Anonymous Function
// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(3, 4));
//An Anonymous Function always applied as an argument to another function
// setTimeout(() => console.log("4 Seceond have elipced"), 4000);
// const donated = [
//   { name: "Xavier", age: 19, city: "LA", donation: 20 },
//   { name: "David", age: 16, city: "georgia", donation: 20 },
//   { name: "Amanda", age: 18, city: "wahingon DC", donation: 20 },
//   { name: "Amy", age: 20, city: "chicago", donation: 20 },
//   { name: "Jesicca", age: 28, city: "LA", donation: 20 },
//   { name: "Alex", age: 15, city: "LA", donation: 20 },
// ];

// const donate = donated.filter(function (donated) {
//   if (donated.age >= 18) {
//     return true;
//   }
// });
// console.log(" Donors above 18", donate);

// const sum = donated.reduce(function (total, amount) {
//   return total + amount.donation;
// }, 0);
// console.log("Total donations", sum);

// function test() {
//   console.log(this);
// }

// test();

//use of this keyword
// const parent = {
//   mom_name: "Samantha Quinn",
//   mom: function () {
//     return "This is my Mother.";
//   },
// };
// console.log(parent.mom());

//Let's update This with .this keyword
// const parent = {
//   mom_name: "Samantha Quinn",
//   mom: function () {
//     return `${this} is my Mother`;
//   },
// };
// console.log(parent.mom());

//So this is refferening to the object but not the property of that object because we did not reffered it yet.

// const parent = {
//   mom_name: "Samantha Quinn",
//   mom: function () {
//     return `${this.mom_name} is my Mother`;
//   },
// };
// console.log(parent.mom());
// it works! but what about arrow functions?
// const parent = {
//   mom_name: "Samantha Quinn",
//   mom: () => {
//     return `${this.mom_name} is my Mother`;
//   },
// };
// console.log(parent.mom());
// Says undefiened because now unlike regular functions arrow functions does  not have their own this context.

// Let's undwerstand this even better with other example.
// function User() {
//   (this.name = "John Doe"),
//     (this.score = 20),
//     (this.sayUser = function () {
//       // when `this` is accessible
//       console.log(this.name);

//       let self = this;

//       // function innerFunction() {
//       //   // when `this` refers to the global scope/object
//       //   console.log(self.name);
//       // }

//       let innerFunction = () => {  //However, when the innerFunction is inside an arrow function, this will refer to the parent scope by creating this of its own context.
//         console.log(this.name);
//       };

//       innerFunction();
//     });
// }
// let name = new User();
// name.sayUser();

// let animals = {
//   // add property
//   domesticAnimals: [
//     "cat",
//     "dog",
//     "cow",
//     "goat",
//     "sheep",
//     "donkey",
//     "pig",
//     "horse",
//   ],
//   // add method
//   printdomesticAnimals: function () {
//     console.log("Inside printdomesticAnimals", this);
//     // print after 3 seconds
//     setTimeout(function () {
//       console.log("Inside setTimeOut", this);
//     }, 3000);
//   },
// };

//FIXME: This is where the arrow function comes into play. They don’t have their own this context. When used inside the outer (enclosing) function, this keyword will point to where the function is present.

// let animals = {
//   // add property
//   domesticAnimals: [
//     "cat",
//     "dog",
//     "cow",
//     "goat",
//     "sheep",
//     "donkey",
//     "pig",
//     "horse",
//   ],
//   // add method
//   printdomesticAnimals: function () {
//     // print after 3 seconds
//     setTimeout(() => console.log(this.domesticAnimals.join("-")), 3000);
//   },
// };
// animals.printdomesticAnimals();
//TODO: Arrow Function using object literal
// const sayName = function () {
//   return {
//     name: "jonh Doe",
//     age: 26,
//   };
// };

// console.log(sayName().name);
//If i convert it to an arrow function then
// const sayName = () => ({
//   name: "jonh Doe",
//   age: 26,
// });

// console.log(sayName().name);

// function User() {
//   (this.name = "John Doe"), (this.age = 20);
// }
// const user = new User();
// console.log(user);

//-------------------------------------------------------------------------------
//Async Await:
// document.write("Hello From JS");

// async function f() {
//   return 1;
// }

// async function f() {
//   return Promise.resolve(2);
// }

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Done"), 2000);
//   });

//   let result = await promise;
//   alert(result);
// }

// f();
// async function showAvatar() {
//   // read our JSON
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();

// read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the avatar
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

// we assume this code runs at top level, inside a module
// async function test() {
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();

//   console.log(user);
// }

// // test();
// const express = require("express");
// const app = express();
// const axios = require("axios").create({baseUrl: "https://jsonplaceholder.typicode.com/"});

// app.listen(2400, () => {
// 	console.log("Server started at port 2400");
// });

// const axios = require("axios");

// async function apiKey() {
//   let response = await axios.get("https://www.boredapi.com/api/activity");
//   let jsonResponse = response.json();
//   console.log(jsonResponse);
// }
// apiKey();

// Requires Node js concept

// Let's understand async and await the harry way!

//FIXME: bind this:

const person = {
  name: "Aman",
  age: 19,
  walk: function () {
    console.log(this);
  },
};

console.log(person.walk()); //Output {"name": "Aman","age": 19}

// const walking = person.walk;
// console.log(walking()); //Output [object Window]

//now we can fix this using bind this
//because we know that every function is a object in js so we can use . notation to bind this

const walking = person.walk.bind(person);
console.log(walking()); //Output {"name": "Aman","age": 19}
