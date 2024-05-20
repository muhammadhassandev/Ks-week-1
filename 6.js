let a = 2;
let b = a + 3;

console.log(a); // pass by value
console.log(b);

let Arr1 = [1, 2, 3];
Arr2 = Arr1;
Arr2.push = "4"; // pass by reference

console.log(Arr1);
console.log(Arr2);
