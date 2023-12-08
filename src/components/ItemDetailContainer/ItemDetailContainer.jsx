import '../ItemDetailContainer/ItemDetailContainer.css';
import { getProductsById } from '../../AsynMock'; '../../AsynMock'
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, query, where, collection } from 'firebase/firestore'
import { appFirestore } from "../../main";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);  

  const { ItemId } = useParams()

  // useEffect(() => {
  //   const db = getFirestore(appFirestore);
  //   const collectionRef = collection(db, "products");

  //   if (ItemId) {
  //     const q = query(collectionRef, where("id", "==", ItemId))
  //     getDocs(q)
  //       .then((snapshot) => {
  //         if (snapshot.size !== 0) {

  //           const productsList = snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             ...doc.data()
  //           }))
  //           setProduct(product);
  //           console.log(productsList);
  //           console.log(product);
  //         }
  //       });
  //   }

  // }, [ItemId]);    //Está sería la forma correcta de hacerlo pero no me funciona el SetProduct como debería, así que uso el AsynckMock


  useEffect(() => {
    getProductsById(ItemId)
      .then(response => {
        setProduct(response)
      })
      .catch(error => console.log(error))

  }, [ItemId])


  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className='col-xl-12'>
          <ItemDetail {...product} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer