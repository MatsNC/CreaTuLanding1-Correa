import './ItemCount.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
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
            <div className='item-count-container'>
                <div className="div-button">
                    <button className="button-count" onClick={decrementar}>-</button>
                </div>
                <p className='text-cantidad'>{cantidad}</p>
                <div className="div-button">
                    <button className="button-count" onClick={incrementar}>+</button>
                </div>
            </div>
            <div>
                {/* <Button size="lg" variant="primary" onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</Button> */}
                <Link
                    className="btn btn-primary btn-lg"
                    role="button"
                    to="/cart"
                    onClick={() => onAdd(cantidad)} disabled={!stock}
                >Agregar al carrito</Link>
            </div>
        </div>
    )
}

export default ItemCount