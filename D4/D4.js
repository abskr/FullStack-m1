/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(l1, l2, unit){
    console.log(`${l1 * l2} ${unit}²`)
}

area (2, 5, "cm")

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(num1, num2){
    if (num1 === num2){
        console.log((num1 + num2)*3)
    } else {
        console.log(num1 + num2)
    }
}

crazySum(10, 10)
crazySum(10, 15)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(num){
    let difference = Math.abs(num - 19)
    if (num > 19){
        console.log(difference * 3)
    } else {
        console.log(difference)
    }
}

crazyDiff(10)
crazyDiff(20)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */

const boundary = function(n){
    if ((n >= 20 && n <= 100) || n === 400){
        n = true
        console.log(n)
    } else {
        n = false
        console.log(n)
    }
    
}

boundary(50)
boundary(400)
boundary(1)
boundary(101)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

const strivify = function(somethingSaid){
    if (somethingSaid.indexOf("Strive", 0) == false){
        console.log(somethingSaid)
    } else {
        console.log(`Strive ${somethingSaid}`)
    }
}

strivify("Strive it up!")
strivify(", thank you!")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(num){
    if (num < 0){
        console.log("The number should be positive!!!")
    } else if (num % 3 === 0 && num % 7 === 0){
        console.log(`The number ${num} is the multiplication of 3 and 7`)
    } else if (num % 3 === 0){
        console.log(`The number ${num} is the multiplication of 3`)
    } else if (num % 7 === 0){
        console.log(`The number ${num} is the multiplication of 7`)
    } else {
        console.log(`The number ${num} is NOT the multiplication of 3 nor 7`)
    }
}

check3and7(-2)
check3and7(12)
check3and7(14)
check3and7(21)
check3and7(19)

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

const reverseString = function(string){
    console.log(string.split("").reverse().join(""))
}

reverseString("Strive")
reverseString("evirtS")

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

const upperFirst = function(str){
   let stringSeparator = str.split(" ") // 1. Split the string into an array
   let arrCapitalizer = [] // 2. Declare an empty array (for ".push"ing later)
   for (let word of stringSeparator){ //3. make variables in this local scope from the array made from "str.split"
       arrCapitalizer.push(word.charAt(0).toUpperCase() + word.substring(1)) // 4. push the specified formula into the empty array
   }
   stringSeparator= arrCapitalizer.join(" ") // 5. Rejoining the pushed empty array
   console.log(stringSeparator) // 6. Print out the modified "stringseperator"
}
 
upperFirst("there are no capital letter written in this param")

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

const cutString = function(str){
    return str.substring(1, str.length-1)
}

console.log(cutString("Cut this!"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

const giveMeRandom = function(num){
    if (isNaN(num) === false){
        console.log(Math.floor(Math.random() * 11))
    } else {
        console.log("The input is not a number!!!")
    }
}


giveMeRandom(12121)
giveMeRandom("Not a Number")

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/