const oneClick = () => {
    alert("Sobre mi")
}

const me = {
    name: "Cesar",
    movie: "Dead Pool",
    music: "regueton"
}


const Aboutme = () => {

    return(
        <div className="box-01">
            <h1 className="title">Sobre mi</h1>
            <ul className="word-list">
            <li>{me.name}</li>
            <li>Pelicula favorita: {me.movie}</li>
            <li>Musica favorita: {me.music}</li>
            </ul>
            <button className="button" onClick={oneClick}>Click me!</button>
        </div>
    )
}

export default Aboutme;