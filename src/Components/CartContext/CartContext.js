import { experimentalStyled } from "@mui/material";
import React, {useState, useEffect, createContext} from "react";

export const Context = createContext()

const CartContext = ({children}) => {
    const [carrito, setCarrito] = useState ([])

    const addItem = (producto, contador) => {
        if(isInCart(producto.id)){


        }else{
            setCarrito([...carrito,{producto,contador}])
        }
    }
    const removeItem = (id) => {
        const arrayBorrado = carrito.filter((producto) => {
            return producto.id !== id
        })
        setCarrito(arrayBorrado)
    }
    
    const isInCart = (id) => carrito.some((producto) => producto.id === id)

    const clear = () => {
        setCarrito([])
    }

    return(
        <Context.Provider value={{carrito, addItem, removeItem, clear}}>
            {children}
        </Context.Provider>
    )
}

export default CartContext