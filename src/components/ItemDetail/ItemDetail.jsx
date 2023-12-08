import Card from 'react-bootstrap/Card';
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ name, img, note, price, stock, id }) => {

    const { addToCart } = useContext(CartContext)

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const handleCantidad = (cantidad) => {
        setCantidadAgregada(cantidad)
        const item = { id, name, img, note, price, stock }
        addToCart(item, cantidad)
    }

    return (
        <Card className='ItemDetail text-center'>
            <img className="img-product" src={img} alt={name} />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text text-secondary">{note}</p>
                <p className="card-text text-secondary">Precio: ${price}</p>
                <p className="card-text text-secondary">Stock: {stock}</p>
                <ItemCount inicial={1} stock={stock} onAdd={handleCantidad} />
            </div>
        </Card>
    )
}

export default ItemDetail

