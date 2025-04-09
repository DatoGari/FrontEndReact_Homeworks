import React from 'react'

import Book from '../components/Book'
import imgColors from '../assets/ColorsOfDark.jpg'
import imgFire from '../assets/FireExit.jpg'
import imgMargo from '../assets/Margo.jpg'
import imgHumans from '../assets/WorstHumans.jpg'

const data = [
    {id:1, title:"All the Colors of the Dark", author:"Chris Whitaker", description:"A novel about what lurks in the shadows of obsession and the blinding light of hope", characters: ['Patch', 'Martha', 'Jason', 'Lui'], image:imgColors},
    {id:2, title:"All the Worst Humans", author:"Phil Edwood", description:"A piercing look into the corridors of money, power, politics, and control", characters: ['Assad', 'Gaddafi', 'Putin', 'Phil', 'Dictator'], image:imgHumans},
    {id:3, title:"Margo's Got Money Troubles", author:"Rufi Thorpe", description:"A tender tale starring an endearing young heroine who’s struggling to wrest money and power from a world that has little interest in giving it to her.", characters: ['Margo', 'Nathan', 'Moses', 'Maria', 'Jose'], image:imgMargo},
    {id:4, title:"Fire Exit", author:"Morgan Talty", description:"Beautifully written, sometimes funny, often heartbreaking and hopeful against all odds. Reminiscent of the work of Raymond Carver.", characters: ['Chris', 'Norman', 'John', 'Martin', 'Lulu', 'Cherish'], image:imgFire},
]

const BookList = () => {
  return (
    <div className='card-list'>
        {data.map((book) => <Book key={book.id} title={book.title} author={book.author} description={book.description} characters={book.characters} image={book.image} onPrint={(title, characters) => console.log(title, characters)}/>)}
    </div>
  )
}

export default BookList