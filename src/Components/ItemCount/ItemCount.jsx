import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd, onAddW}) => {

    const [contador, setContador] = useState(initial)
    const [irWish, setIrWish] = useState(false)

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

    const agregarW = () => {
        setIrWish(true)
        setContador(initial)
        onAddW(contador)
    }


    return(
        <>
        <div className="itemCount">
        <button className="botones" disabled={contador === initial} onClick={resta} >-</button>
        <p>{contador}</p>
        <button className="botones" disabled={contador === stock} onClick={suma} >+</button>
        <button className="botones" onClick={agregar} >Agregar al carrito</button>
        {irWish === true
        ?
        <Link to={"/wishlist"}>
        <button className="botones">Ir a WishList</button>
        </Link>
        :
        <button className="botones" onClick={agregarW} >Agregar a mi WishList</button>
        }
        </div>

        </>
    )
}

export default ItemCount