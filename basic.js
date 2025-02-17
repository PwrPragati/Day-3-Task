


// Using var (function-scoped, avoid using in modern JS)
var name = "Pragati"; 
console.log(name);

// Using let (block-scoped, recommended for variable values that change)
let age = 25;
age = 26; // Can be reassigned
console.log(age);

// Using const (block-scoped, cannot be reassigned)
const birthYear = 2004;
// birthYear = 1999; // ❌ Error: Assignment to constant variable
console.log(birthYear);

// Data Types
let isStudent = true; // Boolean
let score = 95.5; // Number
let message = "Hello, World!"; // String
let colors = ["Red", "Green", "Blue"]; // Array
let person = { name: "Bob", age: 30 }; // Object

console.log(typeof isStudent, typeof score, typeof message, typeof colors, typeof person);
