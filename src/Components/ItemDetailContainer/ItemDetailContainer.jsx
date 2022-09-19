import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        const getItem = async () => {
            try{
                const respuesta = await fetch("https://fakestoreapi.com/products/3")
                const data = await respuesta.json()
                setProducto(data)
                console.log(data)
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
        <ItemDetail producto={producto}/>
        </>
    )
}

export default ItemDetailContainer