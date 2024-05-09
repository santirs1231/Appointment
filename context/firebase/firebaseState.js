import React,{useReducer} from "react" 
import firebase from "../../firebase"
import FirebaseContext from "./firebaseContext"
import FirebaseReducer from "./firebaseReducer"
import _  from 'lodash'
import { OBTENER_PRODUCTO_EXITO } from "../../type"

const FirebaseState = props=>{
    const inicialState={
        menu:{}
        

    }
    const [state, dispach]= useReducer(FirebaseReducer,inicialState)

    const obtenerProducto=()=>{
        firebase.db
        .collection('catalog')
        .onSnapshot(manejarSnapshot)

        function manejarSnapshot(snapshot){
            let imagenes = snapshot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });

            imagenes =_.sorBy(imagenes, 'categoriaScrollView')
            //console.log(imagenes)

            dispach({
                type:OBTENER_PRODUCTO_EXITO,
                payload: imagenes
            })



        }
    }

    return(
        <FirebaseContext.Provider
           value={{
            menu:state.menu,
            firebase,
            obtenerProducto
           }}
           
        
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}

export default FirebaseState; 