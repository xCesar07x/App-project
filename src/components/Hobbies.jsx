
const oneClick = () => {
  alert("Hobbies")
}
  



const Hobbies = () => {
    return(
       <div className="box-02">
        <h1 className="title">Mis Hobbies</h1>

        <ul className="word-list">
            <li>Musica</li>
            <li>Ejercicio</li>
            <li>Leer</li>
        </ul>
        <button className="button" onClick={oneClick}>Click me!</button>

       </div>
    )
}

export default Hobbies;