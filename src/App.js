import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import { ItemListContainer } from "./Container/ItemListContainer/ItemListContainer"
const App = () =>{

    const mnjInicial = "Bienvenidos a esta E-Commerse"
    const nombre = "Jhonatan"
    const apellido = "Pintos"

    return (
        <>
        <Navbar nombre={nombre} id="1" apellido={apellido}>
        </Navbar>
        <ItemListContainer
        greeting = {mnjInicial}/>
        </>
    )
}

export default App