import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "../src/Container/ItemListContainer/ItemListContainer"
import ItemCount from "./Components/ItemCount"

const App = () =>{

    const mnjInicial = "Bienvenidos a esta E-Commerse"
    const nombre = "Jhonatan"
    const apellido = "Pintos"

    const onAdd = (contador) => {
        console.log("Se agrego a tu carrito")
    }

    return (
        <>
        <Navbar nombre={nombre} id="1" apellido={apellido}>
        </Navbar>
        <ItemListContainer greeting = {mnjInicial}/>
        </>
    )
}

export default App