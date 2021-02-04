/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain concepts as you are speaking to a 12 years old
*/

/* WRITE YOUR ANSWER HERE */

//There are 5 main datatypes in JS.

//1. Number : it means an numbers like 1, 3, -90, 0, etc, but with out quotation marks
//2. String : any characters between qutotations marks
//3. Boolean : simply 'true' and 'false'  
//4. Undefined : this means the value is not (yet?) delcared, but this doensn't mean, there was no value.
//5. Null : this means it has no value at all.

/* EXERCISE 2
Describe what is a variable. Try to explain the concept as you are speaking to a 12 years old
*/

/* WRITE YOUR ANSWER HERE */
 
//variable is a name we could choose, that contains datatype , so that we could "call" the variable, when we need it.

/* EXERCISE 3
Write the code to execute a SUM between the number 12 and 20.
*/

/* WRITE YOUR CODE HERE */

let a = 12
let b = 20
let sum = a + b
console.log(sum)

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* WRITE YOUR CODE HERE */

let x = 12

/* EXERCISE 5
Create a variable named name containing the string John Doe.
*/

/* WRITE YOUR CODE HERE */

let firstName = "John"
let lastName = "Doe"
let fullName = firstName + " " + lastName
console.log(fullName)

/* EXERCISE 6
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
*/

/* WRITE YOUR CODE HERE */
let substractX = x - 12
console.log(substractX)

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* WRITE YOUR CODE HERE */

let name1 = "john"
let name2 = "John"
//console.log(name1 === name2)
console.log(name1.toLowerCase() === name2.toLowerCase())


/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* WRITE YOUR CODE HERE */

x = 90
if (x === 1){
    console.log("one")
} else if (x === 2){
    console.log("two")
} else if (x === 3){
    console.log("three")
} else if (x === 4){
    console.log("four")
} else if (x === 5){
    console.log("five")
} else if (x === 6){
    console.log("six")
} else if (x === 7){
    console.log("seven")
} else if (x === 8){
    console.log("eight")
} else if (x === 9){
    console.log("nine")
} else {
    console.log("I'm not that smart to recognize that number...yet")
}

let alphaX = x == 1 ? "one" : x == 2 ? "two" : x == 3 ? "three" : x == 4 ? "four" : x == 5 ? "five" : x == 6 ? "six" : x == 7 ? "seven" : x == 8 ? "eight" : x == 9 ? "nine" : "You expect me to do that? The other guy can't even solve it..."

console.log(alphaX)

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* WRITE YOUR CODE HERE */

let day = new Date()
let today = day.getDay()

//let greeter
//if (today === 0 || today === 6) {
//    greeter = "Have a nice weekend!"
//} else {
//    greeter = "It's weekday, get back to work!"
//}

let greeter = (today === 0 || today === 6) ? 'Have a nice weekend!' : 'It\'s weekday, get back to work!'


console.log(greeter)

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 17.00 GMT +1. In the next days we'll also learn how to use GIT 
*/