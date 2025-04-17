// 1. Create an array of 5 fruits and log each fruit using a loop.

// const fruits = ['Apple', 'Pear', 'Peach', 'Orange', 'Banana']

// for (fruit of fruits) {
//     console.log(fruit)
// }

// 2. Add a new element to the beginning and end of an array.

// const fruits = ['Apple', 'Pear', 'Peach', 'Orange', 'Banana']

// fruits.unshift('Grapes')
// fruits.push('Kiwi')

// console.log(fruits)

// 3. Remove the first and last element of an array.

// let cars = ['Mercedes', 'BMW', 'Audi', 'Renault', 'Fiat', 'Toyota', 'Nissan', 'Jeep', 'Chevrolet']

// cars.shift()
// cars.pop()

// console.log(cars)

// 4. Reverse an array without using .reverse()

// let vegetables = ['Potato', 'Tomato', 'Cucumber', 'Onion', 'Garlic', 'Eggplant', 'Zukinni']

// let vegReversed = []
// let j = 0

//     for (i = vegetables.length - 1; i >= 0; i--) {
//         vegReversed[j] = vegetables[i]
//         j += 1
//     }

// console.log(vegReversed)

// 5. Print even numbers from 2 to 20 using a while loop.

// let i = 0

// while (i <= 20) {
//     i = i + 2
//     console.log(i)
// }

// 6. Calculate the sum of numbers from 1 to 100 using a loop

// let sum = 0

// for ( i = 1; i <= 100; i++ ) {
//     sum = sum + i
// }

// console.log(sum)

// 7. Use .map() to create a new array with each number doubled.

// let nums = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
// let doubleNums = []

// doubleNums = nums.map( value => value*2 )

// console.log(doubleNums)

// 8. Use .filter() to get all numbers greater than 10.

// let numbers = [2, 5, 13, 8, 9, 25, 44, 97, 0, 3, 27]
// let greater10 = []

// greater10 = numbers.filter( value => value > 10 )

// console.log(greater10)

// 9. Use .reduce() to find the sum of all numbers.

// const numbers = [5, 10, 15, 20]

// let sum = 0

// sum = numbers.reduce((accumulator, number) => {return accumulator += number} )

// console.log(sum)

// 10. Use .find() to get the first number greater than 10.

// const numArrey = [1, 3, 6, 12, 5, 7, 34, 22, 7, 0]

// const moreThanTen = numArrey.find((value) => value > 10)

// console.log(moreThanTen)

// 11. Sort an array of numbers in ascending order using .sort().

// const numArrey = [1, 3, 6, 12, 5, 7, 34, 22, 7, 0]

// numArrey.sort((a, b) => a - b)

// console.log(numArrey)

// 12. Destructure an array and print the first two elements.

// const myFamily = ['Nino', 'Dato', 'Levan', 'Ilia', 'Elene']

// const [a, b, ...rest] = myFamily

// console.log(a, b)

// 13. Destructure an object to extract name and age.

// const user = {name: 'Nino', age: 49}

// const {name, age} = user

// console.log(name, age)

// 14. Use the rest operator to collect remaining elements from an array.

// const myFamily = ['Nino', 'Dato', 'Levan', 'Ilia', 'Elene']

// const [a, b, ...rest] = myFamily

// for (member of rest) {
//     console.log(member)
// }

//15. Nested object destructuring to extract city.

// const userProfile = {
//     firstName: 'Elene',
//     lastName: 'Gharibashvili',
//     id: 1234,
//     age: 15,
//     address: {
//         street: '19 Kutateladze',
//         city: 'Tbilisi'
//     }
// }

// const { firstName, lastName, id, age, address: {street, city} } = userProfile

// console.log(city)

// 16. Use spread to merge two arrays

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// const arrMrg = [...arr1, ...arr2]

// console.log(arrMrg)

// 17. Use spread to clone an object.

// const userProfile = {
//     firstName: 'Elene',
//     lastName: 'Gharibashvili',
//     id: 1234,
//     age: 15,
//     address: {
//         street: '19 Kutateladze',
//         city: 'Tbilisi'
//     }
// }

// const newUserProfile = { ...userProfile, address: {...userProfile.address}}

// console.log(newUserProfile)

// 18. Create an array of 5 random numbers and find their average.

// const randomArray = []

// for (i=0; i<5; i++) {
//     randomArray.push(Math.round(Math.random()*100))
// }

// const average = randomArray.reduce(() => {
//     let sum = 0
//     let avg = 0
//     for (n of randomArray) {
//         sum += n 
//     }
//     avg = sum / randomArray.length
//     return avg
// })

// console.log(randomArray)
// console.log(average)

// 19. Write a function to find the second largest number in an array.
// const numbers = [10, 45, 78, 99, 34, 67]


// function find2ndLargest(array) {
//     array.sort((a, b) => b - a)
//     return array[1]
// }

// const numbers = [10, 45, 78, 99, 34, 67]

// console.log(find2ndLargest(numbers))

// 20. Remove duplicate elements from an array.
// const numbers = [1, 2, 3, 2, 4, 5, 1, 6]


// const numbers = [1, 2, 3, 2, 4, 5, 1, 6]

// numbers.sort((a, b) => a - b)

// const newNumbers = []

// for (i=0; i<numbers.length; i++) {
//     if (numbers[i] !== numbers[i+1]) {
//         newNumbers.push(numbers[i])
//     }
// }

// console.log(newNumbers)

// Find the most frequent element in an array. 
// const colors = ["red", "blue", "red", "green", "blue", "blue"]

const colors = ["red", "blue", "red", "green", "blue", "blue"]

let getColor = ""
let colorCounter = 0
let colorMax = ""
let colorMaxCount = 0

for (i=0; i<colors.length; i++) {
    getColor = colors[i] 
    const colorFilter = colors.filter((color) => color == getColor)
    const colorCounter = colorFilter.length
    if (colorMaxCount < colorCounter) {
        colorMax = getColor
        colorMaxCount = colorCounter
    }
}

console.log(colorMax, colorMaxCount)

