class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const develhope = new Person(1, "Mario", "Rossi", 25);
console.log(develhope);

let json = JSON.stringify(develhope);
console.log(typeof json);
console.log(json);
