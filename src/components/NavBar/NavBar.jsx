import { Nav, Navbar, Image } from "react-bootstrap";
import logo from './assets/logo_brand.png';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
                <Navbar.Brand href="/home">
                    <Image src={logo} width={171} height={180} fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/home" style={{fontSize:"3vh"}}>Home</Nav.Link>
                        <Nav.Link href="#" style={{fontSize:"3vh"}}>Proteina</Nav.Link>
                        <Nav.Link href="#" style={{fontSize:"3vh"}}>Creatina</Nav.Link>
                        <Nav.Link href="#" style={{fontSize:"3vh"}}>Barras de Proteina</Nav.Link>
                        <Nav.Link href="#" style={{fontSize:"3vh"}}>Colageno</Nav.Link>
                        <Nav.Link href='#'>
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar