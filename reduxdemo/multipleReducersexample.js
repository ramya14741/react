const redux = require('@reduxjs/toolkit')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers //to combine multiple reducers
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger(); 
const applyMiddleware = redux.applyMiddleware;
console.log('redux')
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS ='BUY_ICECREAMS'

//action creator is a function that return a action 

function buyCake(){
return {
 type: BUY_CAKE,
    info:'First redux action'
}
}

function buyIcecream(){
    return{
        type:BUY_ICECREAMS
    }
}

// reducers
// const initialState ={ //application initial state should be represented as a object
//     numOfCakes:10,
//     numOfIceCreams:20
// }

const initialCakeState ={
    numOfCakes:10
}
const initialIceCreamState ={
    numOfIceCreams:20
}
const cakeReducer = (state = initialCakeState, action)=>{
switch(action.type){
    case BUY_CAKE:return{
        ...state, //making a copy of state object and then only updating number of cakes
        numOfCakes:state.numOfCakes - 1
    }
    default: return state;
}
}

const icecreamReducer = (state =initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAMS:return{
            ...initialIceCreamState,
            numOfIceCreams:state.numOfIceCreams-1
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(()=>{});
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe();