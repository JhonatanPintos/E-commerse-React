import React, {useContext, useState} from "react";
import "./Formulario.css"
import { Context } from "../CartContext/CartContext"


const Formulario = ({finalizarCompra, idCompra}) => {

    const { usuarioF, datosComprador } = useContext(Context)
    const [confirmar, setConfirmar] = useState(false)

    const terminar = () => {
        finalizarCompra()
        setConfirmar(true)
    }

    return(
        <>
        <div className="contenedorForm">
            <input onChange={datosComprador} name="nombre" value={usuarioF.nombre} className="formulario" type="text" placeholder="Ingrese su Nombre"/>
            <input onChange={datosComprador} name="apellido" value={usuarioF.apellido} className="formulario" type="text" placeholder="Ingrese su Apellido"/>
            <input onChange={datosComprador} name="email" value={usuarioF.email} className="formulario" type="text" placeholder="Ingrese su Email"/>
            <button className="botones" onClick={terminar}>Finalizar compra</button>
            {confirmar === false
            ? ""
            :
            <div>
            <h5>Su ID de comrpa es:</h5>
            <p className="idCompra">{idCompra}</p>
            </div>
            }
        </div>
        </>
    )
}

export default Formulario