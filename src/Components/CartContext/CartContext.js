import React, {useState, useEffect, createContext} from "react";

export const Context = createContext()

const CartContext = ({children}) => {    
    const [cart, setCart] = useState ([])
    const [cantidad, setCantidad] = useState(0)
    const [precioT, setPrecioT] = useState(0)

    useEffect(() => {
        cantidadCarrito()
        totalCompra()
    },[cart])

    const addItem = (producto, contador) => {
        if(isInCart(producto.id)){
            setCart(cart.map(item => {
                return item.id === producto.id ? {...item, contador: item.contador + contador} : item
            }))
        }else{
            setCart([...cart,{...producto,contador}])
        }
    }
    console.log(cart)

    const removeItem = (id) => {
        const arrayBorrado = cart.filter((item) => {
            return item.id !== id
        })
        setCart(arrayBorrado)
    }
    
    const isInCart = (id) => cart.some(item => item.id === id)

    const clear = () => {
        setCart([])
    }

    const cantidadCarrito = () => {
        let cantidad = 0
        cart.forEach((item) => {
            return cantidad = cantidad + item.contador
        })
        setCantidad(cantidad)
    }

    const totalCompra = () => {
        let total = 0
        cart.forEach((item) => {
            return total += item.price * item.contador
        })
        setPrecioT(total)
    }

    return(
        <Context.Provider value={{cart, addItem, removeItem, clear, cantidad, precioT}}>
            {children}
        </Context.Provider>
    )
}

export default CartContext