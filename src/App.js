import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito";
import CartContext from "./Components/CartContext/CartContext";
import Micompra from "./Components/Micompra/Micompra";
import Login from "./Components/Login/Login";
import AuthContext from "./Components/AuthContext/AuthContext";
import Register from "./Components/Register/Register";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const App = () => {

    const mnjInicial = "Bienvenidos a esta E-Commerse"

    return (
        <>
            <BrowserRouter>
                <AuthContext>
                    <CartContext>
                        <Navbar/>
                        <Routes>
                            <Route path="/" element={<ProtectedRoute><ItemListContainer greeting={mnjInicial} /></ProtectedRoute>} />
                            <Route path="/categoria/:IdCategoria" element={<ProtectedRoute><ItemListContainer greeting={mnjInicial} /></ProtectedRoute>} />
                            <Route path="/producto/:IdProducto" element={<ProtectedRoute><ItemDetailContainer /></ProtectedRoute>} />
                            <Route path="/carrito" element={<ProtectedRoute><Carrito /></ProtectedRoute>} />
                            <Route path="/micompra" element={<ProtectedRoute><Micompra /></ProtectedRoute>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </CartContext>
                </AuthContext>
            </BrowserRouter>
        </>
    )
}

export default App
