import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import { useEffect } from "react";
import obtenerDatos, { getProductByCategory } from "../../AsynMock";
import { useParams } from "react-router-dom";
import "../../../src/App.css"
import { getFirestore, getDocs, getDoc, doc, query, where, collection, addDoc } from 'firebase/firestore'
import { appFirestore } from "../../main";


const ItemListContainer = ({ saludos }) => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore(appFirestore);
    const collectionRef = collection(db, "products");

    getDocs(collectionRef).then((snapshot) => {
      if (snapshot.size !== 0) {
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setProductos(productsList);
        console.log(productsList);
      }
      else {
        console.log("Item no encontrado");       
      }
    });

  }, []);

  // useEffect(() => {
  //   const asyncFunction = categoryId ? getProductByCategory : obtenerDatos;

  //   asyncFunction(categoryId)
  //     .then((response) => setProductos(response))
  //     .catch((error) => console.error(error));
  // }, [categoryId]);

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
