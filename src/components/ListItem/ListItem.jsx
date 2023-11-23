import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListItem({ img, name, note, price, stock, id }) {
  return (
    <div className="card text-center card-style">
      <img className="img-product" src={img} alt="" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text text-secondary">{note}</p>
        <p className="card-text text-secondary">Precio: ${price}</p>
        <p className="card-text text-secondary">Stock: {stock}</p>

        <Link
          className="btn btn-primary btn-lg"
          role="button"
          to={`/item/${id}`}
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}

export default ListItem;
