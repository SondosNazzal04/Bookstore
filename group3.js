// 1. Block-Scoped Variables (let & const)
console.log('----1. Scope----');
if (true) {
  let age = 20;
  const name = "Adel";
  age = 21;
  console.log(name);
}

// 2. Normal vs. Arrow Functions
console.log('----2. Normal vs Arrow Functions----');
function add(a, b) {
  return a + b;
}

const arrow = (a, b) => a + b;
console.log(add(5, 3));

// 3. Destructuring
console.log('----3. Destructuring----');
const user = {
  name: "Adel",
  age: 20
};

// let name = user.name;
// let age = user.age;

const { name, age } = user;
console.log(name);
console.log(age)

// 4. Default Parameters
console.log('----4. Default Parameters----');
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet();
greet("Adel");

// 5. Spread Operator (...)
console.log('----5. Spread Operator----');
const scores = [80, 90, 100, 95];
console.log(Math.max(scores));
console.log(Math.max(...scores));
console.log(scores);
console.log(...scores);

console.log('--------');
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];
const allNumbers2 = [numbers1, numbers2];
console.log(allNumbers);
console.log(allNumbers2);

console.log('--------');
const arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = [...arr1];
arr2.push(4);
arr3.push(5);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 6. Rest Operator (...)
console.log('----6. Rest Operator----');
function showNumbers(...numbers) {
  console.log(numbers);
}
showNumbers(10, 20, 30);

// 7. Map
console.log('----7. Map----');
const userMap = new Map();
userMap.set("name", "Adel");
userMap.set("age", 20);
console.log(userMap.has('age'));
console.log(userMap.get("name"));

// 8. Set
console.log('----8. Set----');
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 6, 5]);
console.log(uniqueNumbers);
