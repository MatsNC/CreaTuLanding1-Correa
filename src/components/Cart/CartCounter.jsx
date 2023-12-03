import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import './Cart.css'

const CartCounter = () => {

    const { cart } = useContext(CartContext)

    const cartItemCount = cart.reduce((acc, el) =>  acc + el.quantity, 0 )

    return (
        <span className='cart-items-total'>
            {cartItemCount}
        </span>
    )
}

export default CartCounter