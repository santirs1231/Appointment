import React,{useReducer} from "react"
import ServicioContext from "./servicioContext"
import ServicioReducer from "./servicioReducer"
import { SELECCIONAR_PRODUCTO } from "../../type"

const ServicioState = props=>{
    const inicialState={
        pedido:{},
        imagenes: null

    }
    const [state, dispach]= useReducer(ServicioReducer,inicialState)

    const seleccionarImagen= imagenes=>{
        dispach({
            type:SELECCIONAR_PRODUCTO,
            payload:imagenes
        })
    }

    return(
        <ServicioContext.Provider
           value={{
            servicio:state.servicio,
            imagenes: state.imagenes,
            seleccionarImagen
           }}
           
        
        >
            {props.children}
        </ServicioContext.Provider>
    )

}

export default ServicioState; 