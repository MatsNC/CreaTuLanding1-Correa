import Card from 'react-bootstrap/Card';
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemDetail = ({ name, img, note, price, stock }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const handleCantidad = (cantidad) => {
        setCantidadAgregada(cantidad)
    }


    return (
        <Card className='ItemDetail text-center'>
            <img className="img-product" src={img} alt={name} />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text text-secondary">{note}</p>
                <p className="card-text text-secondary">Precio: ${price}</p>
                <p className="card-text text-secondary">Stock: {stock}</p>
                {cantidadAgregada > 0 ?
                    < Button size="lg" variant="primary" href="/cart">Terminar compra</Button> :
                    <ItemCount inicial={1} stock={stock} onAdd={handleCantidad} />}
            </div>
        </Card>
    )
}

export default ItemDetail