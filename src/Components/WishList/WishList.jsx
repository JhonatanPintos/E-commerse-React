import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { WishContext } from "../WishContext/WishContext"
import { Context } from "../CartContext/CartContext"
import ScaleLoader from "react-spinners/ScaleLoader";


const WishList = ({producto}) => {

    const navigate = useNavigate()
    const { cartW, removeItemW, clearW, precioT } = useContext(WishContext)
    const { addToWish } = useContext(Context)
    const [confirmar, setConfirmar] = useState(false)
    const [loading, setLoading] = useState(false)

    const verificacion = () => {
        setConfirmar(true)
    }

    const toCart = (contador) => {
        addToWish(producto, contador)
        setLoading(true)
        setTimeout(() => {
            navigate("/carrito")
        }, 2000);
    }

    return (
        <>
        {loading === true 
        ?
        <div className="spinners">
        <ScaleLoader color="blueviolet" />
        <ScaleLoader color="cyan" />
        <h2>Navengando al carrito</h2>
        <ScaleLoader color="cyan" />
        <ScaleLoader color="blueviolet" />
    </div>
    :
            (cartW.length === 0
                ?
                (<h1 className="inicioCarrito">
                    Tu WishList esta vacio, volve al lobby precionando <Link to="/">aquí</Link>
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
                            {cartW.map((item) => {
                                return (
                                    <div className="contenedorCart" key={item.id}>
                                        <img className="imgCart columna" src={item.image} alt="Imagen del Producto" />
                                        <p className="columna">{item.title}</p>
                                        <p className="columna">${item.price}</p>
                                        <p className="columna">{item.cantidad}</p>
                                        <p className="columna">${item.price * item.cantidad}</p>
                                        <button className="botonCart" onClick={() => removeItemW(item.id)}>X</button>
                                    </div>
                                )
                            })}
                            <div className="contendorFinal">
                                <h2>El total de su compra es de ${precioT.toFixed(2)}</h2>
                                <div className="contenedorBotones">
                                <button className="botones" onClick={toCart}>Enviar al Carrito</button>
                                {confirmar === false
                                    ? <button className="botonCartElminar" onClick={verificacion}>Eliminar Todo</button>
                                    : <button className="botonCartElminar" onClick={clearW}>Seguro?</button>
                                }
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
        </>
    )

}

export default WishList