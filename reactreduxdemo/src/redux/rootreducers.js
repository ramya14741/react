import { combineReducers} from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./icecreams/icecreamReducers";

const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream:iceCreamReducer
})

export default rootReducers