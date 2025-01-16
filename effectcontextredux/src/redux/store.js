import{createStore,applyMiddleWare} from 'redux'
import thunk from 'redux-thunk';
import userReducer  from './reducer';
const store = createStore(userReducer,applyMiddleWare(thunk));

export default  store;