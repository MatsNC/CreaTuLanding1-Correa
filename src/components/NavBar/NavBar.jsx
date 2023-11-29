import { Nav, Navbar, Image } from "react-bootstrap";
import logo from "./assets/logo_brand.png";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
        <Navbar.Brand>
          <Link to={"/"}>
            <Image src={logo} width={171} height={180} fluid />
          </Link>
          <h2 className="d-inline-block align-center">ST</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center">
          <Container>
            <Nav className="justify-content-center">
              <Link className="linkClass" to={"/"}>
                Home
              </Link>
              <Link className="linkClass" to={"/category/Proteina"}>
                Proteina
              </Link>
              <Link className="linkClass" to={"/category/Creatina"}>
                Creatina
              </Link>
              <Link className="linkClass"
                to={"/category/Barra de proteina"}
              >
                Barras de Proteina
              </Link>
              <Link className="linkClass" to={"/category/Colageno"}>
                Colageno
              </Link>
            </Nav>
          </Container>
          <Nav>
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
