import ItemCount from "../ItemCount/ItemCount"
import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom"
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {

    const [irCarrito, setIrCarrito] = useState(false)

    const onAdd = () => {
        setIrCarrito(true)
    }
    const stockTemporal = Math.floor(Math.random() * 100)
    return(
        <>
        <div className="bordeCardD">
        <img className="imagenD" src={producto.image}/>
        <div className="cardD">
        <p>{producto.title}</p>
        <p>${producto.price}</p>
        <p>{stockTemporal}</p>
        <span>{producto.description}</span>
        {irCarrito == true
        ?
        <Link to={"/carrito"}>
        <button className="botones">Terminar Compra</button>
        </Link>
        :
        <ItemCount stock={stockTemporal} initial={1} onAdd={onAdd}/>
        }
        </div>
        </div>
        </>
    )
}

export default ItemDetail