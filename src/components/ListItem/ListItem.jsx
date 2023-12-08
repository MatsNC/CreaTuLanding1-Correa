import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import "./ListItem.css"
import { CartContext } from "../Context/CartContext";

function ListItem({ img, name, note, price, stock, id }) {

  // const { isInCart, cart } = useContext(CartContext);
  // const [newStock, setnewStock] = useState(stock);

  // useEffect(() => {
  //   if (isInCart(id)) {
  //     const arrayFind = cart.find(objeto => objeto.id === id);
  //     if (stock > 0) {
  //       setnewStock(stock - arrayFind.quantity);
  //     }
  //     console.log(arrayFind.quantity);
  //     console.log(newStock);
  //   }
  // },[]);

  // const handleStock = () => {
  //   const arrayFind = cart.find(objeto => objeto.id === id);
  //   if (isInCart(id)) {
  //     if (stock > 0) {
  //       stock = stock - arrayFind.quantity
  //     }
  //     console.log(arrayFind.quantity);
  //     console.log(stock);
  //     return stock;
  //   }
  // }


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
