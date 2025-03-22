// შექმენი <button> და <div> ელემენტები და მიანიჭეთ საკუთარი უნიკალური id
// <div> - ში ჩაწერე პატარა random ტექსტი
// ღილაკზე დაჭერის შემთხვევაში დამალე <div> ელემენტი

const btnEl = document.createElement("button")
const txtEl = document.createTextNode("Click Me!")
const divEl = document.createElement("div")
const h2El = document.createElement("h2")
const txtEl1 = document.createTextNode("You are amazing!")

btnEl.setAttribute("id","btn1")
btnEl.appendChild(txtEl)
document.body.appendChild(btnEl)

h2El.appendChild(txtEl1)
divEl.appendChild(h2El)
divEl.setAttribute("id","div1")
divEl.hidden = false
document.body.appendChild(divEl)

btnEl.addEventListener("click", () => {divEl.hidden = true})

// შექმენი შემდეგი სტრუქტურა JS -ის გამოყენებით და დაამატე DOM-ში: 
// <div id=”card”> 
//    <h2>Gandalf</h2> 
//    <a href=”#”>Go to profile</a> 
// </div>

const divCard = document.createElement('div')
divCard.setAttribute('id','card')
const h2Elm = document.createElement('h2')
const txtNd0 = document.createTextNode('Gandalf')
const aElm = document.createElement('a')
aElm.setAttribute('href', '#')
const txtNd1 = document.createTextNode('Go to profile')

h2Elm.append(txtNd0)
aElm.append(txtNd1)
divCard.append(h2Elm,aElm)
document.body.append(divCard)

// შექმენი quiz თამაში. დაწერე რამდენიმე მოკლე შეკითხვა თავისი სავარაუდო პასუხებით.
// სწორ პასუხზე დაჭერის შემთხვევაში გაამწვანე პასუხი, არასწორი პასუხის შემთხვევაში გააწითლე.
// ბონუს დავალება: გამოიტანე ეკრანზე ქულების რაოდენობა, სწორი პასუხის შემთხვევაში დაამატე 1 ქულა
// არასწორის შემთხვევაში უცვლელი რჩება

