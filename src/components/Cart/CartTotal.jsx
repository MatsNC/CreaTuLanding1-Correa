import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import './Cart.css';

const CartTotal = () => {
    const { cart } = useContext(CartContext);
  
    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
    return (
      <div className='cartTotal'>
        <h3>Total a pagar: {total} $</h3>
      </div>
    );
  };
  
  export default CartTotal;