// pseudo classical model

// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function() {
//   console.log(this.firstName + ' ' + this.lastName)
// }
// Person.prototype.communicate = function() {
//   console.log('Habla careverga!');
// }

// Person.prototype.eat = function() {
//   console.log('uy zona sancochito!');
// }

// Person.prototype.sleep = function() {
//   console.log('vamo a echa un suenito');
// }

// function Doctor (firstName, lastName, age, gender, specialization) {
//   this.specialization = specialization
// }

// Doctor.prototype = new Person();
// Doctor.prototype.constructor = Doctor;

// Doctor.prototype.diagnose = function() {
//   console.log('joaaa compae uste tiene sida, gonorrea, herpes, sarna...');
// }

// function Profesor(firstName, lastName, age, gender, subject) {
//   this.subject = subject;
// }

// Profesor.prototype = new Person();
// Profesor.prototype.constructor = Profesor;

// Profesor.prototype.teach = function() {
//   console.log('aprende pelao hp!');
// }

// function Student(firstName, lastName, age, gender, degree) {
//   this.degree = degree;
// }

// Student.prototype = new Person();
// Student.prototype.constructor = Student;

// Student.prototype.study = function() {
//   console.log('joaaa cule poco e vainas loco!');
// }

// function GraduateStudent(firstName, lastName, age, gender, graduateDegree) {
//   this.graduateDegree = graduateDegree;
// }

// GraduateStudent.prototype = new Student();
// GraduateStudent.prototype.constructor = GraduateStudent;


// GraduateStudent.prototype.research = function() {
//   console.log('buscando en wikipedia mi llave');
// }

//------------
// class syntax
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  
  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  communicate() {
    console.log('hablaa');
  }

  eat() {
    console.log('comelona');
  }

  sleep() {
    console.log('cule suenio');
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = this.specialization
  }
  
  diagnose() {
    console.log('joa compa estas barro');
  }
}

class Profesor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = this.subject
  }
  
  teach() {
    console.log('aprende hp!');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = this.degree;
  }
  
  study() {
    console.log('cule poco e vainas pa estudiar joaa');
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, graduateDegree) {
    super(firstName, lastName, age, gender);
    this.graduateDegree = this.graduateDegree;
  }
  
  research() {
    console.log('wikipedia mi llave');
  }
}

// OLOO

const Person = {
  init(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    return this
  },

  fullName() {
    console.log(this.firstName + this.lastName);
  },

  communicate() {
    console.log('Communicating');
  },

  eat() {
    console.log('Eating');
  },

  sleep() {
    console.log('Sleeping');
  }
}

const Doctor = Object.create(Person);
Doctor.init = function(firstName, lastName, age, gender, specialization) {
  Person.init.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
  return this;
};
Doctor.diagnose = function() {console.log('diagnosed')};

console.log(Doctor)

const Professor = Object.create(Person);
Professor.init = function(firstName, lastName, age, gender, subject) {
  Person.init.call(this, firstName, lastName, age, gender);
  this.subject = subject;
  return this;
}
Professor.teach = function() {console.log('Teaching')}

const Student = Object.create(Person);
Student.init = function(firstName, lastName, age, gender, degree) {
  Person.init.call(this, firstName, lastName, age, gender, degree); 
  this.degree = degree;
}
Student.study = function() {console.log('Studying')}

const GraduateStudent = Object.create(Student);
GraduateStudent.init = function(firstName, lastName, age, gender, research) {
  Person.init.call(this, firstName, lastName, age, gender, research); 
  this.research = research;
}
GraduateStudent.research = function() {console.log('Researching')}




const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'