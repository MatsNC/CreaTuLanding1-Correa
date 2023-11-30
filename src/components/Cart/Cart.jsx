import { useContext } from "react"
import CartItem from "./CartItem"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import './CartItem.css';

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
                    <ul>
                        {cart.map(product => (
                            <CartItem
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </ul>
            }
        </>
    )
}

export default Cart