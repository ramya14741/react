const redux = require('@reduxjs/toolkit')
const createStore = redux.createStore;

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
const initialState ={ //application initial state should be represented as a object
    numOfCakes:10,
    numOfIceCreams:20
}
const reducer = (state = initialState, action)=>{
switch(action.type){
    case BUY_CAKE:return{
        ...state, //making a copy of state object and then only updating number of cakes
        numOfCakes:state.numOfCakes - 1
    }
    case BUY_ICECREAMS:return{
        ...state, //making a copy of state object and then only updating number of cakes
        numOfIceCreams:state.numOfIceCreams - 1
    }
    default: return state;
}
}

const store = createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe();