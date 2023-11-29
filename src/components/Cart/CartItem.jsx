import '../../App.css'
import '../Cart/CartItem.css'
import { Button } from 'bootstrap'

const CartItem = ({ img, name, price, quantity }) => {
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
                    ❌
                </div>
            </div>
        </>
    )
}

export default CartItem