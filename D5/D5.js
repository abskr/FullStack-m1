/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/

const test = `This is a string, made with backticks`
console.log(test)

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/

const sum = 10 + 20
console.log(sum)

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/

const random = function(){
    console.log(`your random number is: ${Math.floor(Math.random() * 21)}`)
}
random()

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name : `Andi`,
    surname : `Baskara`,
    age : 26,
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age

/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/

me.skills = [`HTML`, `CSS`, `JavaScript`]

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/

me.skills.pop()

console.log(me)

// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/

const dice = function(){
    console.log(Math.floor(Math.random() * (7-1) + 1))
}
dice()

/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/

const whoIsBigger = function(num1, num2){
    if (isNaN(num1) === true || isNaN(num2) === true ){
        console.log(`The inputs are invalid!`)
    } else {
        console.log(`${Math.max(num1, num2)} is bigger than ${Math.min(num1, num2)}`)
    } 
}
whoIsBigger()
whoIsBigger(1, 6)
whoIsBigger(100, 60)

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const splitMe = function(str){
    let splitedStr = str.split(" ")
    console.log(splitedStr)
}
splitMe(`Nice to know you guys!`)

/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/

const deleteOne = function(str, boolean){
    if (boolean === true){
        console.log(str.substring(1))
    } else {
        console.log(str.substring(0, str.length - 1))
    }
}
deleteOne(`This is the string`, true)
deleteOne(`This is the string`, false)

/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

const onlyLetters = function(str){
    console.log(str.replace(/[0-9]/g, ''))
}

onlyLetters("7ul154n 4n4q 4l4y")

/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/

const isThisAnEmail = function(email){
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mailFormat.test(email) == false){
        return false
    } else {
        return true
    }
}

console.log(isThisAnEmail("bskr26@gmx.de"))
console.log(isThisAnEmail("this is obviously not an email adress"))



/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/

const day = new Date()
let today = function(){
    if (day.getDay() === 0){
        today = `Sunday`
    } else if (day.getDay() === 1){
        today = `Monday`
    } else if (day.getDay() === 2){
        today = `Tuesday`
    } else if (day.getDay() === 3){
        today = `Wednesday`
    } else if (day.getDay() === 4){
        today = `Thursday`
    } else if (day.getDay() === 5){
        today = `Friday`
    } else {
        today = `Saturday`
    }

    console.log(`Today is ${today}`)
}

today()

/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

 const rollTheDices = function(num) {
    let dicesArr = []
    for (let i = 0; i <= num - 1; i++){
        dicesArr[i] = Math.floor(Math.random() * (6-1) + 1)
    }
    console.log("sum: ", dicesArr.reduce(function(a,b){
        return a + b
      }, 0)) 
    console.log("values :", dicesArr)
 }

 rollTheDices(4)

/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/

const howManyDays = function(date, month, year){
    const day = new Date()
    const dateInput = new Date(year, month - 1 , date + 1)
    const today = day.getTime() //to get ´time from variable `day` (Ex7)
    const oneDay = 1000 * 3600 * 24 // 1 day = 24 Hours ; 1 Hour = 3600 Seconds ; 1 Second = 1000 Miliseconds
    return (Math.floor((today - dateInput) / oneDay))
}

console.log(howManyDays(01, 01, 2021))

/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/

let isTodayMyBDay = function(){
    const myBday = new Date (1994, 01, 07)
    const dateToday = new Date().getTime()
    const dateFormat = new Date(dateToday)
    if (myBday.getMonth() === dateFormat.getMonth && myBday.getDate() === dateFormat.getDate()){
        return true
    } else {
        return false
    }
}

console.log(`Is today is your brthday? `, isTodayMyBDay())

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/

 const deleteProp = function(obj, str){
     delete obj[str]
     return obj
 }

 deleteProp(movies[0], "Type")
 console.log(movies[0])
 

/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/

const olderMovie = function (a, b){
    if (parseInt(a["Year"]) < parseInt(b["Year"])) {
        return a["Title"]
    } else if (parseInt(b["Year"]) < parseInt(a["Year"])) {
        return b["Title"]
    }
}

console.log(`The Movie is older "${olderMovie(movies[0], movies[1])}"` );

/* Ex.13
    Write the function countMovies that returns the number of movies into the array.
*/

const countMovies = function(){
    let totalMovies = movies.length
    return totalMovies
}

console.log(`Total of Movie Colections: ${countMovies()}`)

/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/

const onlyTitles = function(){
    const titleArray = []
    for (let i = 0; i < movies.length; i++){
        titleArray.push(movies[i]["Title"])
    }
    return titleArray
}

console.log(onlyTitles())

/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/

const onlyThisMillennium = function(){
    const arr = []
    for (let i = 0; i < movies.length; i++){
        if (movies[i]["Year"] >= 2000){
            arr.push(movies[i]["Title"])
        }
    }
    return arr
}

console.log(`Movies from Millennium: `, onlyThisMillennium())

/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/

const getMovieById = function(id){
    for (let i = 0; i < movies.length; i++){
        if (movies[i]["imdbID"] === id){
            return (movies[i]["Title"])
        }
    }
}

console.log(`IMDB ID: tt4154796 ---> ${getMovieById("tt4154796")}`)

/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/

const sumYears = function(){
    let sum = 0
    for (i of movies){
        sum += parseInt(i["Year"])
    }
    return sum
}
console.log(sumYears())

/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/

const searchMovie = function(str){
    const arrResult = []
    for (i of movies){
        if (i["Title"].toLowerCase().includes(str.toLowerCase())) { //looking for match with ".includes" method
            arrResult.push(i["Title"])
        }
    }
    return arrResult
}

console.log(`Showing results for "LORD". Here's what we found. `, searchMovie("LORD"))

/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/

const searchAndDivide = function(str){
    const movieObj = {
        match: [],
        nonMatch: []
    }
    for (i of movies){
        if (i["Title"].toLowerCase().includes(str.toLowerCase())) {
            movieObj.match.push(i["Title"])
        } else {
            movieObj.nonmatch.push(i["Title"])
        }
    }
}

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/

const deleteX = function(num){
    movies.splice(num - 1, 1)
    return movies
}

console.log(deleteX(1))

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/

/* Movies array is an example array, used for the exs. Don't change it :)  */
