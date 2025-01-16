import { BUY_ICECREAM } from "./icecreamTypes";
const initialState ={
    numberofIceCreams : 20
}
const iceCreamReducer = (state =initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numberofIceCreams :state.numberofIceCreams - 1
        }
        default:return state
    }
}

export default iceCreamReducer