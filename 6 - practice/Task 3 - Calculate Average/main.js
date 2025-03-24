
const btnAverage = document.querySelector('button')
const result = document.querySelector('h2')

let sum = 0
let avg = 0

const averageCalc = btnAverage.addEventListener('click', () => {
    event.preventDefault(); // Prevent form from refreshing the page
    const numString = document.querySelector('input').value
    const numArray = numString.split(":").map(num => parseInt(num, 10));
    console.log(numArray)

    sum = 0
    avg = 0

    for (let n of numArray) {
        sum = sum + n
    }

    avg = sum/numArray.length

    console.log(avg)

    result.innerText = avg

    
    // return avg
    
});




