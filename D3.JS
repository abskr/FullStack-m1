/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */

const arr1 = [1, 3, 5, 7, 9]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */

let objectMe = {
    name : "Andi",
    surname : "Baskara",
    email : ["bskr26@gmx.de", "aabskr26@gmail.com"],
    age : 26,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR CODE HERE */

objectMe.hasDriverLicense = false

/* EXERCISE 4
Remove from the previously created object the age property.
*/

/* WRITE YOUR CODE HERE */

delete objectMe.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */

let objectHim = {
    name : "Felix",
    surname : "Ludwig",
    email : "blockschrift88@googlemail.com",
}

if (objectHim.email !== objectMe.email){
    console.log("they're not the same email address")
} else {
    console.log("they are the same email address")
}

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */

let priceItem1 = 18
let priceItem2 = 13
let priceItem3 = 0
let totalShoppingCart = priceItem1 + priceItem2 + priceItem3
const shippingFee = 10

if (totalShoppingCart <= 50){
    totalShoppingCart += shippingFee
    console.log("You shall pay: " + totalShoppingCart)
} else {
    console.log("You shall pay: " + totalShoppingCart)
}

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */

const blackFridayDiscount = 0.2
const totalCost = totalShoppingCart - (totalShoppingCart * blackFridayDiscount)

console.log("your total cost (with Black Friday Discount): ", totalCost)

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR CODE HERE */

let car0 = {
    brand : "Renault",
    model : "Megane",
    licensePlate : "BN 112 FA"
}

let car1 = Object.assign({}, car0)
car1.licensePlate = "BN 113 FA"

let car2 = Object.assign({}, car1)
car2.licensePlate = "BN 114 FA"

let car3 = Object.assign({}, car2)
car3.licensePlate = "BN 115 FA"

let car4 = Object.assign({}, car3)
car4.licensePlate = "BN 116 FA"

let car5 = Object.assign({}, car4)
car5.licensePlate = "BN 117 FA"

//console.log(car0)
//console.log(car1)
//console.log(car2)
//console.log(car3)
//console.log(car4)
//console.log(car5)



/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */

const carsForRent = [car0, car1, car2, car3, car4, car5]

//console.log(carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

carsForRent.shift()
carsForRent.pop()

console.log("cars for rent: ", carsForRent)

/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

/* WRITE YOUR CODE HERE */

for (let car of carsForRent) {
    console.log(car.licensePlate + " : " + car.brand)
}

for(let i =0; i<carsForRent.length; i++) {
    let car = carsForRent[i]
    console.log(typeof car.licensePlate + " : " + typeof car.brand)
}

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */ 

let car6 = Object.assign({}, car5)
car6.licensePlate = "BN 118 FA"

let car7 = Object.assign({}, car6)
car7.licensePlate = "BN 119 FA"

let car8 = Object.assign({}, car7)
car8.licensePlate = "BN 120 FA"

const carsForSale = [car6, car7, car8]

const totalCars = carsForSale.concat(carsForRent)

console.log("these are all of the cars: ", totalCars)  

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */

console.log("cars for sale: ", carsForSale)

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/

