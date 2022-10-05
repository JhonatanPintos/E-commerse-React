import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { Context } from "../CartContext/CartContext"
import "./Carrito.css"
const Carrito = () => {

    const { cart, removeItem, clear, precioT } = useContext(Context)
    const [confirmar, setConfirmar] = useState(false)

    const verificacion = () => {
        setConfirmar(true)
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
                                        <img className="imgCart columna" src={item.image} />
                                        <p className="columna">{item.title}</p>
                                        <p className="columna">${item.price}</p>
                                        <p className="columna">{item.contador}</p>
                                        <p className="columna">${item.price * item.contador}</p>
                                        <button className="botonCart" onClick={() => removeItem(item.id)}>X</button>
                                    </div>
                                )
                            })}
                            <div>
                                <h2>El total de su compra es de ${precioT.toFixed(2)}</h2>
                                {confirmar == false
                                    ? <button className="botonCartElminar" onClick={verificacion}>Eliminar Todo</button>
                                    : <button className="botonCartElminar" onClick={clear}>Seguro?</button>
                                }
                            </div>

                        </div>
                    </>
                )}
        </>
    )

}

export default Carrito