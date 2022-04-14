// Create an object using opject literals:
// let obj1 = {
//   brand: "Maruti",
//   model: "Wagon-R",
//   topSpeed: 100,
// };

// let car = new obj1(); will throw an error because obj1 is not a constructor so what is this constructor now?
// Let's access this
// console.log(obj1.topSpeed);
// console.log(obj1.model); // This is how we can access properties of an object

// Now Let's Create objects using constructor so if we need to pass some params to the obj so that it can process it , we can do it by this constructor this which is also going to use in classes as well
// to be more specific about constructor it is a self executing method that gets execute wheneve you create a new object.

// Let's say now we need to make a blueprint of how a car is going to be and to make it little personalized we can user selections.

function CarIt(name, brand, color, engine, topSpeed) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.engine = engine;
  this.topSpeed = topSpeed;

  this.customize = function () {
    console.log(
      `👋 Hey there, We have a great news for you that your car is now ready and specs after the customizations are:\n------------Specification List------------ \nName : ${this.name} \nBrand : ${this.brand} \nColor : ${this.color} \nEngine : ${this.engine} \nTopSpeed : ${this.topSpeed}`
    );

    this.analyze = function () {
      return this.topSpeed > 150
        ? `Your car is ${this.topSpeed - 150} km/h faster 🚀 then avg.`
        : `Your car is ${150 - this.topSpeed} km/h slower 🐢 then avg.`;
    };
  };
}

let myCar = new CarIt(
  "SWIFT",
  "SUZUKI",
  "BMW GREY",
  "TURBO 1.2L Fuel Jet",
  190
);
myCar.customize();
console.log(myCar.analyze());

let myCar2 = new CarIt(
  "CIVIC",
  "HONDA",
  "Perl White",
  "1.5L Petrol [Naturally Aspirated]",
  120
);
myCar2.customize();
console.log(myCar2.analyze());
