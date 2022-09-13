import React, { useState } from "react";

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([{ nombre: "Nirvana" }, { nombre: "Bianca" }])

    const nombre = {nombre: "Jhonatan"}

    const agregarNombre = () => {
        setUsuarios([...usuarios, nombre])
    }

    return (
        <>
            <h1>Usuarios</h1>
            <button onClick={agregarNombre} >Agregar Nombre</button>
            <ul>
                {usuarios.map((usuario,indice)=>(
                    <h2 key={indice}>{usuario.nombre}</h2>
                ))}
            </ul>
        </>
    )
}

export default Usuarios