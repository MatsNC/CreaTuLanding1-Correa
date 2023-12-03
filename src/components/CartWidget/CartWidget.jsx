import CartCounter from '../Cart/CartCounter'
import cart from './assets/cart.svg'
import { Figure } from 'react-bootstrap'

const CartWidget = () => {
  return (
    <Figure>
      <Figure.Image
        width={50}
        height={50}
        alt="carrito"
        src={cart}
      />
      {/* <Figure.Caption>
        0
      </Figure.Caption> */}
      <CartCounter/>
    </Figure>
  )
}

export default CartWidget