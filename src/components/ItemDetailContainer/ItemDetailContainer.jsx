import '../ItemDetailContainer/ItemDetailContainer.css';
import { getProductsById } from '../../AsynMock'; '../../AsynMock'
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])

  const { ItemId } = useParams()

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