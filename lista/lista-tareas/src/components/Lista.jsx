import { useState } from "react";
import React  from "react";

const ListaNombres = (props)=>{
    const [nombre,setNombre] = useState ('')
    const [fecha,setFecha] = useState('')


    
     return(
        <div className="r">
            <div className="list">
            <h2>Listado de Tareas</h2>
            </div>
            
            <div className="formulario"></div>
            <h2>Formulario de tareas</h2>
            <form>
                <input className="form-control mb-4" type="text" placeholder="Introduce la tarea"></input>
                <input className="btn-info-btn-block" type="submit" value="Registrar la tarea"></input>
            </form>
        </div>
     )
}
export default ListaNombres