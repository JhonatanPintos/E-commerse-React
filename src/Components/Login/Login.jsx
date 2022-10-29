import React, { useState, useContext } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { Context } from "../CartContext/CartContext"
import { WishContext } from "../WishContext/WishContext"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {

    const {clear} = useContext(Context)
    const {clearW} = useContext(WishContext)

    const [userL, setUserL] = useState({
        email: "",
        password: ""
    })

    const { login, loginWithGoogle } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUserL({ ...userL, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    const handleGoogleSignin = async () => {
        await loginWithGoogle()
        clear()
        clearW()
        navigate("/")
    }

    const botonLog = async (e) => {
        setError("")
        try {
            await login(userL.email, userL.password)
            navigate("/")
            clear()
            clearW()
        }
        catch (error) {
            if (error.code === "auth/invalid-email" || "auth/user-not-found") {
                setError("Correo Invalido")
            }
            if (error.code === "auth/wrong-password") {
                setError("Constraseña Invalida")
            }
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="contenedorFormL">
                    {error && <p className="errorL">{error}</p>}
                    <div>
                        <h3>Inicie sesion</h3>
                        <p>Ingrese sus datos</p>
                    </div>
                    <div className="contenedorImput">
                        <label className="textoL" htmlFor="email">Email</label>
                        <input className="formularioL" onChange={handleChange} type="email" name="email" id="email" placeholder="Ingrese su email" />
                    </div>
                    <div className="contenedorImput">
                        <label className="textoL" htmlFor="password">Password</label>
                        <input className="formularioL" onChange={handleChange} type="password" name="password" id="password" placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="contenedorImput">
                        <p className="textoL">No tengo cuenta registrarme <Link to={"/register"}>Aqui</Link></p>
                    </div>
                    <button onClick={botonLog} className="botones">Ingresar</button>
                    <button onClick={handleGoogleSignin} className="botones">Ingresar con Google</button>
                </form>
            </div>
        </>
    )
}

export default Login