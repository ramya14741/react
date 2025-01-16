import { FETCH_USERS } from "./action";
const initialState ={
    user:[]
};

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_USERS:
            return{
                ...state,
                user:action.payload,
            };
            default:return state;
    }
}

export default userReducer;