import multi, * as calc from "./give.js";
// import multi from "./give.js";

function calculate({ a, b, func } = {}) {
  return func(a, b);
}

console.log(calculate({ a: 5, b: 10, func: multi }));
