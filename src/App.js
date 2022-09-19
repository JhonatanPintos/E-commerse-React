import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"

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
        <ItemDetailContainer/>
        </>
    )
}

export default App