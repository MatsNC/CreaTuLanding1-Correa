import '../ItemDetailContainer/ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, query, where, collection } from 'firebase/firestore'
import { appFirestore } from "../../main";
import { Spinner } from 'react-bootstrap';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { ItemId } = useParams();

  useEffect(() => {
    const db = getFirestore(appFirestore);
    const collectionRef = collection(db, "products");

    if (ItemId) {
      const q = query(collectionRef, where("id", "==", ItemId))
      getDocs(q)
        .then((snapshot) => {
          if (snapshot.size !== 0) {

            const productsList = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))

            if (product.length !== 0) {
              setLoading(false);
            }
            else {
              product.push(...productsList);
            }
          }
        });
    }

  }, [ItemId]);

  return (
    <div>
      {isLoading ?
        <>
          <Spinner animation="grow" className="spinner-position" />
        </> :
        <>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
              <div className='col-xl-12'>
                {product.map((prod) => (
                  <div key={prod.id}>
                    <ItemDetail {...prod} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>}
    </div>
  )
}

export default ItemDetailContainer