// Write a function that takes a number and returns "even" if it's even, 
// and "odd" if it's odd.

function oddOrEven (num) {
    if (typeof(num) == "number"){
        if (num/2 == Math.trunc(num/2)){
            return "Even"
        }else{
            return "Odd"
        }
    }else {
        return "Error: the parameter must be a number!"
    }
}

console.log(oddOrEven(7))

// Write a function that takes a name and returns a greeting message.

function greeting (name) {
    return "Hello" + " " + name
}

console.log(greeting("Donald"))

// Write a function that takes a number and if the number is divisible by 3, print "Fizz".
// If divisible by 5, print "Buzz". If divisible by both, print "FizzBuzz". 
// Otherwise, print the number itself.

function fizzBuzz (num) {
    let x = ""
    if (typeof(num) == "number"){
        if (num/3 == Math.trunc(num/3)) {
            x += "Fizz"
        }
        if (num/5 == Math.trunc(num/5)) {
            x += "Buzz"
        }
        if (x == ""){
            x = num
        }
        return x
    }else{
        return "Parameter must be a number"
    }
}

console.log(fizzBuzz(12))
