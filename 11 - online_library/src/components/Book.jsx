const Book = ({id, title, author, description, characters, image, onPrint}) => {
    return ( 
        <div className="card">
            <h1 className="card-title"> {title} </h1>
            <h2 className="card-title"> {author} </h2>
            <p>{description}</p>
            <p>{characters}</p>
            <div className="img-box">
                <img src={image} alt={title} />
            </div>
            <button onClick={ () => onPrint(title, characters.join(', ')) } className="btn">PRINT</button>  
        </div>
    )
}

export default Book