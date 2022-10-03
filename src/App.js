import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito";
import CartContext from "./Components/CartContext/CartContext";

const App = () => {

    const mnjInicial = "Bienvenidos a esta E-Commerse"
    const nombre = "Jhonatan"
    const apellido = "Pintos"

    return (
        <>
            <BrowserRouter>
                <CartContext>
                    <Navbar nombre={nombre} id="1" apellido={apellido}></Navbar>
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={mnjInicial} />} />
                        <Route path="/categoria/:IdCategoria" element={<ItemListContainer greeting={mnjInicial} />} />
                        <Route path="producto/:IdProducto" element={<ItemDetailContainer />} />
                        <Route path="/carrito" element={<Carrito />} />
                    </Routes>
                </CartContext>
            </BrowserRouter>
        </>
    )
}

export default App
