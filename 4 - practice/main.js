// დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith),
// ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს
// არ გამოიყენო string.replace() ფუნქცია

function insertText(string, valueToReplace, valueToReplaceWith) {
    
    let replaceStart = string.indexOf(valueToReplace)
    let replaceEnd = replaceStart + valueToReplace.length

    let beginText = string.substring(0, replaceStart)
    let endText = string.substring(replaceEnd,string.length)
    let newText = beginText + valueToReplaceWith + endText
    
    return newText
}

console.log(insertText("Once upon a time in America", "time", "crime"))

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას (წინადადებას),
// მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას

function capitalizeWords (text) {

    let textArrey = text.split(" ")
    let startLetter = ""
    let wordCaps = ""
    let newText = ""

    for (word of textArrey) {
        startLetter = word.charAt(0).toUpperCase()
        wordCaps = startLetter + word.slice(1, word.length)
        newText = newText + wordCaps + " "
    }

    return newText

}

console.log(capitalizeWords("once upon a time in america"))

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და დააბრუნებს დალაგებულ 
// მასივს მომხმარებლების ასაკის ზრდადობის მიხედვით
// მაგალითად, ჩავთვალოთ, რომ გვაქვს [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}]. 
// ფუნქციამ უნდა დააბრუნოს // [{name: ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}] 
// შეგიძლია გამოიყენო sort() ფუნქცია


let users = [{name: 'Lasha', age: 30}, {name: 'Saba', age: 20}, {name: 'Elene', age: 17}, {name: 'Mari', age: 21}]

let usersByAge = users.sort((a, b) => {return a.age - b.age});

console.log(usersByAge)

