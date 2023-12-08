import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../src/App.css"
import { getFirestore, getDocs, query, where, collection} from 'firebase/firestore'
import { appFirestore } from "../../main";
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ saludos }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore(appFirestore);
    const collectionRef = collection(db, "products");

    if (categoryId) {
      const q = query(collectionRef, where("category", "==", categoryId))
      getDocs(q)
        .then((snapshot) => {
          if (snapshot.size !== 0) {
            const productsList = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
            setProductos(productsList);
            setLoading(false);

          }
        });
    } else {
      getDocs(collectionRef)
        .then((snapshot) => {
          if (snapshot.size !== 0) {
            const productsList = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
            setProductos(productsList);
            setLoading(false);

          }
        });
    }

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
      {isLoading ?
        <>
          <Spinner animation="grow" className="spinner-position"/>
        </>
        :
        <>
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
        </>}
    </div>
  );
};

export default ItemListContainer;
