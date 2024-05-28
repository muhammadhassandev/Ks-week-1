// Define an asynchronous function to add two numbers
async function addNumbers(a, b) {
  // Return a new promise that resolves with the sum of a and b
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000); // Simulate an asynchronous operation with a timeout of 1 second
  });
}

// Use the async function
(async () => {
  try {
    const result = await addNumbers(5, 10);
    console.log(`The result is: ${result}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
