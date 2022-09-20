import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {

    const onAdd = (contador) => {
        console.log("Se agrego a tu carrito")
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
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        </div>
        </div>
        </>
    )
}

export default ItemDetail