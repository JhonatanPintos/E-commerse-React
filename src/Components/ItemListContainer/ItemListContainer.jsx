import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from "react-router-dom"
import ScaleLoader from "react-spinners/ScaleLoader";
import { db } from "../Firebase/Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {

    let { IdCategoria } = useParams()
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const URL_BASE = collection(db, "productos")
        const URL_CATEGORY = query (URL_BASE, where("category", "==", `${IdCategoria}`))
        const listaProd = (IdCategoria === undefined ? URL_BASE : URL_CATEGORY)
        getDocs (listaProd)
        .then ((data) => {
            const lista = data.docs.map((prod) => {
                return{
                    ...prod.data(),
                    id: prod.id
                }
            })
            setListProducts(lista)
            setLoading(false)
        })
        .catch(() => {
            console.log("No responde la API")
            console.error("No responde la API")
    })
    }, [IdCategoria])

    return (
        <>
            <h1 className="titulo">{greeting}</h1>
            {loading === true
                ?
                <div className="spinners">
                    <ScaleLoader color="blueviolet" />
                    <ScaleLoader color="cyan" />
                    <ScaleLoader color="blueviolet" />
                    <ScaleLoader color="cyan" />
                    <ScaleLoader color="blueviolet" />
                </div>
                :
                <div className="contenedorCards">
                    <ItemList listProducts={listProducts} />
                </div>
            }
        </>
    )
}

export default ItemListContainer