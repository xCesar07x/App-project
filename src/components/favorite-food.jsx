const oneClick = () => {
  alert("Comida favorita")
}




const Favoritefood = () => {
    return(
        <div className="box-04">
            <h1 className="title">
              Mi comida favorita
            </h1>
            <ul className="word-list">
                <li>
                  Pasta
                </li>
                <li>
                 Sushi
                </li>
                <li>
                  Pizza
                </li>
            </ul>
            <button className="button" onClick={oneClick}>
              Click me!
            </button>
        </div>
    )
}

export default Favoritefood;