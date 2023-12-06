import { useContext } from 'react'
import '../../App.css'
import '../Cart/Cart.css'
import { CartContext } from '../Context/CartContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CartItem = ({ img, name, price, quantity, id, stock }) => {

    const { removeFromCart, addToCart } = useContext(CartContext);

    const cart_item = { img, name, price, quantity, id, stock };

    const cart_cant = quantity;

    return (
        <>
            <Container className='grid-class-content'>
                <Row className='grid-class'>
                    <Col className='grid-class' sm={6}>
                        <div className='prod-container'>
                            <div className='image-cart-container'>
                                <img className='imgCartClass' src={img} alt="imagen_producto" />
                            </div>
                            <div className='text-cart-container'>
                                <p className='text-cart'>{name}</p>
                                <p className='text-cart'>${price}</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='grid-class-content' sm={3}>
                        <div className='product-selection-container'>
                            <div className='quantity-class-container'>
                                <button className='button-cart' onClick={() => addToCart(cart_item, cart_cant - 1)}>-</button>
                                <p className='quantity-text'>{cart_cant}</p>
                                <button className='button-cart' onClick={() => addToCart(cart_item, cart_cant + 1)}>+</button>
                            </div>
                            <button className='button-cart' onClick={() => removeFromCart(id)}>Quitar</button>
                        </div>
                    </Col>
                    <Col className='grid-class' sm={3}>
                        <p className='text-cart'>${price * quantity}</p>
                    </Col>
                    <div className='linea'></div>
                </Row>

            </Container>
        </>
    )
}

export default CartItem