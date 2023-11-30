import './ItemCount.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div>
            {stock != 0 ?
                <>
                    <div className='item-count-container'>
                        <div className="div-button">
                            <button className="button-count" onClick={decrementar}>-</button>
                        </div>
                        <p className='text-cantidad'>{cantidad}</p>
                        <div className="div-button">
                            <button className="button-count" onClick={incrementar}>+</button>
                        </div>
                    </div>
                    <Link
                        className="btn btn-dark btn-lg"
                        role="button"
                        to="/cart"
                        onClick={() => onAdd(cantidad)} disabled={!stock}
                    >Agregar al carrito</Link>
                </>

                :
                <Button variant="secondary" size="lg" disabled>
                    Sin Stock
                </Button>
            }

        </div>
    )
}

export default ItemCount