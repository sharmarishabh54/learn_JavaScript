console.log("Hello there :)");

async function rishi() {
  console.log("Inside Rishi Fuction :)");
  const response = await fetch("https://api.github.com/users");
  console.log("Before Response");
  const users = await response.json();
  console.log("Users Resolved");
  return users;
}

console.log("before Calling Rishi");
let a = rishi();
console.log("After Calling Rishi");
console.log(a);
a.then((data) => console.log(data));
console.log("Last line of this JS file ;)");
