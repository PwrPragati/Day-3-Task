// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Arrow Function
const add = (x, y) => x + y;
console.log(add(3, 4)); // 7

// Function with Default Parameter
const multiply = (x, y = 2) => x * y;
console.log(multiply(5)); // 10 (y defaults to 2)
console.log(multiply(5, 3)); // 15
