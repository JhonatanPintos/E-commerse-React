import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../CartContext/CartContext"
import { db } from "../Firebase/Firebase"
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import Formulario from "../Formulario/Formulario";
import "./Carrito.css"


const Carrito = () => {

    const { cart, removeItem, clear, precioT, usuarioF } = useContext(Context)
    const [confirmar, setConfirmar] = useState(false)
    const [confirmarF, setConfirmarF] = useState(false)
    const [idCompra, setIdCompra] = useState("")

    const verificacion = () => {
        setConfirmar(true)
    }

    const mostrarF = () => {
        setConfirmarF(true)
    }

    const finalizarCompra = () => {
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            datosComprador: usuarioF,
            productos: cart,
            date: serverTimestamp(),
            totalCompra: precioT
        })
            .then((result) => {
                setIdCompra(result.id)
                cart.forEach(producto => {
                    actualizarStock(producto)
                });
            })
            setTimeout(() =>{
                clear()
            }, 10000)
    }

    const actualizarStock = (producto) => {
        const updateStock = doc(db, "productos", producto.id)
        updateDoc(updateStock, { stock: (producto.stock - producto.cantidad) })
    }

    return (
        <>
            {cart.length === 0
                ?
                (<h1 className="inicioCarrito">
                    No agregaste nada, volve al lobby precionando <Link to="/">aquí</Link>
                </h1>)
                : (
                    <>
                        <div className="contenedorTotalCart">
                            <div className="indicieCart">
                                <div className="columnaIndice prod">
                                    <p>Producto</p>
                                </div>
                                <div className="columnaIndice price">
                                    <p>Precio</p>
                                </div>
                                <div className="columnaIndice cant">
                                    <p>Cantidad</p>
                                </div>
                                <div className="columnaIndice tot">
                                    <p>Total</p>
                                </div>
                            </div>
                            {cart.map((item) => {
                                return (
                                    <div className="contenedorCart" key={item.id}>
                                        <img className="imgCart columna" src={item.image} alt="Imagen del Producto" />
                                        <p className="columna">{item.title}</p>
                                        <p className="columna">${item.price}</p>
                                        <p className="columna">{item.cantidad}</p>
                                        <p className="columna">${item.price * item.cantidad}</p>
                                        <button className="botonCart" onClick={() => removeItem(item.id)}>X</button>
                                    </div>
                                )
                            })}
                            <div className="contendorFinal">
                                <h2>El total de su compra es de ${precioT.toFixed(2)}</h2>
                                <div className="contenedorBotones">
                                <button className="botones" onClick={mostrarF}>Finalizar Compra</button>
                                {confirmar === false
                                    ? <button className="botonCartElminar" onClick={verificacion}>Eliminar Todo</button>
                                    : <button className="botonCartElminar" onClick={clear}>Seguro?</button>
                                }
                                </div>
                            {confirmarF === false
                                ? ""
                                :
                                <div className="formularioCarrito">
                                <Formulario finalizarCompra={finalizarCompra} idCompra={idCompra} />
                                </div>
                            }
                            </div>
                        </div>
                    </>
                )}
        </>
    )

}

export default Carrito