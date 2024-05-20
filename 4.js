const arr1 = [1, 2, 3, [4, 5]];
const arr2 = [...arr1];
arr1[3] = "a";
console.log(arr1, "arr1");
console.log(arr2, "arr2");
