import React, { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const [userL, setUserL] = useState({
        email: "",
        password: ""
    })

    const { signUp } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUserL({ ...userL, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signUp(userL.email, userL.password)
            navigate("/")
        }
        catch (error) {
            if (error.code === "auth/internal-error") {
                setError("Ingrese una contraseña")
            }
            if (error.code === "auth/invalid-email") {
                setError("Correo Invalido")
            }
            if (error.code === "auth/weak-password") {
                setError("Constraseña Invalida/Debete tener minimo 6 caracteres")
            }
            if (error.code === "auth/missing-email") {
                setError("Ingrese un email")
            }
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="contenedorFormL">
                {error && <p className="errorL">{error}</p>}
                    <div>
                        <h3>Registrate Aqui</h3>
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
                        <p className="textoL">Ya tengo cuenta <Link to={"/login"}>Ingresar</Link></p>
                    </div>
                    <button className="botones">Ingresar</button>
                </form>
            </div>
        </>
    )
}

export default Register