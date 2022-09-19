import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

    const onAdd = (contador) => {
        console.log("Se agrego a tu carrito")
    }
    return(
        <>
        <div className="cards">
        <p>{producto.title}</p>
        <img className="imagen" src={producto.image}/>
        <p>${producto.price}</p>
        <span>{producto.description}</span>
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default ItemDetail