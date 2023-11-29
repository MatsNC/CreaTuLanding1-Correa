
/*
Sacar AsyncMock y usar Firebase
Agregar Spinner

*/

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import { getFirestore, getDocs, getDoc, doc, query, where, collection, addDoc } from 'firebase/firestore'
import { appFirestore } from "./main";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const db = getFirestore(appFirestore);
  const orderCollection = collection(db, "orders");

  // const sendOrder = () => {
  //   const newOrder = {
  //     buyer: {
  //       name: "Carlitos",
  //       phone: "1234",
  //       email: "carlitos@gmail.com"
  //     },
  //     products: [{
  //       name: "Proteina ENA",
  //       price: 17000
  //     }],
  //   };
  //   addDoc(orderCollection, newOrder).then((response) => { console.log(`Documento generado, id: ${response.id}`); })

  // };

  // useEffect(() => {

  //   const ref = doc(db, 'products', 'XQlqwEm7xO9COREpeJm0');

  //   getDoc(ref).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.id, snapshot.data());
  //     } else {
  //       console.log("Item no encontrado");
  //     }
  //   })

  // }, [])

  return (
    <>
      {/* <button onClick={sendOrder} style={{alignContent:"center", alignSelf:"center", justifyContent:"center"}}>Generar Orden</button> */}
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer saludos={"Bienvenidos"} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/item/:ItemId"
              element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={<h1 className="titles">404 ERROR - NO ENCONTRADO</h1>}
            />
            <Route
              path="/cart"
              element={ <Cart/> }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
