import { Link } from "react-router-dom";
import "../PathDisplay/PathDisplay.css"

const PathDisplay = (props) => {
    return(
        <section>
            <Link to="/" id="path-link"><p id="path-display-text">UX/UI {props.path}</p></Link>
        </section>
    )
}

export default PathDisplay;