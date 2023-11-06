import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import { useEffect } from "react";
import obtenerDatos, { getProductByCategory } from "../../AsynMock";
import { useParams } from "react-router-dom";
import "../../../src/App.css"

const ItemListContainer = ({ saludos }) => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductByCategory : obtenerDatos;

    asyncFunction(categoryId)
      .then((response) => setProductos(response))
      .catch((error) => console.error(error));
  }, [categoryId]);

  const chg_style = () => {

    if (productos.length === 3) {
      return "col-lg-4"
    }
    if (productos.length > 2) {
      return "col-lg-3"
    }
    else {
      return "col-lg-6"
    }
  }

  return (
    <div>
      {categoryId ? <h1 className="titles">{categoryId}</h1> : <h1 className="titles">{saludos}</h1>}
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          {productos.map((producto) => (
            <div className={chg_style()} key={producto.id}>
              <ListItem {...producto} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
