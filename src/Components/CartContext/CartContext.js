import React, {useState, useEffect, createContext} from "react";

export const Context = createContext()

const CartContext = ({children}) => {    
    const [cart, setCart] = useState ([])
    const [cantidad, setCantidad] = useState(0)
    const [precioT, setPrecioT] = useState(0)
    const [usuarioF, setUsuarioF] = useState({
        nombre: "",
        apellido: "",
        email: ""
    }) 
    
    useEffect(() => {
        cantidadCarrito()
        totalCompra()
    },[cart])
    
    const datosComprador = (e) => {
        const { target } = e;
        const { name, value } = target;
        const newValues = {
            ...usuarioF,
            [name]: value,
          };
          setUsuarioF(newValues)
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)){
            setCart(cart.map(item => {
                return item.id === producto.id ? {...item, cantidad: item.cantidad + cantidad} : item
            }))
        }else{
            setCart([...cart,{...producto,cantidad}])
        }
    }

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
            return cantidad = cantidad + item.cantidad
        })
        setCantidad(cantidad)
    }

    const totalCompra = () => {
        let total = 0
        cart.forEach((item) => {
            return total += item.price * item.cantidad
        })
        setPrecioT(total)
    }

    return(
        <Context.Provider value={{cart, addItem, removeItem, clear, cantidad, precioT, datosComprador, usuarioF}}>
            {children}
        </Context.Provider>
    )
}

export default CartContext