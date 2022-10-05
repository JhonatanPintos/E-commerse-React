import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { Context } from "../CartContext/CartContext"
import "./Carrito.css"
const Carrito = ({condicion}) => {

    const { cart, removeItem, clear, actCant } = useContext(Context)

    return (
        <>
            {cart.length === 0
                ?
                (<h1 className={condicion ? "rojo" : "azul"}>
                    No agregaste nada, volve al lobby <Link to="/">aca</Link>
                </h1>)
                : (
                    <>
                        {cart.map((item) => {
                            return <h1 key={item.producto.id}>{item.producto.title}</h1>
                        })}
                    </>
                )}
        </>
    )

}

export default Carrito