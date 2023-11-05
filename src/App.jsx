import { useState, useEffect } from "react";
import obtenerDatos from "../src/AsynMock";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    obtenerDatos().then((datos) => {
      console.log(datos);
      setData(datos);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludos={"Bienvenidos"} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:ItemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1 className="titles">404 ERROR - NO ENCONTRADO</h1>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
