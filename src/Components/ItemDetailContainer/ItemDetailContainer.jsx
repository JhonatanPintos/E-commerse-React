import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { db } from "../Firebase/Firebase"
import { collection, doc, getDoc} from "firebase/firestore"


const ItemDetailContainer = () => {

    let {IdProducto} = useParams()

    const [producto, setProducto] = useState({})

    useEffect(() => {
        const productCollection = collection(db, "productos")
        const refDoc = doc(productCollection, IdProducto)
        getDoc(refDoc)
        .then((result) => {
            setProducto({
                    id: result.id,
                    ...result.data()
                })
        })
        .catch(() => {
            console.log("No responde la API")
            console.error("No responde la API")
        })
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