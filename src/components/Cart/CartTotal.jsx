import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import './Cart.css';
import { Link } from "react-router-dom";


const CartTotal = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
  return (
    <div className='cartTotal'>
      <h3>Total a pagar: {total} $</h3>
      <Link
        className="btn btn-dark btn-lg"
        role="button"
        to="/checkout"
      >
        Checkout
      </Link>
    </div>
  );
};

export default CartTotal;