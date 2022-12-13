const oneClick = () => {
    alert("Tiempo libre")
}





const Freetime = () => {
    return(
        <div className="box-03">
            <h1 className="title">
                En mi tiempo libre me gusta

            </h1>
            <ul className="word-list">
                <li>
                   Comer
                </li>
                <li>
                    Salir con amigos

                </li>
                <li>
                    Jugar videosjuegos

                </li>
            </ul>
            <button className="button" onClick={oneClick}>
                Click me!
            </button>
        </div>
    )
}

export default Freetime;