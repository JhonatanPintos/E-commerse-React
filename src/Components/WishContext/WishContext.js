import React, {useState, useEffect, createContext} from "react";

export const WishContext = createContext()

const CartWContext = ({children}) => {    
    const [cartW, setCartW] = useState (JSON.parse(localStorage.getItem("MiWishList")) || [])
    const [cantidad, setCantidad] = useState(0)
    const [precioT, setPrecioT] = useState(0)
    
    useEffect(() => {
        cantidadCarritoW()
        totalCompraW()
        localStorage.setItem("MiWishList", JSON.stringify(cartW))
    },[cartW])
    
    const addItemW = (producto, cantidad) => {
        if(isInCartW(producto.id)){
            setCartW(cartW.map(item => {
                return item.id === producto.id ? {...item, cantidad: item.cantidad + cantidad} : item
            }))
        }else{
            setCartW([...cartW,{...producto,cantidad}])
        }
    }

    const removeItemW = (id) => {
        const arrayBorrado = cartW.filter((item) => {
            return item.id !== id
        })
        setCartW(arrayBorrado)
    }
    
    const isInCartW = (id) => cartW.some(item => item.id === id)

    const clearW = () => {
        setCartW([])
    }

    const cantidadCarritoW = () => {
        let cantidad = 0
        cartW.forEach((item) => {
            return cantidad = cantidad + item.cantidad
        })
        setCantidad(cantidad)
    }

    const totalCompraW = () => {
        let total = 0
        cartW.forEach((item) => {
            return total += item.price * item.cantidad
        })
        setPrecioT(total)
    }

    return(
        <WishContext.Provider value={{cartW, addItemW, removeItemW, clearW, cantidad, precioT, isInCartW}}>
            {children}
        </WishContext.Provider>
    )
}

export default CartWContext