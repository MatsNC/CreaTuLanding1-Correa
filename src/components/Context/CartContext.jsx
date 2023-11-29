import { createContext, useState, useEffect } from "react"

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {
    //const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

    const [cart, setCart] = useState([])

    const isInCart = (item_id) => {
        return cart.some(prod => prod.id === item_id)
    }

    const addToCart = (item, quantity) => {
        if (!isInCart(item.id)) {
            return setCart(ant => [...ant, { ...item, quantity }])
        }
        else
        {
            console.error('El producto ya fue agregado');            
        }
    }    

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (item_id) => {
        setCart(cart.filter(prod => (prod.id !== item_id)))
    }

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart));
    // }, [cart]);

    // useEffect(() => {
    //     const cart = localStorage.getItem("cart");
    //     if (cart) {
    //         setCart(JSON.parse(cart));
    //     }
    // }, []);

    console.log(cart);

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>

    )

} 