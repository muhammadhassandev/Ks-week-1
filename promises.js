let prom = new Promise((resolve, reject) => {
  let num = 10 + 20;
  if (num === 20) {
    resolve("This resolve should come in the then block");
  } else {
    reject("This reject should come in the catch block");
  }
});
prom
  .then((msg) => console.log("then block -->", msg))
  .catch((msg) => console.log("catch block -->", msg));
