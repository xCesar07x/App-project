const oneClick = () => {
    alert("Stack")
}



const Mystack = () => {
    return(
        <div className="box-05">
            <h1 className="title">
                Mi stack es

            </h1>
            <ul className="word-list">
                <li>
                    HTML

                </li>
                <li>
                    CSS

                </li>
                <li>
                    JavaScript

                </li>
            </ul>
            <button className="button" onClick={oneClick}>
                Click me!
            </button>
        </div>
    )
}

export default Mystack;