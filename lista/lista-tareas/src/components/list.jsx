import { useState } from "react";
import React  from "react";

const ListaNombres = (props)=>{
    const [nombre,setNombre] = useState ('')
    const [fecha,setFecha] = useState('')
    const [descripcion,setDESC]= useState('')
    const[listatareas,setList]= useState('')
    const addTarea= (e)=>{
        e.preventDefault()
        setList([...listatareas,nombre,fecha,descripcion])
    }



    
    
     return(
        <div className="r">
            <div className="list">
            <h2>Listado de Tareas</h2>
            </div>
            
            <div className="formulario"></div>
            <h2>Formulario de tareas</h2>
            <form onSubmit={(e)=>addTarea(e)}>
                <input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-4" type="text" placeholder="Introduce la tarea"></input>
                <input onChange={(e)=>{setDESC(e.target.value)}} className="form-control mb-4" type="text" placeholder="Descripcion"></input>
                <input onChange={(e)=>{setFecha(e.target.value)}} className="form-control mb-4" type="date" placeholder="Fecha"></input>
                <label for="email">Email</label>
                <input className="email" type="email" name="email"></input>
                <input className="btn-info-btn-block" type="submit" value="Registrar la tarea"></input>
                
                <input className="pablo" type="radio" value="pablo"></input>
                <label for="pablo">Pablo</label>
            </form>
        </div>
     )
}
export default ListaNombres