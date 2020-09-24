// Constructor function
function Person(firstName, lastName, gender, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.dob = new Date(dob).getFullYear();
}

Person.prototype.getInfo = function() {
  return `My name is ${this.firstName} ${this.lastName}.`;
};

// Inherit prototype
Student.prototype = Object.create(Person.prototype);

// change to student constructor
Student.prototype.constructor = Student;

// Constructor Student
function Student(firstName, lastName, gender, dob, prodi) {
  Person.call(this, firstName, lastName, gender, dob);

  this.prodi = prodi;
}

const st1 = new Student('John', 'Doe', 'M', '1-1-2004', 'Informatika');

console.log(st1.getInfo());
