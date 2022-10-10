import ItemCount from "../ItemCount/ItemCount"
import React, {useState, useEffect, useContext} from "react";
import { Link, NavLink } from "react-router-dom"
import "./ItemDetail.css"
import { Context } from "../CartContext/CartContext"

const ItemDetail = ({producto}) => {

    const [irCarrito, setIrCarrito] = useState(false)

    const {addItem} = useContext(Context)

    const onAdd = (contador) => {
        setIrCarrito(true)
        addItem(producto, contador)
    }

    return(
        <>
        <div className="bordeCardD">
        <img className="imagenD" src={producto.image}/>
        <div className="cardD">
        <p>{producto.title}</p>
        <p>${producto.price}</p>
        <p>{producto.stock}</p>
        <span>{producto.description}</span>
        {irCarrito == true
        ?
        <Link to={"/carrito"}>
        <button className="botones">Terminar Compra</button>
        </Link>
        :
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        }
        </div>
        </div>
        </>
    )
}

export default ItemDetail