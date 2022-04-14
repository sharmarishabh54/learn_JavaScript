// In javascript Classes are template for javaScript objects
// Let's have a look at syntax
class Car {
  constructor(brand, model, color, engine, aloys) {
    //Here we will assign those params to the this keyword
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.engine = engine;
    this.aloys = aloys;
  }

  makeCar() {
    return `Your ${this.brand} ${this.model} of color ${this.color} powered by ${this.engine} running of ${this.aloys} aloys is now ready for delivery 🚗`;
  }
}

let myCar = new Car("BMW", "M5", "Royal Blue", "V8", "Diamond Cut");
// console.log(myCar.makeCar());

// What if want don't have anything to take from constructor?
class CheckforCon {
  constructor() {
    console.log(CheckforCon.add());
  }
  check() {
    return "Hello Ji :)";
  }

  static add(a, b) {
    // makes method call without instance
    return a + b;
  }
}

// let val = new CheckforCon();
// console.log(val.check());
// console.log(val.add(3, 5));

// Inheritance in JS
//can do it using extends
// can overwrite things using super keywords

// Let's try
// Let's create a class of eployees then make one more class using/inheriting this class for getting frontend and backend and full stack devs out of those employees;

class Employee {
  #privateCode;
  constructor(name, age, gender, jobRole) {
    this.#privateCode = 55; // If you want to access the private static field you can only do it in private static class.
    this.employeeName = name;
    this.employeeAge = age;
    this.employeeGender = gender;
    this.employeeJobRole = jobRole;
  }

  privateId() {
    let value = this.#privateCode;
    return value;
  }

  introduce() {
    return `👋 Hey there, I'm ${this.employeeName} and I am ${
      this.employeeAge
    } years old also I am a ${
      this.employeeGender
    } and I am working here as ${this.employeeJobRole.toUpperCase()}`;
  }

  static companyName() {
    return "One Ltd.";
  }
}

class Stack extends Employee {
  constructor(name, age, gender, jobRole, pLanguage, framework) {
    super(name, age, gender, jobRole);
    this.pLanguage = pLanguage;
    this.framework = framework;
  }

  stackOD() {
    if (this.pLanguage == "javascript") {
      return this.framework == "reactjs" || this.framework == "nextjs"
        ? "Frontend Developer"
        : "Backend Dev";
    } else {
      if (this.pLanguage == "python") {
        return this.framework == "django" || this.framework == "flask"
          ? "Backend Dev"
          : "Script Programmer";
      } else {
        return "Software Engineer";
      }
    }
  }

  static goodStack() {
    return 'Good stack for web is "MERN"';
  }
}

let aboutE = new Stack("Naman", 26, "Male", "Software Engineer", "SQL", "");
console.log(aboutE.introduce());
console.log(Employee.companyName());
console.log(aboutE.stackOD());
console.log(aboutE.privateId());
