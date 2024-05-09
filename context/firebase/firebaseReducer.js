import { OBTENER_PRODUCTO_EXITO } from "../../type";

export default (state, action) => {
    switch(action.type){
        case OBTENER_PRODUCTO_EXITO:
            return{
                ...state,
                menu: action.payload
            }
        default:
            return state;
    }
}