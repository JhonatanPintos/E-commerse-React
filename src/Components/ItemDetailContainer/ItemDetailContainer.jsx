import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        const getItem = async () => {
            try{
                const respuesta = await fetch("https://fakestoreapi.com/products/3")
                const data = await respuesta.json()
                setProducto(data)
            }
            catch{
                console.log("No responde la API")
                console.error("No responde la API")
            }
        }
        getItem()
    }, [])

    return (
        <>
        <div className="contenedorCardD">
        <ItemDetail producto={producto}/>
        </div>
        </>
    )
}

export default ItemDetailContainer