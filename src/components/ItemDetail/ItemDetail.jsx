import Card from 'react-bootstrap/Card';
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ name, img, note, price, stock }) => {
    return (
        <Card className='ItemDetail text-center'>
            <img className="img-product" src={img} alt={name} />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text text-secondary">{note}</p>
                <p className="card-text text-secondary">Precio: ${price}</p>
                <p className="card-text text-secondary">Stock: {stock}</p>
                <ItemCount inicial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada', cantidad)} />
            </div>
        </Card>
    )
}

export default ItemDetail