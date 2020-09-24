// OOP with ES6
class Person {
  constructor(firstName, lastName, gender, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.dob = new Date(dob).getFullYear();
  }

  getInfo() {
    return `My name is ${this.firstName} ${this.lastName}.`;
  }
}

// inheritance
class Student extends Person {
  constructor(firstName, lastName, gender, dob, prodi) {
    super(firstName, lastName, gender, dob);
    this.prodi = prodi;
  }
}

// instantiate object
const st1 = new Student('John', 'Doe', 'M', '1-1-2004', 'Informatika');
console.log(st1);
console.log(st1.getInfo());
