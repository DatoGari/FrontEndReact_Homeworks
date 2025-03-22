// 1. Write a function that takes a number and returns "even" if it's even, 
// and "odd" if it's odd.

// function oddOrEven (num) {
//     if (typeof(num) == "number"){
//         if (num/2 == Math.trunc(num/2)){
//             return "Even"
//         }else{
//             return "Odd"
//         }
//     }else {
//         return "Error: the parameter must be a number!"
//     }
// }

// console.log(oddOrEven(7))

// 2. Write a function that takes a name and returns a greeting message.

// function greeting (name) {
//     return "Hello" + " " + name
// }

// console.log(greeting("Donald"))

// 3. Write a function that takes a number and if the number is divisible by 3, print "Fizz".
// If divisible by 5, print "Buzz". If divisible by both, print "FizzBuzz". 
// Otherwise, print the number itself.

// function fizzBuzz (num) {
//     let x = ""
//     if (typeof(num) == "number"){
//         if (num/3 == Math.trunc(num/3)) {
//             x += "Fizz"
//         }
//         if (num/5 == Math.trunc(num/5)) {
//             x += "Buzz"
//         }
//         if (x == ""){
//             x = num
//         }
//         return x
//     }else{
//         return "Parameter must be a number"
//     }
// }

// console.log(fizzBuzz(12))

// 4. Write a function that calculates the factorial of a number.

// function factorial (number) {
//     let x = number
//     for (let i = 1; i < number; i++) {
//         x = x*(number-i)
//     }
//     return x
// }

// console.log(factorial(5))

// 5. Write a function that takes a number and returns "positive" if it's greater than 0, 
// "negative" if it's less than 0, and "zero" if it's 0.

// function numberSign(num) {
//     if (num > 0) {
//         return "positive"
//     }else {
//         if (num < 0) {
//             return "negative"
//         }else {
//             return "zero"
//         }
//     }
// }

// console.log(numberSign(5))
// console.log(numberSign(-5))
// console.log(numberSign(0))

// 6. Write a function that joins two strings together with a space in between.

// const joinStrings = (a, b) => `${a} ${b}`

// console.log(joinStrings('John','Lennon'))

// 7. Write a function that returns the remainder when dividing the first number by the second.

// let remainder = (a, b) => a/b - Math.trunc(a/b)

// console.log(remainder(5,4))

// 8. Write a function that returns the last character of a given string.

// let lastChar = (text) => {
//     let len = text.length
//     let char = text.charAt(len-1)
//     return char
// }

// console.log(lastChar('Android'))

// 9. Write a function that takes two numbers and returns the larger one.

// let bigNum = (x, y) => {
//     if (x > y) {
//         return x
//     }else {
//         if (x < y) {
//             return y
//         }else {
//             return 'The numbers are equal'
//         }
//     }
// } 

// console.log(bigNum(2,3))
// console.log(bigNum(5,4))
// console.log(bigNum(5,5))

// 10. Write a function calculateTotal that takes a price and: If the total price exceeds $100,
// apply a 10% discount. If the total price exceeds $200, apply a 20% discount. 
// Return the final total price after the discount.

// function calculateTotal (price) {
//     let salePrice = 0
//     if (price <= 100) {
//         salePrice = price
//     }else {
//         if (price <= 200) {
//             salePrice = price*0.9
//         }else {
//             salePrice = price*0.8
//         }
//     }
//     return salePrice
// }

// console.log(calculateTotal(150))
// console.log(calculateTotal(220))
// console.log(calculateTotal(98))

// 11. Write a function that returns the square of a given number.

// const xSquare =  num => num * num

// console.log(xSquare(25))

// 12. Write a function that takes a word and returns it with an exclamation mark(!) at the end.

// let exclamation = word => word + '!'

// console.log(exclamation('STOP'))

// 13. Write a function that returns the second character of a given string.

// const char2 = text => text.charAt(1)

// console.log(char2('Radiohead'))

// Write a function that returns true if a string is empty, otherwise returns false.

// let checkString = text => {
//     if (text) {
//         return true
//     }else{
//         return false
//     }
// }

// console.log(checkString('Hello Teacher!'))

// Write a function that returns true if a word starts with the letter "A" (uppercase or lowercase),
//  otherwise returns false.

let startsA = word => word.startsWith('A') || word.startsWith('a')

console.log(startsA('Albatros'))


