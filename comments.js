// Create web Server
// Create a web server that can listen to requests for /hello and responds with some HTML that says <h1>Hello World</h1>
//
// For an extra challenge, make the a different page, like /random that responds with random number inside an h1 tag.
//
// You can use the code from today as a starting point.
//
// Don't forget to npm init first, and install and save express locally.
//
// Bonus:
//
// Add a route /pick-a-number that responds with a random number between 1 and 10. (Bonus: Add a limit query param to specify a max number)
//
// Add a route /hello/:name that expects a name and responds with some HTML that says <h1>Hello _name_</h1>. For example, when I visit localhost:3000/hello/Ashish it should say <h1>Hello Ashish</h1>
//
// Add a route /api/calculator/:operation that accepts 3 parameters: num1, num2, and operation. num1 and num2 are numbers. Let's say operation could be add, sub, mult, div, mod. Your route should perform the appropriate operation on the numbers and print out the result. For example, when I go to localhost:3000/api/calculator/add/1/2, it should print out 3.
//
// Add a route /api/array/concat that accepts 2 arrays within the request body and concatenates the arrays together.
//
// Add a route /api/array/intersect that accepts 2 arrays within the request body and prints out an array with the elements that are in both arrays.
//
// Add a route /api/array/except that accepts 2 arrays within the request body and prints out an array with the elements that are in the first array, but not the second.
//
// Add a route /api/romanize that accepts a number within the request body and prints out the Roman numeral version of that number. (Roman numerals are calculated by reducing the number down to its individual units, tens, hundreds, thousands, etc. For example, 1990 would be MCMXC: 1000=M, 900=CM, 90=XC. 2008 would be MMVIII: 2000=MM, 8=VIII.)
//
// Add a route /api/de-romanize that accepts a Roman numeral within the request body and