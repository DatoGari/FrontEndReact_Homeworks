// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2).
// ფუნქციამ უნდა დააბრუნოს 2 - ელემენტიანი მასივი, სადაც პირველი ელემენტია
// პირველი და მეორე პარამეტრის ჯამი, ხოლო მეორე ელემენტი - 
// მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი

function calc(num1, num2, ... args) {
    let x = 0
    let y = 1
    x = num1 + num2
    for (let arg of args) {
        y *= arg
    }
    return (x + ' ' + y)
}

console.log(calc(5,7,10,2,3,1))

// დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს cityს.
// გამოიყენე destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined

const user = {
    firstname: 'Mikheil',
    lastname: 'Meskhi', 
    banks: [
        {name: 'TBC', address: {street: 'Marjanishvili 15', city: 'Tbilisi'}},
        {name: 'BOG', address: {street: 'Aghmashenebeli 9', city: 'Kutaisi'}},
        {name: 'Liberty', address: {street: 'Rustaveli 11',city: 'Batumi'}}
    ]
}

function getCity (user) {
    let i = user.banks.length
    if (i > 2) {
        let {banks: [,,{address:{city}}]} = user
        return city
    }
}

console.log(getCity(user))

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და 
// დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს
// გაითვალისწინე, რომ თუ  ობიექტში კიდევ სხვა ობიექტებია იმათი ასლებიც უნდა შეიქმნას
// გამოიყენეთ (...) ოპერატორი

const student = {
    firstName: 'David',
    lastName: 'Gharibashvili',
    course: 'Frontend Development - REACT',
    address: {
        city: 'Tbilisi',
        district: 'Vake',
        street: '19 Kutateladze'
    }
}

function copyObject(object) {
    const newStudent = {...object, address: {...object.address}}
    return newStudent
}

console.log(copyObject(student))
