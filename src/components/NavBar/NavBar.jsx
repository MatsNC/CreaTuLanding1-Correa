import { Nav, Navbar, Image } from "react-bootstrap";
import logo from "./assets/logo_brand.png";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

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
              <Link to={"/"} style={{ fontSize: "3vh", padding:"2vh", textDecoration:"none" }}>
                Home
              </Link>
              <Link to={"/category/Proteina"} style={{ fontSize: "3vh", padding:"2vh", textDecoration:"none" }}>
                Proteina
              </Link>
              <Link to={"/category/Creatina"} style={{ fontSize: "3vh", padding:"2vh", textDecoration:"none" }}>
                Creatina
              </Link>
              <Link
                to={"/category/Barra de proteina"}
                style={{ fontSize: "3vh", padding:"2vh", textDecoration:"none" }}
              >
                Barras de Proteina
              </Link>
              <Link to={"/category/Colageno"} style={{ fontSize: "3vh", padding:"2vh", textDecoration:"none" }}>
                Colageno
              </Link>
            </Nav>
          </Container>
          <Nav>
            <Link to={"#"}>
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
