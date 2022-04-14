//As we know so may times whenyou have big number of params to provide then what should we do?
//let's try param destructuring

// function parmDestruct(param1, param2, param3) {
//   return `param 1 : ${param1}\nparam2 : ${param2}\nparam3 : ${param3}`;
// }

// this is now what i want 😔 ... so, what can we do? let's try param destructuring

function parmDestruct({ param1, param2, param3 } = {}) {
  return `param1 : ${param1}\nparam2 : ${param2}\nparam3 : ${param3}`;
}

console.log(parmDestruct({ param3: 3, param1: 1, param2: 2 }));
// Oh boy it just works 🤩
