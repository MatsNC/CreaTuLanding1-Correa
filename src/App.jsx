
/*
Sacar AsyncMock y usar Firebase - OK (faltan ordenes)
Agregar Spinner - ahora

Prioridades:
Formato para mobile de Cart
pantalla de checkout
form para checkout con ingreso de usuario
Hacer que se descuente de stock - en checkout
Ver detalles posicion absoluta respecto a Cards
Readme.md
Optimización y revisar código


incrementar contador carrito - OK
hacer andar botones de subir y bajar cantidad - OK
reducer de cart para que la cantidad se refleje en precio. Reducer para total - OK
*/

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  //const [products, setProducts] = useState([]);
  //const orderCollection = collection(db, "orders");

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
              element={<Cart />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
