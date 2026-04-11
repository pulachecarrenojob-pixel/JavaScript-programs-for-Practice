let a = 20, b =15
console.log(`before swapping : a = ${a} and b = ${b}`);

//this is the logic to swap two numbers without using a temporary variable
//let temp = a 
//a = b 
//b = temp

//Destructuring assignment in ES6 to swap two numbers 
[a, b] = [b, a]
console.log(`after swapping : a = ${a} and b = ${b}`);
