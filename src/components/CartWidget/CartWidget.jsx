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
      <Figure.Caption>
        0
      </Figure.Caption>
    </Figure>
  )
}

export default CartWidget