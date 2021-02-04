/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/

/* WRITE YOUR CODE HERE */

let arr = [11, 22, 33, 44, 55]
console.log("This is in original order: " , arr)
let arrReverted = arr.reverse()
console.log("This array is reverted from the origial: " , arrReverted)

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

/* WRITE YOUR CODE HERE */

let arrMax = Math.max.apply(Math, arr)
console.log("This is the highest value from this array: ", arrMax)

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

/* WRITE YOUR CODE HERE */

let arrMin = Math.min.apply(Math, arr)
console.log("This is the lowest value from this array: ", arrMin)


/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

/* WRITE YOUR CODE HERE */

let arrEvenNum = arr.filter(number => number % 2 === 0)
console.log("These are even numbers from the array: ", arrEvenNum.reverse())

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

/* WRITE YOUR CODE HERE */

let arrOddNum = arr.filter(number => number % 2 !== 0)
console.log("These are odd numbers from the array: ", arrOddNum.reverse())

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* WRITE YOUR CODE HERE */

let bagOfWords = ["Milk", "Water", "Pencil", "Laptop", "Mouse"]
let wordsNoVowels = bagOfWords.map(string => string.replace(/[aeiou]/g, ''))
console.log("Words with their vowels removed: ", wordsNoVowels)

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

/* WRITE YOUR CODE HERE */

let increasedArr = arr.map(number => number + 1)
console.log("The values from the array are increased by 1: ", increasedArr.reverse())

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/

/* WRITE YOUR CODE HERE */

let replacedArr = ["strive", "is", "good"]
for (let i =0; i< replacedArr.length; i++) {
 replacedArr[i] = replacedArr[i].length
}
// let replacingArr = [ 5 , 2, 4]
// console.log(replacedArr)

// replacedArr[0] = replacingArr[0]
// console.log(replacedArr)

// replacedArr[1] = replacingArr[1]
// console.log(replacedArr)

// replacedArr[2] = replacingArr[2]
// console.log(replacedArr)


/* WHEN YOU ARE FINISHED
Send the code via Eduflow to the tutor! In the next days we'll also learn how to use GIT 
*/  

const test = `hey there, I want to say, "thank you for your help"`