import React, {useState, useEffect} from "react";
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)

    const suma = () => {
        stock > contador && setContador(contador + 1)
    }

    const resta = () => {
        contador > initial && setContador(contador - 1)
    }

    const agregar = () => {
        setContador(initial)
        onAdd(contador)
    }


    return(
        <>
        <div className="itemCount">
        <button className="botones" disabled={contador === initial} onClick={resta} >-</button>
        <p>{contador}</p>
        <button className="botones" disabled={contador === stock} onClick={suma} >+</button>
        <button className="botones" onClick={agregar} >Agregar al carrito</button>
        </div>

        </>
    )
}

export default ItemCount