import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  return (
    <>
      <NavBar/> 
      <ItemListContainer saludos={'Bienvenidos'}/>       
    </>
  );
}

export default App;
