import React, {useState, useEffect, createContext, useContext} from "react";
import { WishContext } from "../WishContext/WishContext"


export const Context = createContext()

const CartContext = ({children}) => {    

    const {cartW} = useContext(WishContext)

    const [cart, setCart] = useState (JSON.parse(localStorage.getItem("MiCarrito")) || [])
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
        localStorage.setItem("MiCarrito", JSON.stringify(cart))
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

    const addToWish = () => {
        clear()
        setCart([...cartW])
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
        <Context.Provider value={{addToWish, cart, addItem, removeItem, clear, cantidad, precioT, datosComprador, usuarioF}}>
            {children}
        </Context.Provider>
    )
}

export default CartContext