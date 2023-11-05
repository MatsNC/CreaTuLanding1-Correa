import { Button } from 'react-bootstrap'

function ListItem({ img, name, note, price, stock, id }) {
  return (
    <div className="card text-center card-style" >
      <img className="img-product" src={img} alt="" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text text-secondary">{note}</p>
        <p className="card-text text-secondary">Precio: ${price}</p>
        <p className="card-text text-secondary">Stock: {stock}</p>
        <Button variant="primary" href={`/item/${id}`}>Ver Detalles</Button>
      </div>
    </div>
  )
}

export default ListItem
