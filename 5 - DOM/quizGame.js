const quiz = [
    {question: "1. Which planet is known as the Red Planet?", 
        answer1: "a) Venus", 
        answer2: "b) Mars",
        answer3: "c) Jupiter",
        answer4: "d) Saturn", 
        correctAnswer: "answer2"},
    {question: "2. What is the capital of Canada?", 
        answer1: "a) Toronto", 
        answer2: "b) Montreal",
        answer3: "c) Vancouver",
        answer4: "d) Ottawa", 
        correctAnswer: "answer4"},
    {question: "3. Which element has the chemical symbol 'O'?", 
        answer1: "a) Oxygen", 
        answer2: "b) Gold",
        answer3: "c) Osmium",
        answer4: "d) Ozone", 
        correctAnswer: "answer1"},
    {question: "4. Who wrote Romeo and Juliet?", 
        answer1: "a) Charles Dickens", 
        answer2: "b) Mark Twain",
        answer3: "c) William Shakespeare ",
        answer4: "d) Jane Austen", 
        correctAnswer: "answer3"},       
]

let i = 0
let counter = 0
// document.getElementById("previous").setAttribute('hidden', true)
document.getElementById("question").innerText = quiz[i].question
document.getElementById("answer1").innerText = quiz[i].answer1
document.getElementById("answer2").innerText = quiz[i].answer2
document.getElementById("answer3").innerText = quiz[i].answer3
document.getElementById("answer4").innerText = quiz[i].answer4

function changeQuestion (n) {
    const allButtons = document.body.querySelectorAll('button');

    allButtons.forEach(button => {
        button.style.color = "black";
    });
    
if (n==1){
    // document.getElementById("previous").setAttribute('hidden', false)
    if (i < quiz.length - 1){
        i = i + 1
    }else{
        alert (`This is the last question # ${i}`)
    }
}

if (n==0){
    // document.getElementById("previous").setAttribute('hidden', false)
    if (i>0){
        i = i - 1
    }else{
        alert ('This is the first question')
    }
}

document.getElementById("question").innerText = quiz[i].question
document.getElementById("answer1").innerText = quiz[i].answer1
document.getElementById("answer2").innerText = quiz[i].answer2
document.getElementById("answer3").innerText = quiz[i].answer3
document.getElementById("answer4").innerText = quiz[i].answer4
}

// let nextClick = document.getElementById("next")
// nextClick.addEventListener('click',nextQuestion(i+1))

function changeColor (id) {
    let clickedButton = document.getElementById(id)
    if (id == quiz[i].correctAnswer){
        clickedButton.style.color = "green"
        counter = counter + 1
        alert (`Correct Answer! You've got a total of ${counter} point(s).`)
    }else{
        clickedButton.style.color = "red"
        alert (`Wrong Answer! You've got a total of ${counter} point(s).`)
    }
}
    // }

// }

// for q of quiz {
//   
// }

