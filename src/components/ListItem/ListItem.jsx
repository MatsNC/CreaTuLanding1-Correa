import { Link } from "react-router-dom";
//import { useContext, useEffect } from "react"
import "./ListItem.css"
//import { CartContext } from "../Context/CartContext";

function ListItem({ img, name, note, price, stock, id }) {

  //const { isInCart , cart } = useContext(CartContext);

  // useEffect (() => {    
  //   if (isInCart(id)) {
  //     console.log('entre aca');
  //     const arrayFind = cart.find(objeto => objeto.id === id);
  //     if (stock > 0)
  //     {  
  //       stock = stock - arrayFind.quantity;
  //     }
  //     console.log(stock);
  //     console.log(arrayFind.quantity);
  //   }
  // });

  return (
    <div className="card text-center card-style">
      <img className="img-product" src={img} alt="" />
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{name}</h4>
        <p className="card-text text-secondary">{note}</p>
        <p className="card-text text-secondary">Precio: ${price}</p>
        <p className="card-text text-secondary">Stock: {stock}</p>

        <Link
          className="btn btn-dark btn-lg mt-auto linkItemClass"
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
