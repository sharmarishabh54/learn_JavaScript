// Is there any way so that we can not execute our code with undeclared variables ❓
// Don't you worry i have got your back 😌
//We can use "use strict" literal expression  so that we can not run our code with undeclared variables

// Let's find out 🔍

// b = 1;

// console.log(b);
// se it worked despite of having b as undeclared variable
// let's fix this 😎

"use strict";
b = 1;
console.log(b); // Syntax Error => ReferenceError: b is not defined

// See it's done 😏
