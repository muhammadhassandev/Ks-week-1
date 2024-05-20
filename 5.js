function Person(name, age, isEmployed) {
  this.name = name;
  this.age = age;
  this.isEmployed = isEmployed;
}

let person = new Person("John", 30, true);

let abc = {
  name: "hasan",
  rollno: 32323,
};

console.log(abc);

const abc = {
  name: "Hassan",
  age: 21,
};

let { name, age } = abc;
console.log(abc);
