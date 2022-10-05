import React, {useState, useEffect, createContext} from "react";

export const Context = createContext()

const CartContext = ({children}) => {    
    const [cart, setCart] = useState ([])
    const [precioT, setPrecioT] = useState(0)

    useEffect(() => {
            const total = 0
            cart.forEach((item) => {
                total += item.price * item.contador
            })
            setPrecioT(total)
    },[])

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
        const arrayBorrado = cart.filter((producto) => {
            return producto.id !== id
        })
        setCart(arrayBorrado)
    }
    
    const isInCart = (id) => cart.some(item => item.id === id)

    const clear = () => {
        setCart([])
    }

    return(
        <Context.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </Context.Provider>
    )
}

export default CartContext