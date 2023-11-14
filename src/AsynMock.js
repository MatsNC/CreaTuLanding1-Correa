import Imagen1 from "./components/ItemListContainer/assets/proteina_foto.jpg";
import Imagen2 from "./components/ItemListContainer/assets/barra_foto.jpg";
import Imagen3 from "./components/ItemListContainer/assets/colageno_foto.jpg";
import Imagen4 from "./components/ItemListContainer/assets/creatina_foto.jpg";
import Imagen5 from './components/ItemListContainer/assets/prote2_foto.jpg';
import Imagen6 from './components/ItemListContainer/assets/barra2_foto.jpg';
import Imagen7 from './components/ItemListContainer/assets/colag2_foto.jpg';
import Imagen8 from './components/ItemListContainer/assets/prote3_foto.jpg';
import Imagen9 from './components/ItemListContainer/assets/creat2_foto.jpg';
import Imagen10 from './components/ItemListContainer/assets/creat3_foto.jpg';

const productos = [
    {
        id: '1',
        name: "Proteina Whey Protein 1kg",
        img: Imagen1,
        category: "Proteina",
        note: "Descripcion para prote",
        price: 10000,
        stock: 10,
    },
    {
        id: '2',
        name: "Barra de proteína ENA",
        img: Imagen2,
        category: "Barra de proteina",
        note: "Descripcion para barra",
        price: 3500,
        stock: 5,
    },
    {
        id: '3',
        name: "Colageno Enaccion",
        img: Imagen3,
        category: "Colageno",
        note: "Descripcion para colageno",
        price: 5500,
        stock: 20,
    },
    {
        id: '4',
        name: "Creatina 300g",
        img: Imagen4,
        category: "Creatina",
        note: "Descripcion para creatina",
        price: 20000,
        stock: 3,
    },
    {
        id: '5',
        name: "Proteina Whey Protein 300g",
        img: Imagen5,
        category: "Proteina",
        note: "Descripcion para prote",
        price: 10000,
        stock: 10,
    },
    {
        id: '6',
        name: "Barra de proteína ENA",
        img: Imagen6,
        category: "Barra de proteina",
        note: "Descripcion para barra",
        price: 3500,
        stock: 5,
    },
    {
        id: '7',
        name: "Colageno ENA Sport",
        img: Imagen7,
        category: "Colageno",
        note: "Descripcion para colageno",
        price: 5500,
        stock: 20,
    },
    {
        id: '8',
        name: "Proteina Whey Protein",
        img: Imagen8,
        category: "Proteina",
        note: "Descripcion para proteina",
        price: 15000,
        stock: 3,
    },
    {
        id: '9',
        name: "Creatina Nutremax",
        img: Imagen9,
        category: "Creatina",
        note: "Descripcion para creatina",
        price: 17000,
        stock: 20,
    },
    {
        id: '10',
        name: "Creatina Star",
        img: Imagen10,
        category: "Creatina",
        note: "Descripcion para creatina",
        price: 20000,
        stock: 3,
    },

];

const obtenerDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 500);
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getProductByCategory = (catId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === catId))
        }, 500);

    })
}

export default obtenerDatos