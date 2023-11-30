import { useContext } from 'react'
import '../../App.css'
import '../Cart/CartItem.css'
import { Button } from 'react-bootstrap'
import { CartContext } from '../Context/CartContext'


const CartItem = ({ img, name, price, quantity, id }) => {

    const { cart, clearCart, removeFromCart } = useContext(CartContext);

    return (
        <>
            <div className='cartClass'>
                <div>
                    <img className='imgCartClass' src={img} alt="" />
                </div>
                <div>{name}</div>
                <div>Barra</div>
                <div>
                    <div>
                        <p>Cantidad</p>
                        <div>
                            <p className='quantityClass'>{quantity}</p>
                        </div>
                    </div>
                </div>
                <div>
                    ${price}
                </div>
                <div>
                    <Button variant="outline-dark" onClick={() => removeFromCart(id)}>Quitar</Button>
                </div>
            </div>
        </>
    )
}

export default CartItem