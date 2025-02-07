// Function 1: Calculates the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function 2: Calculates the factorial of a number (duplicate logic)
function calculateFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

// Function 3: Calculates the factorial of a number (duplicate logic)
function findFactorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * findFactorial(number - 1);
  }
}

// Example usage
console.log(factorial(5)); // Output: 120
console.log(calculateFactorial(5)); // Output: 120
console.log(findFactorial(5)); // Output: 120

// Duplicate code block 1
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Duplicate code block 2
for (let j = 0; j < 10; j++) {
  console.log(j);
}
// Example usage
console.log(factorial(5)); // Output: 120
console.log(calculateFactorial(5)); // Output: 120
console.log(findFactorial(5)); // Output: 120

// Duplicate code block 1
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Duplicate code block 2
for (let j = 0; j < 10; j++) {
  console.log(j);
}

// Duplicate code block 3
for (let k = 0; k < 10; k++) {

// Duplicate code block 3
for (let k = 0; k < 10; k++) {
  console.log(k);
}
