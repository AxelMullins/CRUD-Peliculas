import { Container, Navbar } from "react-bootstrap"
import logoAm from '../assets/logoW.png'


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="Axel Mullins"
          src={logoAm}
          width="30"
          height="30"
          className="d-inline-block align-top me-2"
        />{' '}
        CRUD
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header