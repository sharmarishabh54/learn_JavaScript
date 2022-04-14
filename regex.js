// console.log("This is Reg");

// Regular Expressions;
let reg = /rishi/;
reg = /rishi/g; // Global means fing out from entire string
// reg = /rishi/i; // makes case unsensitive

// console.log(reg);
// console.log(reg.source);

let s = "rishi is so innocent that rishi don't know why we laugh";

//Function exec() is use to return an array for match or null for no match.
// let result = reg.exec(s);
// console.log(result);

// result = reg.exec(s);
// console.log(result.input);

// console.log(result.index); only returns if output is not null
// we can use multiple exec() with global flag /g

//Funcation test() returns true if output not null else false
// result = reg.test(s);
// console.log(result);

// Function match() it is use on string and return array or null;

// let result = s.match(reg);
// console.log(result);

//Function search() return index of first match or -1; is uses string
// let result = s.search(reg);
// console.log(result);

//Function replace() returns new replaced stings with all the replacements (if no global flag is given  first match will be replaced)
let result = s.replace(reg, "RISHABH");
console.log(result);
