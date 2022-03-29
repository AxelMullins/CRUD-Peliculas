import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDev } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className="text-center bg-dark text-light position-fixed bottom-0 w-100 p-2 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faDev} />
            <small className="ms-2">Axel Mullins</small>
        </footer>
    )
}

export default Footer