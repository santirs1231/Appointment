import { SELECCIONAR_PRODUCTO } from "../../type";

export default (state, action) => {
    switch(action.type){
        case SELECCIONAR_PRODUCTO:
        return{
            ...state,
            catalogos: action.payload
            
        }
        default:
            return state;
    }
}