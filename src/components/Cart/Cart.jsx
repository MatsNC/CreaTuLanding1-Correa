import { useContext } from "react"
import CartItem from "./CartItem"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartTotal from "./CartTotal";

const Cart = () => {

    const { cart } = useContext(CartContext);

    return (
        <>
            <h1 className='titles'>Carrito</h1>
            {
                (cart.length === 0) ?
                    <div className="no-items">
                        <h1 className='textCartClass'>No hay productos en el carrito</h1>
                        <Link
                            className="btn btn-dark btn-lg linkCart"
                            role="button"
                            to="/"
                        >
                            Ver Productos
                        </Link>
                    </div>
                    :
                    <>
                        <Container className='grid-class-header'>
                            <Row className='grid-class-header'>
                                <Col className='grid-class-header d-none d-sm-none d-md-inline' sm={6}>Producto</Col>
                                <Col className='grid-class-header d-none d-sm-none d-md-inline' sm={3}>Cantidad</Col>
                                <Col className='grid-class-header d-none d-sm-none d-md-inline' sm={3}>Total</Col>
                            </Row>

                        </Container>

                        <ul>
                            {cart.map(product => (
                                <CartItem
                                    key={product.id}
                                    {...product}
                                />
                            ))}
                        </ul>
                        <CartTotal />
                    </>
            }
        </>
    )
}

export default Cart