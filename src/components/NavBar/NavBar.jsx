import { Nav, Navbar, Image } from "react-bootstrap";
import logo from "./assets/logo_brand.png";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
        <Navbar.Brand href="/">
          <Image src={logo} width={171} height={180} fluid/>
          <h2 className="d-inline-block align-center">ST</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center">
          <Container>
            <Nav className="justify-content-center">
              <Nav.Link href="/" style={{ fontSize: "3vh" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/category/Proteina" style={{ fontSize: "3vh" }}>
                Proteina
              </Nav.Link>
              <Nav.Link href="/category/Creatina" style={{ fontSize: "3vh" }}>
                Creatina
              </Nav.Link>
              <Nav.Link href="/category/Barra de proteina" style={{ fontSize: "3vh" }}>
                Barras de Proteina
              </Nav.Link>
              <Nav.Link href="/category/Colageno" style={{ fontSize: "3vh" }}>
                Colageno
              </Nav.Link>
            </Nav>
          </Container>
          <Nav>
            <Nav.Link href="#">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
